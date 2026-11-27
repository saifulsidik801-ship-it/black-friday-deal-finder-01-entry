// DealHawk entry program (Node 22, standard library only).
//
// What it hands in: the static deal-finder site in app/ and the screenshots
// in screenshots/, copied into the grader's output directory, plus a
// dossier.json built from them with the kit's vendored library. The library
// (vendor/makefun-frontend.ts) is the kit's copy, unchanged, so the dossier
// the scorer rebuilds matches this one byte for byte.
//
// Run locally as:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// In the grader, MAKEFUN_OUTPUT_DIR is unset and /output is used instead.

import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Start from a clean output dir so a stale file can never leak into the entry.
rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const appOut = join(outDir, "app");
cpSync(join(repoRoot, "app"), appOut, { recursive: true });

const shotsOut = join(outDir, "screenshots");
mkdirSync(shotsOut, { recursive: true });
const shotsIn = join(repoRoot, "screenshots");
if (existsSync(shotsIn)) cpSync(shotsIn, shotsOut, { recursive: true });

// Same caps the scorer enforces: 4 screenshots, 256 KiB each, app under
// 993 files / 16 MiB, dossier text capped at 160 KiB.
const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 16777216,
});
writeFileSync(join(outDir, "dossier.json"), dossier);
console.log("DealHawk entry written to", outDir);
