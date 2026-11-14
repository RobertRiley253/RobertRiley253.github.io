# Composed Exhibition — Team Implementation Decision and Remaining Vetoes
**Branch:** `portfolio-composition-rebuild-review-2026-11-13`  
**Source:** 153-criterion inception audit, 216-idea register, 16-perspective review charter, owner's explicit rejection of photo wall and image artifacts.  
**Status:** IMPLEMENTED AS REVIEW CANDIDATE; NOT OWNER-APPROVED; NOT PUBLISHED.

## Design-review decisions carried into actual implementation

| Design authority | Decision implemented | Evidence in branch | Remaining acceptance risk |
|---|---|---|---|
| Creative Director | Preserve emerald/brass identity, original signature and the four-page exhibit; reject a fresh, unrelated design | Existing brand image paths unchanged; `composed-exhibition.css` after inherited styles | Final artistic approval of whole exhibition |
| Layout & Art Director | Break 1-up full-width photo template into composition families by category | `composition-architecture`, `composition-vehicles`, `composition-print`, `composition-production`, `composition-contact` | Actual full-page screenshots and image/caption rhythm |
| Photography Director | Categorize first 63 native sources as standard/small/tiny; keep later 40 unverified sources compact | `data-native`, `data-resolution`, `PHOTO_SOURCE_AND_PLACEMENT_CROSSWALK_103.csv` | Forty image native dimensions still not independently verified |
| Graphic Designer | Use compact 12-column editorial mosaics, asymmetric spans, bounded 4:3 photo windows and real photo captions | New CSS overrides prior full-width image-card forcing | Avoid unwanted cropping, awkward blanks, or excessive faux frames at breakpoints |
| Career Story Editor | Keep actual nine chapters, change composition rhythm and add six compact original-photo sequences | `profile.html` retains chapters; 18 additional linked original JPG illustrations | Still requires original photo/biography provenance appraisal |
| Brand / Identity Custodian | Preserve original RRR monogram and gold signature | No changes to brand-assets; links unchanged | Formal exact-asset crosswalk to historical selected plaque |
| UX Designer | Surface photographic work sooner and move redundant explanatory intros below major project photographs | Homepage section sequencing changed without removing content | Actual discoverability in the revised page |
| Technical / Privacy Reviewer | Preserve 103 image IDs, four nav pages, source-photo full-size actions, no personal contact details | Static audits, original lightbox implementation retained | Interactive real browser QA still required |
| Skeptical Antagonist | Reject unverified "perfect", "finished", "best ever" scores and avoid publication | No merge, no public-main modifications, no final acceptance claim | Must veto visually mediocre screenshots even when tests pass |

## Nonnegotiable technical distinction

- **Photo source exists** is not the same as **photo looks crisp at intended size**.
- **Responsive grid responds** is not the same as **art direction is exceptional**.
- **Saved 103 images** is not the same as **all 103 are used intelligently**.
- **Original PNG branding retained** is not the same as **artistic consistency approved**.
- **Biography complete** is not the same as **biography visually enjoyable**.

## Current branch changes

1. `portfolio-dev/composed-exhibition.css`: new photo layout rules, compact image bounds, distinct gallery families, compact technical story, mobile two-up photo contacts, source-resolution precedence.
2. Four HTML pages: stylesheet attached, per-chapter composition labels applied, photographed `data-image` records preserved, low-resolution and unverified previews marked.
3. Homepage: photography moved forward; supplementary long-form orientation deliberately moved between/after photographic exhibits instead of blocking first galleries.
4. My Story: six genuine project-photography triptychs added, 18 original image links with actual known pixel dimensions; no claims that these photograph B-2 work or specific races.
5. `audit/PHOTO_SOURCE_AND_PLACEMENT_CROSSWALK_103.csv`: 103 photo IDs, source URLs, native dimensions from the original 63 audit where verified, HTML metadata for remaining 40 flagged unverified, and page references.
6. Browser screenshot workflow `.github/workflows/composition-qa.yml`: private branch screenshot and structural tests; does not deploy.

## Visual approval blockers

1. Review full-page screenshots at 1440px and 375px (and intermediate 768/1024). Reject if excessive whitespace, repeated oversized photography, artifact enlargement or loss of actual photo captions remains.
2. Inspect photo sources in the images at displayed size. Never display 306×230 sources as hero.
3. Verify photo lightbox, category navigation and archive collapse both mouse and keyboard.
4. Measure before/after vertical height and photographed object display widths; reject if layout still feels endless.
5. Complete provenance and quality mapping for 40 additional archived JPEG source images.
6. Present all four proposed pages to owner, receive explicit publication consent. Until then, public `main` untouched.

**No private address, personal phone or direct email was added. No existing photo was edited or recompressed.**
