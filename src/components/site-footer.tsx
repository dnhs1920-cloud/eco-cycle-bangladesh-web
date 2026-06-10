import { Link } from "@tanstack/react-router";
import { Recycle } from "lucide-react";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-md bg-brand-primary text-primary-foreground">
                <Recycle className="size-4" aria-hidden />
              </span>
              <span className="font-display text-lg font-bold">
                E-Recycle<span className="text-brand-primary">.com</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
              From Trash to Treasure
            </p>

          </div>

          <div>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              {t("footer.product")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">{t("nav.services")}</Link></li>
              <li><Link to="/schedule" className="hover:text-foreground">{t("cta.schedule")}</Link></li>
              <li><Link to="/impact" className="hover:text-foreground">{t("nav.impact")}</Link></li>
              <li><Link to="/corporate" className="hover:text-foreground">{t("nav.corporate")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-widest text-foreground/70">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">{t("nav.about")}</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">{t("nav.contact")}</Link></li>
              <li><a href="/#materials" className="hover:text-foreground">Material streams</a></li>
              <li><a href="/#pricing" className="hover:text-foreground">Pricing</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} E-Recycle.com. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-foreground">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
