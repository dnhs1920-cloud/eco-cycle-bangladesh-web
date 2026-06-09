import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, Recycle, Sparkles, Target } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — E-Recycle.com" },
      {
        name: "description",
        content:
          "E-Recycle.com is building a cleaner Bangladesh through responsible electronics recycling. Meet the team and our mission.",
      },
      { property: "og:title", content: "About — E-Recycle.com" },
      {
        property: "og:description",
        content: "Our mission, team, and sustainability commitment.",
      },
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
  const { t } = useT();
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("nav.about")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {t("about.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("about.sub")}</p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-brand-primary p-10 text-white"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-white/15">
              <Target className="size-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">{t("about.mission")}</h2>
            <p className="mt-3 text-white/85">{t("about.missionBody")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-border bg-card p-10"
          >
            <div className="grid size-12 place-items-center rounded-xl bg-brand-accent/30 text-brand-primary">
              <Sparkles className="size-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold">{t("about.vision")}</h2>
            <p className="mt-3 text-muted-foreground">{t("about.visionBody")}</p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card p-10">
          <div className="flex items-center gap-3">
            <Recycle className="size-6 text-brand-primary" />
            <h2 className="font-display text-xl font-bold">Our story</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            E-Recycle.com began in 2021 in a small Dhaka warehouse, when our founders watched
            shipping containers of broken electronics being dumped at the city's edge. We
            built a different path — one where every device gets a second chance, and
            every collected gram is accounted for. Today we serve 64 districts, support
            schools with refurbished hardware, and partner with leading enterprises on
            secure, circular IT asset disposition.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl font-bold tracking-tight">{t("about.team")}</h2>
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
                <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-dark font-display text-xl font-bold text-white">
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
        <div className="mx-auto max-w-5xl rounded-3xl bg-brand-accent/20 p-10">
          <div className="flex items-start gap-4">
            <Leaf className="size-8 shrink-0 text-brand-primary" />
            <div>
              <h2 className="font-display text-2xl font-bold">Our sustainability commitment</h2>
              <p className="mt-3 text-foreground/80">
                We're carbon-neutral certified, zero-landfill in our recycling pipeline,
                and we publish an annual transparency report detailing every tonne of
                material recovered. Our refurbishment lab donates 30% of all repaired
                devices to schools across Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
