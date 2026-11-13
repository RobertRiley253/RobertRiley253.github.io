# Comprehensive portfolio usability and production checklist
Updated: November 12, 2026 (Pacific)
Scope: `portfolio-dev/` on branch `portfolio-development-2026-11-12`
Status: Usability implementation and static checks performed; genuine desktop/mobile browser testing and final photographic appraisal still outstanding.

## Navigation and discoverability
- [x] Main navigation labels enlarged, with 48px minimum targets and visible current-page highlighting.
- [x] Mobile navigation laid out in two columns instead of tiny inline links.
- [x] Homepage now includes three large destination cards.
- [x] Selected-work page includes prominent category-jump controls.
- [x] Production page includes direct section links.
- [x] Every page includes an obvious next-step call to action.
- [x] Back-to-top button added, with reduced-motion support.
- [x] Keyboard skip-to-content preserved.
- [ ] Visually inspect sticky header and touch interactions on phones/tablets.

## Photographs and interaction
- [x] All 63 original repository images referenced; originals untouched.
- [x] "View photo" text replaces ambiguous tiny arrow-only prompts.
- [x] Larger photo captions and clearer hover/focus styles.
- [x] Archive expansion relabeled "Show more photographs", with item count.
- [x] Full-size viewer includes previous/next, keyboard arrows, close and original-image link.
- [x] Implement modal focus cycling, focus restoration, keyboard arrows, touch swipes, and missing-image feedback.\n- [ ] Verify these behaviors in actual browsers, including screen readers and touch devices.
- [ ] Complete full-resolution photography assessment, authenticity checks and new-archive integration.

## Design, messaging and quality
- [x] Retain coherent industrial-editorial visual identity.
- [x] Larger and higher-contrast action controls; more explicit browsing instructions.
- [x] Responsive CSS for navigation and action cards.
- [x] Natural photographic aspect ratios preserved.
- [x] Add additional narrow-phone text wrapping/overflow protection and failed-image status styling.\n- [ ] Test mobile/desktop renders, 200% zoom, text wrapping, and color contrast.
- [ ] Confirm individual project roles and attribution before public release.
- [ ] Validate font and image loading performance on real devices.

## First-time visitor and editorial refinement
- [x] Homepage opening now features three different verified source images across commercial signage, vehicle graphics and print.
- [x] Primary call-to-action prominently offers the full portfolio, with a secondary production destination.
- [x] Selected-work and production page instructions clarify browsing and enlargement.
- [x] Experience page distinguishes completed applications, artwork/proofs and production records without unsupported individual-project role claims.
- [x] Responsive three-image hero treatment implemented for narrow phone widths.
- [ ] Visually compare hero compositions and reading order on actual desktop and mobile browsers.
- [ ] Verify exact personal contributions to selected projects before adding project-specific role labels.

## Cohesive visitor journey — November 12
- [x] Clear four-stage map with active location on every page.
- [x] Two large, intuitive onward choices at the end of every page; no navigational dead ends.
- [x] Restrained gold hover-glint interaction added consistently; no perpetual blinking, and reduced-motion users are respected.
- [x] Static test for stage links, anchors, 63 photographs and alt attributes passed.
- [ ] Visually verify controls, contrast, discoverability and page-end invitations on phones and desktop browsers.
- [ ] Validate animation behavior, keyboard focus, and reduced-motion setting in actual browsers.

## Continuous exploration and resilience
- [x] Five selected-work chapter transitions provide an explicit onward action and return to category chooser.
- [x] Thumbnail loading errors now show a readable fallback while keeping the action available.
- [x] Archive expansion count text uses correct singular/plural wording.
- [x] Post-change static audit passes: cross-page/internal links, duplicate IDs, alt descriptions, 63-image coverage.
- [ ] Verify thumbnail-failure UI, chapter controls, keyboard and touchscreen interactions in a live rendered browser.

## Image performance and editorial quality
- [x] Recover and archive actual pixel dimensions for all 63 original JPEGs.
- [x] Add width and height metadata to all 82 displayed photographic image instances.
- [x] Prioritize lead gallery imagery while retaining lazy loading for deeper galleries.
- [x] Lightbox navigation skips closed archive content until expanded.
- [x] Static verification confirms 63 distinct photo IDs, no broken local anchors, and correct dimensions on all displayed photos.
- [ ] Evaluate low-resolution photos individually before enlarging them in signature spreads.
- [ ] Benchmark actual network performance and layout shifting on desktop/mobile browsers.
- [ ] Test opening and closing the photo viewer with archive sections both collapsed and expanded.

## Source control and release safety
- [x] Static HTML audit: no broken local or cross-page anchor targets.
- [x] Static audit: all photo elements carry alternative text.
- [x] Four pages use shared local CSS and JS.
- [x] Previous candidate preserved as `review-v1.html`.
- [x] Main branch and public website not changed.
- [x] No automatic public release. Development HTML has `noindex,nofollow`.
- [ ] Integrate additional user-selected original archive photos.
- [ ] Present entire final version for explicit user approval before any main-branch merge.

## Verification pass — November 12, 2026 (Pacific)
- [x] Four pages checked for internal fragment links: no missing anchor targets.
- [x] All 63 distinct portfolio photo IDs remain in the four-page site; original JPGs unchanged.
- [x] All displayed HTML images have descriptive alt attributes.
- [x] Full-size viewer now includes explicit failed-photo feedback, Tab focus cycling, focus restoration, and mobile swipe gestures.
- [x] All four pages retain development-only noindex metadata.
- [ ] Run interactive chromium/Safari/mobile tests against actual rendered site. Local browser tools exist but the GitHub project assets cannot be retrieved directly into that browser environment here; **do not treat structural checks as cross-device certification**.
- [ ] Obtain/inspect additional source originals before final selection and publication.
