## EcoCycle Bangladesh — Build Plan

A frontend-only marketing site (no backend in this pass). Visual direction locked to the selected "Industrial clean" prototype.

### Design tokens (ported verbatim into `src/styles.css`)
- Colors: `--brand-primary #065f46`, `--brand-accent #a3e635`, `--brand-dark #0f172a`, surfaces `slate-50` / `white`
- Fonts: Space Grotesk (display) + Inter (body), loaded via `<link>` in `__root.tsx`
- Soft shadows, rounded-2xl/3xl, pill CTAs, sticky blurred nav

### Routes (TanStack Start, file-based under `src/routes/`)
1. `index.tsx` — Landing: hero, impact stats (animated counters), how it works (4 steps), services grid, benefits, testimonials, FAQ accordion, newsletter, CTA banner
2. `schedule.tsx` — Multi-step pickup form (name, phone, email, address, device type, quantity, date, notes) with progress indicator + success screen + "Send via WhatsApp" fallback. Frontend-only validation with zod; submit just shows confirmation
3. `services.tsx` — 6 detailed service cards (Residential, Office, School drives, Data Wiping, Hard Drive Destruction, Refurbishment) each with description / benefits / process / CTA
4. `impact.tsx` — Metrics dashboard (collected, refurbished, materials recovered, CO₂ reduced) + company timeline + recharts bar/line
5. `corporate.tsx` — Corporate value props, compliance/certificates, CSR partnerships, bulk inquiry form
6. `about.tsx` — Mission, story, vision, team grid, sustainability commitment
7. `blog.tsx` — Static post grid with search + category filter (mock content)
8. `contact.tsx` — Contact form, phone/email/address, embedded map iframe, social links

### Shared components (`src/components/`)
- `SiteHeader` (sticky nav, links to all pages, lang toggle, dark mode toggle, Schedule CTA, mobile sheet menu)
- `SiteFooter`
- `WhatsAppButton` (floating, all pages)
- `NewsletterForm`, `FaqAccordion`, `Stat` (count-up using framer-motion), `SectionHeading`
- `LanguageProvider` + `useT()` — simple dictionary-based i18n in React context, persisted to localStorage. All copy keyed; EN + বাংলা strings shipped together
- `ThemeProvider` — class-based dark mode toggle (already supported in `styles.css`)

### Animations
- framer-motion: fade-up on scroll for sections, hover lift on service cards, count-up stats, gold underline draw on nav links

### SEO & a11y
- Per-route `head()` with unique title/description/og tags
- One `<main>` per page, semantic headings, alt text, aria-labels on icon buttons, `h-dvh` where applicable
- robots.txt + sitemap.xml updated with all 8 routes; canonical relative paths

### Out of scope (deferred)
- No Lovable Cloud / DB / auth / admin / user accounts / real notifications (you chose "Full marketing site only")
- WhatsApp button uses a placeholder number; contact details use placeholders (you can swap in real ones later)
- Blog posts are static mock content (no CMS)

### Technical notes
- Stack is TanStack Start (the project template), not Next.js — same React 19 + TS + Tailwind v4 + shadcn + framer-motion, just file-based routing in `src/routes/`
- Tailwind v4 tokens defined in `src/styles.css` (`@theme`), no `tailwind.config.js`
- Install: `framer-motion`, `recharts`, `zod`, `react-hook-form`, `@hookform/resolvers`, `date-fns`
- All forms use react-hook-form + zod with proper validation messages
