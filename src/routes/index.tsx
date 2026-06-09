import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Briefcase,
  Cable,
  Calendar,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Laptop,
  Monitor,
  PackageCheck,
  Plane,
  Printer,
  Recycle,
  Refrigerator,
  Ship,
  Smartphone,
  Sparkles,
  Truck,
  Tv,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { StatCounter } from "@/components/stat-counter";
import { Newsletter } from "@/components/newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Recycle.com — Bangladesh's Circular Electronics Network" },
      {
        name: "description",
        content:
          "Door-to-door e-waste pickup across Bangladesh. We recover copper, gold, palladium, rare earths, aluminium and indium — and we put the value back into local jobs.",
      },
      { property: "og:title", content: "E-Recycle.com" },
      {
        property: "og:description",
        content:
          "Pick-up, recover, refurbish. Bangladesh's circular electronics network.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <Stats />
      <AcceptedItems />
      <Materials />
      <Pricing />
      <HowItWorks />
      <YouthJobs />
      <Export />
      <Services />
      <Credits />
      <Testimonials />
      <FaqSection />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Newsletter />
        </div>
      </section>
      <CtaBanner />
    </PageShell>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute -top-32 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand-primary" />
              Now serving Dhaka, Chittagong & 12 more
            </div>
            <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-display sm:text-6xl lg:text-7xl">
              The pile in your<br />drawer is worth{" "}
              <span className="text-brand-primary">something.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Old phones, dead laptops, tangled chargers — we pick them up from your door,
              recover the copper, gold and rare earths inside, and put the value back into
              Bangladeshi jobs. No landfill. No shipping containers to nowhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/schedule"
                className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                {t("cta.schedule")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#materials"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:border-foreground/30"
              >
                See what we recover
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "Free home pickup",
                "Certified data wiping",
                "Receipt within 48h",
              ].map((line) => (
                <li key={line} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  // Animated periodic-table-style block. No image.
  const cells = [
    { s: "Cu", n: "Copper", c: "amber" },
    { s: "Au", n: "Gold", c: "amber" },
    { s: "Pd", n: "Palladium", c: "green" },
    { s: "Nd", n: "Neodymium", c: "green" },
    { s: "Al", n: "Aluminium", c: "muted" },
    { s: "In", n: "Indium", c: "amber" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      <div className="relative rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-brand-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              live recovery feed
            </span>
          </div>
          <span className="font-mono text-xs text-muted-foreground">/savar-01</span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {cells.map((c, i) => (
            <motion.div
              key={c.s}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-background p-3 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    c.c === "amber"
                      ? "size-1.5 rounded-full bg-brand-amber"
                      : c.c === "green"
                        ? "size-1.5 rounded-full bg-brand-primary"
                        : "size-1.5 rounded-full bg-muted-foreground/40"
                  }
                />
              </div>
              <div className="mt-3 font-display text-3xl font-bold">{c.s}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">{c.n}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              this month
            </div>
            <div className="mt-1 font-display text-2xl font-bold text-brand-primary">
              <StatCounter value={12400} /> kg
            </div>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              value recovered
            </div>
            <div className="mt-1 font-display text-2xl font-bold text-brand-amber">
              ৳<StatCounter value={48} />L
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- STATS ---------------- */

function Stats() {
  const stats = [
    { value: 450000, suffix: "+", label: "items collected since 2021" },
    { value: 152000, suffix: "+", label: "devices given a second life" },
    { value: 840, suffix: "t", label: "tonnes of CO₂ avoided" },
    { value: 64, suffix: "", label: "districts covered" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="p-8 md:p-10">
            <div className="font-display text-4xl font-bold tracking-display text-brand-primary md:text-5xl">
              <StatCounter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ACCEPTED ITEMS ---------------- */

function AcceptedItems() {
  const items = [
    { icon: Laptop, label: "Laptops" },
    { icon: Smartphone, label: "Phones & tablets" },
    { icon: Tv, label: "TVs & monitors" },
    { icon: Refrigerator, label: "Fridges & ACs" },
    { icon: BatteryCharging, label: "Batteries" },
    { icon: Cable, label: "Cables" },
    { icon: Printer, label: "Printers" },
    { icon: Monitor, label: "Servers" },
  ];
  return (
    <section className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="What we'll take"
            title="If it has a plug or a battery, we probably want it."
            subtitle="Not sure? Send a photo on WhatsApp. We'll tell you in minutes — no awkward back-and-forth."
          >
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary"
            >
              Ask on WhatsApp <ArrowRight className="size-4" />
            </a>
          </SectionHeading>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-foreground/30"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-brand-primary group-hover:text-primary-foreground">
                  <it.icon className="size-5" />
                </span>
                <span className="text-sm font-semibold">{it.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MATERIALS STREAMS ---------------- */

const MATERIALS = [
  {
    s: "Cu",
    name: "Clean Copper",
    price: "$6.00–$7.00/kg",
    desc: "Pulled from wiring harnesses, motors and PCB busbars. The backbone of every recovery line.",
    badge: "High volume, consistent demand",
    badgeColor: "muted" as const,
  },
  {
    s: "Au",
    name: "PCB Gold",
    price: "$4.00–$8.00/kg PCBs",
    desc: "From phone mainboards, RAM contacts and connectors. One tonne of phones yields ~140g of gold.",
    badge: "⚡ Highest value",
    badgeColor: "amber" as const,
  },
  {
    s: "Pd",
    name: "Palladium",
    price: "Fastest growing",
    desc: "Recovered from multilayer ceramic capacitors. Supply-constrained — every gram is bid on.",
    badge: "📈 EV-driven demand",
    badgeColor: "amber" as const,
  },
  {
    s: "Nd",
    name: "Rare Earth Magnets",
    price: "$15.00–$25.00/kg",
    desc: "From HDD spindle motors and speakers. Critical for EV traction motors and wind turbines.",
    badge: "📈 EV-driven demand",
    badgeColor: "amber" as const,
  },
  {
    s: "Al",
    name: "Aluminium",
    price: "$0.90–$1.20/kg",
    desc: "Laptop chassis, heat sinks, AC fins. Recycling it saves 95% of the energy of primary smelting.",
    badge: "Energy-positive",
    badgeColor: "muted" as const,
  },
  {
    s: "In",
    name: "Indium",
    price: "$150–$180/kg",
    desc: "From LCD panel ITO coatings. Sold to display makers in South Korea and Taiwan.",
    badge: "⚡ Highest value",
    badgeColor: "amber" as const,
  },
];

function Materials() {
  return (
    <section id="materials" className="border-b border-border surface-dark px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // material streams
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-display text-white md:text-5xl">
            What's actually inside your e-waste.
          </h2>
          <p className="mt-4 text-white/70">
            Every device is a small mine. Here are the six material streams we recover at our
            Savar facility, with current market prices and where the demand is heading.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m, i) => (
            <motion.article
              key={m.s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:bg-white/[0.06]"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-brand-primary transition-transform duration-500 group-hover:origin-top group-hover:scale-y-100" />
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm font-semibold text-brand-primary">{m.s}</span>
                <span className="font-mono text-xs text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">{m.name}</h3>
              <div className="mt-2 font-mono text-sm text-brand-amber">{m.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">{m.desc}</p>
              <div className="mt-6">
                <span
                  className={
                    m.badgeColor === "amber"
                      ? "inline-flex rounded-full border border-brand-amber/40 bg-brand-amber/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-amber"
                      : "inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/60"
                  }
                >
                  {m.badge}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */

const PRICING = [
  {
    name: "Household",
    price: "Free",
    desc: "Three or more major items, anywhere in our covered cities. No fees, no fine print.",
    features: [
      "Free home pickup",
      "Certified data wipe",
      "Digital impact receipt",
      "Same-week scheduling",
    ],
    cta: "Schedule pickup",
    to: "/schedule" as const,
    highlight: false,
  },
  {
    name: "Small business",
    price: "৳2,500",
    suffix: "/pickup",
    desc: "Up to 25 mixed items from one location. Perfect for office refreshes and clean-outs.",
    features: [
      "Scheduled or one-off",
      "Asset list & weight report",
      "Data destruction certificate",
      "Invoice with VAT",
    ],
    cta: "Get a quote",
    to: "/services" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Multi-site decommissioning, secure transport, chain-of-custody, CSR reporting.",
    features: [
      "Per-device serial tracking",
      "On-site shredding option",
      "Quarterly ESG dashboard",
      "Co-branded donation drives",
    ],
    cta: "Talk to sales",
    to: "/corporate" as const,
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Honest pricing. No surprises."
          subtitle="Most pickups are free. The rest we quote up front, in writing, before we send a van."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PRICING.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={
                p.highlight
                  ? "relative flex flex-col rounded-2xl border-2 border-foreground bg-card p-8"
                  : "relative flex flex-col rounded-2xl border border-border bg-card p-8"
              }
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-foreground px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-background">
                  most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-display">{p.price}</span>
                {p.suffix && (
                  <span className="font-mono text-sm text-muted-foreground">{p.suffix}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={p.to}
                className={
                  p.highlight
                    ? "mt-8 inline-flex items-center justify-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-foreground/85"
                    : "mt-8 inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold hover:border-foreground/40"
                }
              >
                {p.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */

function HowItWorks() {
  const steps = [
    { icon: Calendar, t: "Tell us what you have", d: "Two-minute form or a WhatsApp photo. That's all we need to plan." },
    { icon: Truck, t: "We come to your door", d: "Pick a 2-hour window. Our team arrives, weighs everything, signs a receipt." },
    { icon: Recycle, t: "Wipe, sort, recover", d: "Drives wiped to NIST 800-88. Working devices refurbished, the rest dismantled." },
    { icon: PackageCheck, t: "You get the proof", d: "Within a week, a digital report shows where every gram went." },
  ];
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The process"
          title="Four steps, zero hassle."
          subtitle="Most pickups happen within 48 hours of the request."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card p-8"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-lg bg-foreground text-background">
                  <s.icon className="size-4" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- YOUTH JOBS ---------------- */

function YouthJobs() {
  const points = [
    {
      icon: Users,
      title: "84 full-time jobs",
      body: "From route drivers in Dhaka to refurbishment technicians in Savar — all paid above the national minimum.",
    },
    {
      icon: GraduationCap,
      title: "Apprenticeships for school leavers",
      body: "12-month paid programs in electronics repair, with most graduates going on to full-time roles or starting their own shops.",
    },
    {
      icon: Wrench,
      title: "Skills that compound",
      body: "Our technicians can diagnose, solder, recover precious metals — skills that earn higher wages anywhere in Asia.",
    },
    {
      icon: Briefcase,
      title: "Women-led routes",
      body: "Four of our seven city routes are managed by women, against an industry that's still mostly male.",
    },
  ];
  return (
    <section className="border-b border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Youth & jobs"
            title="Recovered metals. Recovered futures."
            subtitle="Every kilogram of e-waste we process creates roughly 7x more local employment than landfilling it would. We deliberately design our operations around that."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 grid size-10 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPORT ---------------- */

const EXPORT_FLOWS = [
  {
    icon: Ship,
    title: "Copper, aluminium & steel",
    where: "Chittagong → Singapore, Malaysia",
    body: "Containerised in baled form, sold to LME-registered smelters with audit trails.",
  },
  {
    icon: Plane,
    title: "PCB gold & palladium concentrate",
    where: "Dhaka → Belgium (Umicore), Japan",
    body: "Small high-value shipments by airfreight, recovered in zero-discharge precious metal refineries.",
  },
  {
    icon: Ship,
    title: "Rare earth magnet stock",
    where: "Chittagong → South Korea",
    body: "Dismantled HDD magnets shipped to specialist recyclers feeding EV motor lines.",
  },
  {
    icon: Globe2,
    title: "Indium-bearing LCD glass",
    where: "Dhaka → Taiwan, Germany",
    body: "Sorted and pre-processed before export to display-grade recovery plants.",
  },
];

function Export() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Where it goes"
          title="From a Dhaka rooftop to a global refinery."
          subtitle="We don't burn it. We don't bury it. We bale it, document it, and ship it to licensed downstream processors. Here's the actual map."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {EXPORT_FLOWS.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex gap-5 rounded-2xl border border-border bg-card p-7 transition-colors hover:border-foreground/30"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-foreground text-background">
                <e.icon className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-brand-primary">
                  {e.where}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

const SERVICES = [
  {
    icon: Truck,
    title: "Home pickup",
    desc: "Free residential collection for households with three or more items.",
    to: "/schedule" as const,
  },
  {
    icon: Sparkles,
    title: "Office collection",
    desc: "Scheduled and one-off pickups for SMEs across Bangladesh's commercial districts.",
    to: "/services" as const,
  },
  {
    icon: Zap,
    title: "Corporate ITAD",
    desc: "Enterprise IT asset disposition with full chain-of-custody and CSR reporting.",
    to: "/corporate" as const,
  },
];

function Services() {
  return (
    <section className="border-b border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="One partner for the whole lifecycle."
            subtitle="Single broken phone or a server room — we've handled it. Safely. On time. With paperwork."
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            All services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="mb-6 grid size-11 place-items-center rounded-lg bg-foreground text-background">
                <s.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary">
                Learn more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CREDITS ---------------- */

const STUDENTS = [
  { name: "Rizwan", track: "Science" },
  { name: "Rohan", track: "Humanities" },
  { name: "Aiman", track: "Science" },
  { name: "Anjum", track: "Science" },
];

function Credits() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // built with
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-display md:text-4xl">
            With thanks to the students of D.N. High School.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            This project would not exist without four students who researched, prototyped and
            field-tested the idea long before the first pickup van rolled out.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STUDENTS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-background p-5"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </div>
                <div className="mt-3 font-display text-xl font-bold">{s.name}</div>
                <div className="mt-1 text-sm text-brand-primary">{s.track}</div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            D.N. High School — for trusting four teenagers with a real-world problem.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "They picked up three boxes of old monitors from our Banani office within a day. Smooth, secure, certificate in my inbox by evening.",
    name: "Tasnim Rahman",
    role: "Operations Lead, BRAC",
  },
  {
    quote:
      "I'd been hoarding old phones for years. The team showed up on time, weighed everything, and refurbished two for a local school.",
    name: "Arif Hossain",
    role: "Resident, Dhanmondi",
  },
  {
    quote:
      "Their corporate ITAD report cleared our compliance team in one round. Best e-waste partner we've ever used.",
    name: "Mehnaz Karim",
    role: "IT Director, Standard Bank",
  },
];

function Testimonials() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="People who tried us"
          title="And stayed."
          align="center"
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((tt, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="flex-1 font-display text-lg leading-relaxed">
                "{tt.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{tt.name}</div>
                <div className="text-sm text-muted-foreground">{tt.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FaqSection() {
  const { t } = useT();
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
  ];
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions we hear every week." align="center" />
        <Accordion type="single" collapsible className="mt-10">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CTA BANNER ---------------- */

function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4">
      <div className="relative overflow-hidden rounded-3xl border border-border surface-dark px-8 py-20 md:px-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-display text-white md:text-5xl">
            Got a pile of old electronics? Let's deal with it.
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Book a free pickup in under two minutes. We handle the lifting, the wiping and the
            paperwork — you just open the door.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/schedule"
              className="rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-black hover:bg-white/90"
            >
              Schedule pickup
            </Link>
            <Link
              to="/contact"
              className="rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
