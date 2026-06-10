import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, FileCheck, Handshake, ShieldCheck, Truck } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Solutions — E-Recycle.com" },
      {
        name: "description",
        content:
          "Enterprise e-waste management for banks, NGOs, and corporates. Secure disposal, certificates of destruction, and CSR partnerships.",
      },
      { property: "og:title", content: "Corporate Solutions — E-Recycle.com" },
      {
        property: "og:description",
        content:
          "Secure disposal, compliance, and CSR-ready e-waste programs for enterprises.",
      },
      { property: "og:url", content: "/corporate" },
    ],
    links: [{ rel: "canonical", href: "/corporate" }],
  }),
  component: CorporatePage,
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Secure chain of custody",
    body: "Tamper-evident transport from your office to our facility, with serial-tracked intake.",
  },
  {
    icon: FileCheck,
    title: "NIST 800-88 data wipe",
    body: "Compliance-grade sanitization with signed certificates for every drive.",
  },
  {
    icon: Handshake,
    title: "Transparent valuations",
    body: "Itemized valuation reports against current market rates — no surprise lowballs.",
  },
  {
    icon: Truck,
    title: "Multi-site logistics",
    body: "Coordinated pickups across multiple offices with consolidated reporting.",
  },
];

const schema = z.object({
  company: z.string().trim().min(2).max(120),
  contact: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  role: z.string().trim().max(120).optional(),
  volume: z.string().trim().min(1).max(120),
  message: z.string().trim().min(10).max(1000),
});

type Values = z.infer<typeof schema>;

function CorporatePage() {
  const { t } = useT();
  const [done, setDone] = useState(false);
  const form = useForm<Values>({ resolver: zodResolver(schema), mode: "onTouched" });

  return (
    <PageShell>
      <section className="border-b border-border px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand-primary">
            // corporate
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-display md:text-6xl">
            {t("corp.title")}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{t("corp.sub")}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-4 inline-grid size-11 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary">
                <v.icon className="size-5" />
              </div>
              <h3 className="font-display font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl border border-border surface-dark p-10">
            <h2 className="font-display text-2xl font-bold text-white">Asset buyback for enterprise</h2>
            <p className="mt-3 text-white/75">
              Turn end-of-life IT into a line item your CFO will notice. We quote the entire
              fleet, settle within 24 hours, and hand you the audit trail.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/85">
              {[
                "Per-device serial-tracked valuations",
                "Witness destruction available",
                "Quarterly material recovery report",
                "Co-branded school donation programs",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-brand-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>


          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-2xl font-bold">{t("corp.form.title")}</h2>
            {done ? (
              <div className="mt-6 rounded-2xl bg-brand-primary/10 p-6 text-brand-primary">
                <CheckCircle2 className="size-6" />
                <p className="mt-3 font-semibold">{t("corp.form.success")}</p>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(() => setDone(true))}
                className="mt-6 space-y-4"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CField label={t("corp.form.company")} err={form.formState.errors.company?.message}>
                    <Input {...form.register("company")} maxLength={120} />
                  </CField>
                  <CField label={t("corp.form.contact")} err={form.formState.errors.contact?.message}>
                    <Input {...form.register("contact")} maxLength={120} />
                  </CField>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <CField label={t("corp.form.role")} err={form.formState.errors.role?.message}>
                    <Input {...form.register("role")} maxLength={120} />
                  </CField>
                  <CField label="Email" err={form.formState.errors.email?.message}>
                    <Input type="email" {...form.register("email")} maxLength={255} />
                  </CField>
                </div>
                <CField label={t("corp.form.volume")} err={form.formState.errors.volume?.message}>
                  <Input placeholder="e.g. 200 laptops / quarter" {...form.register("volume")} maxLength={120} />
                </CField>
                <CField label={t("corp.form.message")} err={form.formState.errors.message?.message}>
                  <Textarea rows={4} {...form.register("message")} maxLength={1000} />
                </CField>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-primary"
                >
                  {t("corp.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function CField({
  label,
  err,
  children,
}: {
  label: string;
  err?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 block text-sm font-semibold">{label}</Label>
      {children}
      {err && <p className="mt-1.5 text-xs text-destructive">{err}</p>}
    </div>
  );
}
