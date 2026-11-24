// Entry program for the make.fun photo-on-X bounty
// "post-x-promote-make-your-own-bounty-01" (Node 22, standard library only).
//
// The entry is the X post itself: one post of our own on X that quotes
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), with a photo of
// its own attached, and its text carrying make.fun (a link or written
// out) and/or a tag of @makefunai plus our play code. This program does
// nothing but hand the house the post's address: it reads POST.json from
// the repository root and copies it to the output directory, where the
// gate reads it and checks the post on X (photo of its own, make.fun /
// @makefunai and a play code in its text, then its replies + reposts +
// quotes). Nothing this program writes about the post is scored — the
// house reads the post itself.
//
// The POST.json shipped before the boss posts holds a placeholder, which
// the gate refuses on purpose. Validate here and fail loudly instead of
// handing the grader a dead link.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_FILE = 'POST.json';
const POST_URL_RE = /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/[^/\s]+\/status\/\d+$/;

const sourcePath = join(BOT_DIR, POST_FILE);
const destPath = join(OUTPUT_DIR, POST_FILE);

let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`${POST_FILE} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (
  !parsed ||
  typeof parsed !== 'object' ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !POST_URL_RE.test((parsed as { url: string }).url)
) {
  console.error(
    `${POST_FILE} does not name an X post URL (https://x.com/<handle>/status/<id>) — ` +
      'replace the PENDING-BOSS-POST placeholder with the real post address first',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(sourcePath, destPath);

// Read the copy back and compare it byte for byte with the source: a
// truncated or corrupted copy must fail here, not in the grader.
const sourceBytes = readFileSync(sourcePath);
if (!readFileSync(destPath).equals(sourceBytes)) {
  console.error(`${POST_FILE} copy verification failed: destination differs from source`);
  process.exit(1);
}

console.log(`post: ${(parsed as { url: string }).url}`);
