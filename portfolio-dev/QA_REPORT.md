# Portfolio candidate — production QA
Verified: 2026-11-12 (Pacific)
Branch: `portfolio-development-2026-11-12`
Candidate: `portfolio-dev/index.html`

## Confirmed static checks
- 63 distinct original portfolio image names referenced (portfolio-001 through portfolio-063).
- Missing image paths from `main` Git tree: **0**.
- 63 figure entries; 63 image-enlarge controls; one dynamic lightbox image.
- Broken internal fragment links: **0**.
- All photograph elements have descriptive alt text; the viewer sets its alt text dynamically from the corresponding metadata.
- Gallery uses CSS responsive breakpoints and `object-fit:contain` rather than aspect-ratio distortion.
- Original 63 photos remain at their preexisting repository paths. No source images overwritten, removed or converted.
- HTML retains `noindex,nofollow` and an unpublished/private-review notice.
- The candidate is under `portfolio-dev/`, not the root `index.html`; GitHub Pages still serves the old root website from `main`.
- Fixed the shop-and-production navigation fragment from `#studio` to `#s07`.

## Editorial state
- 51 selected images in the leading gallery; 12 supporting images accessible in the expandable archive.
- Original visual assessment: `portfolio-dev/visual_review_all_63.csv` (16 featured, 35 supporting, 12 archived).
- This is a completed *candidate*, not approved public final.
- User expects to add more original archive photos before release.

## Not yet verified
- Browser runtime behavior and device-specific layout were not tested in a real graphical browser.
- Image content was assessed in the predecessor work; this continuation verified file existence and links, **not** new pixel-level image inspection.
- The archival photographs not in the 63-image GitHub inventory may still contribute to the final release.
- Photographic provenance and caption wording remain subject to user's final approval.

## Release gate
Review complete candidate, incorporate additional photography, resolve caption/provenance uncertainty, obtain **explicit approval of the final proposed public changes**. Only then prepare a separately authorized main-branch merge/publication.

## 2026-11-13 — Incoming-photo integration QA (HQ 5)
The original 63-photo static checks above describe the preserved baseline, not the enlarged current candidate.

- Reviewed all 54 manifest-listed incoming JPEG previews visually from GitHub. Committed `portfolio-dev/incoming_previews_editorial_54.csv` with 9 integrated, 31 reserved, and 14 excluded; these decisions are developmental and not final owner approval.
- Added 2 selectively chosen photographic previews to `work.html` and 7 to `production.html`, retaining the original 51/12 editorial split for the preexisting 63 images. Source photographs and original archival materials remain untouched.
- Added nine preview viewer records (IDs 64–72) and conditional source URLs in `portfolio.js`. Preview viewer links now explicitly say **Open uploaded JPEG preview**, not **View original image**. The newly integrated JPEGs are compressed review copies; **full-resolution originals have not been transferred to GitHub**.
- Four-page post-integration source checks: 72 distinct referenced photographs (63 original + 9 new previews), 91 photographic image placements, 88 gallery controls; all source `width` and `height` attributes match the corresponding 63-image dimensions record or the incoming 54-row transfer manifest.
- The 54-preview manifest and the 54-row editorial decisions correspond one-to-one; no missing alt attributes, duplicate HTML IDs, or broken local/cross-page fragment links found; all four pages retain `noindex,nofollow`.
- No browser-rendered screenshot or live interaction certification; need actual device visual checks, contrast and accessibility review, final choice of preview vs full-resolution originals, accurate individual contribution verification, branding decision and owner's full approval before release.
- Prior curation excludes Wildwood (#46 incoming); the image remains preserved in the incoming archive but has **not** been introduced into the final candidate.
- Public website, `main` and original image files remain unchanged.

## 2026-11-13 — HQ6 preview provenance and source integrity check
- Identified the nine development-only incoming JPEG previews individually with `preview-card` styling and descriptive "View JPEG preview" accessible controls (2 on Selected Work, 7 on Production); added a restrained visual JPEG PREVIEW identifier via CSS. These are still compressed preview files, **not** full-resolution archival originals.
- Re-fetched all four current development HTML pages after commits. Confirmed 72 distinct `data-image` identifiers (1–72) represented, nine integrated preview identifiers (64–72), zero duplicate HTML IDs, and zero unresolved tested local or cross-page fragment targets.
- All four pages retain `noindex,nofollow`; public `main` not targeted. This is a structural/source-level review. Browser rendering, actual image loading, mobile touch, contrast and assistive technology testing remain pending.

## 2026-11-13 — HQ6 expanded development QA
- Retrieved all four current HTML documents and the latest shared JS/CSS from the development branch after code changes. Source checks found 72 distinct photo IDs, nine incoming JPEG preview IDs (64–72), 72 JS metadata entries, no duplicate HTML IDs, no missing image alt attributes and noindex,nofollow on all four pages. All previously checked local/cross-page fragment targets resolved.
- The full-screen photo viewer now identifies incoming compressed JPEGs accurately in its accessible dialog label; the photograph counter has descriptive position/title labels. Its load/error handling checks the selected image against the browser's current source to avoid stale state; touch-swiping on viewer buttons/links is ignored.
- Checked base CSS color contrast mathematically for known palette-on-background pairs: prior muted text #66716b on paper #f3f1ea measured about 4.49:1; revised #606a64 measures about 4.96:1. Prior eyebrow label #5d786d on paper measured about 4.25:1; revised #52695d measures about 5.25:1. These are targeted token checks, NOT a whole-page color-contrast audit.
- Source braces balanced in shared JS (105/105) and CSS (620/620) after changes. Balanced braces do not establish runtime correctness.
- Open: rendered visual inspection, real-browser functionality, actual image-loading performance, assistive technology, pixel-level quality, full-resolution archival photo replacement and final owner approval. No browser QA completion asserted.
