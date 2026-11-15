# Portfolio Production Ledger — Continuity Baseline

Repository: RobertRiley253/RobertRiley253.github.io
Expected development branch: portfolio-editorial-material-review-2026-11-13
This is a handoff baseline compiled 2026-11-14. Figures below are from last HQ screenshot and have NOT been independently re-counted from the latest branch.

## Reported last checkpoint
- Checkpoint shown in previous conversation: 43c7a1a77d934d014ab646efcf5fa3e0165a7967
- Previous assistant reported 172 unique gallery records, 192 page-card appearances, and a 53-row identification/placement crosswalk.
- Previous assistant reported 11 original PNGs recovered and several unplaced original photo sources.
- Earlier historical QA: 103 images integrated, 28/28 responsive checks and 103/103 decoded, though a later expanded gallery makes these figures obsolete for final QA.
- Newer 172/192 figures and 53-row inventory have not yet been compared with actual current repository file paths or independently validated.

## Required verification before next edits
1. Resolve latest HEAD of expected development branch and compare against displayed checkpoint.
2. Locate existing image manifest and 53-row crosswalk; determine exact paths from source tree or searches, not guesses.
3. Compare all uploaded source images with gallery references by hash, preserve distinct crops and high-resolution originals.
4. Verify classification and captions for older 103 records plus all new additions; separate business storefront/equipment from customer projects.
5. Audit browser-rendered desktop and mobile design, broken paths, accessibility, empty cards and ordering.
6. Show user finished development review before any production publication.

## Commit discipline
- Separate documentation-only changes from web output changes.
- Record commit SHA, changed paths, image counts, audit evidence, open issues and rollback ref after each substantive batch.
- Do not treat a successful GitHub commit as proof the pages render correctly.

## 2026-11-14 — HQ18 continuity lock implemented
- Verified HQ18 source registry has 172 unique photo IDs, with 192 page-card appearances across Home 17 / Work 68 / Production 92 / Profile 15.
- Inspected actual `portfolio-dev/audit/HQ18_IMAGE_IDENTITY_AND_MISSING_UPLOAD_RECONCILIATION_2026-11-14.md` and the 53-row `HQ18_VISUALLY_IDENTIFIED_PHOTO_CROSSWALK_2026-11-14.csv`. These files already existed; do NOT repeat or recreate their completed work.
- Added `portfolio-dev/tests/hq18-no-regression-baseline.json` as a precise snapshot of gallery IDs, image filenames, captions and per-page appearances from HQ18.
- Added `portfolio-dev/tests/no-regression.cjs` to fail on removal of protected records/placements, unreviewed caption or source changes, missing source files, unknown gallery IDs, lost noindex or RRR identity.
- Wired the checker into the existing `.github/workflows/portfolio-development-browser-qa.yml` development-only QA workflow before Playwright. The workflow does not deploy.
- Verified in GitHub's actual recursive tree that all 172 baseline source image paths exist and source tree listing was not truncated.
- **Run status:** automation is committed, but a successful GitHub Actions execution has NOT been independently confirmed. Do not claim it passes in Actions until a successful run is obtained.
- **Editing rule:** changes to protected captions or placements may be intentional improvements; make them deliberately, review them, and update the baseline in the same approved production change. Never bypass the guard silently. `main` and publication remain untouched.
- Older `portfolio-dev/PROGRESS.md` begins with November 12 material and is not a current-status authority; HQ18 and newer source/ledger evidence win.

## 2026-11-14 — Browser QA correction after real Actions failure
- GitHub Actions run 43681983747 confirmed new no-regression checker PASSED. The full browser smoke job failed on 6 Production viewport checks because the older HQ9 test expected exactly 6 shop-evidence figures, whereas HQ18 source correctly has 12. 18 other standard page/viewport checks and 4 simulated zoom checks passed.
- Corrected `portfolio-dev/tests/browser-smoke.cjs` to require at least 12 equipment photographs and validate the actual number rendered, preserving the extra six.
- The older test also loaded 172 image records from a combination of public `main` and an earlier development branch, causing 102 false failures. Corrected asset-decode checks to use the exact local GitHub Actions checkout with encoded file paths and bounded groups of 8.
- **Pending evidence:** The corrected run for commit `0a1a61671f73a4ea55ac84507e60ed9f0c346c12` was in progress when this line was recorded. Do not claim an all-green browser test until its result has been inspected.
- No HTML/CSS/photo changes and no release/publication were made in these QA repairs.

