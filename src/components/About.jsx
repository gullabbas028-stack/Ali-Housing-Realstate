import { useReveal } from "../hooks/useReveal";
import { company, aboutHighlights } from "../data/siteData";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-sand-50 py-24 md:py-32">
      <div ref={ref} className="reveal container-x grid md:grid-cols-[1.1fr,1fr] gap-14 items-start">
        <div>
          <p className="text-gold-dark text-sm tracking-wide mb-3">About Ali Housings</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-navy-900 leading-tight max-w-xl">
            {company.tagline}
          </h2>
          <p className="mt-6 text-ink/75 text-lg leading-relaxed max-w-xl">
            {company.intro}
          </p>
          <p className="mt-4 text-sm text-ink/50 max-w-xl">
            Developed by {company.legalDeveloper}.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-navy-900/10 p-8 shadow-card">
          <ul className="space-y-5">
            {aboutHighlights.map((point) => (
              <li key={point} className="flex gap-3 items-start">
                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
                <span className="text-ink/80">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
