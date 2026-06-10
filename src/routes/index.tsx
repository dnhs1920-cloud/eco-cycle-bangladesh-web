import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Calendar,
  CheckCircle2,
  DollarSign,
  Laptop,
  Monitor,
  PackageCheck,
  Printer,
  Recycle,
  Shield,
  Smartphone,
  Tablet,
  Truck,
  Tv,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { Newsletter } from "@/components/newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Recycle.com — Get Paid to Recycle Your Old Electronics" },
      {
        name: "description",
        content:
          "We buy your old phones, laptops, and gadgets at fair market rates. Free doorstep pickup, certified data wiping, instant payouts.",
      },
      { property: "og:title", content: "E-Recycle.com — Turn Old Tech Into Cash" },
      {
        property: "og:description",
        content: "Get paid for your e-waste. Free pickup, secure data wipe, instant rewards.",
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
      <GlobalStats />
      <AcceptedItems />
      <RateCard />
      <HowItWorks />
      <WhyTrust />
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

/* ---------------- HERO with Value Estimator ---------------- */

type DeviceKey = "phone" | "laptop" | "tablet" | "desktop";
type ConditionKey = "working" | "damaged" | "dead";

const DEVICE_RANGES: Record<DeviceKey, { label: string; max: number; min: number }> = {
  phone: { label: "Smartphone", max: 150, min: 15 },
  laptop: { label: "Laptop", max: 250, min: 25 },
  tablet: { label: "Tablet", max: 100, min: 10 },
  desktop: { label: "Desktop / Tower", max: 180, min: 20 },
};

const CONDITION_MULTIPLIER: Record<ConditionKey, { label: string; lo: number; hi: number }> = {
  working: { label: "Working", lo: 0.6, hi: 1.0 },
  damaged: { label: "Damaged but powers on", lo: 0.3, hi: 0.6 },
  dead: { label: "Dead / for parts", lo: 0.1, hi: 0.3 },
};

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="absolute -top-32 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[20rem] w-[20rem] rounded-full bg-brand-amber/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/80">
              <span className="size-1.5 rounded-full bg-brand-amber" />
              From trash to treasure
            </div>
            <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-display sm:text-6xl lg:text-7xl">
              Turn old tech into{" "}
              <span className="text-brand-primary">cash.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              That dead phone, dusty laptop, or tangled cable pile? It's worth real money.
              We pay fair market rates, pick up from your door for free, and wipe your data
              the right way.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                "Instant payout on pickup",
                "NIST 800-88 data wipe",
                "Zero hidden fees",
              ].map((line) => (
                <li key={line} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <ValueEstimator />
        </div>
      </div>
    </section>
  );
}

