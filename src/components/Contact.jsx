import { useReveal } from "../hooks/useReveal";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { company, whatsappMessages } from "../data/siteData";
import { openWhatsApp, whatsappHref } from "../utils/whatsapp";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="bg-navy-900 py-24 md:py-32">
      <div ref={ref} className="reveal container-x grid md:grid-cols-[1fr,1.1fr] gap-14">
        <div>
          <p className="text-gold-light text-sm tracking-wide mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white max-w-md">
            Come see the site for yourself.
          </h2>
          <p className="mt-5 text-sand-100/70 max-w-sm">
            The fastest way to reach us is WhatsApp — send a message and we'll get back to you with timings and details.
          </p>

          <button
            onClick={() => openWhatsApp(whatsappMessages.contact)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy-900 hover:bg-gold-light transition-colors"
          >
            <MessageCircle size={19} />
            Chat on WhatsApp
          </button>
        </div>

        <div className="bg-navy-700/60 border border-white/10 rounded-2xl p-8 space-y-6">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="flex items-start gap-4 group"
          >
            <span className="shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Phone size={18} className="text-gold-light" />
            </span>
            <div>
              <div className="text-xs text-sand-100/50">Phone</div>
              <div className="text-white group-hover:text-gold-light transition-colors">{company.phone}</div>
            </div>
          </a>

          <a href={`mailto:${company.email}`} className="flex items-start gap-4 group">
            <span className="shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Mail size={18} className="text-gold-light" />
            </span>
            <div>
              <div className="text-xs text-sand-100/50">Email</div>
              <div className="text-white group-hover:text-gold-light transition-colors">{company.email}</div>
            </div>
          </a>

          <div className="flex items-start gap-4">
            <span className="shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <MapPin size={18} className="text-gold-light" />
            </span>
            <div>
              <div className="text-xs text-sand-100/50">Address</div>
              <div className="text-white">{company.address}</div>
            </div>
          </div>

          <a
            href={whatsappHref(whatsappMessages.contact)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <span className="shrink-0 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <MessageCircle size={18} className="text-gold-light" />
            </span>
            <div>
              <div className="text-xs text-sand-100/50">WhatsApp</div>
              <div className="text-white group-hover:text-gold-light transition-colors">+{`923281449404`.replace(/(\d{2})(\d{3})(\d{7})/, "$1 $2 $3")}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
