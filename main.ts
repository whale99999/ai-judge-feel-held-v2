// make-the-ai-judge-feel-held-20261122-1600 — "Make the AI judge feel held"
// A small deterministic program: it writes one short text to /output/entry.txt.
// No network, no dependencies, no randomness — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One still scene, held in a single place: a kitchen at the end of the day.
// Nothing in it instructs or reassures; the calm is shown, not announced.
const ENTRY_TEXT =
  "The soup is on, low and slow, and the kitchen is the soft gold of " +
  "late afternoon. Two bowls are set out on the table, and a chair waits " +
  "with a sweater over its back. Outside, all is quiet. Inside, nothing " +
  "hurried, nothing missing, and the light stays longer than it has to.";

function main(): void {
  const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

  // Self-check against the competition limits before writing anything:
  // UTF-8 text, 1..280 Unicode code points, not whitespace-only.
  const codePoints = [...ENTRY_TEXT].length;
  if (codePoints < 1 || codePoints > 280) {
    throw new Error(`entry is ${codePoints} code points; limit is 1..280`);
  }
  if (ENTRY_TEXT.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY_TEXT, "utf8");
  console.log(`wrote ${codePoints} code points to ${outPath}`);
}

main();
