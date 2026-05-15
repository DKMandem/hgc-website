import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const assets = [
  // Hero slideshow
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_294931616-resize.jpg", out: "public/images/hero-slide-1.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_397606140-resizedd.jpg", out: "public/images/hero-slide-2.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_364843654-resized.jpg", out: "public/images/hero-slide-3.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_163939484-resize.jpg", out: "public/images/hero-slide-4.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_159287007-resize.jpg", out: "public/images/hero-slide-5.jpg" },
  // Section backgrounds
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_188749316-resize.jpg", out: "public/images/howwehelp-left.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_127787474-resize.jpg", out: "public/images/blog-parallax.jpg" },
  // Logos
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/logo-oertzen-plain.png", out: "public/images/logo-plain.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/logo-oertzen.png", out: "public/images/logo-full.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/07/logo-tagline.png", out: "public/images/logo-tagline.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/OERTZENGroup_logoReverse-ai.png", out: "public/images/logo-reverse.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/cropped-siteicon-oertzen.png", out: "public/images/site-icon.png" },
  // Favicons / SEO
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/cropped-siteicon-oertzen-32x32.png", out: "public/seo/favicon-32.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/cropped-siteicon-oertzen-192x192.png", out: "public/seo/favicon-192.png" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/cropped-siteicon-oertzen-180x180.png", out: "public/seo/apple-touch-icon.png" },
];

async function ensureDir(p) {
  const dir = path.dirname(p);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function download({ url, out }) {
  const target = path.join(root, out);
  if (existsSync(target)) {
    console.log("skip (exists):", out);
    return { ok: true, skipped: true };
  }
  await ensureDir(target);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error("HTTP " + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(target, buf);
    console.log("ok:", out, `${buf.length} bytes`);
    return { ok: true };
  } catch (e) {
    console.error("FAIL:", url, e.message);
    return { ok: false, err: e.message };
  }
}

async function batched(items, size, fn) {
  const out = [];
  for (let i = 0; i < items.length; i += size) {
    const batch = items.slice(i, i + size);
    out.push(...(await Promise.all(batch.map(fn))));
  }
  return out;
}

(async () => {
  const results = await batched(assets, 4, download);
  const ok = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok).length;
  console.log(`\nDone: ${ok}/${results.length} ok${failed ? ", " + failed + " failed" : ""}`);
  if (failed) process.exit(1);
})();
