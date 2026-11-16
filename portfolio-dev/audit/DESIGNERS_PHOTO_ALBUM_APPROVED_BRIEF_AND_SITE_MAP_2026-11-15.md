# APPROVED DESIGN DIRECTION — The Designer's Photo Album (fifth portfolio page)

**Owner decision November 15–16, 2026:** Build a professionally art-directed fifth page, tentatively titled **The Photo Album — A Lifetime in Pictures**, as a beautiful home for as many worthwhile distinct existing photographs and images as possible, INCLUDING photos not placed on the original four pages. This is approved design intent, **not publication approval**. The page has NOT yet been implemented.

## Purpose and scope
- Retain the curated four-page exhibition: Home (`index.html`), Selected Work (`work.html`), Production (`production.html`), My Story (`profile.html`). Add `album.html` as page five. Do not redesign the four established pages.
- The fifth page is a visually compelling **photographic art book**, not an unstructured contact sheet or a wall of uniformly sized files. It encompasses suitably distinct, attributable, public-appropriate images already showcased on the site PLUS meaningful new images from uploaded archives that did not find a home. **Unplaced images must not be discarded or ignored by default.**
- Reuse existing GitHub originals instead of asking for more uploads. Prevent identical and redundant near-duplicate displays, select the strongest resolution, preserve all original source files, correct orientation, write accurate individual captions.
- Exclude the user's specifically disallowed V2 book program, private/sensitive files, irrelevant screenshots and files with unresolved provenance. Historical source images are not automatically Robert's own photography; don't claim uncertain work is a completed client job.

## Locked visual direction
- **Deep emerald/forest green ambient background**, champagne-gold delicate picture frames/borders, ivory/parchment matting, elegant original typography, traditional RRR monogram in site header/footer, existing gold signature. Match the current approved four-page material/exhibition style.
- Large emotionally rich **ambient photographic hero** using a suitable owner-supplied image; no unrequested AI-generated substitutes.
- Photo-book rhythm: large framed photographs alternating with smaller duos, triptychs and compact groups; panoramic spreads where justified; respectful natural ratios, balanced layout, purposeful space, no blurry enlargement or random repeated grids.
- Maintain original photo color, correct portrait rotation, subtle tasteful hover, small confident captions, accessible click-to-enlarge image viewer, mobile and widescreen responsive arrangements. Do not transform or recolor every photograph indiscriminately.
- One **continuous album**. Optional, unobtrusive clickable **type filters**: All Images, Signs & Graphics, Vehicle Work, Illustration, Production, Racing, History & Memories. These are not separate category pages or a mandatory navigation wall. No photos invisible from All.

## Exact site navigation and loopbacks — owner explicitly added
- **Use the same persistent five-link primary header navigation** on album page and update existing pages' navigation to include Photo Album without disrupting layout (Home, Selected Work, Production, My Story, Photo Album).
- Near top of album, include an art-directed **“Explore the Rest of the Portfolio”** quick-navigation band, with a short descriptive line and direct actionable links to all other pages, especially the stories:
  - **Home** — introduction and featured work, `index.html`.
  - **Selected Work** — signs, vehicles, illustration and creative work, `work.html`.
  - **Production & Fabrication** — equipment, manufacturing and hands-on process, `production.html`.
  - **My Story** — full career and personal history, `profile.html#life-story`.
  - **Local History & Communities** — historical stories and Facebook communities, `profile.html#story-history` (or the new verified history-community section anchor when built).
- At the BOTTOM of the album add a second handsome **“Where to next?”** section with the same route set; primary return-to-Home action, plus an easy route into the history stories.
- Add an unobtrusive return-to-album invitation from the other four pages (homepage prominent after featured work; Selected Work and My Story closing/continuation links; Production subtle link). Make it a two-way navigation system, not a dead-end page.
- Use textual cards and accessible semantic anchors, not an actual route/geographic map. Do not add inert decorative links or ambiguous unlabeled icons. All anchors must resolve in build/test and maintain styling across wide desktop and phone.

