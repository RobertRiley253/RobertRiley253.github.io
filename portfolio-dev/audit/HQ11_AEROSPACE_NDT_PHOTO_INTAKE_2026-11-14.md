# HQ 11 — Aerospace NDT photographs: intake and placement (2026-11-14)

Status: **4 new source photographs received and independently inspected.** Originals remain in the ChatGPT conversation and are preserved in `HQ11_NDT_Originals_and_Web_Copies_2026-11-14.zip` for safe manual transfer. **The image binaries have not been uploaded to GitHub**, so the site does not yet show these four photographs. No site redesign, main update, or publication.

## Intended existing placement
- Page: `portfolio-dev/profile.html`
- Location: `#story-aerospace` / existing technical-career photographic group.
- Lead visual: ultraviolet fluorescent penetrant inspection station.
- Supporting: weld inspection indication; threaded fitting/component indication; technical indication-comparison diagrams.
- Keep original image pixel dimensions; present as NDT techniques and inspection context, not proof of any particular part's acceptance/rejection.
- Owner described practical experience in aerospace-related NDT, exotic metals, dye penetration and fluorescent surface indication inspection.
- The aerospace biography paragraph was updated to identify NDT experience; no layout or design CSS changed.

## Source identification (exact image upload order)
| Order | File in transfer package | Dimensions | Original bytes | SHA-256 |
|---|---|---|---:|---|
| 1 | `Fluorescent_penetrant_weld_inspection.png` | 427×569 | 407832 | `942e0d923e9a392d74158bee31e804d20ed5340500ce66f9a06e6f7a46922e89` |
| 2 | `Linear_indication_threaded_component.png` | 483×366 | 300993 | `b48040fcad69ed73cbbda068c89b3740d2376fdba25df3289ac6d5820eac75b6` |
| 3 | `NDT_indication_analysis_diagrams.png` | 593×608 | 188100 | `c8c6786181b3366d4b1b73d19161b5ee8db0c78da912f6b246c1b1f33f33f9d6` |
| 4 | `UV_fluorescent_inspection_station.png` | 1800×1013 | 3478571 | `e2805395eacc580a9b3679f9fdc33a84df62d3cf6675cfd5e9911ed56eb180cf` |

## Transfer instructions
- Package contains `originals/` (unmodified PNG bytes), `web-previews/` (JPEG derivatives) and `HQ11_NDT_transfer_manifest.csv`.
- Upload the **extracted PNGs** to `incoming-portfolio/ndt-originals/` in the active development branch; do not upload ZIP as a static website photo.
- Compare uploaded Git blobs to original checksums, then link the images using existing composition classes only.
- Avoid oversized binary Base64 connector payloads; they previously failed.
- Do not infer that these photographs came from a particular aircraft, production part or inspection job solely from their appearance.
