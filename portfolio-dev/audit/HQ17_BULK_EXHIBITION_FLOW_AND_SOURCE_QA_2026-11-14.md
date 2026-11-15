# HQ17 — Bulk Exhibition Flow, Content Polish & Source QA
**Date:** 2026-11-14 (Pacific). **Branch:** `portfolio-editorial-material-review-2026-11-13`.
**Status:** Development changes committed. Public release NOT authorized. Actual rendered browser/mobile visual acceptance remains pending.

## Visual-structure changes delivered
- Preserved the existing four-page emerald/champagne/ivory exhibition, RRR identity, signature, image sources, lightbox and original assets.
- Production's 15-photo Working Studio gallery now opens with 8 photographs; the remaining 7 appear in an accessible native expandable section.
- Production's 19-photo Machinery/Fabrication gallery now opens with 8 photographs; the remaining 11 appear in an accessible native expandable section.
- Production's 5-photo Field Equipment chapter now leads with the bucket-truck fleet overview and the laser working bed; 3 alternate sign-truck views are accessible in an expandable section.
- My Story's 9-photo sign-shop-history chapter leads with 6 photographs; the remaining 3 remain accessible.
- CSS styles all expandable sections to match the existing parchment/green/gold atmosphere. No content discarded or image IDs changed.
- Production's top chapter navigation now links directly to custom 3D work, field equipment, studio photographs, machinery and material/process galleries.

## Editorial and performance corrections
- Revised opening Work project narratives to foreground finished work, material scale, commercial identification and vehicle graphics rather than internal comparison/explanation.
- First major Selected Work project image changed from lazy to eager with high fetch priority; actual transfer/performance not measured.
- Refined Home, Work, Production and My Story narrative copy, removing visitor-facing phrases about review selections, recovered images or internal project status.
- Retained photo captions/metadata that cannot be improved truthfully from source text alone; did not infer subject identity from opaque IMG filenames.

## Source integrity after bulk edits
- Verified branch HEAD before this checkpoint: `0c1973d322a5a1c5d9b5a31423645ab287d40cd8`.
- Git tree complete: 498 entries, not truncated.
- `portfolio.js`: 166 unique image records, all 166 referenced on the four pages.
- No missing internally linked cross-page anchors or local/raw uploaded image source files among audited HTML images.
- No missing `alt` attributes in the inspected HTML image tags.
- Native expandable sections have balanced opening/closing tags across all four pages.
- Git SHA inventory identified 10 clusters of byte-identical duplicate image blobs across archive paths; no originals were deleted.
- 379 image-format paths exist in repository, including duplicated images, previews, design assets and historical archive files; this is NOT the number of distinct client photographs.
- Some previously uploaded photo assets remain unused or visually unscreened. Do not add them to employer-facing pages without actually inspecting pixels, suitability and attribution.

## Remaining work
1. **Real rendered browser inspection** of current pages at desktop/mobile sizes, including actual photo decoding, cropping, rhythm, first impression and lightbox usability. Source checks do not count as visual acceptance.
2. Visual examination and curation of unreviewed image candidates and the generic-title photo groups; prioritize authentic finished work and actual proof of trades. Do not invent specific subjects.
3. Final owner review of the interactive dev preview. No merge, public launch, employer submission or GitHub Actions without explicit approval.

Current development preview (may be cached):
https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/index.html