## Facebook and community connections
- Place a graceful, prominent Facebook-icon invitation in the album for Robert's real personal profile `https://www.facebook.com/rox.riley`, specifically for regional history photographs, stories, memories, and the community. The main richer Facebook community showcase belongs in My Story; album should link to it. Additional public groups must have VERIFIED name-to-URL mappings before attaching names to numerical group links.
- Reference `portfolio-dev/audit/HISTORY_FACEBOOK_COMMUNITIES_DESIGN_AND_LINKS_2026-11-15.md`. Preserve five owner-supplied Facebook group links, distinguish groups Robert founded from groups where he is an admin. One supplied Facebook /photo URL is a photograph link, not a group.
- Suggested living-album closing copy: *“The collection keeps growing. Come back for another photograph, another project and another memory.”* This conveys updates without claiming a fixed schedule.

## Creative team review and success gates
The “team” is a set of structured AI design/editorial perspectives, not independently engaged external people:
1. **Creative/art director:** A beautiful, distinctive album with foregrounded actual photographs, thoughtful visual storytelling and unified green/gold exhibit design.
2. **Photography archivist:** Manifest all potential pictures, compare hashes and visual similarity, orient portraits, preserve native quality, avoid redundant variants, record exclusions and genuinely unplaced public-suitable works.
3. **Signage/manufacturing specialist:** Keep finished projects distinct from proofs, models and machines; visually document artwork, output and actual fabrication.
4. **History/biography editor:** Respect local history, racing, personal memories, correct identity/provenance; no unsupported professional or photographic credit.
5. **Employer/public audience reviewer:** Easy to scan and find strong evidence; no bloated one-photo-per-row feed; maintain employer priority on existing four pages.
6. **UX/accessibility reviewer:** Navigation both directions on desktop/mobile, useful type filtering, keyboard/touch lightbox, loading performance, image sizes, alt text, no clipped headlines or dead links.
7. **Skeptical owner-acceptance reviewer:** Source existence and passing browser tests are not full artistic acceptance. Render actual complete page, inspect, make targeted refinements, get Robert's explicit approval before publication.

## Build and verification plan
1. Verify current HEAD of protected development branch `portfolio-editorial-material-review-2026-11-13`; read `PORTFOLIO_CREATIVE_CONSTITUTION.md`, `portfolio-dev/audit/SAFEKEEP_PORTFOLIO_SUCCESSOR_HQ_2026-11-15.md`, `portfolio-dev/audit/BULK_PHOTO_RECONCILIATION_AND_PLACEMENTS_2026-11-15.md`, `portfolio-dev/audit/IMAGE_ASSET_DISPOSITION_CROSSWALK_2026-11-15.csv`.
2. Identify all displayed and additional suitable distinct images; create a data manifest with source file, album type, precise caption and provenance. A previously recorded 66-candidate audit found 46 near visual matches, 14 images already added to the first four pages and six held for identity/duplicate reasons. Do **not** redo indiscriminately. Consider broader upload folders and supplemental illustrations, but exclude private/unconfirmed records.
3. Create the fifth page using existing palette and identity, responsive CSS, lightweight filter/controller if necessary, viewer behavior, and reusable images, preserving four pages.
4. Add all five-page navigation and album/home/history loopbacks, including top and bottom designed site-guide sections on the album.
5. Run package and browser/gallery test suites, inspect full-page desktop/mobile, verify the new page is included in release bundling and all assets are copied. Existing release builder currently expects four pages—**expand it for a fifth page before release**. Keep unpublished/development noindex policy; do not publish or change `main`.
6. Present the exact designed page and updated existing-page navigation for owner visual approval. Publication is a separate explicit approval step.

**Latest owner directive:** “And of course it would have like loopbacks to the homepage and all the other tabs and stuff. You know, like a map or something of the site. Basically giving quick links to everything, so they can go view the stories and stuff.”

This specification is locked for the active project; the next production action is to **build**, not endlessly re-discuss, the album. Nothing here implies it was already built or published.
