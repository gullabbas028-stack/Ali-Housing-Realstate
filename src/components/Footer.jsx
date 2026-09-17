import { nav, company, whatsappMessages, properties } from "../data/siteData";
import { whatsappHref } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.87.24-1.46 1.5-1.46H16.6V4.34C16.3 4.3 15.3 4.2 14.15 4.2c-2.4 0-4.05 1.47-4.05 4.17V10.5H7.6v3H10.1V21h3.4Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <svg width="26" height="26" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="12" fill="#C79A3E" />
              <path d="M32 14 L52 30 H46 V50 H36 V38 H28 V50 H18 V30 H12 Z" fill="#0E2038" />
            </svg>
            <span className="font-display text-lg text-white">Ali Housings</span>
          </div>
          <p className="mt-4 text-sm text-sand-100/60 max-w-xs leading-relaxed">
            {company.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-sand-100/60 hover:text-gold-light transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Properties</h4>
          <ul className="space-y-2.5">
            {properties.map((p) => (
              <li key={p.id}>
                <a href="#properties" className="text-sm text-sand-100/60 hover:text-gold-light transition-colors">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white mb-4">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-sand-100/60">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ali Housings on Facebook"
              className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href={whatsappHref(whatsappMessages.contact)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Ali Housings on WhatsApp"
              className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-900 transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-xs text-sand-100/40">
          © {new Date().getFullYear()} Ali Housings. All rights reserved.
        </p>
        <p className="text-xs text-sand-100/40">
          Developed by {company.legalDeveloper}
        </p>
      </div>
    </footer>
  );
}
