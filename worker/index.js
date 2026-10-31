// The Worker answers each request that is not a static asset (spec 10.4).
// 1. A path in redirects.json gets a 301 to its new path.
// 2. A page that is not in tier 1 comes from the R2 bucket, at the same path.
// 3. Any other path gets the 404 page.

let redirects = null;

// key gives the R2 key of a path: /nz-nzmo/2020/p1 is nz-nzmo/2020/p1.html and /nz-nzmo/2020/p1.json is itself.
export function key(path) {
  const p = path.replace(/^\/+/, "");
  if (!p || p.startsWith("_") || p.split("/").includes("..")) return null;
  if (p.endsWith("/")) return p + "index.html";
  return /\.[a-z0-9]+$/i.test(p.split("/").pop()) ? p : p + ".html";
}

export default {
  async fetch(request, env) {
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
    const obj = k ? await env.SITE.get(k) : null;
    if (obj) {
      const headers = new Headers({
        "Content-Type": obj.httpMetadata?.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
        ETag: obj.httpEtag,
      });
      if (request.headers.get("If-None-Match") === obj.httpEtag) return new Response(null, { status: 304, headers });
      return new Response(request.method === "HEAD" ? null : obj.body, { headers });
    }
    const nf = await env.ASSETS.fetch(new URL("/404", url));
    return new Response(request.method === "HEAD" ? null : nf.body, { status: 404, headers: nf.headers });
  },
};
