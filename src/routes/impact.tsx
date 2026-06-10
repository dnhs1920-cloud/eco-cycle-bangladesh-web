import { createFileRoute, ClientOnly, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowRight,
  Battery,
  Droplets,
  Globe2,
  Home,
  Leaf,
  TreePine,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "The Global E-Waste Reality — E-Recycle.com" },
      {
        name: "description",
        content:
          "Verified global e-waste data, environmental equivalencies, and the role buyback recycling plays in fixing the crisis.",
      },
      { property: "og:title", content: "The Global E-Waste Reality — E-Recycle.com" },
      {
        property: "og:description",
        content: "Verified industry data on e-waste, recovery, and the cost of inaction.",
      },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

const HEADLINES = [
  {
    value: "62M",
    unit: "tonnes",
    label: "of e-waste generated globally in 2022",
    source: "UN Global E-Waste Monitor, 2024",
  },
  {
    value: "22%",
    unit: "",
    label: "is formally collected and recycled",
    source: "UN Global E-Waste Monitor, 2024",
  },
  {
    value: "$91B",
    unit: "",
    label: "in recoverable raw materials lost every year",
    source: "UNITAR",
  },
  {
    value: "82%",
    unit: "",
    label: "ends up in landfill, incineration, or informal pits",
    source: "ITU",
  },
];

const STREAM = [
  { name: "Landfill / dumped", value: 78, fill: "var(--brand-amber)" },
  { name: "Informal recycling", value: 18, fill: "var(--muted-foreground)" },
  { name: "Formal recycling", value: 22, fill: "var(--brand-primary)" },
];

const REGION = [
  { region: "Asia", kg: 12.0 },
  { region: "Americas", kg: 14.1 },
  { region: "Europe", kg: 17.6 },
  { region: "Africa", kg: 2.5 },
  { region: "Oceania", kg: 16.1 },
];

const EQUIVALENCY = [
  {
    icon: Home,
    title: "Recycling 1 laptop",
    body: "saves enough energy to power an average US household for over a week.",
    source: "U.S. EPA",
  },
  {
    icon: Droplets,
    title: "Recycling 1 million phones",
    body: "recovers 35,000 lbs of copper, 772 lbs of silver, 75 lbs of gold and 33 lbs of palladium.",
    source: "U.S. EPA",
  },
  {
    icon: TreePine,
    title: "Refurbishing one smartphone",
    body: "avoids roughly 55 kg of CO₂e — equivalent to driving 220 km in an average car.",
    source: "Restart Project",
  },
  {
    icon: Zap,
    title: "Recovering aluminum from e-waste",
    body: "uses 95% less energy than mining and smelting it from bauxite ore.",
    source: "International Aluminium Institute",
  },
];

const HAZARDS = [
  {
    name: "Mercury",
    body: "Found in LCD backlights and switches. Damages the brain and nervous system at trace levels.",
  },
  {
    name: "Lead",
    body: "Solder, CRTs and PCB joints. A neurotoxin that bioaccumulates in soil and water.",
  },
  {
    name: "Cadmium",
    body: "Rechargeable batteries and resistors. A known human carcinogen.",
  },
  {
    name: "Brominated flame retardants",
    body: "Plastic casings. Persistent in the environment, linked to thyroid and developmental effects.",
  },
];

function ImpactPage() {
  const { t } = useT();
  return (
    <PageShell>
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // the global e-waste reality
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-display md:text-6xl">
            {t("impact.page.title")}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("impact.page.sub")}</p>
        </div>
      </section>

      {/* HEADLINE STATS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {HEADLINES.map((h) => (
            <div key={h.label} className="border-r border-border bg-card p-8 last:border-r-0">
              <div className="font-display text-5xl font-bold tracking-display text-brand-primary">
                {h.value}
                {h.unit && <span className="text-2xl"> {h.unit}</span>}
              </div>
              <p className="mt-3 text-sm text-foreground/80">{h.label}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {h.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CHARTS */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
              where it ends up
            </p>
            <h2 className="mt-2 font-display text-xl font-bold">
              Global e-waste, by fate (% of total)
            </h2>
            <div className="mt-6 h-72">
              <ClientOnly fallback={<div className="h-full w-full animate-pulse rounded-xl bg-muted/40" />}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={STREAM}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={3}
                    >
                      {STREAM.map((s, i) => (
                        <Cell key={i} fill={s.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ClientOnly>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              {STREAM.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <span className="size-2.5 rounded-sm" style={{ background: s.fill }} />
                  <span className="text-muted-foreground">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
              per-capita generation
            </p>
            <h2 className="mt-2 font-display text-xl font-bold">E-waste per person, by region (kg/yr)</h2>
            <div className="mt-6 h-72">
              <ClientOnly fallback={<div className="h-full w-full animate-pulse rounded-xl bg-muted/40" />}>
                <ResponsiveContainer>
                  <BarChart data={REGION}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.4} />
                    <XAxis dataKey="region" stroke="currentColor" fontSize={12} />
                    <YAxis stroke="currentColor" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: 12,
                      }}
                    />
                    <Bar dataKey="kg" fill="var(--brand-primary)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ClientOnly>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIVALENCIES */}
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
              // what one device actually does
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-display md:text-4xl">
              Environmental equivalencies.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Recycling a single device sounds small. The numbers say otherwise.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIVALENCY.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="grid size-10 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <e.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                  {e.source}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HAZARDS */}
      <section className="border-b border-border surface-dark px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
              // what's inside
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-display text-white md:text-4xl">
              Hazards & precious metals, side by side.
            </h2>
            <p className="mt-4 text-white/70">
              Every device contains a mix of toxic substances and high-value materials.
              Burned or buried, you get the toxins. Recycled properly, you get the metals back.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HAZARDS.map((h) => (
              <div key={h.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-center gap-2">
                  <Battery className="size-4 text-brand-amber" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-brand-amber">
                    Hazard
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">{h.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card p-10 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground/70">
                <Leaf className="size-3.5 text-brand-primary" />
                Do something about it
              </div>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-display md:text-4xl">
                Your old device is part of the 82%. Or it isn't.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We pay you for the parts the rest of the world is throwing away.
              </p>
              <Link
                to="/schedule"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-primary/90"
              >
                Schedule a Free Pickup
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <Globe2 className="size-5 text-brand-primary" />
                <span className="text-sm">Audited downstream partners</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <Leaf className="size-5 text-brand-primary" />
                <span className="text-sm">Zero landfill, quarterly reporting</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background p-4">
                <Zap className="size-5 text-brand-primary" />
                <span className="text-sm">Instant payouts on collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
