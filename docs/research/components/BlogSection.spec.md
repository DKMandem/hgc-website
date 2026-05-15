# BlogSection Specification

## Overview
- **Target file:** `src/components/BlogSection.tsx`
- **Screenshot:** `docs/design-references/desktop-blog.png`
- **Interaction model:** static + fixed-attachment parallax background + card hover.

## DOM Structure
`<section>` with a fixed-parallax photo background washed by a white 70% overlay. Inner container max-width `1100px`, centered, vertically: eyebrow → heading → 3-column grid of post cards.

## Computed Styles (exact)

### Section
- background-image: `url(/images/blog-parallax.jpg)`; background-position: center; background-size: cover; background-repeat: no-repeat
- **background-attachment: `fixed`** at ≥1200px (parallax). Below 1200px: `scroll`.
- padding: `150px 0` desktop; `50px 30px` mobile
- A white overlay layer over the photo: background-color `#ffffff`, opacity `0.7` (place as an absolute inset layer; content sits above at z-10)

### Container
- max-width: `1100px`; margin-inline auto; text-align: left

### Eyebrow (`h5` "OertzenGroup Resources")
- font-family: Raleway; font-size: `12px`; font-weight: `700`; color: `#00496a`; text-transform: uppercase; letter-spacing: `12px`; margin-bottom: ~`16px`

### Heading (`h3` "Latest from OERTZENGroup")
- font-family: Raleway; font-size: `54px`; font-weight: `700`; color: `#00496a`; line-height: `54px`; letter-spacing: `-1px`; margin-bottom: ~`40px`

### Grid
- display: grid; grid-template-columns: repeat(3, 1fr); column-gap: `24px`; row-gap: `35px`
- mobile: 1 column

### Post card (`article` → `.elementor-post__card`)
- background-color: `#90cc57` (lime); border-radius: `3px`; box-shadow: `rgba(0,0,0,0.15) 0 0 10px 0`
- padding: `30px` (computed `30px 0` but apply `30px` horizontal too for readable text; inner text block has its own side padding ~30px). Use `padding: 30px`.
- display: flex column; min-height ~`230px`; justify-content: space-between

#### Card title (`h3.elementor-post__title` → `a`)
- font-family: Raleway; font-size: `20px`; font-weight: `600`; color: `#ffffff`; line-height: `24px`
- margin-bottom: ~`16px`

#### Card date (`.elementor-post-date`)
- font-family: Raleway; font-size: `12px`; font-weight: `400`; color: `#ffffff`; margin-top: ~`8px`

#### Read more (`.elementor-post__read-more`)
- text: "Read More »"; font-family: Raleway; font-size: `12px`; font-weight: `700`; color: `#00496a`; text-decoration: none; margin-top: ~`16px`; display inline-block

## States & Behaviors

### Card hover
- **Trigger:** hover on card
- A darker-green gradient overlay rises from the bottom; title stays readable. Implement: on hover, card `background-color` darkens to ~`#7cb648` OR add a `::after` gradient `linear-gradient(transparent, rgba(0,73,106,0.25))`. Transition `0.3s ease`. Also lift: `box-shadow` slightly stronger. Keep subtle.

### Background parallax
- **Trigger:** scroll; `background-attachment: fixed` at ≥1200px gives the parallax. Mobile: normal scroll.

## Per-State Content
3 posts (title → href, date):
1. "As the U.S. population ages, more employees are seeking caregiver benefits at work" → `/as-the-u-s-population-ages/` — "February 20, 2026"
2. "Companies Are Replacing CEOs in Record Numbers and They're Getting Younger" → `/companies-are-replacing-ceos/` — "February 17, 2026"
3. "U.S. manufacturing expands at fastest pace since 2022" → `/u-s-manufacturing-expands-at-fastest-pace-since-2022/` — "February 6, 2026"

(Use the verbatim curly apostrophe in #2: "They're".)

## Assets
- Background: `/images/blog-parallax.jpg`
- No icons (use "»" character literally in Read More).

## Text Content (verbatim)
Eyebrow: "OertzenGroup Resources"
Heading: "Latest from OERTZENGroup"
Read more label: "Read More »"
(post titles/dates above)

## Responsive Behavior
- **Desktop (≥1200px):** 3-column grid; fixed parallax bg; padding `150px 0`; heading 54px.
- **Tablet (768–1199):** 2-column grid (or keep 3 if it fits — prefer 2); bg scroll; padding reduces (~`90px 30px`).
- **Mobile (≤767px):** 1-column grid; padding `50px 30px`; heading ~`36px`.
- **Breakpoint:** 3→1 col at `768px`; parallax disabled below `1200px`.
