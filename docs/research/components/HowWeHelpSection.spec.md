# HowWeHelpSection Specification

## Overview
- **Target file:** `src/components/HowWeHelpSection.tsx`
- **Screenshot:** `docs/design-references/desktop-howwehelp.png`
- **Interaction model:** static + subtle parallax on left image + grow-on-hover button.

## DOM Structure
Full-bleed `<section>` (100vw, no max-width container — `elementor-section-full_width`), 910px tall desktop. Two equal columns (50/50, each ~720px @1440):
- **Left column:** full-cover background photo (`/images/howwehelp-left.jpg`), no text.
- **Right column:** white-ish content stack — tagline logo image, "How we can help" heading, lime divider, 5 check-list items, navy CTA button. Vertically centered.

## Computed Styles (exact)

### Section
- width: 100vw; full bleed; padding: `0`
- display: flex; container is full width (`max-width: none`)
- height: `910px` desktop (driven by content); on mobile columns stack

### Left column
- width: 50% (`~720px`); height: 100% of section
- background-image: `url(/images/howwehelp-left.jpg)`; background-size: cover; background-position: `100% 50%` (right-centered)
- Parallax: subtle horizontal translate as section scrolls (optional, low priority — implement as a gentle `translateX` via scroll, max ~20px, or skip). Background image overflows ~140% width for parallax headroom.

### Right column
- width: 50% (`~720px`)
- background: white / very light. Content padded generously (~`80px 90px`), vertically centered (flex column, justify-content center)

### Tagline logo image
- `/images/logo-tagline.png`, rendered ~`280px` wide (natural 738×102, keep aspect → ~280×39). margin-bottom ~`24px`

### Heading (`h3` "How we can help")
- font-family: Raleway; font-size: `50px`; font-weight: `700`; color: `#00496a`; line-height: `55px`; letter-spacing: `-1px`; text-align: left; margin-bottom: 0

### Divider
- a horizontal rule: border-top `1.77px solid #90cc57`; width ~`468px` (cap to content width); margin: ~`24px 0`

### Check-list items (5 × li)
- list, each item: flex row, icon + text, padding-bottom `15px` (last item 0)
- Icon: `<CheckCircleIcon />` color `#90cc57`, size `24px`, flex-shrink 0, margin-right ~`12px`, top-aligned
- Text: font-family Roboto Slab; font-size `18px`; font-weight `300`; color `#0d0d0d`; line-height `25.2px`

### Button ("contact us Today")
- `<a href="/connect/">`; background `#00496a` (navy); color `#fff`; padding `15px 30px`; border-radius `20px`; Raleway `13px`/`700`; text-transform uppercase (renders "CONTACT US TODAY"); letter-spacing `1px`
- margin-top ~`30px`; hover scale(1.1) transition `transform 0.3s ease`

## States & Behaviors

### Button hover (grow)
- scale(1)→scale(1.1), `transform 0.3s ease`

### Left image parallax (optional / low priority)
- gentle horizontal drift on scroll; safe to ship without it if time-constrained — static cover is acceptable.

## Per-State Content
N/A.

## Assets
- Left bg: `/images/howwehelp-left.jpg`
- Tagline logo: `/images/logo-tagline.png` (next/image)
- Icon: `CheckCircleIcon` from `@/components/icons`

## Text Content (verbatim)
Heading: "How we can help"
List items (each prefixed with lime check icon):
1. "We pride ourselves in getting to know your company and who is behind it. Your brand and people are unique, and we tell your story to candidates in the U.S. market."
2. "We counsel and support companies during startup, expansion and FDI projects to achieve their unique plans for the U.S. market."
3. "We actively pursue high caliber talent on your behalf and ensure that our candidates will fit your unique company culture."
4. "We share the same cultural upbringing and, in some cases, literally speak your language."
5. "We act as a de facto talent acquisition department by supporting your existing HR department."
Button: "contact us Today" → `/connect/` (CSS uppercases it)

## Responsive Behavior
- **Desktop (≥1200px):** 50/50 columns, left photo full height, right content centered. ~910px tall.
- **Tablet (768–1199):** columns become full width — image column on top (give it a fixed height ~400px), content below.
- **Mobile (≤767px):** stack; image ~`250px` tall block on top, content below full-width padding ~`40px 24px`.
- **Breakpoint:** stack at `1024px` (Tailwind `lg:` for the row).
