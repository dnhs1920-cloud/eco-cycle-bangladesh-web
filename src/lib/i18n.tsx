import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.impact": "Impact",
  "nav.corporate": "Corporate",
  "nav.about": "About",
  "nav.blog": "Blog",
  "nav.contact": "Contact",
  "cta.schedule": "Schedule Pickup",
  "cta.learnMore": "Learn More",
  "cta.startDisposal": "Start Disposal",
  "cta.impactReport": "Impact Report 2024",
  "cta.bookNow": "Book Now",
  "cta.getQuote": "Get Quote",
  "cta.inquire": "Inquire",
  "cta.allServices": "All Services",
  "cta.contactSales": "Contact Sales",
  "cta.scheduleNow": "Schedule Now",
  "cta.send": "Send Message",
  "cta.subscribe": "Subscribe",
  "cta.next": "Next",
  "cta.back": "Back",
  "cta.submit": "Submit Pickup Request",

  "hero.badge": "Available across Dhaka & Chittagong",
  "hero.title.a": "Bangladesh's Future is",
  "hero.title.b": "Circular",
  "hero.subtitle":
    "Turn your old electronics into urban resources. We provide certified, eco-friendly e-waste collection and recycling services for homes and businesses.",
  "hero.stat.label": "KG Waste Diverted",

  "stats.heading": "Real impact, measured",
  "stats.sub": "Every device we collect keeps toxic materials out of Bangladesh's soil and waterways.",
  "stats.collected": "Electronics Collected",
  "stats.refurbished": "Devices Refurbished",
  "stats.co2": "Tons CO₂ Reduced",
  "stats.communities": "Communities Served",

  "how.heading": "How it works",
  "how.sub": "From request to confirmation in four simple steps.",
  "how.s1.t": "Request a Pickup",
  "how.s1.d": "Tell us what you have and where to find you — online or by WhatsApp.",
  "how.s2.t": "We Collect",
  "how.s2.d": "Our certified team arrives at your door at the time you chose.",
  "how.s3.t": "We Recycle or Refurbish",
  "how.s3.d": "Devices are sorted, wiped, refurbished, or responsibly broken down.",
  "how.s4.t": "Receive Confirmation",
  "how.s4.d": "Get a digital report showing where your waste went and the impact it made.",

  "services.heading": "End-to-End Recovery",
  "services.sub":
    "From door-to-door residential pickup to complex corporate decommissioning, we handle the entire e-waste lifecycle safely.",

  "benefits.heading": "Why choose EcoCycle",
  "benefits.eco.t": "Eco-friendly disposal",
  "benefits.eco.d": "Zero landfill. Every component is recovered, refurbished, or processed safely.",
  "benefits.data.t": "Secure data handling",
  "benefits.data.d": "NIST-compliant wiping and physical destruction with audit trails.",
  "benefits.afford.t": "Affordable refurbished devices",
  "benefits.afford.d": "Quality second-life electronics for schools, families, and small businesses.",
  "benefits.convenient.t": "Convenient scheduling",
  "benefits.convenient.d": "Book online or chat on WhatsApp. Pickups available 7 days a week.",

  "testimonials.heading": "Trusted by people and partners",

  "faq.heading": "Frequently asked questions",
  "faq.q1": "What kinds of electronics do you accept?",
  "faq.a1":
    "Phones, laptops, desktops, monitors, TVs, printers, kitchen appliances, batteries, cables, and most consumer electronics.",
  "faq.q2": "Is the pickup really free?",
  "faq.a2": "Residential pickups with 3+ major items are free across Dhaka and Chittagong.",
  "faq.q3": "How do you protect my data?",
  "faq.a3":
    "We perform NIST 800-88 compliant data wiping and provide certificates of destruction on request.",
  "faq.q4": "Do you serve outside major cities?",
  "faq.a4":
    "Yes — we coordinate scheduled pickups across all 64 districts with partner logistics.",

  "newsletter.heading": "Stay in the loop",
  "newsletter.sub": "Monthly updates on e-waste tips, impact reports, and community drives.",
  "newsletter.placeholder": "you@example.com",
  "newsletter.success": "Thanks — you're subscribed!",

  "cta.banner.heading": "Ready to clean up your space?",
  "cta.banner.sub":
    "Join 5,000+ environmentally conscious Bangladeshis today. We handle the logistics, you save the planet.",

  "footer.tagline": "Bangladesh's circular electronics partner.",
  "footer.rights": "All rights reserved.",
  "footer.product": "Product",
  "footer.company": "Company",
  "footer.legal": "Legal",
  "footer.privacy": "Privacy",
  "footer.terms": "Terms",

  "lang.toggle": "EN / বাং",
  "theme.toggle": "Toggle theme",

  "schedule.title": "Schedule a Pickup",
  "schedule.sub": "Tell us about your e-waste and we'll arrange a convenient collection.",
  "schedule.step": "Step",
  "schedule.of": "of",
  "schedule.form.name": "Full name",
  "schedule.form.phone": "Phone number",
  "schedule.form.email": "Email address",
  "schedule.form.address": "Pickup address",
  "schedule.form.device": "Device type",
  "schedule.form.devicePh": "e.g. Laptops, TV, mixed",
  "schedule.form.qty": "Estimated quantity",
  "schedule.form.date": "Preferred pickup date",
  "schedule.form.notes": "Additional notes (optional)",
  "schedule.success.title": "Request received 🎉",
  "schedule.success.body":
    "We've logged your pickup. A member of our team will confirm via WhatsApp within 24 hours.",
  "schedule.success.wa": "Send details via WhatsApp",
  "schedule.success.again": "Schedule another",

  "services.page.title": "Our Services",
  "services.page.sub": "Every program we run is designed around safety, security, and sustainability.",
  "services.description": "Description",
  "services.benefits": "Benefits",
  "services.process": "Process",

  "impact.page.title": "Our Impact",
  "impact.page.sub": "Numbers that turn into cleaner cities and healthier communities.",
  "impact.chart.title": "Materials recovered (tonnes / year)",
  "impact.timeline": "Milestones",

  "corp.title": "Corporate Solutions",
  "corp.sub":
    "Decommissioning, data security, and CSR-ready programs for banks, NGOs, and enterprises.",
  "corp.form.title": "Request a corporate proposal",
  "corp.form.company": "Company name",
  "corp.form.contact": "Contact person",
  "corp.form.role": "Role",
  "corp.form.volume": "Estimated volume",
  "corp.form.message": "Tell us about your project",
  "corp.form.submit": "Send inquiry",
  "corp.form.success": "Thank you — our enterprise team will reach out shortly.",

  "about.title": "About EcoCycle",
  "about.sub":
    "We're building a cleaner Bangladesh through responsible electronics recycling.",
  "about.mission": "Mission",
  "about.missionBody":
    "To create a circular economy for electronics in Bangladesh — one pickup at a time.",
  "about.vision": "Vision",
  "about.visionBody":
    "A nation where no working device is wasted and no toxic material reaches our landfills.",
  "about.team": "The team",

  "blog.title": "Blog & Resources",
  "blog.sub": "E-waste awareness, recycling tips, and the latest from our facility.",
  "blog.search": "Search articles…",
  "blog.all": "All",

  "contact.title": "Get in touch",
  "contact.sub": "We typically respond within one business day.",
  "contact.form.name": "Your name",
  "contact.form.email": "Email",
  "contact.form.message": "How can we help?",
  "contact.success": "Message sent — we'll be in touch soon.",
  "contact.address": "Gulshan Avenue, Dhaka 1212, Bangladesh",
  "contact.phone": "+880 1700 000000",
  "contact.email": "hello@ecocycle.bd",
};

