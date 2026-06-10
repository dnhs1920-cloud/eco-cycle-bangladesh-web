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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — E-Recycle.com" },
      {
        name: "description",
        content:
          "Residential buyback, office IT asset disposition, school drives, certified data destruction, and refurbishment programs.",
      },
      { property: "og:title", content: "Services — E-Recycle.com" },
      {
        property: "og:description",
        content: "From single devices to full office decommissions — paid pickups, certified data wipe, audited downstream recovery.",
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
    title: "Residential Buyback",
    desc: "Free doorstep pickup for households. We quote your devices, pay on the spot, and email a digital receipt.",
    benefits: ["Instant payout on pickup", "Free for orders above $20", "Same-week scheduling"],
    process: ["Get an instant estimate", "Confirm time slot", "On-site inspection", "Cash or bank transfer"],
  },
  {
    icon: Building2,
    title: "Office Collection",
    desc: "Recurring or one-off collection for SMEs. Turn office refreshes into measurable revenue with audit-ready paperwork.",
    benefits: ["Volume-based pricing", "Consolidated reporting", "Flexible scheduling"],
    process: ["Quick inventory call", "On-site assessment", "Scheduled pickup", "Detailed valuation report"],
  },
  {
    icon: GraduationCap,
    title: "School & Community Drives",
    desc: "We host buyback collection days and run free e-waste education workshops with proceeds donated back to the school.",
    benefits: ["Free workshop content", "On-site collection day", "Community impact report"],
    process: ["Coordinate date", "Promote drive", "Collection day", "Donation summary"],
  },
  {
    icon: Shield,
    title: "Certified Data Wiping",
    desc: "NIST 800-88 compliant data sanitization for any drive being reused, resold, or donated. Documented and verifiable.",
    benefits: ["Compliance-ready certificate", "Full audit trail", "HDD, SSD, NVMe supported"],
    process: ["Drive intake", "Multi-pass wipe", "Verification scan", "Signed certificate"],
  },
  {
    icon: HardDrive,
    title: "Hard Drive Destruction",
    desc: "Physical shredding for sensitive drives. Witness destruction, tamper-evident transport, and serial tracking.",
    benefits: ["Witness destruction available", "Tamper-evident transport", "Serial-tracked"],
    process: ["Secure intake", "Tracked transport", "On-site or facility shred", "Certificate + video"],
  },
  {
    icon: Sparkles,
    title: "Device Refurbishment",
    desc: "Tested, repaired, and resold or donated. We extend the working life of laptops, phones, and peripherals.",
    benefits: ["6-month warranty on refurbs", "Donation programs for schools", "Quality-tested grading"],
    process: ["Diagnostic test", "Repair & clean", "Quality check", "Resold or donated"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // services
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-display md:text-6xl">
            Our Services
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            From a single phone to a full office decommission — we collect it, wipe it, and pay you for it.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-brand-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-primary text-primary-foreground">
                  <s.icon className="size-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
                    What you get
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
                    How it works
                  </h3>
                  <ol className="mt-3 space-y-1.5 text-sm text-foreground/85">
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
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-primary"
              >
                Schedule a Free Pickup <ArrowRight className="size-3.5" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
