// Run with: node --test worker/
import { test } from "node:test";
import assert from "node:assert/strict";
import worker, { key } from "./index.js";

const pack = "onetwo";
const assets = {
  "/redirects.json": JSON.stringify({ "/old": "/nz/2020/p1" }),
  "/_pack/nz.json": JSON.stringify({ pack: "pack/nz.abc.pack", files: { "2020/p1.html": [0, 3, "h1"], "2020/p1.md": [3, 3, "h2"] } }),
  "/404": "not found",
};
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
