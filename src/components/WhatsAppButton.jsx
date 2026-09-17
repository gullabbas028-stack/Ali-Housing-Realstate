import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import { whatsappMessages } from "../data/siteData";

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp(whatsappMessages.general)}
      aria-label="Chat with Ali Housings on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[90] h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-transform"
    >
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </button>
  );
}
