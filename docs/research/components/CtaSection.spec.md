# CtaSection Specification

## Overview
- **Target file:** `src/components/CtaSection.tsx`
- **Screenshot:** `docs/design-references/desktop-cta.png`
- **Interaction model:** static.

## DOM Structure
`<section>` solid navy band. Inner container max-width `1100px`, flex two columns 33 / 66:
- **Left column (~33%):** big lightweight heading "Your Search Stops Here".
- **Right column (~66%):** two white body paragraphs.

## Computed Styles (exact)

### Section
- background-color: `#00496a` (rgb 0,73,106)
- padding: `70px 50px 50px` (desktop); `50px 30px` mobile
- transition baseline: `background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s`

### Container
- max-width: `1100px`; margin-inline auto; display: flex; align-items: flex-start
- Left col ~`367px` (33%), right col ~`733px` (66%); gap from column structure (~`30px`)

### Heading (`h3` "Your Search Stops Here")
- font-family: Raleway; font-size: `56px`; font-weight: `200`; color: `#ffffff`; line-height: `61.6px`; letter-spacing: `-2px`; margin-bottom: 0; text-align: left

### Body paragraphs (2)
- font-family: Roboto Slab; font-size: `18px`; font-weight: `300`; color: `#ffffff`; line-height: `25.2px`
- spacing between the two paragraphs: ~`24px` (one empty line)

## States & Behaviors
N/A — fully static. (Optional subtle `oz-fade-in` on scroll into view.)

## Per-State Content
N/A.

## Assets
None (no images, no icons).

## Text Content (verbatim)
Heading: "Your Search Stops Here"
Paragraph 1: "Our goal at OERTZENGroup is to provide your company with a holistic approach to your recruiting needs. We make the complex process of recruiting a seamless, thoughtful, and enjoyable one. We raise your brand awareness and desirability by telling your unique story and why highly qualified candidates should want to work for you."
Paragraph 2: "We understand that filling critical positions with highly suitable candidates in a timely fashion is paramount to your company achieving your unique goals. Our priority is to become an extension of your recruiting department. Our search continues so that yours can stop."

## Responsive Behavior
- **Desktop (≥1024px):** two columns 33/66 inside 1100px; heading left, paragraphs right; padding `70px 50px 50px`.
- **Tablet/Mobile (≤1023px):** stack single column — heading on top, paragraphs below; padding `50px 30px`; heading can reduce to ~`40px` on mobile for fit.
- **Breakpoint:** stack at `1024px` (Tailwind `lg:`).
