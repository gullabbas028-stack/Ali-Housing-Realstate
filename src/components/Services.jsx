import { useReveal } from "../hooks/useReveal";
import { services, whatsappMessages } from "../data/siteData";
import { openWhatsApp } from "../utils/whatsapp";
import { Building2, MapPinned, Wallet, FileCheck2 } from "lucide-react";

const icons = [Building2, MapPinned, Wallet, FileCheck2];

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-navy-900 py-24 md:py-32">
      <div ref={ref} className="reveal container-x">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="text-gold-light text-sm tracking-wide mb-3">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white max-w-lg">
              What we help you with
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={service.title} className="bg-navy-900 p-7 hover:bg-navy-700 transition-colors">
                <Icon className="text-gold" size={26} />
                <h3 className="font-display text-xl text-white mt-5">{service.title}</h3>
                <p className="text-sand-100/70 text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => openWhatsApp(whatsappMessages.serviceInquiry(service.title))}
                  className="mt-5 text-sm text-gold-light hover:text-white transition-colors"
                >
                  Get Information →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
