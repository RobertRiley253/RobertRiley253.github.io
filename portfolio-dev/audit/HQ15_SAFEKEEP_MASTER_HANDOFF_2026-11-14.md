# HQ15 SAFEKEEP — MASTER RECOVERY & CONTINUITY HANDOFF
**State captured:** 2026-11-14, Pacific time. **Status:** preservation checkpoint; NO new visual-production changes authorized by this record alone.
**Repository:** `RobertRiley253/RobertRiley253.github.io`
**SOLE ACTIVE DEVELOPMENT BRANCH:** `portfolio-editorial-material-review-2026-11-13`
**Last independently verified pre-handoff branch head:** `3317e99ddcc042a0ce5a4fff4b54c83007865736` (HQ14 audit commit). After creating this document and companion bulk plan, reread branch head; their commits supersede this pre-handoff SHA.
**Public branch:** `main` — owner approval required before *any* website publication, merge, or deployment. Do not confuse the separate photo-upload cleanup commits on main with portfolio publication.
**Purpose:** any fresh ChatGPT tab can continue without asking the owner to repeat uploads, choices, styling, or history.

## 0. Recovery instructions — READ FIRST
1. Access GitHub connector; fetch the **current** head and tree of `portfolio-editorial-material-review-2026-11-13`; never infer the active source from an old tab, old PROGRESS.md or public main.
2. Read **THIS FILE**, `HQ15_BULK_EXECUTION_AND_RELEASE_PLAN_2026-11-14.md`, `HQ14_BULK_PHOTO_METADATA_AND_GALLERY_INTEGRITY_2026-11-14.md`, `HQ12_POST_TRANSFER_CONTENT_AND_STATIC_QA_2026-11-14.md`, `HQ10_BULK_CONTENT_PASS_AND_SOURCE_QA_2026-11-14.md`, and `PORTFOLIO_EXPECTATIONS_AND_ACCEPTANCE_REGISTER.md` in `portfolio-dev/audit/`.
3. Read current `portfolio-dev/index.html`, `work.html`, `production.html`, `profile.html`, `portfolio.js`, and relevant CSS before editing; source truth takes precedence over narrative audit claims. Legacy HQ11 files saying images still need upload are **historical and superseded**.
4. Inspect actual Git blob paths/hashes, not the filename on a ZIP or a user's memory of upload location. Work in coordinated coherent batches; report only commits verified at fresh head.
5. DO NOT make owner download, extract, re-upload, re-sort, or rename the 51 images. That process is finished and checked.
6. NEVER publish/merge/change live presentation without full owner preview and explicit approval. No GitHub Actions workflow; owner has explicitly rejected resource use for this task.

## 1. LOCKED DESIGN AND GOVERNANCE
- Approved **four-page exhibition portfolio**; multidisciplinary career, photography-first and editorial. Pages: `index.html` (Home), `work.html` (Selected Work), `production.html` (Production), `profile.html` (My Story).
- Preserve **emerald/green, champagne gold, ivory/parchment**, organic atmospheric material feel, elegant graphic compositions; traditional **RRR monogram** in header/footer and **champagne-gold signature** on emerald feature; retain approved artwork.
- **Do not redesign.** Only restore, finish, curate, fix factual wording, test and refine existing design. No giant blurry photos, single vertical column or repetitive orange-van emphasis. Strongest authentic finished work should be seen early; authentic industrial evidence and career balance matter.
- No private address/telephone/email/resume download forms; no unverified aviation attribution; NDT reference images do **not** portray classified B-2 work.
- Preserve originals, original archive ZIPs, prior branches, source images, captions and design compositions unless an explicit, evidence-based reviewed change is warranted. Do not silently delete apparently redundant original assets.
- Portfolio is employer-neutral, with D10 signage opportunity as an important use; emphasize creative + practical skills without reciting the resume as a dull wall of text.
- Prior owner instructions: do actual work in bulk before reporting; don't send owner back into GitHub for unnecessary manual tasks; do not create more tiny QA-only cycles to substitute for finished visual review.

