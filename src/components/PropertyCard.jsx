import { MapPin, Ruler } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import { whatsappMessages } from "../data/siteData";

function PropertyImage({ property }) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-navy-900">
      <img
        src={property.image}
        alt={`${property.name} residential homes`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-4 text-xs text-white/90 tracking-wide">
        Ali Housing Scheme
      </span>
    </div>
  );
}

export default function PropertyCard({ property, onViewDetails }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-navy-900/10 shadow-card flex flex-col">
      <PropertyImage property={property} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-navy-900">{property.name}</h3>
        <p className="flex items-center gap-1.5 text-sm text-ink/60 mt-2">
          <MapPin size={15} className="text-gold-dark shrink-0" />
          {property.location}
        </p>
        <p className="flex items-center gap-1.5 text-sm text-ink/60 mt-1.5">
          <Ruler size={15} className="text-gold-dark shrink-0" />
          From {property.sizeFrom}
        </p>
        <p className="text-ink/70 text-sm mt-4 leading-relaxed flex-1">
          {property.description}
        </p>
        <p className="text-sm font-medium text-navy-900 mt-4">{property.priceNote}</p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onViewDetails(property)}
            className="flex-1 rounded-full border border-navy-900/20 px-4 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900 transition-colors"
          >
            View Details
          </button>
          <button
            onClick={() => openWhatsApp(whatsappMessages.propertyInquiry(property.name))}
            className="flex-1 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-gold-light transition-colors"
          >
            Book Visit
          </button>
        </div>
      </div>
    </div>
  );
}
