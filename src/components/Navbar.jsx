import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, company } from "../data/siteData";
import { openWhatsApp } from "../utils/whatsapp";
import { whatsappMessages } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-900/95 backdrop-blur shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-2"
          : "bg-navy-900/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label={`${company.name} home`}>
          <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="12" fill="#C79A3E" />
            <path d="M32 14 L52 30 H46 V50 H36 V38 H28 V50 H18 V30 H12 Z" fill="#0E2038" />
          </svg>
          <span className="font-display text-xl text-white tracking-tight">
            Ali Housings
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-sand-100/90 hover:text-gold-light transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => openWhatsApp(whatsappMessages.bookVisit)}
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gold-light transition-colors"
          >
            Book a Visit
          </button>
        </div>

        <button
          className="md:hidden text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-navy-900 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg text-sand-100 font-display"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openWhatsApp(whatsappMessages.bookVisit);
            }}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-navy-900"
          >
            Book a Visit
          </button>
        </div>
      </div>
    </header>
  );
}
