# QuestionsSection Specification

## Overview
- **Target file:** `src/components/QuestionsSection.tsx`
- **Screenshot:** `docs/design-references/desktop-questions.png`
- **Interaction model:** static (button has grow-on-hover).

## DOM Structure
`<section>` white bg, with a decorative logo watermark as a background overlay (lower-left). Inner container max-width `1100px`, display flex, two columns (`col-50` each):
- **Left column:** big lightweight heading + a "Learn more" pill button.
- **Right column:** a vertical list of 6 question headings (`h3`), last one bold.

## Computed Styles (exact)

### Section
- background-color: `#ffffff` (transparent over white page)
- padding: `150px 100px 100px` (desktop); `75px 10px 100px` (mobile)
- position: relative; overflow: hidden

### Background watermark overlay
- A `<div>` absolutely positioned, inset 0, behind content (z-0, content z-10)
- background-image: `url(/images/logo-reverse.png)`
- background-size: `537px`; background-position: `-25px 444px`; background-repeat: no-repeat
- opacity ~1 (image itself is light/subtle). Place it lower-left.

### Container
- max-width: `1100px`; margin-inline auto; display: flex; gap normal (~0, columns are 50/50 with internal padding)
- Left col ~`605px`, right col ~`495px` at 1100px.

### Left heading (`h3`)
- font-family: Raleway; font-size: `52px`; font-weight: `300`; color: `#00496a`; line-height: `62.4px`; letter-spacing: `-2px`; text-align: left
- Text: "We connect European companies with highly qualified and culturally compatible candidates."
- margin-bottom ~`30px`

### "Learn more" button
- `<a href="/expertise/">`; background `#00496a` (navy); color `#fff`; padding `15px 30px`; border-radius `20px`; Raleway `13px`/`700` uppercase; letter-spacing `1px`; border none
- Hover: scale(1.1), transition `transform 0.3s ease`

### Question items (right column, 6 × `h3`)
- font-family: Roboto Slab; font-size: `20px`; color: `#00496a`; line-height: `26px`; margin-bottom: `5px` (last item `8px`)
- font-weight: `400` for items 1–5; **`700` (bold) for the last item**
- Stack vertically with ~`24px` gap between questions (each question is its own block; small 5px internal margin then visual spacing — use ~28px row gap between items)

## States & Behaviors

### Button hover (grow)
- **Trigger:** hover on `.elementor-button`
- transform: scale(1) → scale(1.1); transition `transform 0.3s ease`

No tabs/carousels. Optional: fade-in on scroll into view (subtle, `oz-fade-in`).

## Per-State Content
N/A.

## Assets
- Watermark: `/images/logo-reverse.png` (background-image)
- No icons.

## Text Content (verbatim)
Left heading: "We connect European companies with highly qualified and culturally compatible candidates."
Button: "Learn more" → `/expertise/`
Questions (in order):
1. "Does your recruiting partner adequately represent your brand?"
2. "Is your organization new to the U.S. market and seeking a subject-matter expert?"
3. "Have your passive methods to find talent not produced satisfactory results?"
4. "Are you looking for a trusted partner with an international mindset?"
5. "Is your HR department maxed out and overwhelmed by other tasks?"
6. **"Is your answer YES to one or more of these questions? Let's talk!"** (bold, weight 700)

## Responsive Behavior
- **Desktop (≥1200px):** two columns 50/50 inside 1100px container; padding `150px 100px 100px`.
- **Tablet (768–1199):** columns each become full width (stack); padding reduces.
- **Mobile (≤767px):** single column stack — heading + button first, then questions list; padding `75px 10px 100px`. Watermark stays lower-left but smaller/clipped is fine.
- **Breakpoint:** stack at `~1024px` (use Tailwind `lg:` for two-column). Watermark visible at all sizes.
