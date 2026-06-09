import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, RotateCcw } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { useT } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule Pickup — E-Recycle.com" },
      {
        name: "description",
        content:
          "Book a free e-waste pickup in Dhaka, Chittagong, and across Bangladesh. Three quick steps and our team will confirm via WhatsApp.",
      },
      { property: "og:title", content: "Schedule Pickup — E-Recycle.com" },
      {
        property: "og:description",
        content: "Three quick steps to book a certified e-waste pickup.",
      },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
  component: SchedulePage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Digits only"),
  email: z.string().trim().email("Enter a valid email").max(255),
  address: z.string().trim().min(8, "Please enter your full address").max(300),
  device: z.string().trim().min(2).max(120),
  quantity: z.string().trim().min(1).max(40),
  date: z.string().min(1, "Pick a date"),
  notes: z.string().max(600).optional(),
});

type FormValues = z.infer<typeof schema>;

const STEPS = [
  ["name", "phone", "email"],
  ["address", "device", "quantity"],
  ["date", "notes"],
] as const;

function SchedulePage() {
  const { t } = useT();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      device: "",
      quantity: "",
      date: "",
      notes: "",
    },
  });

  const onNext = async () => {
    const fields = STEPS[step] as readonly (keyof FormValues)[];
    const ok = await form.trigger(fields as (keyof FormValues)[]);
    if (ok) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };

  const onSubmit = (values: FormValues) => setSubmitted(values);

  const progress = ((step + 1) / STEPS.length) * 100;
  const reset = () => {
    form.reset();
    setStep(0);
    setSubmitted(null);
  };

  return (
    <PageShell>
      <section className="bg-card px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
            {t("cta.schedule")}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {t("schedule.title")}
          </h1>
          <p className="mt-4 text-muted-foreground">{t("schedule.sub")}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-border bg-card p-10 text-center"
              >
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold">
                  {t("schedule.success.title")}
                </h2>
                <p className="mt-3 text-muted-foreground">{t("schedule.success.body")}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/8801700000000?text=${encodeURIComponent(
                      `Hi E-Recycle.com! I just booked a pickup.\nName: ${submitted.name}\nAddress: ${submitted.address}\nDevices: ${submitted.device} (${submitted.quantity})\nDate: ${submitted.date}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:opacity-90"
                  >
                    <MessageCircle className="size-4" />
                    {t("schedule.success.wa")}
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:bg-muted"
                  >
                    <RotateCcw className="size-4" /> {t("schedule.success.again")}
                  </button>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-3 text-sm font-bold text-white hover:bg-brand-primary"
                  >
                    Back to home
                  </Link>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={form.handleSubmit(onSubmit)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="rounded-3xl border border-border bg-card p-8 md:p-10"
                noValidate
              >
                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    <span>
                      {t("schedule.step")} {step + 1} {t("schedule.of")} {STEPS.length}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      className="h-full rounded-full bg-brand-primary"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {step === 0 && (
                      <>
                        <Field
                          label={t("schedule.form.name")}
                          error={form.formState.errors.name?.message}
                        >
                          <Input {...form.register("name")} maxLength={120} autoFocus />
                        </Field>
                        <Field
                          label={t("schedule.form.phone")}
                          error={form.formState.errors.phone?.message}
                        >
                          <Input type="tel" {...form.register("phone")} maxLength={20} />
                        </Field>
                        <Field
                          label={t("schedule.form.email")}
                          error={form.formState.errors.email?.message}
                        >
                          <Input type="email" {...form.register("email")} maxLength={255} />
                        </Field>
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <Field
                          label={t("schedule.form.address")}
                          error={form.formState.errors.address?.message}
                        >
                          <Textarea rows={3} {...form.register("address")} maxLength={300} />
                        </Field>
                        <Field
                          label={t("schedule.form.device")}
                          error={form.formState.errors.device?.message}
                        >
                          <Input
                            placeholder={t("schedule.form.devicePh")}
                            {...form.register("device")}
                            maxLength={120}
                          />
                        </Field>
                        <Field
                          label={t("schedule.form.qty")}
                          error={form.formState.errors.quantity?.message}
                        >
                          <Input
                            placeholder="e.g. 5 items / 1 box"
                            {...form.register("quantity")}
                            maxLength={40}
                          />
                        </Field>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        <Field
                          label={t("schedule.form.date")}
                          error={form.formState.errors.date?.message}
                        >
                          <Input
                            type="date"
                            min={new Date().toISOString().slice(0, 10)}
                            {...form.register("date")}
                          />
                        </Field>
                        <Field
                          label={t("schedule.form.notes")}
                          error={form.formState.errors.notes?.message}
                        >
                          <Textarea rows={4} {...form.register("notes")} maxLength={600} />
                        </Field>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="mt-10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold disabled:opacity-40 hover:bg-muted"
                  >
                    <ArrowLeft className="size-4" /> {t("cta.back")}
                  </button>
                  {step < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={onNext}
                      className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90"
                    >
                      {t("cta.next")} <ArrowRight className="size-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-dark px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary"
                    >
                      {t("cta.submit")} <ArrowRight className="size-4" />
                    </button>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-2 block text-sm font-semibold">{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
