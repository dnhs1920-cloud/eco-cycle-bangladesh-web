import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Input } from "@/components/ui/input";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Resources — EcoCycle Bangladesh" },
      {
        name: "description",
        content:
          "E-waste awareness, recycling tips, sustainability stories, and refurbished technology guides from the EcoCycle team.",
      },
      { property: "og:title", content: "Blog & Resources — EcoCycle Bangladesh" },
      {
        property: "og:description",
        content: "Tips, stories, and guides on responsible electronics recycling.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    cat: "Awareness",
    title: "Why Bangladesh's e-waste problem is bigger than you think",
    excerpt:
      "A look at the 3 million tonnes of e-waste generated annually in South Asia and what it means for our soil and waterways.",
    date: "May 2025",
  },
  {
    cat: "Tips",
    title: "5 things to do before recycling your old laptop",
    excerpt:
      "From backing up your data to safely removing your hard drive — a practical checklist.",
    date: "Apr 2025",
  },
  {
    cat: "Refurbished",
    title: "How a refurbished phone can save 80kg of CO₂",
    excerpt:
      "The carbon math behind second-life devices and why choosing refurbished matters.",
    date: "Apr 2025",
  },
  {
    cat: "Sustainability",
    title: "Inside our zero-landfill recycling process",
    excerpt:
      "A behind-the-scenes look at how we sort, shred, and recover materials from every collection.",
    date: "Mar 2025",
  },
  {
    cat: "Awareness",
    title: "Battery disposal: the silent danger in your drawer",
    excerpt:
      "Lithium-ion batteries cause more landfill fires than you might think — here's how to dispose of them safely.",
    date: "Mar 2025",
  },
  {
    cat: "Tips",
    title: "How to organize an office e-waste drive in one week",
    excerpt: "A simple template you can run with your team to clear out forgotten hardware.",
    date: "Feb 2025",
  },
];

const CATEGORIES = ["all", "Awareness", "Tips", "Refurbished", "Sustainability"] as const;

function BlogPage() {
  const { t } = useT();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("all");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCat = cat === "all" || p.cat === cat;
      const text = (p.title + p.excerpt).toLowerCase();
      const matchesQ = q.trim() === "" || text.includes(q.toLowerCase().trim());
      return matchesCat && matchesQ;
    });
  }, [q, cat]);

  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("nav.blog")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {t("blog.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("blog.sub")}</p>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("blog.search")}
              aria-label={t("blog.search")}
              className="pl-9"
              maxLength={120}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  cat === c
                    ? "border-brand-primary bg-brand-primary text-white"
                    : "border-border bg-card text-foreground/70 hover:bg-muted"
                }`}
              >
                {c === "all" ? t("blog.all") : c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl"
            >
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <span className="text-brand-primary">{p.cat}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h2 className="mt-4 font-display text-xl font-bold leading-snug group-hover:text-brand-primary">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            </motion.article>
          ))}
          {filtered.length === 0 && (
            <p className="md:col-span-2 text-center text-muted-foreground">
              No articles match your search.
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}
