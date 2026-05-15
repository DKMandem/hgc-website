# TopHeader Specification

## Overview
- **Target file:** `src/components/TopHeader.tsx`
- **Screenshot:** `docs/design-references/desktop-hero.png` (bar at very top), `docs/design-references/mobile-390-fullpage.png`
- **Interaction model:** static (NOT sticky — `position: static`). Mobile: click-driven off-canvas menu.

## DOM Structure
`<header>` → lime green bar, full width, 70px tall. Inner flex container max-width 1200px, space-between: left = logo image, right = horizontal nav menu. On mobile (≤767px) the nav is hidden and a hamburger button shows; clicking it opens a slide-in panel.

## Computed Styles (exact)

### Bar container (`<header>`)
- background-color: `#90cc57` (rgb 144,204,87)
- height: `70px`
- width: 100%
- position: static
- padding: `0`

### Inner container
- max-width: `1200px`; margin-inline: auto; width: 100%
- display: flex; align-items: center; justify-content: space-between
- padding-inline: `20px` (gutter); height: 70px

### Logo
- image: `/images/logo-plain.png` (white wordmark), rendered at `width: 240px; height: 55px` (object-fit: contain)
- wrapped in `<a href="/">`

### Nav menu (desktop ≥768px)
- display: flex; align-items: center
- Items: Home, Company, Current Openings, Expertise (in this visible order)
- Each item `<a>`: font-family Raleway; font-size `13px`; font-weight `700`; text-transform uppercase; letter-spacing `1px`; padding `13px 20px`
- Default color: `#00496a` (navy)
- **Active item ("Home"): color `#ffffff` (white)**

## States & Behaviors

### Nav item hover
- **Trigger:** hover
- color: navy `#00496a` → `#ffffff` (white) ; OR background tint to `#003858`. Use: on hover color → white, transition `color 0.2s ease`.

### Mobile off-canvas (≤767px)
- **Trigger:** click on hamburger button (right side, replaces nav)
- Hamburger: 3 lines, color navy `#00496a`, ~24px, at right; bar padding becomes `0 15px`
- Panel: slides in from the right, full-height, background `#00496a` (navy), contains the nav items as a vertical list (white text, Raleway 700 uppercase, generous vertical padding ~16px), plus a close (X) button top-right.
- Use React `useState` for open/close; lock body scroll when open; overlay backdrop `rgba(0,0,0,0.5)`.
- Transition: `transform: translateX(100%) → 0`, `0.3s ease`.

## Per-State Content
Nav items (label → href):
- Home → `/`
- Company → `/company/`
- Current Openings → `https://careers.topechelon.com/portals/91219bdb-c277-45cf-945c-1921eb2cfc57/jobs`
- Expertise → `/expertise/`

(Note: live site has a "Company" submenu with Team/Resources/Connect; for this clone render Company as a plain link — submenu out of scope.)

## Assets
- Logo: `public/images/logo-plain.png` (use `next/image`, width 240, height 55)
- Icons: `HamburgerIcon`, `CloseIcon` from `@/components/icons`

## Text Content (verbatim)
"Home", "Company", "Current Openings", "Expertise"

## Responsive Behavior
- **Desktop (≥768px / really ≥1200 for full):** logo left, horizontal nav right, bar height 70px, container 1200px.
- **Mobile (≤767px):** nav hidden, hamburger button shows at right; bar padding `0 15px`; off-canvas slide-in panel on tap.
- **Breakpoint:** switch at `768px` (Tailwind `md:`).
