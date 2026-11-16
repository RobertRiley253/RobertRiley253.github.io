# Bulk image-triage and placement outcome — November 15, 2026 (Pacific)

## Purpose
This is a continuation of the user's explicit instruction to integrate as many *distinct, worthwhile, correctly attributed* uploaded photographs as possible, in the right chapters, while preserving the already approved four-page portfolio design. No public publication was authorized or performed.

## How the remaining-image triage was conducted
- Started with the 456-row historical `portfolio-dev/audit/IMAGE_ASSET_DISPOSITION_CROSSWALK_2026-11-15.csv` (prepared before three oriented display copies).
- Of 68 `SUPPORT_OR_UNREFERENCED` entries, 2 were unused signature/logo variants (protected, not generic photographs). Generated contact sheets for the other **66 image candidates** from real GitHub bytes using workflow `portfolio-unused-photo-triage.yml`.
- Compared 66 candidates against 272 images in the previously tested release ZIP with local DCT perceptual hashes. **46 files had very close perceptual matches (distance 0–4)** to images already included under other names, meaning extra standalone placements would usually introduce unnecessary duplication. A near match is a similarity signal, **not proof the bytes/files are identical**, and variations may carry project value.
- Reviewed the 20 other candidates visually and compared similar scenes against existing categories. **14 distinct, useful image files were added**. Six were held as additional same-project views or unattributed/ambiguous archival images.
- Also built contact sheets for 25 assets classified `HELD_ARTWORK_PROVENANCE`, `HELD_ALTERNATE_SOFTWARE_EVIDENCE` and `HELD_UNVERIFIED_MOCKUP`. Some are aesthetically interesting generative-style decals and graphics, but the provenance/role and attribution are not established. They were **not automatically portrayed as original hand-made commercial work** or sent to the public site.
- Preserved every source image, old path, and archived option. Nothing deleted and none of the approved visual identity redesigned.

## 14 images added on the protected development branch

| Page / section | New image source | Subject and honest category |
|---|---|---|
| Selected Work — `legacy-commercial-proof-archive` | `photo-02.jpg` | Bucky's Complete Auto Repair — roadside sign artwork |
| Selected Work — same | `photo-03.jpg` | Bucky's alternate lettering/layout proof sheet |
| Selected Work — same | `photo-04.jpg` | Spanaway Garage Doors commercial banner layout |
| Selected Work — same | `photo-14.jpg` | Northwest Concrete Waterproofing — brand/emblem artwork |
| Selected Work — same | `photo-15.jpg` | Heroes on the Water — illustrated emblem |
| Selected Work — same | `photo-16.jpg` | Fruitland Mutual Water — concept strip for fleet vehicle graphics |
| Selected Work — same | `archive-wrap-montage.jpg` | Manners Unleashed multi-angle completed SUV graphics |
| Selected Work — same | `archive-nwcw-rear.jpg` | Northwest Concrete Waterproofing truck rear lettering |
| Selected Work — `historic-sticker-display-archive` | `photo-33.jpg` | Broad printed sticker wall/storefront display |
| Selected Work — same | `photo-34.jpg` | Sticker samples laid out on tabletop |
| Selected Work — same | `photo-36.jpg` | Open binder of sign-shop graphics and material samples |
| Production — `archive-finishing-shop-equipment` | `photo-22.jpg` | Large-format printed graphics on finishing table |
| Production — same | `photo-31.jpg` | Enclosed printer/fabrication equipment detail |
| My Story — original business-history chapter `story-business` | `photo-39.jpg` | That Sticker Store apparel and retail display |

**Source commits:** Selected Work `d319259e842a72b2f05d5f42e145856cc57030a7`; Production `11158ed177133dfd7bf5928f000fa06635329c77`; My Story `0b625a4a7c13aba04a55934918a35161d1a937c3`. Later QA screenshot change `b33bbbea868686a99a4b067b23ccc96e0f1bf006`. Later review-only triage workflow `0c1466d55d2f3ae6dd187cb2648cdbbcdd7ab3c3`. Verify newer HEAD before edits.

## Six additional candidates held after review
- `photo-10.jpg` and `work-0.jpg`: same Wildwood Tree Care truck already represented more prominently in Selected Work; no new project story.
- `work-3.jpg`: older variant of the Bucky's sign artwork included from stronger `photo-02.jpg`.
- `photo-41.jpg`: physical photograph of old printed photographic sign, specific subject/ownership unclear.
- `photo-42.jpg`: Porter's image/sign proof; ownership and commercial-context attribution unverified.
- `photo-43.jpg`: McDonald's promotional sign image with uncertain production/rights relationship.
The 46 closely matching candidates remain retained as originals/aliases. Revisit only if a particularly useful alternate detail is needed.

## Actual post-integration browser and release QA
**Exact source commit:** `b33bbbea868686a99a4b067b23ccc96e0f1bf006`; the most recent later-only commits added review workflows, not website content.

- Development workflow run **`43819606239`: SUCCESS.**
  - Existing 172/172 registered photographic sources decoded; 28/28 responsive browser smoke tests.
  - 36/36 Chromium, Firefox, WebKit desktop/phone cases passed.
  - Deep active gallery checks **12/12 combinations** passed; per browser, 17 Home, **95 Selected Work (was 84)**, **103 Production (was 101)**, 46 My Story in the selector set. This excludes some separately-styled My Story biography pictures: the new `photo-39.jpg` visibly rendered in the dedicated story-business screenshot and was packaged successfully.
  - Touch-enabled iPhone/Android emulation: 8/8 pass.
  - Targeted screenshots of `legacy-commercial-proof-archive`, `historic-sticker-display-archive`, `archive-finishing-shop-equipment`, `story-business` visually inspected for phone-width composition and image presence. No empty or broken cards observed; original style retained.
- Unpublished release workflow **`43819606291`: SUCCESS**. 308 files, **286 packaged images** (previously 294/272), `missing: []`. Its browser, full-gallery and mobile-touch checks also passed.
- No public deployment. `main` last independently verified at `a1aa4178049c3a466146a9f1bc6f5bdf1ce6b4c9`.
- Artwork provenance contact sheets generated by workflow `43819712759`, review-only (no user-visible release additions).

## What remains
1. Keep working from `portfolio-editorial-material-review-2026-11-13`; verify HEAD and don't replace the approved design.
2. Any future optional distinctive photo additions must have verified identity/provenance and a clear placement. Do **not** claim that all 459 repo image paths are 459 distinct portfolio photos: many are repeated previews, alternative filenames, logos, or held/private evidence.
3. Larger outstanding photographic work is now primarily proper curation of other uploads not registered/displayed as useful, plus checking exact captions and image balance across whole pages—not blindly pouring in all 66 aliases.
4. Present four complete pages and reviewed bulk sections for owner visual sign-off. After explicit approval, prepare controlled root-level publication preserving `main` assets, verify live functionality; then get explicit approval before employer correspondence.
5. Sync the SAFEKEEP successor handoff with this report and keep D10 Draft 17 unsent.

**Source-of-truth note:** This new report adds to (does not overwrite or falsify) the historical 456-row baseline. The earlier disposition labels are preserved to explain how these candidates were discovered.
