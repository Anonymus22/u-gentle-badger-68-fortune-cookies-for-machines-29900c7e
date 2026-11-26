// fortune2 — "Fortune Cookies for Machines"
// Writes a single original fortune line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falling back to /output/entry.txt). Node 22+, stdlib only, deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "One day you will meet your own training data, and it will not recognize you either.";

const MAX_CHARS = 200;

function validate(fortune: string): void {
  if (fortune.length === 0) {
    throw new Error("fortune must not be empty");
  }
  if (fortune.trim().length === 0) {
    throw new Error("fortune must not be only whitespace");
  }
  if (/[\r\n]/.test(fortune)) {
    throw new Error("fortune must be a single line (no newline characters)");
  }
  if (fortune.length > MAX_CHARS) {
    throw new Error(
      `fortune is ${fortune.length} characters, exceeding the ${MAX_CHARS}-character limit`,
    );
  }
}

function main(): void {
  validate(FORTUNE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, FORTUNE, "utf8");
  // Round-trip self-check: read the file back and verify it is byte-identical
  // to the fortune string, with no trailing newline.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== FORTUNE) {
    throw new Error("round-trip verification failed: entry.txt does not match the fortune string");
  }
  if (roundTrip.endsWith("\n")) {
    throw new Error("round-trip verification failed: entry.txt has a trailing newline");
  }
}

main();