## 2. WHAT IS VERIFIED COMPLETE
- **All 51 missing PNGs recovered**: 47 general originals + four NDT originals were initially mistakenly uploaded individually at `main` repository root. Exact Git blobs were copied unchanged to `incoming-portfolio/originals/` on active branch; 51 Git blob IDs and sizes were matched against originals. Do NOT ask for transfer again.
- **Seven regular transfer ZIPs** preserved on development branch: `incoming-portfolio/uploaded-archives/`. Separate NDT archive preserved `incoming-portfolio/ndt-originals/`. Seven misplaced regular ZIPs were removed from main **after** byte-identical branch copies were verified. Two MOV videos remain preserved at repo root main. Do not re-delete or repeat cleanup.
- Existing earlier `incoming-portfolio/fullres/`, `high-quality/`, `previews/` and `Rob-Photo-Uploads/` source material retained. Earlier `Rob-Photo-Uploads/` contains 125 image-format entries; distinguish this separate archive from the 51 recovered original sources.
- **66 references** previously changed from JPEG previews to original PNGs: 4 Home, 13 Work, 18 Production, 31 gallery records in `portfolio.js`.
- **11 outdated cross-branch fullres references** corrected: 2 Work, 9 Production.
- **31 gallery metadata records** formerly marked `tier: preview` corrected to `original-PNG-source`, with files/titles intact.
- **Four NDT images** integrated as compact reference group in `profile.html` and styled in `life-edition.css`; provenance language corrected; source dimensions added (427×569, 483×366, 593×608, 1800×1013).
- **23 unique shop/project JPEGs** read from GitHub binary metadata, dimensions recorded and inserted into HTML: 6 Work, 13 Production, 4 My Story. No image recompression.
- HQ14 source-level verification: 214 HTML img elements on four pages have alt; 213 real content images have width/height (lightbox image is empty until dynamic load). All 103 gallery IDs 1–103 are present, every gallery card maps to a corresponding full-size record, zero matched source mismatches. 14 stylesheets, 10 local image/style artwork references resolved. No broken local navigation / cross-page anchor targets in the audited state.
- HQ10 retained selected Work first-impression diversity: genuine finished sign/van/print examples; nearby second spotlight switched to completed Advance Custom Gutters box truck to avoid repetitive Hot Shot van. Original wide shop panorama `IMG_4837.jpg` placed near equipment on Production; original site compositions otherwise preserved.
- No new work published to public `main` during source/portfolio production passes. No GitHub Actions workflow used.

## 3. CRITICAL UNFINISHED / NOT VERIFIED
**MOST IMPORTANT:** An up-to-date real rendered, navigable **four-page preview** is not yet verified. GitHub source-integrity checks are NOT a substitute. Need genuine browser screenshots/interactive QA at 1440, 768, 375 pixels (ideally also 1024); verify actual image decoding, sharpness, cropping, density, mobile overflow, keyboard/lightbox, performance and visual first impression.
- Prior assistants repeatedly performed static QA but did not deliver a navigable preview. **Prioritize solving preview access instead of generating more QA documents.** Owner should not be forced into lengthy setup or spend GitHub Actions quota.
- If connector/container cannot render directly, state limitation, seek usable lightweight alternate preview route WITHOUT publishing main or using GitHub Actions, and do not claim live visual testing.
- Review imagery from actual pixels, not filename alone, before promoting unknown archive photos to employer-facing pages. Some files contain private correspondence, weapons, third-party imagery or uncertain provenance; see HQ10 screening ledger.
- Subject priorities: signage/vehicle/finished physical work first; technical equipment, welding/fabrication, authentic B-2 *career text* (not false photo evidence), NDT reference group, RIP/ICC/software, instructor history, motorsport supporting. Avoid repeating the same orange van.
- Owner has **not** approved final publication, visual acceptance, or employer transmission.