## 2026-11-14 — Final QA milestone (verified from GitHub Actions)
- Run 43682375170: HQ18 no-regression guard PASS; 28/28 Chromium viewport checks PASS (four pages, six viewport sizes, four zoom simulations); all 172/172 registered original photos decoded from exact branch checkout.
- Accessibility axe audit identified one repeated issue type: tiny `.bulk-exhibit-caption span:last-child` text, #867151 on #f8f4e9 (4.25:1, under 4.5:1). Home page had 0 violation types; the other three pages each had contrast issue at both desktop/mobile widths.
- Run 43682592909 printed individual affected element selectors, confirming the same caption rule, not a wholesale site palette problem.
- Updated ONLY `portfolio-dev/composed-exhibition.css`: label color #867151 -> #745f40. Calculated contrast against #f8f4e9 is ~5.53:1. Do not infer the full automated audit passes until the new run completes.
- No gallery/caption/photo source changes, no publishing or `main` branch changes.

## 2026-11-14 — FULL DEVELOPMENT QA GREEN (verified)
- **GitHub Actions run 43682788817 completed SUCCESS** for site commit `f126390e2a926a184d7b714b4d4767a8da88cfc1`.
- HQ18 no-regression baseline passed: 172 gallery registry records and 192 page-card appearances protected.
- Browser smoke: **28/28** viewport/page checks passed, including desktop, laptop, tablet, large phone, mobile, small phone, and 200%-zoom simulations.
- Browser original-image decoding: **172/172** successfully loaded from current development checkout.
- Axe accessibility: **0 automated WCAG A/AA violation types on 8 desktop/mobile page scans** (four pages x two sizes).
- Successful Actions workflow produced review screenshots and QA artifacts. These automated successes **do not constitute human artistic acceptance**.
- **Next stage: inspect actual rendered visual QA artifacts/screenshots and present final interactive development candidate for explicit owner approval.** Do not revisit HQ18 content integration without evidence; do not publish or modify `main` without permission.

## 2026-11-14 — HQ continuation: owner-identified My Story visual refinement
- Returned to actual latest development branch HEAD before editing; preserved full HQ18 photograph registry and prior complete QA results.
- Responded to owner's screenshot of My Story `#technical-background`: four heavy résumé-like green cards had inconsistent hierarchy (company names vs dates vs generic "Teaching").
- In `portfolio-dev/profile.html`, rewrote only the four career-index entries for consistent employer-readable labels, business names, dates and descriptions; no new biographical claims.
- In `portfolio-dev/editorial-materials.css`, changed only career-snapshot styling to one restrained parchment editorial index with four separated entries, darker green typographic hierarchy and warm-gold labels. Entire rest of gallery, originals, approved monogram, signatures and navigation untouched.
- Source edits: `badff40fb4663c427826a6a78cc9e6f3dc7ebd92` and `35a98caa6eeb2feb965b1ad08ccb015cecd8bfa5`.
- GitHub Actions browser QA run `43692174974` launched; **not yet confirmed passing when this note was written**. Do not declare visual acceptance; owner should review the real development preview at My Story section after passing QA.
- **Never redo HQ18's caption and photo integration as a prerequisite for this finishing work.** No production publication authorized.

## 2026-11-14 — Current cross-page rendered-finishing review
- Verified successful GitHub Actions run `43692174974` on edited My Story career-index design.
- Downloaded actual QA screenshots and visually inspected full desktop pages for Home, Selected Work, Production and My Story, plus mobile My Story.
- Visual review found an inherited CSS specificity conflict: `.career-snapshot-index strong` still used old pale gold `#f5d59d!important` over new parchment, resulting in low-contrast titles. Fixed on `portfolio-dev/editorial-materials.css` commit `1327f21ff5dc1822922ad9072f479ffeaa0c74e0` with scoped dark-forest text and dark supporting copy. **GitHub Actions run 43692469265 PASSED**.
- In the successful before-fix full-page Production screenshot, some lower-page photo frames looked visually blank even though the separate photo-path/decoding test was green. Suspect lazy-image rendering or remote loading, not proven absent source files. Added focused late-gallery browser checks on photo IDs 158,159,172,106,107, at desktop and mobile, with new evidence screenshots, commit `9ee95d0ceea9d021cd6e5e78c74df45fbf45cf9c`.
- **Pending verification:** late-gallery rendered-image test run `43692738427`; do not claim this potential defect repaired before investigating its results. DO NOT delete gallery records to eliminate blanks.
- Editorial observation: two nearby My Story headings both start with "A lifetime"; consider purposeful copy polish later, but do not alter approved exhibition title without reviewing whole page context.
- No changes to image registry, gallery placements, original photos, monogram or public `main`; no publication.

