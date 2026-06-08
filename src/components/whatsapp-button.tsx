import { MessageCircle } from "lucide-react";

const WA_NUMBER = "8801700000000"; // placeholder

export function WhatsAppButton() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    "Hi EcoCycle! I'd like to schedule an e-waste pickup."
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 -m-1 rounded-full bg-[#25D366]/40 blur-md transition-opacity group-hover:opacity-80" />
      <span className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform group-hover:scale-110 active:scale-95">
        <MessageCircle className="size-6" aria-hidden />
      </span>
    </a>
  );
}
