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
