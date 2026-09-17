import { useReveal } from "../hooks/useReveal";
import { company, whatsappMessages, stats } from "../data/siteData";
import { openWhatsApp } from "../utils/whatsapp";

export default function Hero() {
  const ref = useReveal();

  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden bg-navy-900">
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
        alt="Modern residential homes and landscaped streets"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-55"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=85"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-city-at-sunset-11-large.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/65 to-navy-900/15" />

      <div ref={ref} className="reveal container-x relative pb-20 pt-40 md:pb-28">
        <p className="text-gold-light text-sm tracking-wide mb-4">
          Ali Housing Scheme · Main Multan Road, Mohlanwal, Lahore
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white max-w-3xl">
          A trusted address, built for the long term.
        </h1>
        <p className="mt-6 text-lg text-sand-100/85 max-w-xl">
          {company.intro}
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <button
            onClick={() => openWhatsApp(whatsappMessages.bookVisit)}
            className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-base font-semibold text-navy-900 hover:bg-gold-light transition-colors"
          >
            Book a Visit
          </button>
          <button
            onClick={() => openWhatsApp(whatsappMessages.contact)}
            className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:border-gold hover:text-gold-light transition-colors"
          >
            Contact Us
          </button>
        </div>

        <div className="mt-14 grid grid-cols-3 max-w-lg gap-6 border-t border-white/10 pt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl sm:text-3xl text-gold-light">{s.value}</div>
              <div className="text-xs sm:text-sm text-sand-100/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
