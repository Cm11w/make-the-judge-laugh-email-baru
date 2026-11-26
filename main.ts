import { mkdirSync, writeFileSync } from "node:fs";

// Make the Judge Laugh in One Line — one funny line, max 200 characters.
// Judge weighs, in order: a joke a stranger gets in one read, surprise,
// tightness (laugh at the end, nothing explained), freshness, clean read.
// Angle: a gravestone with a QR code (0 occurrences of "gravestone" or
// "QR code" across all 1,939 submissions) — modern memorial tech meets
// a nagging voicemail from beyond the grave. The em dash sets up the
// scan; the punchline ("call your mother") lands at the very end.
const line =
  "My grandfather's gravestone has a QR code now — scan it and it plays his voicemail, which is just him saying 'call your mother' from beyond the grave.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
