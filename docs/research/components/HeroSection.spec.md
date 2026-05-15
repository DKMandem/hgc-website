# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/desktop-hero.png`
- **Interaction model:** time-driven (auto slideshow) + animated underline marker on mount.

## DOM Structure
Outer `<section>` (position relative, 900px tall desktop). Layer stack:
1. **Slideshow layer** (absolute, full-bleed, z-0): 5 stacked images cross-fading with slow Ken-Burns zoom.
2. **Blue gradient panel** (z-10): covers the LEFT portion only. Desktop: the section has `padding-right: 600px` so the inner gradient panel occupies the left ~840px; the right ~600px shows raw slideshow.
3. **Content** inside gradient panel: animated headline, paragraph, button. Content container max-width `600px`, left-aligned, padding `100px 80px 50px`.

## Computed Styles (exact)

### Section (outer)
- position: relative; height: `900px`; overflow: hidden
- desktop padding: `0 600px 0 0`; ≤1199px padding: `0 15px`

### Gradient panel (inner)
- background-image: `linear-gradient(180deg, rgba(0,73,106,0.88) 0%, #002235 100%)`
- padding: `100px 80px 50px` (desktop); `40px 120px 0 60px` at ≤1199; `50px 20px` at ≤767
- min-height fills section; content vertically centered (flex column, justify-content: center)
- inner container max-width: `600px`

### Slideshow images (5 layers)
- each: position absolute; inset 0; background-size: cover; background-position: 50% 0%
- cross-fade: opacity 0↔1 over `1000ms`; each slide visible `5000ms`; loops
- Ken Burns: `transform: scale(1) → scale(1.3)` slow zoom on the active slide (use ~6s linear while active, or a continuous 20s)

### Headline (`h3`)
- font-family: Raleway; font-size: `80px` (desktop), `54px` ≤767; font-weight: `400`; line-height: `80px` (`54px` mobile); letter-spacing: `-3px`; text-align: left
- Words: `Your` (white #fff) + `search` (lime #90cc57, with underline marker) + `stops here` (white #fff). Render on the natural flow (the words wrap; "search" gets the marker beneath it).

### Underline marker (SVG)
- Use `<UnderlineMarker />` from `@/components/icons`. Position it `absolute`, beneath the word "search", roughly width matching the word, height ~0.4em below baseline. Stroke color white `#ffffff`, stroke-width ~9 (in the 0 0 500 150 viewBox), `fill:none`, `preserveAspectRatio: none`.
- Animate on mount: `stroke-dasharray: 1500; stroke-dashoffset: 1500 → 0` over `1200ms ease-out` (use the `oz-underline-draw` keyframe in globals.css; set inline `strokeDasharray:1500`).

### Paragraph (subtitle)
- font-family: Roboto Slab; font-size: `18px`; font-weight: `200`; color: `#ffffff`; line-height: `30px`; margin-bottom: `14.4px`; max-width ~520px
- margin-top above ~`24px` from headline

### Button ("More about us")
- `<a href="/company/">`; background `#90cc57` (lime); color `#ffffff`; padding `15px 30px`; border-radius `20px`; font Raleway `13px`/`700`; uppercase; letter-spacing `1px`; border none
- Hover: scale(1.1) (`oz-grow`), transition `transform 0.3s ease`
- margin-top ~`24px`

## States & Behaviors

### Slideshow autoplay
- **Trigger:** time, `setInterval` every 5000ms cycling activeIndex 0→4→0
- **Transition:** active image opacity 1, others 0, CSS `transition: opacity 1000ms ease-in-out`
- Ken Burns: apply zoom animation to the active slide only.

### Underline draw
- **Trigger:** on mount (component enters viewport, but it's above the fold so mount is fine)
- **Animation:** stroke-dashoffset 1500→0 over 1200ms ease-out, ~400ms delay.

### Section fade-in
- Whole content fades in on load (`oz-fade-in`, 0.8s) with slight delay; headline `oz-fade-in-up`.

## Per-State Content
N/A (single state).

## Assets
- Slideshow: `/images/hero-slide-1.jpg` … `/images/hero-slide-5.jpg`
- Icons: `UnderlineMarker` from `@/components/icons`

## Text Content (verbatim)
- Headline: "Your" + "search" + "stops here"
- Subtitle: "OERTZENGroup is an Executive Search and Professional Recruitment firm serving European clients with an established footprint in North America as well as those looking to enter these markets. Our specialty includes the search for C-level Executives and mid-management professionals."
- Button: "More about us" → `/company/`

## Responsive Behavior
- **Desktop (≥1200px):** two-pane — gradient + content left ~840px, slideshow visible on right ~600px. Headline 80px.
- **Tablet (768–1199px):** section padding `0 15px`, gradient panel padding `40px 120px 0 60px`, gradient spans full width over slideshow.
- **Mobile (≤767px):** gradient panel full width, padding `50px 20px`, headline `54px`/54 LH, height ~700px. Slideshow behind full gradient.
- **Breakpoint:** major change at `1200px` (two-pane → full-width gradient), text at `768px`.
