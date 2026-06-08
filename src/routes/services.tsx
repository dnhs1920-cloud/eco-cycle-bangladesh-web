import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HardDrive,
  Home,
  Shield,
  Sparkles,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — EcoCycle Bangladesh" },
      {
        name: "description",
        content:
          "Residential pickups, office collections, school drives, NIST-grade data destruction, and certified refurbishment across Bangladesh.",
      },
      { property: "og:title", content: "Services — EcoCycle Bangladesh" },
      {
        property: "og:description",
        content:
          "Residential pickups, office collections, school drives, secure data destruction, and refurbishment.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Home,
    title: "Residential Collection",
    desc: "Free pickup for households with 3+ major items. We accept TVs, laptops, phones, kitchen appliances, batteries, and cables.",
    benefits: ["Zero cost for qualifying pickups", "Same-week scheduling", "Photo confirmation of pickup"],
    process: ["Book online or via WhatsApp", "We confirm time slot", "Doorstep pickup", "Digital receipt"],
  },
  {
    icon: Building2,
    title: "Office Collection",
    desc: "Recurring or on-demand office collections for SMEs. Bring your IT equipment back into the circular loop.",
    benefits: ["Flexible scheduling", "Bulk discounts", "ESG-ready reporting"],
    process: ["Quick inventory call", "On-site assessment", "Scheduled pickup", "Detailed report"],
  },
  {
    icon: GraduationCap,
    title: "School Collection Drives",
    desc: "We partner with schools across Bangladesh to host e-waste collection days and educational workshops for students.",
    benefits: ["Free workshop content", "On-site collection", "Community impact report"],
    process: ["Coordinate date", "Promote drive", "Collection day", "Refurbished devices donated back"],
  },
  {
    icon: Shield,
    title: "Secure Data Wiping",
    desc: "NIST 800-88 compliant data sanitization for drives that will be reused or donated. Documented and verifiable.",
    benefits: ["Compliance-ready certificates", "Full audit trail", "Compatible with HDD, SSD, NVMe"],
    process: ["Drive intake", "Multi-pass wipe", "Verification scan", "Certificate issued"],
  },
  {
    icon: HardDrive,
    title: "Hard Drive Destruction",
    desc: "Physical shredding for sensitive drives. We provide certificates of destruction and chain-of-custody documentation.",
    benefits: ["Witness destruction available", "Tamper-evident transport", "Serial-tracked"],
    process: ["Secure intake", "Tracked transport", "On-site or facility shred", "Certificate + video"],
  },
  {
    icon: Sparkles,
    title: "Device Refurbishment",
    desc: "Tested, repaired, and resold or donated. We extend the working life of laptops, phones, and peripherals.",
    benefits: ["Affordable second-life devices", "Donation programs for schools", "6-month warranty"],
    process: ["Diagnostic test", "Repair & clean", "Quality check", "Resold or donated"],
  },
];

function ServicesPage() {
  const { t } = useT();
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("nav.services")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {t("services.page.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("services.page.sub")}</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-primary text-white">
                  <s.icon className="size-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    {t("services.benefits")}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                    {t("services.process")}
                  </h3>
                  <ol className="mt-3 space-y-1.5 text-sm text-foreground/80">
                    {s.process.map((p, idx) => (
                      <li key={p} className="flex gap-2">
                        <span className="font-mono text-xs text-muted-foreground">0{idx + 1}</span>
                        {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <Link
                to="/schedule"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-primary underline decoration-brand-primary/20 underline-offset-4 hover:decoration-brand-primary"
              >
                {t("cta.schedule")} <ArrowRight className="size-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
