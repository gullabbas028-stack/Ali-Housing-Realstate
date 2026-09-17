// ============================================================================
// CENTRAL CONTENT FILE — everything on the site is edited from here.
//
// SOURCING NOTE: alihousings.com is a client-side rendered (React) app, so it
// could not be scraped directly — only the empty JS shell is publicly
// fetchable. The facts below were cross-verified from public third-party
// sources (Ali Housing's Facebook business page, Zameen.com listings, and
// independent property-marketing writeups about Ali Housing Scheme).
//
// Anything marked TODO is a placeholder ONLY — replace with the real
// text/images/video from the original site or from Ali Housings directly.
// Nothing marked TODO is presented to visitors as a verified company claim.
// ============================================================================

export const WHATSAPP_NUMBER = "923281449404";

export const company = {
  name: "Ali Housings",
  legalDeveloper: "Sarwar and Company Pvt Ltd", // TODO: confirm exact legal name Ali Housings wants shown
  tagline: "A trusted address on Multan Road, Lahore.",
  intro:
    "Ali Housing Scheme is an LDA-regulated residential development on Main Multan Road, Mohlanwal, Lahore — close to Thokar Niaz Baig and the Lahore Ring Road. The scheme is planned around three developed blocks, with flexible plot sizes and instalment-based ownership.", // TODO: replace with the exact About copy from alihousings.com once available
  address: "Ali Housing Scheme, Main Multan Road, Mohlanwal, Lahore, Pakistan",
  phone: "+92 307 7784442", // sourced from Ali Housing's Facebook business page
  email: "info@alihousings.com", // sourced from Ali Housing's Facebook business page
  facebook: "https://www.facebook.com/alihousing/",
  nocStatus: "LDA (Lahore Development Authority) regulated / approved", // TODO: confirm exact current NOC wording with Ali Housings
};

export const stats = [
  { label: "Developed blocks", value: "3" },
  { label: "Starting plot size", value: "3 Marla" },
  { label: "Booking installments", value: "Up to 3 yrs" },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Plot & Home Booking",
    description:
      "Reserve residential plots or ready homes across Hussain, Abu Bakar and Hassan blocks with a low booking amount and instalment plan.",
  },
  {
    title: "Site Visits",
    description:
      "Guided, no-obligation visits to the scheme so you can see block layouts, development status and road access in person.",
  },
  {
    title: "Instalment Plans",
    description:
      "Structured payment plans spread over an extended period, designed for salaried buyers and small investors alike.",
  },
  {
    title: "Documentation Support",
    description:
      "Assistance with booking paperwork, transfer, and possession documentation for buyers and investors.",
  }, // TODO: confirm exact services list against alihousings.com's Services section
];

// "Properties" = the scheme's real, named blocks (verified via Zameen.com
// and independent listings). Replace the description/image/price fields
// with the exact figures and photography from alihousings.com when available.
export const properties = [
  {
    id: "hussain-block",
    name: "Hussain Block",
    location: "Ali Housing Scheme, Main Multan Road, Mohlanwal, Lahore",
    sizeFrom: "3 Marla",
    priceNote: "Booking from ~PKR 3.5 Lakh · instalments up to 3 years", // TODO: confirm current price list
    description:
      "One of Ali Housing Scheme's core residential blocks, offering plotted residential land close to the scheme's main access road.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "abu-bakar-block",
    name: "Abu Bakar Block",
    location: "Ali Housing Scheme, Main Multan Road, Mohlanwal, Lahore",
    sizeFrom: "3 Marla",
    priceNote: "Booking from ~PKR 3.5 Lakh · instalments up to 3 years", // TODO: confirm current price list
    description:
      "A developed residential block within the scheme, planned for family homes with nearby schools, markets and mosques.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "hassan-block",
    name: "Hassan Block",
    location: "Ali Housing Scheme, Main Multan Road, Mohlanwal, Lahore",
    sizeFrom: "3 Marla",
    priceNote: "Ready-to-move options available on select plots", // TODO: confirm current price list
    description:
      "Hassan Block includes both plot bookings and ready-to-move homes, with cash and instalment options depending on the unit.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
];

export const aboutHighlights = [
  "Located on Main Multan Road, Mohlanwal — close to Thokar Niaz Baig and Lahore Ring Road",
  "LDA-regulated residential scheme",
  "Three developed blocks: Hussain, Abu Bakar and Hassan",
  "Booking possible with a low down payment and instalment plan",
]; // TODO: replace with the exact bullet points / mission-vision text from alihousings.com's About section

export const whatsappMessages = {
  bookVisit:
    "Hello Ali Housings, I am interested in booking a visit. Please share the available timings and details.",
  contact:
    "Hello Ali Housings, I would like to get more information about your properties.",
  propertyInquiry: (propertyName) =>
    `Hello Ali Housings, I am interested in ${propertyName}. Please share more details.`,
  serviceInquiry: (serviceName) =>
    `Hello Ali Housings, I would like more information about ${serviceName}.`,
  general: "Hello Ali Housings, I would like to get more information.",
};
