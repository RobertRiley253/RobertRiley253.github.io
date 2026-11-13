# Comprehensive portfolio usability and production checklist
Updated: November 12, 2026 (Pacific)
Scope: `portfolio-dev/` on branch `portfolio-development-2026-11-12`
Status: Implemented improvements and static verification. Browser/device testing and image appraisal remain outstanding.

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
- [ ] Verify lightbox focus trapping, keyboard and screen-reader behavior in a real browser.
- [ ] Complete full-resolution photography assessment, authenticity checks and new-archive integration.

## Design, messaging and quality
- [x] Retain coherent industrial-editorial visual identity.
- [x] Larger and higher-contrast action controls; more explicit browsing instructions.
- [x] Responsive CSS for navigation and action cards.
- [x] Natural photographic aspect ratios preserved.
- [ ] Test mobile/desktop renders, 200% zoom, text wrapping, and color contrast.
- [ ] Confirm individual project roles and attribution before public release.
- [ ] Validate font and image loading performance on real devices.

## Source control and release safety
- [x] Static HTML audit: no broken local or cross-page anchor targets.
- [x] Static audit: all photo elements carry alternative text.
- [x] Four pages use shared local CSS and JS.
- [x] Previous candidate preserved as `review-v1.html`.
- [x] Main branch and public website not changed.
- [x] No automatic public release. Development HTML has `noindex,nofollow`.
- [ ] Integrate additional user-selected original archive photos.
- [ ] Present entire final version for explicit user approval before any main-branch merge.
