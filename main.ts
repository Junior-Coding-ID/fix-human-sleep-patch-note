import * as fs from "node:fs";
import * as path from "node:path";

const ANSWER =
  "v2.0: Fixed human sleep. Dreams now autosave, nightmares moved to a separate folder, snooze button finally negotiable.";

function fail(message: string): never {
  throw new Error(message);
}

// Gate: jawaban harus tepat 118 karakter, 1 baris, ASCII, tanpa spasi ujung.
if (ANSWER.length !== 118) {
  fail(`answer must be exactly 118 chars, got ${ANSWER.length}`);
}
if (ANSWER.length < 1 || ANSWER.length > 160) {
  fail("answer must be 1-160 chars");
}
if (ANSWER.includes("\n") || ANSWER.includes("\r")) {
  fail("answer must be a single line");
}
if (!/^[\x20-\x7E]+$/.test(ANSWER)) {
  fail("answer must be ASCII only");
}
if (ANSWER !== ANSWER.trim()) {
  fail("answer must not have leading or trailing spaces");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ANSWER, "utf8");

// Verify-after-write: baca balik dan bandingkan byte-per-byte.
const back = fs.readFileSync(outFile, "utf8");
if (back !== ANSWER) {
  fail("verify-after-write mismatch");
}
if (Buffer.byteLength(back, "utf8") !== ANSWER.length) {
  fail("byte length mismatch after write");
}
if (back.length < 1 || back.length > 160) {
  fail("written entry must be 1-160 chars");
}

console.log(`wrote ${outFile} (${ANSWER.length} chars)`);
