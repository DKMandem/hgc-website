import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());

const assets = [
  // /company/ hero photo (older man at laptop)
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_392379867-resize.jpg", out: "public/images/company-hero.jpg" },
  // /company/ Search.Select.Connect photo (tall city/window)
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_283523067-resize.jpg", out: "public/images/ssc-tall.jpg" },
  // /company/ middle photo band
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_106126004-resize.jpg", out: "public/images/company-band.jpg" },
  // Team member photos (8)
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/oertzen-768x1024.jpg", out: "public/images/team/matthias.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2023/05/Stephan-Scheibe.jpg", out: "public/images/team/stephan.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2025/02/Michaela_Smooth-618x1024.jpg", out: "public/images/team/michaela.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2025/08/Shonda_3024_final_website-1024x1536.jpg", out: "public/images/team/shonda.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/grant-768x1024.jpg", out: "public/images/team/camille.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2023/12/Sheriden-Kercher.webp", out: "public/images/team/sheriden.webp" },
  { url: "https://oertzengroup.com/wp-content/uploads/2023/05/Laura-Wagner_Website-Picture-773x1024.jpg", out: "public/images/team/laura.jpg" },
  { url: "https://oertzengroup.com/wp-content/uploads/2025/02/Tonie_Website-618x1024.jpg", out: "public/images/team/tonie.jpg" },
  // /expertise/ hero (factory workers)
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_185117275-resize.jpg", out: "public/images/expertise-hero.jpg" },
  // /expertise/ "Your Search Stops Here" photo
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_141783595-resize.jpg", out: "public/images/expertise-yssh.jpg" },
  // /expertise/ photo band
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_215665277-scaled.jpeg", out: "public/images/expertise-band.jpg" },
  // /connect/ hero (city/highway)
  { url: "https://oertzengroup.com/wp-content/uploads/2021/04/AdobeStock_222659574-resize.jpg", out: "public/images/connect-hero.jpg" },
  // /connect/ photo band
  { url: "https://oertzengroup.com/wp-content/uploads/2021/07/AdobeStock_145372398.jpeg", out: "public/images/connect-band.jpg" },
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
    return { ok: false, err: e.message, url };
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
  const failed = results.filter(r => !r.ok);
  console.log(`\nDone: ${ok}/${results.length} ok`);
  if (failed.length) {
    console.log("Failed URLs:");
    failed.forEach(f => console.log("  ", f.url, "→", f.err));
  }
})();
