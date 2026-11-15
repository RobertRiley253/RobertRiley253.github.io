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
