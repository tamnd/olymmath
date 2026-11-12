// Run with: node --test worker/
import { test } from "node:test";
import assert from "node:assert/strict";
import worker, { fnv, key } from "./index.js";

const pack = "onetwo";
const assets = {
  "/redirects.json": JSON.stringify({ "/old": "/nz/2020/p1" }),
  "/_pack/nz.json": JSON.stringify({ pack: "pack/nz.abc.pack", files: { "2020/p1.html": [0, 3, "h1"], "2020/p1.md": [3, 3, "h2"] } }),
  "/_pack/api.json": JSON.stringify({ packs: ["pack/api-00.x.pack", "pack/nz.abc.pack"], files: { "problem/A.json": [3, 3, "h3", 1] } }),
  "/_pack/p.json": JSON.stringify({ packs: ["pack/nz.abc.pack"], shards: 32 }),
  "/404": "not found",
};
// A sharded index: the entry of each file is in the shard its hash names.
for (const [f, e] of [["A.html", [0, 3, "h4", 0]], ["B.html", [3, 3, "h5", 0]]]) {
  const n = String(fnv(f) % 32).padStart(2, "0");
  const name = `/_pack/p/${n}.json`;
  const ix = assets[name] ? JSON.parse(assets[name]) : { files: {} };
  ix.files[f] = e;
  assets[name] = JSON.stringify(ix);
}
const env = {
  ASSETS: { fetch: async (u) => (u.pathname in assets ? new Response(assets[u.pathname]) : new Response("", { status: 404 })) },
  SITE: {
    get: async (k, opt) => {
      if (k !== "pack/nz.abc.pack") return null;
      const { offset, length } = opt.range;
      return { arrayBuffer: async () => new TextEncoder().encode(pack.slice(offset, offset + length)).buffer };
    },
  },
};
const get = (p, h = {}) => worker.fetch(new Request("https://olymmath.tamnd.com" + p, { headers: h }), env, { waitUntil() {} });

test("key", () => {
  assert.equal(key("/nz/2020/p1"), "nz/2020/p1.html");
  assert.equal(key("/nz/2020/p1.md"), "nz/2020/p1.md");
  assert.equal(key("/_pack/nz.json"), null);
  assert.equal(key("/a/../b"), null);
});

test("a page comes from its pack with a range read", async () => {
  const r = await get("/nz/2020/p1");
  assert.equal(r.status, 200);
  assert.equal(await r.text(), "one");
  assert.equal(r.headers.get("Content-Type"), "text/html; charset=utf-8");
  assert.equal(r.headers.get("ETag"), '"h1"');
  const m = await get("/nz/2020/p1.md");
  assert.equal(await m.text(), "two");
  assert.equal(m.headers.get("Content-Type"), "text/markdown; charset=utf-8");
});

test("a known ETag gives 304", async () => {
  const r = await get("/nz/2020/p1", { "If-None-Match": '"h1"' });
  assert.equal(r.status, 304);
});

test("a redirect and a missing page", async () => {
  const r = await get("/old");
  assert.equal(r.status, 301);
  assert.equal(r.headers.get("Location"), "https://olymmath.tamnd.com/nz/2020/p1");
  for (const p of ["/nz/2020/p9", "/xx/2020/p1", "/Bad!/x"]) assert.equal((await get(p)).status, 404, p);
});

test("a file of a big folder comes from the pack its entry names", async () => {
  const r = await get("/api/problem/A.json");
  assert.equal(r.status, 200);
  assert.equal(await r.text(), "two");
  assert.equal(r.headers.get("Content-Type"), "application/json");
});

test("fnv", () => {
  assert.equal(fnv(""), 0x811c9dc5);
  assert.equal(fnv("a"), 0xe40c292c);
  assert.equal(fnv("foobar"), 0xbf9cf968);
});

test("a file of a folder with a sharded index comes from its shard", async () => {
  const a = await get("/p/A");
  assert.equal(a.status, 200);
  assert.equal(await a.text(), "one");
  const b = await get("/p/B");
  assert.equal(await b.text(), "two");
  assert.equal((await get("/p/C")).status, 404);
});