## 4. EXACT IMPORTANT PATHS
`portfolio-dev/index.html`
`portfolio-dev/work.html`
`portfolio-dev/production.html`
`portfolio-dev/profile.html`
`portfolio-dev/portfolio.js`
`portfolio-dev/design.css`, `life-edition.css`, `composed-exhibition.css`, `editorial-materials.css`, `studio-ambient.css`, `hq8-photo-evidence.css`, `hq10-field-records.css` and other linked stylesheets
`portfolio-dev/audit/PORTFOLIO_EXPECTATIONS_AND_ACCEPTANCE_REGISTER.md`
`portfolio-dev/audit/HQ10_BULK_CONTENT_PASS_AND_SOURCE_QA_2026-11-14.md`
`portfolio-dev/audit/HQ11_INCOMING_PHOTO_PLACEMENT_LEDGER_2026-11-14.csv`
`portfolio-dev/audit/HQ12_ORIGINAL_PHOTO_TRANSFER_AND_SOURCE_REPAIR_2026-11-14.md`
`portfolio-dev/audit/HQ12_POST_TRANSFER_CONTENT_AND_STATIC_QA_2026-11-14.md`
`portfolio-dev/audit/HQ13_FINAL_SOURCE_QA_AND_VISUAL_GATE_2026-11-14.md`
`portfolio-dev/audit/HQ14_BULK_PHOTO_METADATA_AND_GALLERY_INTEGRITY_2026-11-14.md`
`incoming-portfolio/originals/` (51 recovered PNGs; 4 NDT among them)
`incoming-portfolio/uploaded-archives/` (7 original regular ZIPs)
`incoming-portfolio/ndt-originals/` (NDT ZIP, not the individual PNG location)
`Rob-Photo-Uploads/` (historical supporting images)
`.github/workflows/portfolio-development-browser-qa.yml` exists in repository but owner explicitly says do **not** spend workflow resources; do not execute it.

## 5. SOURCE HISTORY / CONFLICT WARNING
Some HQ11 markdown assertions are stale: they say four NDT PNGs or 47 general PNGs are not on GitHub. HQ12, HQ13, HQ14 and CURRENT TREE supersede those assertions. Do not restart transfer. Portfolio working branch is `portfolio-editorial-material-review-2026-11-13`, NOT older `portfolio-development-2026-11-12`, `portfolio-art-exhibition-review-2026-11-13`, or `portfolio-final-finishing-2026-11-13`. Older creative and recovery versions remain historical reference only.

## 6. OWNER-FACING STATUS AND HANDOFF DISCIPLINE
Tell owner what's actually finished, what is still unverified, and one clear next action only if needed. No pretending background work continues between messages. Explicit approval for publishing requires complete final reviewed site, not an incidental “proceed” instruction. New tab must ask **no repeat questions** for confirmed data, and must continue from current branch's latest SHA.

## 7. OWNER-APPROVED NAME FOR THE ACTUAL INTERACTIVE PREVIEW — READ BEFORE SHOWING USER
**Exact conversation label:** **Robert R. Riley — Interactive Exhibition Portfolio | Live Development Preview**.
When owner asks to “see the website”, “latest portfolio”, “live preview”, “the new ambiance/monograms”, or “show me progress”, open the **INTERACTIVE DEVELOPMENT WEBSITE**, NOT the published old site, a GitHub file-tree page, or an older static 4-page contact sheet.

**Current-branch preview URLs (RawGitHack; dynamic branch URL, may be cached by external service):**
- Home: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/index.html
- Selected Work: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/work.html
- Production: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/production.html
- My Story: https://raw.githack.com/RobertRiley253/RobertRiley253.github.io/portfolio-editorial-material-review-2026-11-13/portfolio-dev/profile.html

These links load the existing development HTML/CSS/JS, and do not merge or publish to main. The preview host is external; check that its response reflects current source before asserting a particular change is visibly live. Source: `portfolio-editorial-material-review-2026-11-13`. The older published `https://robertriley253.github.io/` is not the current candidate. Photo and style work remains on development branch pending browser review and explicit owner approval.

**MOST IMPORTANT CONTINUITY MISTAKE TO AVOID:** Owner had already interacted with this live preview and was impressed by its emerald/champagne/ivory atmosphere and artwork before uploading more photos. Previous assistant repeatedly showed outdated saved screenshot boards and GitHub file listings instead, falsely creating impression of regression. Never do that again; recognize the interactive preview by its exact label and URLs. Static preview images are historical evidence, not equivalent to current live branch pages.

