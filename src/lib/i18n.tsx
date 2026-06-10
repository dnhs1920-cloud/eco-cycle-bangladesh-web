import { createContext, useContext, type ReactNode } from "react";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.impact": "Impact",
  "nav.corporate": "Corporate",
  "nav.about": "About",
  "nav.contact": "Contact",

  "cta.schedule": "Schedule a Free Pickup",
  "cta.getPaid": "Get Paid to Recycle",
  "cta.learnMore": "Learn more",
  "cta.send": "Send message",
  "cta.subscribe": "Subscribe",
  "cta.next": "Next",
  "cta.back": "Back",
  "cta.submit": "Request my pickup",

  "footer.tagline": "Turn old electronics into instant cash. Free doorstep pickup, certified data wiping, transparent payouts.",
  "footer.rights": "All rights reserved.",
  "footer.product": "Product",
  "footer.company": "Company",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",
  "theme.toggle": "Toggle theme",

  "newsletter.heading": "Get notified when payout rates change",
  "newsletter.sub": "Once a month. Component prices, pickup zones, no spam.",
  "newsletter.placeholder": "you@example.com",
  "newsletter.success": "You're in — thanks!",

  "schedule.title": "Schedule a Free Pickup",
  "schedule.sub": "Tell us what you have. We come to you, weigh it, and pay on the spot.",
  "schedule.step": "Step",
  "schedule.of": "of",
  "schedule.form.name": "Full name",
  "schedule.form.phone": "Phone number",
  "schedule.form.email": "Email address",
  "schedule.form.address": "Pickup address",
  "schedule.form.device": "Device type",
  "schedule.form.devicePh": "e.g. 2 laptops, 1 monitor",
  "schedule.form.qty": "Estimated quantity",
  "schedule.form.date": "Preferred pickup date",
  "schedule.form.notes": "Additional notes (optional)",
  "schedule.success.title": "Pickup requested",
  "schedule.success.body": "Our team will confirm your time slot and estimated payout within 24 hours.",
  "schedule.success.wa": "Send details via WhatsApp",
  "schedule.success.again": "Schedule another",

  "services.page.title": "Our Services",
  "services.page.sub": "From a single phone to a full office decommission — we collect it, wipe it, and pay you for it.",
  "services.benefits": "What you get",
  "services.process": "How it works",

  "impact.page.title": "The Global E-Waste Reality",
  "impact.page.sub": "We're up against a fast-growing waste stream. Here's the data that shapes everything we do.",

  "corp.title": "Corporate IT Asset Buyback",
  "corp.sub": "Turn office refreshes into measurable revenue. Certified data destruction, transparent valuations, audit-ready paperwork.",
  "corp.form.title": "Request a corporate quote",
  "corp.form.company": "Company name",
  "corp.form.contact": "Contact person",
  "corp.form.role": "Role",
  "corp.form.volume": "Estimated volume",
  "corp.form.message": "Tell us about your inventory",
  "corp.form.submit": "Send inquiry",
  "corp.form.success": "Thanks — our enterprise team will reach out shortly.",

  "about.title": "About E-Recycle.com",
  "about.sub": "We pay you for the electronics you'd otherwise throw away — and route every gram into responsible recovery.",
  "about.mission": "Mission",
  "about.missionBody": "Make responsible disposal the most rewarding option — financially and environmentally.",
  "about.vision": "Vision",
  "about.visionBody": "A world where every retired device is paid for, accounted for, and recovered.",
  "about.team": "The team",

  "contact.title": "Get in touch",
  "contact.sub": "We typically respond within one business day.",
  "contact.form.name": "Your name",
  "contact.form.email": "Email",
  "contact.form.message": "How can we help?",
  "contact.success": "Message sent — we'll be in touch soon.",
  "contact.address": "Gulshan Avenue, Dhaka 1212",
  "contact.phone": "+880 1700 000000",
  "contact.email": "hello@e-recycle.com",
};

type Ctx = { t: (key: string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string) => en[key] ?? key;
  return <LangCtx.Provider value={{ t }}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
