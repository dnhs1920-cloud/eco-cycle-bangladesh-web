import { useState } from "react";
import { z } from "zod";
import { useT } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const schema = z.string().trim().email();

export function Newsletter() {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(email);
    if (!r.success) {
      setError("Please enter a valid email.");
      return;
    }
    setError(null);
    setDone(true);
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-8 md:p-12">
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <h3 className="font-display text-2xl font-bold">{t("newsletter.heading")}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{t("newsletter.sub")}</p>
        </div>
        {done ? (
          <div className="flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-3 text-sm font-semibold text-brand-primary">
            <Check className="size-4" /> {t("newsletter.success")}
          </div>
        ) : (
          <form onSubmit={submit} className="flex w-full max-w-md gap-2 md:w-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletter.placeholder")}
              aria-label="Email address"
              className="h-11"
              required
              maxLength={255}
            />
            <button
              type="submit"
              className="rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary/90"
            >
              {t("cta.subscribe")}
            </button>
          </form>
        )}
      </div>
      {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
    </div>
  );
}
