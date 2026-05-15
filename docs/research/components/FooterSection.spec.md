# FooterSection Specification

## Overview
- **Target file:** `src/components/FooterSection.tsx`
- **Screenshot:** `docs/design-references/desktop-footer.png`
- **Interaction model:** static (link hovers; site-icon rotate-on-hover optional).

## DOM Structure
`<footer>` solid navy band, ~398px tall desktop. Inner container max-width `1140px`, flex row with 4 columns:
1. **Brand col (~30%):** color logo image, tagline line, copyright line.
2. **Quick Access:** heading + vertical link list.
3. **Contact Us:** heading + address + phone + website + email.
4. **Get Connected:** heading + podcast line + 4 social icons row.

## Computed Styles (exact)

### Footer / top section
- background-color: `#00496a` (rgb 0,73,106)
- padding: `80px 0` desktop; `50px 30px` mobile
- box-shadow: `rgba(99,115,129,0.05) 0 21px 48px 0`

### Container
- max-width: `1140px`; margin-inline auto; display: flex; gap ~`30px`; align-items: flex-start

### Column headings (`h2`, "Quick Access" / "Contact Us" / "Get Connected")
- font-family: Raleway; font-size: `18px`; font-weight: `400`; color: `#90cc57` (lime); margin-bottom: ~`16px`

### Brand column
- Logo image `/images/logo-full.png` rendered ~`280px` wide (natural 1024×288 → keep aspect ~280×79); margin-bottom ~`16px`
- Tagline (`h5`): "An experienced, resourceful and approachable solution for your executive recruitment needs." — Raleway `13px`/`300`, color `rgba(255,255,255,0.82)`, line-height ~`20px`, margin-bottom ~`16px`
- Copyright (`h6`): "Copyright © 2021-2026 OERTZENGroup. All rights reserved." — Raleway `11px`/`500`, color `rgba(255,255,255,0.87)`

### Link list (Quick Access)
- each `<a>`: Raleway, ~`14px`, color `rgba(255,255,255,0.82)`, line-height ~`28px`, no underline
- hover: color → `#90cc57` (lime), transition `color 0.2s ease`

### Contact Us column
- Lines (each a row): address, phone, website, email. Same link style as Quick Access (white-ish, lime on hover). The email may render in pink `#cc3366` on the live site — but for consistency use the same white→lime style.

### Get Connected column
- "Listen to our Westbound podcast" style line (Raleway ~13px, rgba white 0.82) — see verbatim text below
- Social icons row: 4 icons in a horizontal row, gap ~`14px`
  - default icon color: `rgba(255,255,255,0.6)` (faded); size `20px`
  - hover: color → `#90cc57` (lime), transition `color 0.2s ease`

## States & Behaviors

### Link / icon hover
- color (white-ish) → `#90cc57`; transition `color 0.2s ease`

### Site-icon rotate (optional, low priority)
- the small round site icon (if shown) has rotate-on-hover; safe to omit.

## Per-State Content

### Quick Access links (label → href)
- Home → `/`
- Company → `/company/`
- Expertise → `/expertise/`
- Resources → `/resources/`
- Connect → `/connect/`

### Contact Us
- Address: "1 Concourse Pkwy Suite 800 · Atlanta, GA 30328" → `https://goo.gl/maps/T3GSAhiPkP1ZeEZM8`
- Phone: "404-480-0033" → `tel:+14044800033`
- Website: "https://oertzengroup.com" → `https://oertzengroup.com/`
- Email: "info@oertzengroup.com" → `mailto:info@oertzengroup.com?subject=Message%20from%20OERTZENGroup%20Website`

### Get Connected
- Line: "Listen to the Westbound podcast" (use this concise line)
- Social icons (icon → href), using `@/components/icons`:
  - `MicrophoneIcon` → `https://westbound-podcast.castos.com/`
  - `YoutubeIcon` → `https://www.youtube.com/@westboundpodcast`
  - `LinkedinIcon` → `https://www.linkedin.com/company/oertzen-group`
  - `EnvelopeIcon` → `mailto:info@oertzengroup.com?subject=Message%20from%20OERTZENGroup%20Website`

## Assets
- Logo: `/images/logo-full.png` (next/image)
- Icons: `MicrophoneIcon`, `YoutubeIcon`, `LinkedinIcon`, `EnvelopeIcon` from `@/components/icons`

## Text Content (verbatim)
- Tagline: "An experienced, resourceful and approachable solution for your executive recruitment needs."
- Copyright: "Copyright © 2021-2026 OERTZENGroup. All rights reserved."
- Column headings: "Quick Access", "Contact Us", "Get Connected"

## Responsive Behavior
- **Desktop (≥1024px):** 4 columns in a row inside 1140px; padding `80px 0`.
- **Tablet (768–1023):** 2×2 grid of columns.
- **Mobile (≤767px):** single column stack — brand logo column hidden OR shown first; then Quick Access, Contact, Get Connected stacked; padding `50px 30px`; text can center.
- **Breakpoint:** 4→2 at `1024px`, →1 at `768px`.
