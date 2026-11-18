// Entry for make.fun's "Sum up 17 November's world news in one image" bounty.
// The front page is committed beside this file as entry.png; this program copies
// its bytes to <output>/entry.png unchanged, so two runs write identical files.
//   local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const bytes = readFileSync(source);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error(`${source} is not a PNG file`);
}
if (bytes.length > 1_048_576) {
  throw new Error(`${source} is ${bytes.length} bytes, over the 1 MiB cap`);
}

// IHDR always follows the 8-byte signature and an 8-byte chunk header.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`${source} is ${width}x${height}, larger than 1024x1024`);
}

const target = join(outputDir, 'entry.png');
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, bytes);
console.log(`entry.png written: ${target}, ${bytes.length} bytes`);
