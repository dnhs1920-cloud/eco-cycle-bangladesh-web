import { Link } from "@tanstack/react-router";
import { Menu, Moon, Recycle, Sun } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/impact", key: "nav.impact" },
  { to: "/corporate", key: "nav.corporate" },
  { to: "/about", key: "nav.about" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 group" aria-label="EcoCycle Bangladesh home">
          <span className="grid size-9 place-items-center rounded-lg bg-brand-primary text-white shadow-sm shadow-brand-primary/30 transition-transform group-hover:rotate-12">
            <Recycle className="size-5" aria-hidden />
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-brand-primary">
            EcoCycle
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-brand-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="rounded-md px-2 py-1 text-[11px] font-bold uppercase tracking-widest text-foreground/60 hover:bg-muted hover:text-foreground transition-colors"
            aria-label="Toggle language"
          >
            {lang === "en" ? "বাং" : "EN"}
          </button>
          <button
            onClick={toggle}
            aria-label={t("theme.toggle")}
            className="grid size-9 place-items-center rounded-md text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/schedule"
            className="hidden md:inline-flex rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/20 transition-all hover:scale-[1.03] hover:bg-brand-primary/90 active:scale-95"
          >
            {t("cta.schedule")}
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-muted"
                    activeProps={{ className: "bg-muted text-brand-primary" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {t(l.key)}
                  </Link>
                ))}
                <Link
                  to="/schedule"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white"
                >
                  {t("cta.schedule")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
