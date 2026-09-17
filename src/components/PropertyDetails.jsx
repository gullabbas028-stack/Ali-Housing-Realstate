import { useEffect } from "react";
import { X, MapPin, Ruler, Wallet } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import { whatsappMessages } from "../data/siteData";

export default function PropertyDetails({ property, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-navy-900/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${property.name} details`}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-br from-navy-700 to-navy-900 aspect-[16/7] flex items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 120 120" className="opacity-80">
            <rect x="10" y="55" width="100" height="45" fill="none" stroke="#C79A3E" strokeWidth="1.5" />
            <path d="M60 20 L95 55 H88 V80 H32 V55 H25 Z" fill="none" stroke="#E1BD6E" strokeWidth="1.5" />
          </svg>
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-7">
          <h3 className="font-display text-3xl text-navy-900">{property.name}</h3>

          <div className="mt-5 grid sm:grid-cols-3 gap-4 border-y border-navy-900/10 py-5">
            <div className="flex items-start gap-2">
              <MapPin size={17} className="text-gold-dark mt-0.5 shrink-0" />
              <span className="text-sm text-ink/70">{property.location}</span>
            </div>
            <div className="flex items-start gap-2">
              <Ruler size={17} className="text-gold-dark mt-0.5 shrink-0" />
              <span className="text-sm text-ink/70">From {property.sizeFrom}</span>
            </div>
            <div className="flex items-start gap-2">
              <Wallet size={17} className="text-gold-dark mt-0.5 shrink-0" />
              <span className="text-sm text-ink/70">{property.priceNote}</span>
            </div>
          </div>

          <p className="mt-5 text-ink/75 leading-relaxed">{property.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              onClick={() => openWhatsApp(whatsappMessages.propertyInquiry(property.name))}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-900 hover:bg-gold-light transition-colors"
            >
              Book a Visit
            </button>
            <button
              onClick={() => openWhatsApp(whatsappMessages.propertyInquiry(property.name))}
              className="rounded-full border border-navy-900/20 px-6 py-3 text-sm font-semibold text-navy-900 hover:border-navy-900 transition-colors"
            >
              Ask a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
