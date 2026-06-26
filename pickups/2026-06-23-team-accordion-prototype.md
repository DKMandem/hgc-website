# Team section interactive prototype

**Status:** 🟡 in progress
**Flagged:** 2026-06-23

## Goal
Build an interactive "Meet the Team" section where you click a member to highlight them and
read their profile underneath — so the page scales as more people are added without filling up.
Final design is a **horizontal image accordion** inspired by the Nordic Minds team pages
(e.g. https://nordic-minds.com/about/team/christian-fuchs).

## ▶️ Resume prompt
Paste: **"Resume the team prototype"**

Then to view it:
```
npm run dev
```
Open **http://localhost:3000/drafts/team** — hover/click the photo panels.

## Where it lives (ISOLATED — no production code touched)
All under a private drafts route; the real site is untouched:
- `src/app/drafts/team/page.tsx` — page shell + dark "prototype" note bar + "Meet the Team" heading
- `src/app/drafts/team/_components/TeamAccordion.tsx` — the accordion + detail panel (client component)
- `src/app/drafts/team/_data/members.ts` — member data (**bios/quotes/emails are PLACEHOLDER**)
- `public/images/team/yolanda.jpg`, `public/images/team/marcus.jpg` — downloaded real photos

The real team section that this would eventually replace: `src/components/company/TeamSection.tsx`
(rendered on `/company` via `src/app/company/page.tsx`).

## How the design works
- **Strip:** 440px-tall flex row of full-bleed photo panels. The selected (or hovered) one expands
  in full color with name+title overlay; the rest compress to thin slices with vertical white name
  labels + green tint. Hover = peek; click = select (drives the detail below).
  Easing `cubic-bezier(0.455,0.03,0.515,0.955)`, 0.45s.
- **Expansion ratio:** tunable constant `EXPANDED_GROW = 3` at top of TeamAccordion.tsx (was 6 — felt
  too wide; lowered per feedback). Collapsed panel `minWidth: 84px`.
- **Mobile fallback:** below `md`, a tappable 3-col photo grid drives the same detail panel.
- **Detail panel:** centered name + title + bio, then a row (photo left, grayscale; quote + two
  outlined pill buttons **LinkedIn** + **Email** on the right, vertically centered against the photo).
- Brand colors: `GREEN #124336`, `ACCENT #127d68`; fonts Montserrat (display) + Plus Jakarta (body).

## Current members (6)
1. Camilla Daniels Hansen — Managing Director
2. Anna Berg Hansen — Collaborative Partner
3. Rikke Malmberg — Executive Search Consultant
4. Julia Daniels — Project Manager
5. Marcus Honkanen — Collaborating Partner (real photo + real LinkedIn from Nordic Minds)
6. Yolanda Nokuri Hegngi — Executive Coach (real photo from her LinkedIn + real LinkedIn URL)

## What's DONE
- Researched Nordic Minds interaction; rebuilt faithfully in HGC brand.
- Rejected 3 earlier draft styles (accordion-grid / spotlight-strip / featured-rail) — deleted.
- Removed credentials box + "Fields of expertise" chips from the detail (kept quote + contact).
- De-duplicated contact: LinkedIn + Email now only as the two outlined buttons under the quote.
- Vertically centered the quote/buttons against the photo (fixed "quote pushed too high").
- Added Marcus + Yolanda with real names/titles/photos/LinkedIn.

## What's LEFT / open decisions
- **Real content:** swap placeholder bios, quotes, and emails for real ones (names/titles/photos/
  LinkedIn are real; emails follow placeholder pattern `first@hansenglobalconsult.com`).
- **Duplicate photo:** the grayscale detail photo is the SAME image as the strip. Decide: keep it,
  drop it (center quote alone), or use a second candid per person.
- **Title casing:** used "Collaborating Partner" (capital P) for Marcus to match other titles; user
  asked for "Collaborating partner" — confirm preference.
- **Unused files:** `public/images/team/laura.jpg` and `matthias.jpg` are no longer referenced —
  delete or keep?
- **Go live:** when approved, wire TeamAccordion into the real `/company` page (replace the static
  grid in `TeamSection.tsx`) and delete the `src/app/drafts/` folder.

## Notes
- Verify with Playwright by navigating to the URL and clicking `button[aria-label="<Full Name>"]`.
- This session also made unrelated, already-completed edits (Leadership Development → "Leadership
  Advisory" sitewide; expertise hero bg → handshakelady2.jpg; homepage hero eyebrow spacing). Those
  are separate from this prototype.