const bn: Dict = {
  "nav.home": "হোম",
  "nav.services": "সেবাসমূহ",
  "nav.impact": "প্রভাব",
  "nav.corporate": "কর্পোরেট",
  "nav.about": "আমাদের সম্পর্কে",
  "nav.blog": "ব্লগ",
  "nav.contact": "যোগাযোগ",
  "cta.schedule": "পিকআপ বুক করুন",
  "cta.learnMore": "আরও জানুন",
  "cta.startDisposal": "শুরু করুন",
  "cta.impactReport": "ইমপ্যাক্ট রিপোর্ট ২০২৪",
  "cta.bookNow": "এখনই বুক করুন",
  "cta.getQuote": "কোটেশন নিন",
  "cta.inquire": "জিজ্ঞাসা করুন",
  "cta.allServices": "সব সেবা",
  "cta.contactSales": "সেলসে যোগাযোগ",
  "cta.scheduleNow": "এখনই শিডিউল করুন",
  "cta.send": "বার্তা পাঠান",
  "cta.subscribe": "সাবস্ক্রাইব",
  "cta.next": "পরবর্তী",
  "cta.back": "পেছনে",
  "cta.submit": "পিকআপ অনুরোধ জমা দিন",

  "hero.badge": "ঢাকা ও চট্টগ্রামে উপলব্ধ",
  "hero.title.a": "বাংলাদেশের ভবিষ্যৎ",
  "hero.title.b": "সার্কুলার",
  "hero.subtitle":
    "পুরনো ইলেকট্রনিক্সকে নতুন সম্পদে রূপান্তর করুন। বাড়ি ও ব্যবসার জন্য সার্টিফাইড, পরিবেশবান্ধব ই-বর্জ্য সংগ্রহ ও রিসাইক্লিং সেবা।",
  "hero.stat.label": "কেজি বর্জ্য সংরক্ষিত",

  "stats.heading": "প্রমাণিত প্রভাব",
  "stats.sub": "আমরা যত ডিভাইস সংগ্রহ করি, তত বিষাক্ত উপাদান বাংলাদেশের মাটি ও পানি থেকে দূরে থাকে।",
  "stats.collected": "ইলেকট্রনিক্স সংগৃহীত",
  "stats.refurbished": "ডিভাইস রিফার্বিশড",
  "stats.co2": "টন CO₂ হ্রাস",
  "stats.communities": "কমিউনিটি সেবা",

  "how.heading": "কীভাবে কাজ করে",
  "how.sub": "অনুরোধ থেকে কনফার্মেশন — মাত্র চারটি ধাপে।",
  "how.s1.t": "পিকআপের অনুরোধ",
  "how.s1.d": "আপনার কী আছে এবং ঠিকানা জানান — অনলাইন বা WhatsApp-এ।",
  "how.s2.t": "আমরা সংগ্রহ করি",
  "how.s2.d": "আপনার পছন্দের সময়ে সার্টিফাইড টিম আপনার দরজায় পৌঁছায়।",
  "how.s3.t": "রিসাইকেল বা রিফার্বিশ",
  "how.s3.d": "ডিভাইসগুলো বাছাই, ওয়াইপ, রিফার্বিশ বা নিরাপদে প্রসেস করা হয়।",
  "how.s4.t": "কনফার্মেশন পান",
  "how.s4.d": "ডিজিটাল রিপোর্টে দেখুন আপনার বর্জ্য কোথায় গেল এবং কী প্রভাব ফেলল।",

  "services.heading": "এন্ড-টু-এন্ড রিকভারি",
  "services.sub":
    "বাসা-বাড়ির পিকআপ থেকে কর্পোরেট ডিকমিশনিং পর্যন্ত — পুরো ই-বর্জ্যের জীবনচক্র নিরাপদে পরিচালনা।",

  "benefits.heading": "কেন EcoCycle বেছে নেবেন",
  "benefits.eco.t": "পরিবেশবান্ধব ডিসপোজাল",
  "benefits.eco.d": "শূন্য ল্যান্ডফিল। প্রতিটি উপাদান পুনরুদ্ধার, রিফার্বিশ বা নিরাপদে প্রসেস।",
  "benefits.data.t": "ডেটা সুরক্ষা",
  "benefits.data.d": "NIST-কমপ্লায়েন্ট ওয়াইপিং এবং অডিট ট্রেইলসহ ফিজিক্যাল ডেস্ট্রাকশন।",
  "benefits.afford.t": "সাশ্রয়ী রিফার্বিশড ডিভাইস",
  "benefits.afford.d": "স্কুল, পরিবার এবং ছোট ব্যবসার জন্য মানসম্পন্ন সেকেন্ড-লাইফ ইলেকট্রনিক্স।",
  "benefits.convenient.t": "সুবিধাজনক শিডিউলিং",
  "benefits.convenient.d": "অনলাইন বা WhatsApp-এ বুক করুন। সপ্তাহে ৭ দিন পিকআপ।",

  "testimonials.heading": "বিশ্বস্ত মানুষ ও পার্টনার",

  "faq.heading": "সাধারণ জিজ্ঞাসা",
  "faq.q1": "কী ধরনের ইলেকট্রনিক্স গ্রহণ করেন?",
  "faq.a1":
    "ফোন, ল্যাপটপ, ডেস্কটপ, মনিটর, টিভি, প্রিন্টার, রান্নাঘরের যন্ত্র, ব্যাটারি, ক্যাবল এবং বেশিরভাগ কনজ্যুমার ইলেকট্রনিক্স।",
  "faq.q2": "পিকআপ কি সত্যিই ফ্রি?",
  "faq.a2": "ঢাকা ও চট্টগ্রামে ৩+ বড় আইটেমের জন্য বাসা-বাড়ির পিকআপ ফ্রি।",
  "faq.q3": "ডেটা কীভাবে সুরক্ষিত হয়?",
  "faq.a3":
    "আমরা NIST 800-88 কমপ্লায়েন্ট ওয়াইপিং করি এবং অনুরোধে ডেস্ট্রাকশন সার্টিফিকেট দিই।",
  "faq.q4": "বড় শহরের বাইরে কি সেবা দেন?",
  "faq.a4":
    "হ্যাঁ — পার্টনার লজিস্টিকসের মাধ্যমে ৬৪টি জেলায় শিডিউল পিকআপ সমন্বয় করি।",

  "newsletter.heading": "আপডেটে থাকুন",
  "newsletter.sub": "ই-বর্জ্য টিপস, ইমপ্যাক্ট রিপোর্ট এবং কমিউনিটি ড্রাইভের মাসিক আপডেট।",
  "newsletter.placeholder": "you@example.com",
  "newsletter.success": "ধন্যবাদ — আপনি সাবস্ক্রাইব হয়েছেন!",

  "cta.banner.heading": "আপনার জায়গা পরিষ্কার করতে প্রস্তুত?",
  "cta.banner.sub":
    "৫,০০০+ পরিবেশ সচেতন বাংলাদেশির সাথে যোগ দিন। লজিস্টিকস আমরা সামলাব, আপনি গ্রহ বাঁচান।",

  "footer.tagline": "বাংলাদেশের সার্কুলার ইলেকট্রনিক্স পার্টনার।",
  "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  "footer.product": "প্রোডাক্ট",
  "footer.company": "কোম্পানি",
  "footer.legal": "আইনি",
  "footer.privacy": "প্রাইভেসি",
  "footer.terms": "শর্তাবলী",

  "lang.toggle": "EN / বাং",
  "theme.toggle": "থিম পরিবর্তন",

  "schedule.title": "পিকআপ শিডিউল করুন",
  "schedule.sub": "আপনার ই-বর্জ্য সম্পর্কে জানান, আমরা সুবিধাজনক সংগ্রহের ব্যবস্থা করব।",
  "schedule.step": "ধাপ",
  "schedule.of": "এর",
  "schedule.form.name": "পুরো নাম",
  "schedule.form.phone": "ফোন নম্বর",
  "schedule.form.email": "ইমেইল",
  "schedule.form.address": "পিকআপ ঠিকানা",
  "schedule.form.device": "ডিভাইসের ধরন",
  "schedule.form.devicePh": "যেমন: ল্যাপটপ, টিভি, মিশ্র",
  "schedule.form.qty": "আনুমানিক সংখ্যা",
  "schedule.form.date": "পছন্দের পিকআপ তারিখ",
  "schedule.form.notes": "অতিরিক্ত মন্তব্য (ঐচ্ছিক)",
  "schedule.success.title": "অনুরোধ গৃহীত হয়েছে 🎉",
  "schedule.success.body":
    "আপনার পিকআপ লগ করা হয়েছে। ২৪ ঘণ্টার মধ্যে আমাদের টিম WhatsApp-এ কনফার্ম করবে।",
  "schedule.success.wa": "WhatsApp-এ বিস্তারিত পাঠান",
  "schedule.success.again": "আরেকটি শিডিউল",

  "services.page.title": "আমাদের সেবাসমূহ",
  "services.page.sub": "প্রতিটি প্রোগ্রাম নিরাপত্তা, সিকিউরিটি এবং স্থায়িত্বকে কেন্দ্র করে তৈরি।",
  "services.description": "বিবরণ",
  "services.benefits": "সুবিধা",
  "services.process": "প্রক্রিয়া",

  "impact.page.title": "আমাদের প্রভাব",
  "impact.page.sub": "সংখ্যাগুলো রূপ নেয় পরিচ্ছন্ন শহর ও স্বাস্থ্যকর কমিউনিটিতে।",
  "impact.chart.title": "পুনরুদ্ধারকৃত উপাদান (টন/বছর)",
  "impact.timeline": "মাইলফলক",

  "corp.title": "কর্পোরেট সলিউশন",
  "corp.sub":
    "ব্যাংক, এনজিও এবং এন্টারপ্রাইজের জন্য ডিকমিশনিং, ডেটা সিকিউরিটি ও CSR-প্রস্তুত প্রোগ্রাম।",
  "corp.form.title": "কর্পোরেট প্রস্তাব অনুরোধ করুন",
  "corp.form.company": "কোম্পানির নাম",
  "corp.form.contact": "যোগাযোগকারী",
  "corp.form.role": "পদবি",
  "corp.form.volume": "আনুমানিক পরিমাণ",
  "corp.form.message": "আপনার প্রকল্প সম্পর্কে জানান",
  "corp.form.submit": "অনুরোধ পাঠান",
  "corp.form.success": "ধন্যবাদ — আমাদের এন্টারপ্রাইজ টিম শীঘ্রই যোগাযোগ করবে।",

  "about.title": "EcoCycle সম্পর্কে",
  "about.sub": "দায়িত্বশীল ইলেকট্রনিক্স রিসাইক্লিংয়ের মাধ্যমে পরিচ্ছন্ন বাংলাদেশ গড়ছি।",
  "about.mission": "মিশন",
  "about.missionBody":
    "বাংলাদেশে ইলেকট্রনিক্সের জন্য একটি সার্কুলার ইকোনমি তৈরি করা — একটি একটি পিকআপের মাধ্যমে।",
  "about.vision": "ভিশন",
  "about.visionBody":
    "এমন একটি দেশ যেখানে কোনো কার্যকর ডিভাইস নষ্ট হবে না এবং কোনো বিষাক্ত উপাদান ল্যান্ডফিলে যাবে না।",
  "about.team": "আমাদের টিম",

  "blog.title": "ব্লগ ও রিসোর্স",
  "blog.sub": "ই-বর্জ্য সচেতনতা, রিসাইক্লিং টিপস এবং আমাদের ফ্যাসিলিটির আপডেট।",
  "blog.search": "আর্টিকেল খুঁজুন…",
  "blog.all": "সব",

  "contact.title": "যোগাযোগ করুন",
  "contact.sub": "সাধারণত এক কর্মদিবসের মধ্যে উত্তর দিই।",
  "contact.form.name": "আপনার নাম",
  "contact.form.email": "ইমেইল",
  "contact.form.message": "কীভাবে সাহায্য করতে পারি?",
  "contact.success": "বার্তা পাঠানো হয়েছে — শীঘ্রই যোগাযোগ করব।",
  "contact.address": "গুলশান এভিনিউ, ঢাকা ১২১২, বাংলাদেশ",
  "contact.phone": "+৮৮০ ১৭০০ ০০০০০০",
  "contact.email": "hello@ecocycle.bd",
};

const dicts: Record<Lang, Dict> = { en, bn };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ecocycle.lang") as Lang | null;
      if (stored === "en" || stored === "bn") setLangState(stored);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("ecocycle.lang", l);
    } catch {}
  };

  const t = (key: string) => dicts[lang][key] ?? dicts.en[key] ?? key;

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useT() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}
