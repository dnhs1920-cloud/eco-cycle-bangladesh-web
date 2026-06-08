
## EcoCycle Bangladesh — Design & Content Polish

A focused refinement pass across the marketing site. No new pages, no backend — visual system, copy tone, and real imagery.

### 1. Design system upgrades (`src/styles.css`)
- **Expanded palette** (used sparingly as accents, not everywhere):
  - Keep emerald `#065f46` as primary
  - Add `--brand-moss #3f6f4f` (secondary text accents), `--brand-citron #d9f99d` (soft surfaces), `--brand-clay #c2655a` (warm accent for warnings/CTAs), `--brand-sky #0ea5e9` (link/info), `--brand-sand #f5efe6` (alt section background)
  - Gradient tokens: `--gradient-hero`, `--gradient-card`, `--gradient-stat`
  - Shadow tokens: `--shadow-soft`, `--shadow-lifted`, `--shadow-glow-primary`
- **Typography rhythm**: tighter display tracking (-0.03em on h1/h2), better fluid clamp() sizing for hero, drop-cap utility for editorial blocks
- **Section backgrounds**: alternate `bg-background`, `bg-brand-sand/40`, `bg-brand-primary` (dark band) for visual cadence instead of all-white
- **Surface variants**: `.surface-elevated`, `.surface-tinted`, `.surface-dark` utilities so cards aren't all identical
- **Dark mode**: re-tune so accent colors remain legible

### 2. Site header
- Remove rotate-on-hover from the logo mark (no transform, no group hover); keep a subtle color transition on the wordmark only
- Add a thin top accent bar (1px gradient) for premium feel

### 3. Real imagery
Generate AI images with `imagegen` (saved to `src/assets/`) and import them:
- `hero-collection.jpg` — Dhaka rooftop scene, technician with a tablet receiving e-waste from a family, warm golden hour, photographic
- `hero-side-circuit.jpg` — macro shot of a green PCB with new plants growing through it (metaphor)
- `service-residential.jpg`, `service-office.jpg`, `service-school.jpg` — contextual photos
- `impact-recycling.jpg` — refurbishment lab, workers in lime-green aprons
- `about-team.jpg` — team gathered in warehouse
- `cta-banner.jpg` — wide landscape of recycled materials sorted into colorful bins
- Use `srcset`/proper alt text; lazy-load below-the-fold

### 4. Hero redesign (asymmetric, more interesting)
- Left: oversized display headline with a single highlighted phrase (citron underline brushstroke), supporting sub-copy, two CTAs, micro trust row (badges)
- Right: layered composition — main hero photo in a rounded-3xl frame, floating stat card (impact this month), small certification chip, decorative dotted grid + blurred accent blobs
- Subtle parallax on scroll for the floating card

### 5. Copy rewrite (EN + BN dictionaries in `src/lib/i18n.tsx`)
Replace marketing-speak with natural, conversational lines. Examples:
- Hero headline: "Your old electronics deserve a second life." (instead of generic "Recycle responsibly")
- Sub: "We pick up the laptop in your drawer, the phone in your kitchen counter, and the tangle of cables under your desk — then make sure every part finds the right home."
- How it works steps in plain language ("Tell us what you have", "We come to your door", "You get a receipt", "Materials are recovered safely")
- Add a short "Why this matters" paragraph in Bangla-friendly tone with a real local statistic
- Testimonials read like real people, not press releases
- FAQ expanded from 4 → 8 questions covering: data wiping certificates, what we accept/don't accept, free vs paid pickups, corporate volumes, what happens to materials, tax/CSR receipts, scheduling windows, areas covered

### 6. More info / new sections on landing
- **What we accept** strip: 10 device-type chips with icons (laptops, phones, TVs, ACs, batteries, cables, printers, monitors, kitchen appliances, IT gear) + a "Not sure? Ask us" link
- **Coverage map preview**: simple stylized SVG of Bangladesh with collection-point dots and a sentence about districts served
- **Press / partners** marquee row with logo placeholders (greyscale on hover → color)
- **Process timeline** (replacing or augmenting "How it works") with 5 steps and connector line
- **Materials recovered breakdown** mini-chart on landing (donut: copper / aluminum / plastics / glass / rare metals)
- **Founder note** card with handwritten-style signature

### 7. Per-page small enhancements
- **Services**: each service card gets a real photo header, a "Best for" tag, and an inline mini-FAQ
- **Impact**: add a "Where the materials go" Sankey-style stacked bar, plus a quote pull-out
- **About**: hero photo, milestone timeline visual with year markers, replace initials avatars with real team photos
- **Corporate**: add a logos strip and a 3-tier service comparison table
- **Contact**: prettier card layout with icons, business hours, and a "fastest reply via WhatsApp" hint
- **Blog**: cards get real cover images, reading time, author chip

### 8. Micro-interactions (subtle, not overdone)
- Section reveals: stagger fade-up
- Stat counters: keep
- CTA buttons: soft shadow lift + slight scale on hover (already present, refine timing)
- Image frames: very subtle tilt on hover (1.5deg)
- Remove: logo spin, any over-eager bouncing

### Out of scope
- No new routes, no backend, no CMS
- No video, no 3D, no heavy libraries beyond what's installed
- WhatsApp/phone numbers stay as placeholders

### Files touched
- `src/styles.css` (tokens, utilities)
- `src/lib/i18n.tsx` (copy rewrite, new keys)
- `src/components/site-header.tsx` (remove logo hover)
- `src/components/section-heading.tsx` (subtle refinements)
- New: `src/components/accepted-items.tsx`, `src/components/partners-marquee.tsx`, `src/components/coverage-map.tsx`, `src/components/founder-note.tsx`, `src/components/materials-donut.tsx`
- `src/routes/index.tsx` (hero rebuild, new sections)
- `src/routes/services.tsx`, `impact.tsx`, `about.tsx`, `corporate.tsx`, `contact.tsx`, `blog.tsx` (imagery + copy)
- New images in `src/assets/` (8–10 generated photos)