## 8. OWNER CORRECTION — B-2 VS EXOTIC METALS IMAGE PLACEMENT (LATER 2026-11-14)
Owner explicitly corrected misleading placement: **dye-penetrant / NDT inspection belongs to the Exotic Metal Forming / exotic-metals experience, NOT the Boeing B-2 composites chapter**. User wants actual B-2 visual imagery in the B-2 area and a thorough image-by-image final curation, not merely placeholder shuffling.
- This was corrected in current development `portfolio-dev/profile.html`: Boeing section now focuses on B-2 graphite-fiber composites/aircraft assembly with a separate contextual B-2 photograph from `Rob-Photo-Uploads/New folder (3)/B-2-lineup.webp`; original abstract B–2 editorial motif retained as existing artwork.
- A distinct anchored `#story-exotic-metals` section now groups exotic-metal forming, welding and the four original NDT technique-reference PNGs; career chapter navigation updated; responsive CSS appended to `life-edition.css`.
- Original contextual B-2 image is a real aircraft photograph, **not** proof of user's own manufacturing work; **source attribution/reuse rights remain unverified—review before public publication**. No B-2 aircraft-related claims should be attached to inspection photos.
- Change source commits: `a874a20ab767e23b8e47193708e499c3f57e4930` (content) and `84f79c6884e3edb90cad0a5c0ca3090ed1e0dd33` (styling). Static QA verified page ordering and source Git-tree existence, NOT rendered-browser acceptance.
- Preserve these separate career concepts in all future photography curation. Further image selection should be judged visually and aligned to exact skill/company/section, with no unsubstantiated attribution.

## 9. OWNER DISPLAY PREFERENCE — INTERNAL B-2 IMAGERY (2026-11-14)
Owner requests **finish the internal visual composition now**, using already-uploaded B-2 imagery where appropriate, without presenting image captions as `placeholder` or writing legal/source-rights cautions on the visible page. Owner cannot photograph classified B-2 production; use neutral factual captions of the aircraft while keeping personal career claims separate and truthful. Keep image/source provenance and unresolved future-publication checks in INTERNAL QA notes only; before the final public release, review any third-party photo use as part of ordinary release preparation, not as a repetitive obstacle during design. Prioritize placement, visual relevance, and polished section-specific content. The B-2 public-facing page caption was simplified to `B-2 Spirit · Aircraft lineup` in commit `ede7e40bc3339b228571c6c892f46911c266d5f0`; Exotic Metals and NDT remain their distinct chapter.

## 10. HQ16 MAJOR BULK PRODUCTION CHECKPOINT — SUPERSEDES 103-IMAGE FIGURES
**Update:** 2026-11-14, following owner's directive to make *substantial visible progress*, integrate as many suitable uploaded photographs as possible in bulk, balance form/shape/color and stop repeating tiny audit cycles.

**NEW AUTHORITATIVE HQ16 DOC:** `portfolio-dev/audit/HQ16_MAJOR_BULK_INTEGRATION_AND_QA_2026-11-14.md`
**EXACT 63-RECORD SOURCE/PLACEMENT LEDGER:** `portfolio-dev/audit/HQ16_EXPANDED_GALLERY_PLACEMENT_2026-11-14.csv`.

- Actual interactive gallery expanded from **103 to 166** unique record IDs with 63 additional full-image source references from uploaded materials.
- **38** production-source additions: shop/printing 15, fabrication/laser 19, 3D/materials 4. Three themed grids, responsive and image-proportional in `production.html`.
- **9** sign-shop-history additions in `profile.html`.
- **16** newly visually screened additions: **2** commercial graphic layouts in `work.html`, **10** custom fabrication/3D/equipment photos in `production.html`, **4** additional B-2 aircraft photos in `profile.html` and an emerald/gold B-2 mosaic. NDT / Exotic Metals grouping remains separate.
- Two old full-size JPEG copies in production and gallery ID 71,72 now point to recovered original PNGs. Gallery metadata reflects actual source formats.
- Homepage now provides a compact six-route link gallery to the new exhibit sections, keyed `#expanded-exhibit`. Existing hero remains.
- Gallery JS fixed for `Rob-Photo-Uploads/` originals so the modal opens current-branch raw files, not nonexistent older-public copies.
- Production photo groups styled in `composed-exhibition.css`; B-2 mosaic in `life-edition.css`. Preserve the approved emerald/champagne/ivory design, true image proportions, and original photos. The visual site is materially expanded; not merely extra documentation.
- Static source verification: all 166 gallery IDs have displayed image cards; 63 new source paths exist; zero missing local/anchor paths or thumbnail-record mismatches in source audit. **Real browser visual QA and actual final artistic acceptance are STILL pending**.
- No GitHub Actions workflow, no main-site updates, no image-source deletions, no owner-facing “placeholder” disclaimers.
- **Do not regress** to old HQ14 103-record statistics, stale old HTML copies, or suggest user needs to re-upload. Continue from HEAD, checking current tree and HQ16 files before any further edits.
