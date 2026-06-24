# Chris Rau — Developer Portfolio

Source code for [webdevbyrau.com](https://webdevbyrau.com) — live, in production.

A personal portfolio built to showcase production software work, including [The Mountain Pathway](https://www.themountainpathway.com/) (live on the App Store), Pickleball Court Hub, and a Shopify e-commerce redesign for PMJ Printing.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS (CSS variable–based theme tokens)
- **Fonts:** Archivo Black (display), Inter (body) — via `next/font/google`
- **Email:** Resend (contact form API route)
- **Deployment:** Vercel, connected to this repo for automatic deploys on push to `main`
- **Domain:** Namecheap (DNS), pointed at Vercel

---

## Design System

The site uses a monochrome black-and-white base with an optional **rust accent theme**, toggleable in the nav and persisted via `localStorage`.

### Theme tokens

All colors are defined as CSS variables in `globals.css` and mapped into Tailwind's theme (`tailwind.config.ts`), so components reference `bg-bg`, `text-text-primary`, `bg-accent`, etc. rather than hardcoded hex values.

```css
:root {
  --color-bg: #0a0a0a;
  --color-bg-card: #141414;
  --color-border: #2b2b2b;
  --color-text-primary: #fafafa;
  --color-text-secondary: #a3a3a3;
  --color-text-tertiary: #8a8a8a;
  --color-accent: #fafafa;        /* mono default */
  --color-accent-foreground: #0a0a0a;
}

[data-theme="rust"] {
  --color-accent: #c25a3a;
  --color-accent-foreground: #fff2ec;
}
```

### The 5 deliberate accent touchpoints

The rust theme is intentionally sparing — it only shows up in 5 places, so it reads as a deliberate highlight rather than a full re-skin:

1. Hero's "SHIPS." outlined text stroke
2. The Mountain Pathway downloads badge
3. The Python certification badge (Skills section)
4. "SOMETHING." in the closing "LET'S BUILD SOMETHING." headline
5. The "EMAIL ME" button fill

Everything else — buttons, borders, card chrome, links — stays neutral grayscale in both themes.

### Responsive nav

Below the `sm` breakpoint, the desktop nav links collapse into a hamburger menu with a slide-down panel (Work / About / Contact + theme toggle), dismissible by tapping a link, tapping outside, or pressing Escape.

---

## Project Structure

```
src/
  app/
    layout.tsx          — fonts, metadata, theme pre-paint script
    page.tsx            — assembles all sections
    globals.css          — theme tokens
    api/
      contact/route.ts   — Resend-powered contact form endpoint
  components/
    Nav.tsx              — sticky nav, mobile hamburger menu
    ThemeToggle.tsx       — mono/rust switch, persists to localStorage
    Hero.tsx
    Skills.tsx
    Projects.tsx
    ProjectCardFeatured.tsx       — The Mountain Pathway (full-width, expanded)
    ProjectCardCompactPlus.tsx    — PMJ Printing (before/after viewer + testimonial)
    ProjectCardCompact.tsx        — Pickleball Court Hub
    AboutContact.tsx
    Modal.tsx             — contact form modal shell
    ContactForm.tsx
    ContactActions.tsx
  lib/
    content.ts            — all copy/data, typed (single source of truth)
public/
  resume.pdf
  og-image.png
  images/
    mountain-pathway/
    pickleball/
    pmj/                  — 5 before/after pairs (landing, hat, apparel, about, footer)
```

All page copy and project data lives in `src/lib/content.ts` as typed exports. To update content (e.g. The Mountain Pathway's download count), edit the relevant value there and push to `main` — Vercel redeploys automatically within a minute or two, no component code needs to change.

```ts
// Manually maintained — update this value directly whenever the download
// count changes, then push to Git.
export const mountainPathwayStats = {
  downloads: 124,
  lastUpdated: "2026-06-23",
}
```

---

## Featured Work

### The Mountain Pathway
A faith-centered journaling app shipped solo, end to end — architecture through three App Store review cycles, live since Easter Sunday 2026. Tech: Next.js, TypeScript, Supabase, Capacitor iOS, Framer Motion, Zustand.

### Pickleball Court Hub
Nationwide court discovery platform with real-time backend, map-based search, and ~90% duplicate reduction via coordinate-based deduplication. Tech: Next.js, Node.js, Convex.

### PMJ Printing
Shopify e-commerce redesign reaching a 99% desktop performance score and 0ms total blocking time, with a published client testimonial. Includes an interactive before/after viewer across 5 page redesigns (landing, hats, apparel, about, footer).

---

## Contact Form

The "Email Me" button opens a modal with a Name / Email / Message form. Submissions POST to `/api/contact`, which validates the input and sends an email via the [Resend](https://resend.com) API, with `replyTo` set to the sender's address.

### Environment variables

Create a `.env.local` file in the project root (never committed — see `.gitignore`):

```
RESEND_API_KEY=your_resend_api_key_here
```

See `.env.local.example` for the expected format. The same variable must also be added in **Vercel → Project Settings → Environment Variables** for the form to work in production.

**Current sender:** `onboarding@resend.dev` (Resend's shared testing address). A custom domain sender (e.g. `contact@webdevbyrau.com`) can be set up later in the Resend dashboard for improved deliverability.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or whichever port the terminal reports).

### Build for production

```bash
npm run build
npm start
```

---

## Deployment

Live on **Vercel**, connected directly to this GitHub repo. Pushing to `main` triggers an automatic production deployment, typically live within 1-2 minutes.

**Domain:** `webdevbyrau.com` and `www.webdevbyrau.com` are both pointed at Vercel via DNS records (A record on root, CNAME on `www`) configured at Namecheap. The root domain redirects (308) to the `www` version.

---

## Notes on Workflow

This project was built using a structured **Claude-plans, Cursor-executes** workflow:

1. Design direction and content were planned and reviewed in Claude (Anthropic), including a full build spec covering design tokens, file structure, content, and an asset manifest.
2. Cursor executed the build in small, reviewable steps — one component or fix at a time, with verification (screenshots, browser testing, terminal logs, even pixel-position measurements for a layout-shift bug) before moving to the next step.
3. DNS and deployment configuration (Vercel + Namecheap) were also worked through step by step before the domain went live.

---

## License

Personal portfolio project — not licensed for reuse.
