import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — E-Recycle.com" },
      {
        name: "description",
        content:
          "Get in touch with E-Recycle.com. Office in Dhaka, support by phone, email, and WhatsApp.",
      },
      { property: "og:title", content: "Contact — E-Recycle.com" },
      {
        property: "og:description",
        content: "Reach our team by phone, email, WhatsApp, or in person in Dhaka.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(1000),
});
type Values = z.infer<typeof schema>;

function ContactPage() {
  const { t } = useT();
  const [done, setDone] = useState(false);
  const form = useForm<Values>({ resolver: zodResolver(schema), mode: "onTouched" });

  return (
    <PageShell>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("nav.contact")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t("contact.sub")}</p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-primary text-white">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Office</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t("contact.address")}</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-primary text-white">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Phone</h3>
                  <a
                    href="tel:+8801700000000"
                    className="mt-1 block text-sm text-muted-foreground hover:text-brand-primary"
                  >
                    {t("contact.phone")}
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-xl bg-brand-primary text-white">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Email</h3>
                  <a
                    href="mailto:hello@e-recycle.com"
                    className="mt-1 block text-sm text-muted-foreground hover:text-brand-primary"
                  >
                    {t("contact.email")}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=90.4080%2C23.7800%2C90.4280%2C23.7950&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8">
            {done ? (
              <div className="rounded-2xl bg-brand-primary/10 p-6 text-brand-primary">
                <CheckCircle2 className="size-6" />
                <p className="mt-3 font-semibold">{t("contact.success")}</p>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(() => setDone(true))}
                className="space-y-4"
                noValidate
              >
                <CField label={t("contact.form.name")} err={form.formState.errors.name?.message}>
                  <Input {...form.register("name")} maxLength={120} />
                </CField>
                <CField label={t("contact.form.email")} err={form.formState.errors.email?.message}>
                  <Input type="email" {...form.register("email")} maxLength={255} />
                </CField>
                <CField
                  label={t("contact.form.message")}
                  err={form.formState.errors.message?.message}
                >
                  <Textarea rows={6} {...form.register("message")} maxLength={1000} />
                </CField>
                <button
                  type="submit"
                  className="w-full rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-brand-primary/90"
                >
                  {t("cta.send")}
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
