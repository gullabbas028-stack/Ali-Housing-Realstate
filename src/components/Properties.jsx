import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { properties } from "../data/siteData";
import PropertyCard from "./PropertyCard";
import PropertyDetails from "./PropertyDetails";

export default function Properties() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section id="properties" className="bg-sand-50 py-24 md:py-32">
      <div ref={ref} className="reveal container-x">
        <p className="text-gold-dark text-sm tracking-wide mb-3">Properties &amp; Blocks</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-900 max-w-xl">
          The blocks of Ali Housing Scheme
        </h2>
        <p className="mt-4 text-ink/70 max-w-xl">
          Three developed residential blocks, each with its own layout and pace of construction.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onViewDetails={setActive} />
          ))}
        </div>
      </div>

      {active && <PropertyDetails property={active} onClose={() => setActive(null)} />}
    </section>
  );
}
