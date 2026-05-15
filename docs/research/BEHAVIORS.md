# Behaviors Bible — oertzengroup.com

## Global

- **Smooth-scroll library:** none detected. Native browser scroll.
- **Scroll-snap:** none.
- **Animation framework:** Elementor's `e-animation-*` classes (CSS `animation` keyframes for `fadeIn`, `fadeInUp`, `slideInRight`, `rotate`).
- **Hero slideshow:** Swiper (`.swiper-fade`) inside the hero only.

## Hero (`.elementor-element-bc28fb8`)

### Background slideshow (Ken Burns)
- 5 images cycling, `slide_duration: 5000ms`, `transition_duration: 1000ms`, transition: fade.
- Each slide also gets the `.elementor-ken-burns--in` class → CSS `transform: scale(1) → scale(1.3)` over 20s+, slow continuous zoom-in while visible.
- Loop is on; first slide auto-plays.
- Implementation: render a stack of 5 absolutely-positioned `<div>`s with `background-image`, fade between them via CSS opacity transition every 5s, apply a slow `scale` keyframe animation while the slide is active.

### Animated headline
- Style is "highlight" with `marker: underline`. Only one dynamic word — `search` — so it is NOT cycling.
- An SVG `<path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7">` is positioned absolutely under the word "search" and animated using stroke-dashoffset → 0 over `1200ms` once entering the viewport.
- SVG sits at `position:absolute, top:39.99px, left:114.27px, width:248.5px, height:99.99px` relative to the headline (positions vary with word width).
- Stroke color: `rgb(255,255,255)`, fill: none, stroke-dasharray: 1500.
- Implementation: render the SVG inline at the bottom of the highlighted word; on mount run `dashoffset 1500 → 0` over 1200ms `ease-out`.

### Section reveal
- Hero section has classes `animated fadeIn` with `_animation_delay: 300ms` — fades in on load.
- Headline has `_animation: fadeInUp` `_animation_delay: 400ms`.

## Questions section (`.elementor-element-68fbb84f`)

- Has the `OERTZENGroup_logoReverse-ai.png` background overlay positioned at `-25px 444px`, size `537px`, no-repeat — appears as a watermark logo at lower-left.
- Section animation: subtle fadeIn on enter.
- Buttons have `elementor-animation-grow` → CSS `transform: scale(1.1)` on hover with transition.
- No tabs or carousels here.

## HowWeHelp section (`.elementor-element-7d331bf`)

- Left column has motion-effects parallax: `background_motion_fx_translateX_effect: yes` with speed 4 — the bg image translates horizontally as the section scrolls into view.
- The image-widget logo (`logo-tagline.png.webp`) animates `fadeIn`.
- The h3 "How we can help" animates `fadeInUp`.
- The lime divider animates `fadeIn` with delay 500ms.
- Button has `elementor-animation-grow` (scale on hover).

## CTA section (`.elementor-element-c95e1b0`)

- Static. No animations beyond text color and a subtle 0.3s `transition: background, border, border-radius, box-shadow` baseline.

## Blog section (`.elementor-element-14742ba7`)

- Background image `AdobeStock_127787474-resize.jpg` with white `rgba(255,255,255,0.7)` overlay.
- **Parallax fixed:** at `min-width: 1200px`, `background-attachment: fixed` — the bg image stays put while content scrolls (classic parallax effect). Below 1200px it scrolls normally.
- Cards: `elementor-card-shadow-yes`, hover effect `elementor-posts__hover-gradient` (a green-tinted gradient overlay appears on hover; the card title stays visible above).

### Card hover state
- Default: green bg `rgb(144,204,87)`, white title, white date, navy "Read More »".
- Hover: a darker green gradient overlay slides up from the bottom (CSS `:hover` on `.elementor-post__card`).

## Footer (`.elementor-element-20c9511`)

- Static.
- Social icons: hover state likely changes color (default `rgb(105,114,125)` faded gray, hover → white or accent — confirm during build by hovering).
- The site icon image at top of footer column 4 has `elementor-animation-rotate` → on hover, rotates 360°.

## Hover states summary

| Element | Default | Hover | Transition |
|---|---|---|---|
| Nav items | white (active) / navy | navy ↔ lime green | none / instant (Elementor sets `transition: 0.3s` baseline) |
| Buttons (`.elementor-button`) | base bg | `elementor-animation-grow` → scale(1.1) | 0.3s ease |
| Posts hover | green card | gradient darker green sliding up | 0.3s |
| Site icon (footer) | static | rotate 360° | 1s |

## Responsive breakpoints

Elementor defaults observed:
- ≥1200px: desktop layout, parallax fixed enabled
- 768–1199px: tablet (columns shrink, padding reduces)
- ≤767px: mobile — top header hidden, off-canvas hamburger menu, all 2-col sections stack, hero headline 54px

## Off-canvas mobile menu

- Trigger: `.ee-offcanvas__trigger.ee-hamburger` (a 3-line hamburger icon)
- Container `.ee-offcanvas` toggles `.ee-offcanvas--closed` ↔ `.ee-offcanvas--open` (slide-in from right by default)
- Nav menu inside is a flex column with the same items.
