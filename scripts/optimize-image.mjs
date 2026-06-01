import sharp from "sharp";
import { statSync } from "node:fs";

// Memory-safe single-image converter: run one per process so RAM is freed between runs.
sharp.cache(false);
sharp.concurrency(1);

const [, , src, out, widthArg, qualityArg] = process.argv;
const width = Number(widthArg);
const quality = Number(qualityArg);

const before = statSync(src).size;
await sharp(src)
  .resize({ width, withoutEnlargement: true })
  .webp({ quality })
  .toFile(out);
const after = statSync(out).size;

const mb = (n) => (n / 1048576).toFixed(2);
console.log(
  `${src} (${mb(before)}MB) -> ${out} (${mb(after)}MB)  saved ${(
    (1 - after / before) *
    100
  ).toFixed(0)}%`
);
