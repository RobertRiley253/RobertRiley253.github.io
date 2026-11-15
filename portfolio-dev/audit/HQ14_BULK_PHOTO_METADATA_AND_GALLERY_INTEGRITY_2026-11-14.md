# HQ14 — Bulk portfolio image metadata and gallery integrity

**Active development branch:** `portfolio-editorial-material-review-2026-11-13`. Main/public deployment untouched. No GitHub Actions.

## Changes committed this bulk pass

1. Read the actual JPEG bytes of **23 unique** existing original photos under `Rob-Photo-Uploads/`, parsed each JPEG frame to obtain source-native width × height; no guesses or resampling.
2. Added missing intrinsic `width` and `height` to **23 HTML photographs**: Selected Work **6**, Production **13**, and My Story **4**. Previous four NDT PNGs had already received their verified dimensions in HQ13.
3. Corrected the 31 recovered original PNG gallery records whose metadata still mislabeled them as JPEG `preview`; now `tier: original-PNG-source`. File paths and titles unchanged.
4. Retained all approved first-impression hero choices, RRR brand identity, composed exhibition layouts, styling, section order, original files, captions and all 103 gallery photo records.

## Static QA after changes

- All **214 HTML img elements** across the four pages have `alt` attributes.
- All **213 actual content photographs** have both width and height dimensions. The remaining `img#viewer-img` is a purposefully empty, dynamically populated dialog viewer.
- All 103 gallery IDs (1–103) exist in `portfolio.js`, are represented in page image cards and resolve from each card's thumbnail `src` to the corresponding full-size record's `file`. No ID gaps, undefined gallery IDs, or thumbnail/full-image source mismatches found.
- Zero broken in-repository stylesheet/image/JS links or cross-page anchor targets in the source inspection.
- Examined **14 stylesheets**; all **10 local CSS artwork/texture url()** targets resolve to existing repository files.
- All original 51 recovered PNGs and the transfer ZIP archives remain preserved on the active development branch.

## Boundary / follow-up

No real browser visual QA was possible here: GitHub file connector delivers repository source but no browser-preview session; local Chromium exists but the container could not resolve the GitHub host to fetch current site assets. Therefore do not claim visual verification of appearance, responsive breakpoints, rendered image decode, sharpness, scrolling, lightbox focus, keyboard operation, or actual site speed.

**Keep unchanged until visual inspection and owner approval:** public `main`, publication, the approved emerald/champagne/ivory design, existing photo arrangement. Remaining gate: real 1440px/768px/375px browser screenshots plus owner navigable preview.
