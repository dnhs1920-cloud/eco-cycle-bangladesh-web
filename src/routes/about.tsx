import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Recycle, Sparkles, Target } from "lucide-react";
import { PageShell } from "@/components/page-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — E-Recycle.com" },
      {
        name: "description",
        content:
          "We pay people for their old electronics and route every gram into responsible recovery. Meet the team behind E-Recycle.com.",
      },
      { property: "og:title", content: "About — E-Recycle.com" },
      { property: "og:description", content: "Our mission, team, and sustainability commitment." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TEAM = [
  { name: "Nadia Hossain", role: "Co-founder & CEO", initials: "NH" },
  { name: "Imran Khan", role: "Co-founder & COO", initials: "IK" },
  { name: "Sumaiya Rahman", role: "Head of Refurbishment", initials: "SR" },
  { name: "Tareq Ahmed", role: "Logistics Lead", initials: "TA" },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // about
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-display md:text-6xl">
            About E-Recycle.com
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We pay you for the electronics you'd otherwise throw away — and route every gram into responsible recovery.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-10"
          >
            <div className="grid size-11 place-items-center rounded-lg bg-brand-primary text-primary-foreground">
              <Target className="size-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">Mission</h2>
            <p className="mt-3 text-muted-foreground">
              Make responsible disposal the most rewarding option — both financially and environmentally.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-10"
          >
            <div className="grid size-11 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <Sparkles className="size-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">Vision</h2>
            <p className="mt-3 text-muted-foreground">
              A world where every retired device is paid for, accounted for, and recovered.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-10">
          <div className="flex items-center gap-3">
            <Recycle className="size-6 text-brand-primary" />
            <h2 className="font-display text-xl font-bold">Our story</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            E-Recycle.com started with a simple observation: most people don't recycle their old
            electronics because there's no obvious reason to. We flipped the equation — instead of
            asking you to pay for disposal, we pay you for the materials inside. The result is a
            buyback model that diverts working devices to refurbishment, channels raw materials to
            licensed refiners, and rewards the household or business that did the right thing.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold tracking-display">The team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-brand-primary font-display text-xl font-bold text-primary-foreground">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display font-bold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-10">
          <div className="flex items-start gap-4">
            <Leaf className="size-8 shrink-0 text-brand-primary" />
            <div>
              <h2 className="font-display text-2xl font-bold">Our sustainability commitment</h2>
              <p className="mt-3 text-foreground/80">
                Zero landfill across our recovery pipeline, audited downstream partners, and a
                quarterly public report on materials recovered. A share of every refurbished device
                is donated to schools and community programs.
              </p>
              <Link
                to="/schedule"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-brand-primary/90"
              >
                Schedule a Free Pickup
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
