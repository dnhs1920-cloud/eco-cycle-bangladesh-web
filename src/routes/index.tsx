import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Cpu,
  Factory,
  Leaf,
  PackageCheck,
  Recycle,
  Shield,
  ShieldCheck,
  Sparkles,
  Truck,
  Wallet,
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
      { title: "EcoCycle Bangladesh — Schedule E-Waste Pickup" },
      {
        name: "description",
        content:
          "Turn electronic waste into environmental impact. Schedule safe, certified e-waste pickup across Bangladesh — for homes, offices, and enterprises.",
      },
      { property: "og:title", content: "EcoCycle Bangladesh — Schedule E-Waste Pickup" },
      {
        property: "og:description",
        content:
          "Safe, responsible, and convenient e-waste collection across Bangladesh.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useT();
  return (
    <PageShell>
      <Hero />
      <Stats />
      <HowItWorks />
      <Services />
      <Benefits />
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
  void t;
}

function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:pt-24">
      <div className="pointer-events-none absolute -top-32 right-0 -z-10 size-[600px] rounded-full bg-brand-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 -z-10 size-[500px] rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-primary" />
              </span>
              {t("hero.badge")}
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              {t("hero.title.a")}{" "}
              <span className="relative inline-block text-brand-primary">
                {t("hero.title.b")}
                <svg
                  aria-hidden
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-accent/60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 50 0 100 6 T 198 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/schedule"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-dark px-7 py-4 font-bold text-white transition-all hover:bg-brand-primary"
              >
                {t("cta.schedule")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-4 font-bold text-foreground transition-all hover:bg-muted"
              >
                {t("cta.learnMore")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary via-brand-primary/90 to-brand-dark p-10 text-white shadow-2xl shadow-brand-primary/20">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 400 400" className="size-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="400" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-white/10 backdrop-blur">
                    <Recycle className="size-7" />
                  </div>
                  <div className="rounded-full bg-brand-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-dark">
                    Live
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[Cpu, Factory, Shield].map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="aspect-square rounded-xl bg-white/10 p-3 backdrop-blur"
                      >
                        <Icon className="size-full opacity-80" strokeWidth={1.5} />
                      </motion.div>
                    ))}
                  </div>
                  <div>
                    <div className="font-display text-4xl font-bold">98%</div>
                    <div className="text-sm text-white/70">Material recovery rate</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card p-5 shadow-xl"
            >
              <div className="font-display text-3xl font-bold text-brand-primary">
                <StatCounter value={45000} suffix="+" />
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {t("hero.stat.label")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 -right-4 hidden rounded-2xl border border-border bg-card p-4 shadow-xl md:flex md:items-center md:gap-3"
            >
              <div className="grid size-10 place-items-center rounded-full bg-brand-accent/30">
                <Leaf className="size-5 text-brand-primary" />
              </div>
              <div className="text-sm">
                <div className="font-bold">Carbon neutral</div>
                <div className="text-xs text-muted-foreground">certified 2024</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const { t } = useT();
  const stats = [
    { value: 450000, suffix: "+", label: t("stats.collected") },
    { value: 152000, suffix: "+", label: t("stats.refurbished") },
    { value: 840, suffix: "t", label: t("stats.co2") },
    { value: 64, suffix: "", label: t("stats.communities") },
  ];
  return (
    <section className="border-y border-border/60 bg-card px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="By the numbers"
          title={t("stats.heading")}
          subtitle={t("stats.sub")}
          align="center"
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border/60 bg-background p-8 text-center"
            >
              <div className="font-display text-5xl font-bold tracking-tight text-brand-primary">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { t } = useT();
  const steps = [
    { icon: Calendar, t: t("how.s1.t"), d: t("how.s1.d") },
    { icon: Truck, t: t("how.s2.t"), d: t("how.s2.d") },
    { icon: Recycle, t: t("how.s3.t"), d: t("how.s3.d") },
    { icon: PackageCheck, t: t("how.s4.t"), d: t("how.s4.d") },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The process"
          title={t("how.heading")}
          subtitle={t("how.sub")}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/5"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-xl bg-brand-primary text-white">
                  <s.icon className="size-5" />
                </div>
                <span className="font-display text-3xl font-bold text-brand-accent/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Truck,
    title: "Home Pickup",
    desc: "Free residential collection for households with 3+ items. TVs, laptops, and appliances welcome.",
    cta: "cta.bookNow",
    to: "/schedule" as const,
  },
  {
    icon: Factory,
    title: "Business Collection",
    desc: "Scheduled office pickups for SMEs across Bangladesh's commercial districts.",
    cta: "cta.getQuote",
    to: "/services" as const,
  },
  {
    icon: ShieldCheck,
    title: "Corporate E-Waste",
    desc: "Enterprise ITAD with full chain-of-custody, certification, and CSR reporting.",
    cta: "cta.inquire",
    to: "/corporate" as const,
  },
  {
    icon: Shield,
    title: "Data Destruction",
    desc: "NIST 800-88 wiping and physical shredding with audit trails and certificates.",
    cta: "cta.getQuote",
    to: "/services" as const,
  },
  {
    icon: Sparkles,
    title: "Device Refurbishment",
    desc: "Repaired and donated to underprivileged schools and small businesses.",
    cta: "cta.learnMore",
    to: "/services" as const,
  },
];

function Services() {
  const { t } = useT();
  return (
    <section className="bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={t("services.heading")}
            subtitle={t("services.sub")}
          />
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-primary"
          >
            {t("cta.allServices")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl"
            >
              <div className="mb-6 grid size-12 place-items-center rounded-xl bg-brand-primary text-white transition-colors group-hover:bg-brand-dark">
                <s.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <Link
                to={s.to}
                className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-primary underline decoration-brand-primary/20 underline-offset-4 hover:decoration-brand-primary"
              >
                {t(s.cta)} <ArrowRight className="size-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const { t } = useT();
  const items = [
    { icon: Leaf, t: t("benefits.eco.t"), d: t("benefits.eco.d") },
    { icon: Shield, t: t("benefits.data.t"), d: t("benefits.data.d") },
    { icon: Wallet, t: t("benefits.afford.t"), d: t("benefits.afford.d") },
    { icon: Calendar, t: t("benefits.convenient.t"), d: t("benefits.convenient.d") },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Benefits" title={t("benefits.heading")} align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 inline-grid size-11 place-items-center rounded-xl bg-brand-accent/30 text-brand-primary">
                <it.icon className="size-5" />
              </div>
              <h3 className="font-display text-base font-bold">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "EcoCycle picked up three boxes of old monitors from our Banani office within a day. Smooth, secure, and they sent a certificate.",
    name: "Tasnim Rahman",
    role: "Operations Lead, Brac",
  },
  {
    quote:
      "I'd been hoarding old phones for years. The team arrived on time, weighed everything, and even refurbished two for a local school.",
    name: "Arif Hossain",
    role: "Resident, Dhanmondi",
  },
  {
    quote:
      "Their corporate ITAD report satisfied our compliance team in one round. Best e-waste partner we've worked with.",
    name: "Mehnaz Karim",
    role: "IT Director, Standard Bank",
  },
];

function Testimonials() {
  const { t } = useT();
  return (
    <section className="bg-card px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={t("testimonials.heading")}
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-background p-8"
            >
              <CheckCircle2 className="size-7 text-brand-primary" />
              <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6">
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { t } = useT();
  const items = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="FAQ" title={t("faq.heading")} align="center" />
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

function CtaBanner() {
  const { t } = useT();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary px-8 py-20 text-center text-white md:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-accent/15" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-4xl font-bold md:text-5xl">{t("cta.banner.heading")}</h2>
          <p className="mt-6 text-lg text-white/80">{t("cta.banner.sub")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/schedule"
              className="rounded-full bg-brand-accent px-8 py-4 font-bold text-brand-dark transition-all hover:scale-105 hover:bg-white"
            >
              {t("cta.scheduleNow")}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
            >
              {t("cta.contactSales")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
