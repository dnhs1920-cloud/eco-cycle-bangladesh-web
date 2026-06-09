import { Link } from "@tanstack/react-router";
import { Menu, Moon, Sun, Zap } from "lucide-react";
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
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t, lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="E-Recycle.com home">
          <span className="grid size-8 place-items-center rounded-md bg-foreground text-background">
            <Zap className="size-4" aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            E-Recycle<span className="text-brand-primary">.com</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/65 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            className="rounded-md px-2 py-1 font-mono text-[11px] font-semibold uppercase text-foreground/60 hover:bg-muted hover:text-foreground"
            aria-label="Toggle language"
          >
            {lang === "en" ? "বাং" : "EN"}
          </button>
          <button
            onClick={toggle}
            aria-label={t("theme.toggle")}
            className="grid size-9 place-items-center rounded-md text-foreground/65 hover:bg-muted hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Link
            to="/schedule"
            className="hidden md:inline-flex rounded-md bg-foreground px-4 py-2 text-sm font-semibold text-background hover:bg-foreground/85"
          >
            {t("cta.schedule")}
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base text-foreground/80 hover:bg-muted"
                    activeProps={{ className: "bg-muted text-foreground font-semibold" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {t(l.key)}
                  </Link>
                ))}
                <Link
                  to="/schedule"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background"
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
