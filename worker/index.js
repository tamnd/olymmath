// The Worker answers each request that is not a static asset (spec 10.4).
// 1. A path in redirects.json gets a 301 to its new path.
// 2. A page that is not in tier 1 comes from a pack in the R2 bucket. `om site pack` joins the files of each top folder, such as aime, into one pack, and writes the index of the pack to the static asset /_pack/FOLDER.json. The index gives the offset, the length and the hash of each file, so the Worker reads the page with one range request. The pack name has the hash of the pack, so a deploy sends only the packs that changed.
// 3. Any other path gets the 404 page.

let redirects = null;
// indexes holds the promise of the index of each folder. A deploy starts new isolates, so an index is never older than the Worker.
const indexes = new Map();

const TYPES = { html: "text/html; charset=utf-8", md: "text/markdown; charset=utf-8", json: "application/json" };

// key gives the file of a path: /nz-nzmo/2020/p1 is nz-nzmo/2020/p1.html and /nz-nzmo/2020/p1.json is itself.
export function key(path) {
  const p = path.replace(/^\/+/, "");
  if (!p || p.startsWith("_") || p.split("/").includes("..")) return null;
  if (p.endsWith("/")) return p + "index.html";
  return /\.[a-z0-9]+$/i.test(p.split("/").pop()) ? p : p + ".html";
}

function packIndex(env, url, folder) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(folder)) return Promise.resolve(null);
  if (!indexes.has(folder)) {
    const p = env.ASSETS.fetch(new URL(`/_pack/${folder}.json`, url)).then((r) => (r.ok ? r.json() : null));
    // A failed read is not kept, so the next request tries again.
    p.catch(() => indexes.delete(folder));
    indexes.set(folder, p);
  }
  return indexes.get(folder);
}

// cached gives the bytes of a file from the edge cache, or from the pack with a range read. The cache key has the hash of the file, so a new file never gets an old copy.
async function cached(env, ctx, url, pack, k, e) {
  const [offset, length, hash] = e;
  const cache = typeof caches === "undefined" ? null : caches.default;
  const ck = new Request(new URL(`/_cache/${hash}/${k}`, url).toString());
  const hit = cache && (await cache.match(ck));
  if (hit) return hit.arrayBuffer();
  const obj = await env.SITE.get(pack, { range: { offset, length } });
  if (!obj) return null;
  const buf = await obj.arrayBuffer();
  if (cache) {
    const put = cache.put(ck, new Response(buf, { headers: { "Cache-Control": "public, max-age=31536000, immutable" } }));
    if (ctx?.waitUntil) ctx.waitUntil(put);
    else await put;
  }
  return buf;
}

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed\n", { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    const url = new URL(request.url);
    let path;
    try {
      path = decodeURIComponent(url.pathname);
    } catch {
      path = url.pathname;
    }
    if (redirects === null) {
      const r = await env.ASSETS.fetch(new URL("/redirects.json", url));
      redirects = r.ok ? await r.json() : {};
    }
    const to = redirects[path.replace(/(.)\/$/, "$1")];
    if (to) return Response.redirect(new URL(to, url).toString(), 301);
    const k = key(path);
    const slash = k ? k.indexOf("/") : -1;
    const ix = slash > 0 ? await packIndex(env, url, k.slice(0, slash)) : null;
    const e = ix?.files?.[k.slice(slash + 1)];
    if (e) {
      const etag = `"${e[2]}"`;
      const headers = new Headers({
        "Content-Type": TYPES[k.split(".").pop()] || "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
        ETag: etag,
      });
      if (request.headers.get("If-None-Match") === etag) return new Response(null, { status: 304, headers });
      const body = await cached(env, ctx, url, ix.pack, k, e);
      if (body) return new Response(request.method === "HEAD" ? null : body, { headers });
    }
    const nf = await env.ASSETS.fetch(new URL("/404", url));
    return new Response(request.method === "HEAD" ? null : nf.body, { status: 404, headers: nf.headers });
  },
};