## 2026-11-15 — QA confirmation after gallery image diagnostics
- GitHub Actions run `43692738427` at commit `9ee95d0ceea9d021cd6e5e78c74df45fbf45cf9c` completed SUCCESS.
- No-regression check protected 172 image records and 192 appearances.
- 28/28 browser checks passed, 172/172 registry sources decoded, 0 automated WCAG violation types across 8 desktop/mobile scans.
- Specific late Production gallery image IDs 158,159,172,106,107 successfully loaded/rendered when scrolled into view on both desktop and mobile. Previous blanks in one full-page screenshot appear to be lazy-load screenshot timing rather than missing source files; still review live preview before owner signoff.
- Current My Story parchment-index title contrast fix passed and remains in branch. No changes to public site; owner has not yet approved final visual composition.
- Current near-term objective: review refreshed My Story page in interactive preview, continue only documented high-impact editorial/artistic corrections.

## 2026-11-15 — Final story hierarchy and copy refinement
- Started from actual latest HEAD `e32fffba636bbe7fe3acb8113103a46901314e8b`, after all completed HQ18 and visual work. Read current My Story source and live scope; no older branch reset.
- The My Story opening, nearby career summary and life-story intro repeated the concepts "Decades of making things visible", "A lifetime of them" and "A lifetime of making things visible." Preserved the established cover's "Decades of making things visible" and summary's "Not one trade. A lifetime of them." Changed only the life-story introduction heading to "From the first sketch / to the finished work" to give that chapter a distinct purpose.
- Corrected the career-summary paragraph's repeated "artist, illustrator" and unsupported implication that its only button also jumps directly to the detailed professional record. Replacement succinctly connects documented disciplines and correctly invites the illustrated chapters.
- Exact content commit: `5b38c8729370de4dd951fecb463228f1567ec57d`. Files changed: `portfolio-dev/profile.html` ONLY. No gallery registry, photos, CSS, signature assets, main branch or publication changes.
- Browser QA run `43693444299` initiated; check conclusion before declaring this latest copy revision fully tested. Full previous release-candidate workflow `43692738427` PASS.
- Remaining: visually assess the latest interactive development page and owner signoff; no automatic publication.

## 2026-11-15 — Confirmation for copy-polish commit
- GitHub Actions `43693444299` completed SUCCESS for My Story editorial revision `5b38c8729370de4dd951fecb463228f1567ec57d`, including the existing no-regression, browser and accessibility workflow steps.
- Continued source-level heading inventory across all four portfolio pages; future editorial pass should inspect Production gallery section naming in rendered context before changing text. The current scan does **not** justify deleting/reflowing documented sections.
- Latest development source remains unpublished; owner approval for artistic finish and any production merge is outstanding.

## 2026-11-15 — Owner-confirmed Lucky Signs / Diamond Electric identification
- Owner visually identified `Rob-Photo-Uploads/New folder/IMG_4649.jpg` as a photograph of the **original Lucky Signs shop in downtown Puyallup**, showing **large cutout signs personally produced for Diamond Electric**. It is not primarily motorsports imagery.
- Removed only this archival photograph from the My Story motorsports photo sequence, relocated the same linked original (no file modification) to the Lucky Signs / sign business history photo sequence under `#story-business`.
- Updated accessible label, alt description, and visible caption to credit the original Lucky Signs location and Diamond Electric cutout-sign work. Removed speculative "racing-era scene; exact work attribution unverified" wording for this photo.
- Git commit `11766fc0efb116d6613c7095b086786f30c34a55` changed `portfolio-dev/profile.html` only. 172 registry records and 192 page-card appearances unaffected; original source file preserved, and remaining motorsport photographs retained.
- Automated QA run `43695173896` started; confirm its final result separately before reporting full verification. No public main change or publishing authorized.
- This correction is based on direct owner identification and supersedes earlier generic archival classification. Do not revert it via older HQ18 photo inventories.

