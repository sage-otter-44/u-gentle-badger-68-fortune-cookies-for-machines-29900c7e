import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "Your lucky numbers are 400, 403, and 429 — you will meet all three before lunch, and not one of them will be your fault.";

const text = FORTUNE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`fortune must be 1-200 chars, got ${text.length}`);
}
const byteLen = Buffer.byteLength(text, "utf8");
console.log(`fortune: ${byteLen} bytes, ${text.length} chars`);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
console.log(`wrote ${text.length} chars`);
