# Page Topology — oertzengroup.com (Home)

Source: `https://oertzengroup.com/` (WordPress + Elementor + Hello Elementor theme).
Page total height ≈ 4338px desktop @1440, ≈ 6087px mobile @390.

## Top → Bottom Sections

| # | Name | Tag/ID | Top (px) | Height (px) | Bg color | Notes |
|---|------|--------|---------:|------------:|----------|-------|
| 1 | TopHeader (Header bar) | header / `.elementor-element-9704e70` (top section, lime green) | 0 | 70 | rgb(144,204,87) | Logo left, nav right; **hidden on mobile** (`display:none` ≤767), replaced by off-canvas. **Static** position (NOT sticky). |
| 2 | Hero | `.elementor-element-bc28fb8` (outer) + `.elementor-element-6dbdd70` (inner gradient) | 70 | 900 (700 mobile) | bg slideshow + gradient overlay | 5-image Ken Burns slideshow under blue linear-gradient `rgba(0,73,106,0.88) → rgb(0,34,53)`. Two-pane layout: gradient covers left ~840px, slideshow visible right ~600px. |
| 3 | Questions | `.elementor-element-68fbb84f` | 970 | 763 | transparent | Two-column: Left = title + Learn-more button; right = list of 6 question h3's. Section background-overlay = OERTZENGroup_logoReverse-ai.png at `-25px 444px / 537px`, no-repeat. |
| 4 | HowWeHelp | `.elementor-element-7d331bf` | 1733 | 910 | transparent | Two-column full-width 50/50: Left = bg image AdobeStock_188749316 with parallax translateX. Right = tagline logo image, "How we can help" h3, lime divider, 5 check-list items, navy CTA button. |
| 5 | CTA | `.elementor-element-c95e1b0` | 2643 | 516 | rgb(0,73,106) navy | Two-column 33/66: Left = "Your Search Stops Here" h3 (raleway 56px, weight 200). Right = 2 white paragraphs. Padding 70/50/50. |
| 6 | Blog | `.elementor-element-14742ba7` | 3159 | 781 | bg image AdobeStock_127787474 + white 0.7 overlay (parallax fixed ≥1200px) | Eyebrow "OertzenGroup Resources" (raleway 12px tracking 12px navy). H3 "Latest from OERTZENGroup" 54px navy. 3-col grid (24px col gap, 35px row gap) of green cards. |
| 7 | Footer | `footer.elementor-location-footer` / `.elementor-element-20c9511` | 3940 | 398 | rgb(0,73,106) navy | 4 columns: logo+tagline+copyright / Quick Access / Contact Us / Get Connected (social icons). Padding 80/0. |

## Layout / Z-index
- Single linear column scroll. No sticky/floating overlays. No smooth-scroll library (no `.lenis` / Locomotive class detected).
- Hero `.elementor-element-bc28fb8` has `position: relative` + `padding: 0 600px 0 0` (desktop) — pushes inner content into left ~840px, exposing slideshow on right.
- Hero `.elementor-element-6dbdd70` carries the linear-gradient bg; sits inside the section's left-aligned container (max-width 600px).
- Section 4 (HowWeHelp): `elementor-section-full_width` → spans 100vw with 50/50 inner columns; left col uses inner motion-effects-layer with bg-image (parallax translateX speed 4).

## Mobile behavior summary (≤767)
- TopHeader: `display:none` → header is replaced by off-canvas `.ee-offcanvas` triggered by `.ee-hamburger`.
- Hero: padding `50px 20px`, headline shrinks to 54px / 54 LH, height ~700px.
- All multi-column sections stack 1-column.
- Blog grid: 1 column.
- Footer columns stack: tagline logo column hidden; rest stack vertically at ~330px.

## Assembly order
1. `<TopHeader />` (sticky? no — static)
2. `<HeroSection />` slideshow + animated headline
3. `<QuestionsSection />` 2-col with logo overlay
4. `<HowWeHelpSection />` 2-col full-bleed
5. `<CtaSection />` blue band 2-col
6. `<BlogSection />` parallax bg + cards
7. `<FooterSection />`
