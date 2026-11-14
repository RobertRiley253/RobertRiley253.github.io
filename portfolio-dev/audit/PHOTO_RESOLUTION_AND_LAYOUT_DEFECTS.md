# Photographic Scale and Layout Defect Register — Source Inspection

**Audit-only record:** current `portfolio-life-story-masterpiece-review-2026-11-13` HTML and historical `portfolio-dev/photo_dimensions_63.csv`. This report covers **only native dimensions known for the first 63 originals**, not the complete later set of 103. It does not claim direct pixel-level sharpness evaluation for all images.

## Reconciliation of observed defects

1. **The core failure is layout:** long runs of images and templated text/image spreads dominate vertical scrolling. The user's latest complaint expressly preserves the broad colors, identity and much of the writing. A color or logo overhaul would be the wrong remedy.
2. **Source-resolution warning was already on record November 12** but subsequent layouts still allocated photo positions without a numerical scale gate. A successful decoder test establishes only that a file loads, not that its visible JPEG edges and detail are acceptable.
3. **Single-image repetition in My Story** is structural: all nine chapters share a three-column section and a single visual element. Different type or background colors cannot resolve that.
4. **Visual softness may reflect several causes:** undersized original JPEGs displayed too large, intentional layered background copies, use of filters, and the absence of an image-size allocation plan. Do not assert that all assets were made blurry by a CSS blur filter.

## Measured original-image risk

Native pixel dimensions are from the recorded original GitHub JPG dimension audit; these figures are factual, but displayed CSS sizes were not measured for every instance in this source-only pass.

| Page | Photo `<img>` instances with original `portfolio-NNN.jpg` URLs | Instances sourced from photos <650 px wide OR <400 px tall | Examples |
|---|---:|---:|---|
| Home | 19 | **6** | 001 (552×276), 002 (479×383), 040 (531×424), 024 (576×500), 033 (539×412), 045 (504×336) |
| Selected Work | 56 | **26** | 032 (634×223), 037 (600×188), 046 (351×364), plus numerous 450–620px-wide sources |
| Production | 21 | **3** | 060, 061, 062 all (306×230) |
| My Story | 10 | **0** among numbered originals | Layout still fails artistically: repeated single-image modules |

**Interpretation:** These counts include repeated placements and exclude new externally hosted `incoming-portfolio` photographs for which this specific 63-row dimension file has no data. They are placement-risk flags, *not* a count of proven visibly blurry pictures or an analysis of all 103 originals.

## Known photo reuse causing repetitiveness

- `portfolio-006.jpg` appears across all **four** pages: Home×1, Work×3, Production×2, My Story×2.
- `portfolio-023.jpg` appears across all four: Home×1, Work×3, Production×1, My Story×1.
- `portfolio-009.jpg` is used Home×1, Work×3, My Story×2.
- `portfolio-057.jpg` is used Home×1, Production×2, My Story×3.

Cross-page reuse is not automatically wrong, but repeated lead photos can make the exhibition feel narrow despite retaining 103 records. Choose intentional cross-page callbacks rather than recycled decorative images.

## Photo Director's formal gate for the redesign

- Record for every proposed **large** photographic placement: original filename; native width × height; highest-quality available source; rendered CSS width × height at 375, 768 and 1440px; effective scale (native ÷ rendered width); intrinsic focus/artefacts; intended role (hero/support/archive). Visual read at 100% and high-DPI.
- No original below **650 pixels wide** should automatically occupy a large featured panel. An exception is possible only if explicitly accepted by the review as a historical/low-resolution artifact intentionally displayed small, not falsely crisp.
- Avoid enlargement beyond source's useful detail. For a crisp image at a 1× pixel ratio, prefer source width at least displayed CSS width; aim for more on higher-DPI screens when suitable sources exist.
- Distinguish native JPEG compression from an intentional blurred/repeated **background layer**. Remove blurry photographic layers from behind work when they make the authentic photo look degraded.
- Evaluate every image in its **actual designed composition** before calling it accepted. Output 100%-scale browser snapshots, not only compressed montages.

## Layout Director's formal gate

- **No default one-image-per-row:** use multiple independently composed layout families in real HTML/CSS; review six-image mosaic, asymmetric project grouping, archival contact-sheet and compact narrative/technical spread.
- On the homepage, reserve dominant scale for exceptional high-resolution work. Arrange supporting photographs together so each meaningful viewport offers more than one visual element where appropriate.
- In My Story, preserve the nine factual chapters but present them through multiple composition families; the existing same-grid-nine-times pattern is expressly **rejected**.
- Avoid excessive full-viewport empty framing, repetitive large image cards, oversized display headings, and long blank-looking surfaces.
- Keep all **103** photographed records available without requiring a visitor to see them in 103 single-file rows. Archive grouping must be navigable and not dilute the primary exhibition.
- Every major page must receive **full scroll-length desktop and mobile visual review**; verify the three strongest and weakest sections at realistic size. This is a visual veto independent from Axe and image decode pass.

## Next evidence required for completion

1. Native-size/provenance crosswalk for remaining 40 newly referenced records.
2. Actual rendered image bounding boxes vs source sizes for every hero and featured placement.
3. Corrected homepage full-length desktop and mobile screenshots demonstrating several multi-image compositions, unchanged approved assets and image legibility.
4. Team-perspective **accept/reject** record naming specific failing compositions.
5. Owner approval of visual result before any publication or application use.
