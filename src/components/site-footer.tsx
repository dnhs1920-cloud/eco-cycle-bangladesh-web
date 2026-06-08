import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Recycle, Twitter } from "lucide-react";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-brand-primary text-white">
                <Recycle className="size-5" aria-hidden />
              </span>
              <span className="font-display text-xl font-bold text-brand-primary">EcoCycle</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex gap-3 text-muted-foreground">
              <a aria-label="Facebook" href="#" className="hover:text-brand-primary"><Facebook className="size-5" /></a>
              <a aria-label="Instagram" href="#" className="hover:text-brand-primary"><Instagram className="size-5" /></a>
              <a aria-label="Twitter" href="#" className="hover:text-brand-primary"><Twitter className="size-5" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-brand-primary"><Linkedin className="size-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground/80">
              {t("footer.product")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-brand-primary">{t("nav.services")}</Link></li>
              <li><Link to="/schedule" className="hover:text-brand-primary">{t("cta.schedule")}</Link></li>
              <li><Link to="/impact" className="hover:text-brand-primary">{t("nav.impact")}</Link></li>
              <li><Link to="/corporate" className="hover:text-brand-primary">{t("nav.corporate")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-foreground/80">
              {t("footer.company")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-brand-primary">{t("nav.about")}</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary">{t("nav.blog")}</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary">{t("nav.contact")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {year} EcoCycle Bangladesh. {t("footer.rights")}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-primary">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-brand-primary">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