function ValueEstimator() {
  const [device, setDevice] = useState<DeviceKey>("laptop");
  const [condition, setCondition] = useState<ConditionKey>("working");

  const range = useMemo(() => {
    const d = DEVICE_RANGES[device];
    const c = CONDITION_MULTIPLIER[condition];
    return {
      lo: Math.round(d.max * c.lo),
      hi: Math.round(d.max * c.hi),
    };
  }, [device, condition]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-brand-amber/15 text-brand-amber">
            <DollarSign className="size-4" />
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/80">
            Instant Value Estimator
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">/no signup</span>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Device type
          </label>
          <Select value={device} onValueChange={(v) => setDevice(v as DeviceKey)}>
            <SelectTrigger className="h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(DEVICE_RANGES) as DeviceKey[]).map((k) => (
                <SelectItem key={k} value={k}>
                  {DEVICE_RANGES[k].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Condition
          </label>
          <Select value={condition} onValueChange={(v) => setCondition(v as ConditionKey)}>
            <SelectTrigger className="h-11 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(CONDITION_MULTIPLIER) as ConditionKey[]).map((k) => (
                <SelectItem key={k} value={k}>
                  {CONDITION_MULTIPLIER[k].label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <motion.div
        key={`${device}-${condition}`}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-6 rounded-2xl border border-border bg-background p-5"
      >
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          Estimated payout
        </div>
        <div className="mt-1 font-display text-4xl font-bold tracking-display text-brand-primary">
          ${range.lo}–${range.hi}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Final offer confirmed on-site after our technician inspects the device.
        </p>
      </motion.div>

      <Link
        to="/schedule"
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Schedule a Free Pickup
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.div>
  );
}

/* ---------------- GLOBAL E-WASTE STATS ---------------- */

function GlobalStats() {
  const stats = [
    {
      value: "62M",
      suffix: " tonnes",
      label: "of e-waste generated globally each year",
      source: "UN Global E-Waste Monitor, 2024",
    },
    {
      value: "22%",
      suffix: "",
      label: "is formally collected and recycled",
      source: "UN Global E-Waste Monitor, 2024",
    },
    {
      value: "$91B",
      suffix: "",
      label: "in recoverable raw materials lost every year",
      source: "UNITAR",
    },
    {
      value: "70%",
      suffix: "",
      label: "of hazardous waste in landfills comes from electronics",
      source: "U.S. EPA",
    },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // why this matters
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-display md:text-4xl">
            The world is buried in e-waste. We pay you to dig out.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card p-8">
              <div className="font-display text-4xl font-bold tracking-display text-brand-primary md:text-5xl">
                {s.value}
                <span className="text-2xl md:text-3xl">{s.suffix}</span>
              </div>
              <div className="mt-3 text-sm text-foreground/80">{s.label}</div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACCEPTED ITEMS ---------------- */

function AcceptedItems() {
  const items = [
    { icon: Smartphone, label: "Smartphones" },
    { icon: Laptop, label: "Laptops" },
    { icon: Tablet, label: "Tablets" },
    { icon: Monitor, label: "Desktops" },
    { icon: Tv, label: "TVs & monitors" },
    { icon: BatteryCharging, label: "Batteries" },
    { icon: Cable, label: "Cables & chargers" },
    { icon: Printer, label: "Printers" },
  ];
  return (
    <section className="border-b border-border px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="What we buy"
            title="If it has a plug, a battery, or a screen — we want it."
            subtitle="Not sure if we accept your item? Send a photo over WhatsApp and we'll quote it in minutes."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {items.map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-brand-primary/40"
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

/* ---------------- RATE CARD (replaces tiered pricing) ---------------- */

const RATES = [
  { icon: Laptop, name: "Laptops", payout: "Up to $250", note: "MacBooks, ultrabooks, gaming rigs" },
  { icon: Smartphone, name: "Smartphones", payout: "Up to $150", note: "iPhone, Samsung flagships, Pixel" },
  { icon: Tablet, name: "Tablets", payout: "Up to $100", note: "iPad, Galaxy Tab, Surface" },
  { icon: Monitor, name: "Desktops", payout: "Up to $180", note: "Towers, all-in-ones, workstations" },
  { icon: Tv, name: "TVs & Monitors", payout: "Up to $80", note: "LED, OLED, gaming monitors" },
  { icon: Printer, name: "Printers & Peripherals", payout: "Up to $40", note: "Inkjet, laser, all-in-one" },
  { icon: BatteryCharging, name: "Batteries (bulk)", payout: "$2–$8 / kg", note: "Li-ion, lead acid, NiMH" },
  { icon: Cable, name: "Cables & Chargers (kg)", payout: "$3–$10 / kg", note: "Copper-rich cabling" },
];

function RateCard() {
  return (
    <section id="pricing" className="border-b border-border surface-dark px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // device category rate card
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-display text-white md:text-5xl">
            Maximum payouts, fully transparent.
          </h2>
          <p className="mt-4 text-white/70">
            Every device is graded against the same public rate card. Best condition, fully
            working flagship models earn the maximum — we'll show you the math on pickup.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RATES.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
            >
              <span className="absolute left-0 top-0 h-full w-[3px] origin-bottom scale-y-0 bg-brand-primary transition-transform duration-500 group-hover:origin-top group-hover:scale-y-100" />
              <div className="grid size-11 place-items-center rounded-lg bg-white/5 text-brand-primary">
                <r.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{r.name}</h3>
              <div className="mt-2 font-display text-2xl font-bold tracking-display text-brand-amber">
                {r.payout}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">{r.note}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-white/50">
          Rates updated monthly against LME and component spot markets.
        </p>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */

function HowItWorks() {
  const steps = [
    { icon: Calendar, t: "Get an instant estimate", d: "Use the estimator above or send a WhatsApp photo. Takes 60 seconds." },
    { icon: Truck, t: "We pick up — free", d: "Choose a 2-hour window. Our team arrives, inspects, and confirms your offer." },
    { icon: DollarSign, t: "Get paid on the spot", d: "Cash, bank transfer, or mobile wallet — whichever you prefer." },
    { icon: PackageCheck, t: "Track where it goes", d: "Within a week, a digital report shows your data wipe certificate and material flow." },
  ];
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. Money in your hand."
          subtitle="Most pickups happen within 48 hours of your request."
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
                <span className="grid size-10 place-items-center rounded-lg bg-brand-primary text-primary-foreground">
                  <s.icon className="size-4" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
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

/* ---------------- WHY TRUST US ---------------- */

function WhyTrust() {
  const points = [
    {
      icon: DollarSign,
      title: "Fair market rates",
      body: "Our payouts track London Metal Exchange spot prices and refurb resale values — never lowballed.",
    },
    {
      icon: Shield,
      title: "Certified data destruction",
      body: "NIST 800-88 wiping on every drive. Signed certificate emailed within 24 hours.",
    },
    {
      icon: Recycle,
      title: "Zero landfill, full traceability",
      body: "Everything is dismantled and routed to licensed refiners. We publish a quarterly material report.",
    },
    {
      icon: Users,
      title: "Real jobs, not gig labor",
      body: "Our technicians are full-time staff with training, benefits, and protective gear.",
    },
  ];
  return (
    <section className="border-b border-border bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Why people choose us"
            title="Responsible disposal, with instant rewards."
            subtitle="We replace the guilt of throwing electronics away with the surprise of getting paid for them."
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

/* ---------------- TESTIMONIALS ---------------- */

const TESTIMONIALS = [
  {
    quote: "Sold a 4-year-old MacBook I assumed was worthless. They paid $180 on the spot and emailed the wipe certificate the next day.",
    name: "Tasnim Rahman",
    role: "Designer",
  },
  {
    quote: "Cleared out our office storeroom — 12 old laptops, a stack of monitors, and three printers. Got a fair quote and a single tax receipt.",
    name: "Arif Hossain",
    role: "Operations Lead",
  },
  {
    quote: "Easiest way I've ever recycled anything. The estimator on the homepage was spot-on with what I actually got paid.",
    name: "Mehnaz Karim",
    role: "Product Manager",
  },
];

function Testimonials() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="From people who tried us" title="And kept coming back." align="center" />
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

const FAQ = [
  {
    q: "How do you decide what my device is worth?",
    a: "We grade each item on model, age, condition, and current component / refurb resale values. The estimator gives you a range; the final offer is locked in after a 5-minute inspection at pickup.",
  },
  {
    q: "Do I really get paid on the spot?",
    a: "Yes. Cash up to a set limit, or instant bank / mobile wallet transfer — your choice. Larger corporate pickups settle within 24 hours.",
  },
  {
    q: "What happens to my data?",
    a: "Every storage device is wiped to NIST 800-88 standard before it leaves our facility, and you get a signed Certificate of Data Destruction. Drives that can't be wiped are shredded on camera.",
  },
  {
    q: "What if my device is broken or dead?",
    a: "Still worth money. We pay for raw materials and reusable components — even a smashed laptop has $20–$40 of recoverable parts and metals.",
  },
  {
    q: "Is the pickup actually free?",
    a: "Yes, for any pickup with a confirmed quote above $20. No call-out fees, no surprises.",
  },
  {
    q: "Where does my old device end up?",
    a: "Refurbishable items are repaired and resold or donated. The rest is dismantled and routed to licensed downstream refiners in Belgium, Japan, Singapore and South Korea.",
  },
];

function FaqSection() {
  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions we hear every week." align="center" />
        <Accordion type="single" collapsible className="mt-10">
          {FAQ.map((it, i) => (
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
            Your drawer is hiding money.
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Get a free pickup, a fair price, and the satisfaction of doing it right.
            Two minutes to book.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-brand-primary/90"
            >
              Schedule a Free Pickup
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5"
            >
              See our services
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
