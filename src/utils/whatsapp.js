import { WHATSAPP_NUMBER } from "../data/siteData";

// Single reusable helper — every WhatsApp CTA on the site should call this.
export function openWhatsApp(message = "") {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ""}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function whatsappHref(message = "") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}${encoded ? `?text=${encoded}` : ""}`;
}