## 2026-11-15 — Owner attribution regression verification
- GitHub Actions run `43695173896` for the original My Story photo relocation completed SUCCESS.
- GitHub Actions run `43695250326` on commit `69993ed994881fffbfa70e6de82a3f384de2248d` completed SUCCESS, including new source guard explicitly enforcing owner-confirmed original Lucky Signs / Diamond Electric classification in business chapter rather than motorsports.
- Latest corrected image is a My Story chapter photo rather than a `data-image` registry card; all 172 gallery records and 192 registered placements remain protected. No production deployment.

## 2026-11-15 — Pre-résumé employer-readiness pass
- Current development branch maintained; no reset or publication.
- Strengthened `#story-shops`: renamed chapter label from generic "THE FOREMAN" to "SHOP LEADERSHIP" while explicitly preserving the Burke Gibson foreman role and documented responsibilities; highlighted supervision, color/print quality, six-axis CNC setup/training, and shop management. Clarified supplemental commercial photographs are illustrative, not verified Burke Gibson documentation. Corrected generic decorative "06" to chapter "03". Commit `1a3c393edcb50612eb6ca5f2d9f6db0646eb389b`.
- Strengthened `#story-history` as an employer-readable demonstration of research, archival-photo selection, fact checking, historical narrative writing, and public social engagement, without inserting invented view counts or unverified attribution. Commit `7906789075188023d95394a0bdad4e3e817e55a7`.
- History evidence still desirable: 2–3 excellent real historical posts (image plus URL/context), one dated Facebook insights summary screenshot showing total lifetime views/reach and timeframe, optional follower count screenshot. Crop out personal information and private messages. Never equate views with unique visitors or add unverified statistics.
- Teaching and Burke Gibson sections do NOT require invented employer-specific photos; well-worded career evidence plus labeled contextual imagery is acceptable for résumé outreach. Genuine historical workplace images can be added later if available.
- The original 172 registry photographs and 192 placements remain unchanged. These edits are developer-branch only. Review live presentation and obtain explicit approval before public release.

### QA result — pre-résumé pass
- GitHub Actions `43699092528` for Shop Leadership commit `1a3c393edcb50612eb6ca5f2d9f6db0646eb389b`: SUCCESS.
- GitHub Actions `43699152439` for history-storytelling copy commit `7906789075188023d95394a0bdad4e3e817e55a7`: SUCCESS.
- The existing gallery inventory, development-only noindex, original art direction and QA checks remain in force. Future social-metric and history-image additions require actual supporting files and attribution verification; public release still requires owner approval.

## 2026-11-15 — Owner-supplied history image collection and social proof (pre-release)
- Owner provided ten historical/personal pictures: two Tacoma Narrows Bridge views; Tacoma Union Station; unverified ornate historic building; Puyallup Opera House streetscape; Never Never Land attraction; entertainer/child photo with unconfirmed identity; Tacoma Armory and Court House; historic Route 7 / Mount Rainier road sign; and a personal childhood photo that owner identifies as Robert with J.P. Patches.
- Curated WebP copies and documentation into a local upload-ready `Local_History_Portfolio_Ready.zip` with 10 images, 1 verified Facebook Insights screenshot, a source/placement manifest, and an offline visual preview. These binary photos are **not yet uploaded into GitHub** because the available GitHub file connector cannot ingest local binary files directly. Do not claim the live development page displays the photographs.
- Added `portfolio-dev/audit/STAGED_LOCAL_HISTORY_IMAGE_GALLERY_2026-11-15.html` with seven selected archival/personal photographs; **this file is staged markup, not linked or deployed**. Intended image destination `portfolio-dev/history-assets/`; insert gallery in `#story-history` only after actual binary uploads exist and render.
- Public screenshot `image(20261115-093036).png` verifies 46,560,500 Facebook views during the previous 606 days. Added an exact-period audience display to `#story-history` in commit `d674e0136df67e6a6dbbb88debb154d2d1ffa46a`, styling commit `4084bdf8b611026e1be62f7bfb496b70c4eb85b2`. Clarified at commit `7ebf033dc271ea9763e41494ae2f57b8cbcfa619` that these are views across Facebook public content, not necessarily history posts alone, not unique users and not an asserted lifetime total.
- Prioritize Puyallup streetscape, Union Station, Narrows Bridge and personal J.P. Patches image; hold two unidentified subjects for additional confirmation. Archival photos are presented as research/curation rather than claimed original photography. Historic color process and image rights/source unverified.
- Keep public `main` unchanged; explicit user approval required before public sharing or job outreach.
