# HQ11 — Targeted four-page source QA (2026-11-14)

**Branch:** `portfolio-editorial-material-review-2026-11-13` — **development only**. No merge, main change, deployment or owner approval.

## Actual code corrections

Repointed all **35** embedded compressed-JPEG references that had been pinned to the older `portfolio-development-2026-11-12` branch so the four-page preview consistently reads assets from its **current active review branch**:

- Home `index.html`: 4 references; commit `d5c1af4fb4e7c45c46a28212283d3894bcfb6467`
- Selected Work `work.html`: 13; commit `6b86d6518fb7c0555e848c76eaaaeb5c81e4b6f6`
- Production `production.html`: 18; commit `57ddf2c0973340f8fcd5f998fd25d859a6fcd0df`
- My Story `profile.html`: 0; unchanged

**Important:** This is a path-consistency and integrity fix, not an upgrade of image quality. All 35 placements still load compressed JPEG previews. None of the seven SHA-verified original PNGs currently replace these 35 embedded placements; those seven are already used from `incoming-portfolio/fullres/` through gallery records. Do not falsely mark preview replacements complete.

## Static checks directly against branch source and Git tree

| Page | img elements | img tags missing alt | current-branch raw image references | unresolved current-branch raw refs |
|---|---:|---:|---:|---:|
| Home | 30 | 0 | 4 | 0 |
| Selected Work | 77 | 0 | 17 | 0 |
| Production | 58 | 0 | 30 | 0 |
| My Story | 35 | 0 | 3 | 0 |

All four HTML pages have exactly one opening and one closing `main` element. Encoded spaces in GitHub image URLs were decoded before comparing with actual repository paths. These are source checks, **not** a browser image-loading or visual sharpness test.

## Pending release blockers

1. Upload 47 remaining unique PNG sources from the seven compact ZIP batches prepared in HQ11. Each ZIP must be extracted locally before image files can be uploaded to `incoming-portfolio/originals/`.
2. Verify uploaded originals by SHA-256 and intrinsic dimensions. Only then replace relevant website JPEG previews; avoid cosmetically renaming extensions or enlarging small source images.
3. Real desktop/mobile rendered browser review of **latest** branch, including image decoding, focus and lightbox, remains **NOT DONE** in this session. A source-only audit is not a substitute for a real browser. User review needs an actual navigable staging presentation.
4. Do not merge or publish to `main` without explicit approval.

Previously approved branding, page architecture, image placements, work spotlights and content remain preserved.
