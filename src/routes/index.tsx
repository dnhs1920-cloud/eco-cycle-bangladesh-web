import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Cable,
  Calendar,
  CheckCircle2,
  Cpu,
  Factory,
  Laptop,
  Leaf,
  MapPin,
  Monitor,
  PackageCheck,
  Printer,
  Recycle,
  Refrigerator,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tv,
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
import heroPickup from "@/assets/hero-pickup.jpg";
import circuitMoss from "@/assets/circuit-moss.jpg";
import facilityImg from "@/assets/facility.jpg";
import itemsFlatlay from "@/assets/items-flatlay.jpg";

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
  return (
    <PageShell>
      <Hero />
      <Partners />
      <Stats />
      <AcceptedItems />
      <HowItWorks />
      <Services />
      <FacilityFeature />
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
}

function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-12 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 10%, color-mix(in oklab, var(--brand-citron) 55%, transparent) 0%, transparent 70%), radial-gradient(50% 50% at 90% 90%, color-mix(in oklab, var(--brand-sky) 18%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-primary backdrop-blur">
              <MapPin className="size-3.5" />
              {t("hero.badge")}
            </div>
            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.02] tracking-display md:text-[5.5rem]">
              {t("hero.title.a")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-primary">{t("hero.title.b")}</span>
                <svg
                  aria-hidden
                  viewBox="0 0 200 14"
                  className="absolute -bottom-1 left-0 h-3 w-full text-brand-citron"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 Q 50 2 100 8 T 198 6"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <Link
                to="/schedule"
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-primary px-7 py-4 font-bold text-white shadow-lifted transition-all hover:bg-brand-dark"
              >
                {t("cta.schedule")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-4 font-bold text-foreground transition-all hover:border-brand-primary/30 hover:bg-muted"
              >
                Chat on WhatsApp
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {[
                t("hero.trust.pickup"),
                t("hero.trust.data"),
                t("hero.trust.report"),
              ].map((line) => (
                <li key={line} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-primary" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lifted">
              <img
                src={heroPickup}
                alt="EcoCycle technician receiving old laptops from a family in Dhaka"
                width={1024}
                height={1280}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/45 via-transparent to-transparent" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-brand-primary backdrop-blur">
                <span className="size-2 animate-pulse rounded-full bg-brand-clay" />
                Dhaka · this afternoon
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-4 max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-lifted sm:-left-8"
            >
              <div className="font-display text-3xl font-bold text-brand-primary">
                <StatCounter value={452000} suffix="" />
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {t("hero.stat.label")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-card p-4 shadow-soft md:flex md:items-center md:gap-3"
            >
              <div className="grid size-10 place-items-center rounded-full bg-brand-citron text-brand-primary">
                <Leaf className="size-5" />
              </div>
              <div className="text-sm leading-tight">
                <div className="font-bold">Carbon neutral</div>
                <div className="text-xs text-muted-foreground">certified 2024</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="absolute -bottom-8 right-2 hidden rounded-2xl border border-border bg-brand-dark p-4 text-white shadow-lifted sm:block"
            >
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-brand-citron">
                <Cpu className="size-3.5" /> 98%
              </div>
              <div className="mt-1 text-xs text-white/80">material recovery rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AcceptedItems() {
  const { t } = useT();
  const items = [
    { icon: Laptop, label: "Laptops" },
    { icon: Smartphone, label: "Phones & tablets" },
    { icon: Tv, label: "TVs & monitors" },
    { icon: Refrigerator, label: "Fridges & ACs" },
    { icon: BatteryCharging, label: "Batteries" },
    { icon: Cable, label: "Cables & chargers" },
    { icon: Printer, label: "Printers" },
    { icon: Monitor, label: "Desktops & servers" },
  ];
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="What we accept"
            title={t("accepted.heading")}
            subtitle={t("accepted.sub")}
          >
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary underline decoration-brand-citron decoration-4 underline-offset-4"
            >
              {t("accepted.cta")} <ArrowRight className="size-4" />
            </a>
          </SectionHeading>
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {items.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-primary/40 hover:bg-brand-citron/30"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-citron text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <it.icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold">{it.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src={itemsFlatlay}
                alt="A flat-lay of common household electronics we accept for recycling"
                loading="lazy"
                width={1600}
                height={1000}
                className="h-48 w-full object-cover md:h-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "BRAC",
    "Grameenphone",
    "BSRM",
    "City Bank",
    "bKash",
    "Pathao",
    "Robi",
    "IDLC",
  ];
  return (
    <section className="border-y border-border/60 bg-card px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by teams across Bangladesh
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div
              key={p}
              className="text-center font-display text-base font-bold tracking-tight text-muted-foreground/70 transition-colors hover:text-brand-primary"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityFeature() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl"
        >
          <img
            src={facilityImg}
            alt="Workers in our Savar recycling facility sorting components into colour-coded bins"
            loading="lazy"
            width={1600}
            height={900}
            className="size-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative flex flex-col justify-between overflow-hidden rounded-3xl p-10 text-white surface-dark"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-citron">
              Inside our facility
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-display md:text-4xl">
              Every gram is sorted by hand, then by machine.
            </h2>
            <p className="mt-4 max-w-md text-white/80">
              Our Savar facility processes around 12 tonnes of electronics every week. Each
              device is logged, wiped, and dismantled into copper, aluminium, steel, glass
              and plastic streams — then sold to licensed downstream processors. Nothing
              gets buried.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {[
              { v: "12t", l: "processed weekly" },
              { v: "98%", l: "recovery rate" },
              { v: "0%", l: "to landfill" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-brand-citron">{s.v}</div>
                <div className="text-xs text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
          <img
            src={circuitMoss}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-2xl object-cover opacity-30"
          />
        </motion.div>
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
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
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
      <div className="relative overflow-hidden rounded-[2.5rem] surface-dark px-8 py-20 md:px-16">
        <img
          src={facilityImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-15"
        />
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-brand-citron/15" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-brand-sky/15" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-display md:text-5xl">
            {t("cta.banner.heading")}
          </h2>
          <p className="mt-6 text-lg text-white/85">{t("cta.banner.sub")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/schedule"
              className="rounded-full bg-brand-citron px-8 py-4 font-bold text-brand-dark transition-all hover:scale-105 hover:bg-white"
            >
              {t("cta.scheduleNow")}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/25 px-8 py-4 font-bold text-white transition-all hover:bg-white/10"
            >
              {t("cta.contactSales")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
