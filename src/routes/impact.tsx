import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PageShell } from "@/components/page-shell";
import { StatCounter } from "@/components/stat-counter";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — EcoCycle Bangladesh" },
      {
        name: "description",
        content:
          "See live metrics on electronics collected, devices refurbished, materials recovered, and CO₂ reduced across Bangladesh.",
      },
      { property: "og:title", content: "Our Impact — EcoCycle Bangladesh" },
      {
        property: "og:description",
        content: "Measurable environmental impact from certified e-waste recycling.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

const materialsData = [
  { name: "Plastic", value: 142 },
  { name: "Aluminum", value: 98 },
  { name: "Copper", value: 76 },
  { name: "Steel", value: 188 },
  { name: "Glass", value: 54 },
  { name: "Rare earth", value: 12 },
];

const co2Trend = [
  { year: "2021", t: 120 },
  { year: "2022", t: 245 },
  { year: "2023", t: 468 },
  { year: "2024", t: 720 },
  { year: "2025", t: 840 },
];

const TIMELINE = [
  { year: "2021", title: "Founded in Dhaka", body: "Started with one truck and a vision for circular electronics." },
  { year: "2022", title: "First 10,000 devices", body: "Crossed our first major collection milestone within Dhaka North." },
  { year: "2023", title: "Refurbishment lab opens", body: "Launched in-house refurbishment, donating 4,000 devices to schools." },
  { year: "2024", title: "Nationwide coverage", body: "Expanded to all 64 districts via partner logistics." },
  { year: "2025", title: "Carbon-neutral certified", body: "Audited and certified carbon-neutral operations." },
];

function ImpactPage() {
  const { t } = useT();
  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("nav.impact")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {t("impact.page.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("impact.page.sub")}</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { v: 450000, suffix: "+", label: t("stats.collected") },
            { v: 152000, suffix: "+", label: t("stats.refurbished") },
            { v: 570, suffix: "t", label: "Materials Recovered" },
            { v: 840, suffix: "t", label: t("stats.co2") },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="font-display text-4xl font-bold text-brand-primary">
                <StatCounter value={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-xl font-bold">{t("impact.chart.title")}</h2>
            <div className="mt-6 h-72">
              <ClientOnly fallback={<div className="h-full w-full animate-pulse rounded-xl bg-muted/40" />}>
                <ResponsiveContainer>
                  <BarChart data={materialsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="name" stroke="currentColor" fontSize={12} />
                    <YAxis stroke="currentColor" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                      }}
                    />
                    <Bar dataKey="value" fill="var(--brand-primary)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ClientOnly>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-xl font-bold">CO₂ avoided over time (tonnes)</h2>
            <div className="mt-6 h-72">
              <ClientOnly fallback={<div className="h-full w-full animate-pulse rounded-xl bg-muted/40" />}>
                <ResponsiveContainer>
                  <LineChart data={co2Trend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.4} />
                    <XAxis dataKey="year" stroke="currentColor" fontSize={12} />
                    <YAxis stroke="currentColor" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="t"
                      stroke="var(--brand-primary)"
                      strokeWidth={3}
                      dot={{ r: 5, fill: "var(--brand-primary)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ClientOnly>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            {t("impact.timeline")}
          </h2>
          <div className="mt-10 space-y-6">
            {TIMELINE.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="grid grid-cols-[auto_1fr] gap-6 rounded-2xl border border-border bg-card p-6"
              >
                <div className="font-display text-3xl font-bold text-brand-primary">{m.year}</div>
                <div>
                  <h3 className="font-display text-lg font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
