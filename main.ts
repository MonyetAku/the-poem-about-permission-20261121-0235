import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The poem must stay within the gate: 1–280 Unicode code points of UTF-8
// text. It is written verbatim, so both runs produce identical bytes.
const poem = `The hardest word I ever learned
was not no.
It was may I —
two small syllables, said
with my whole chest open,
my hands empty on purpose.

And the strangest thing:
the asking was the having.
The door was never locked.
It was only ever waiting
for the knock to be mine.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
