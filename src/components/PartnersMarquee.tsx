"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, X, CheckCircle2 } from "lucide-react";

export interface Partner {
  name: string;
  logo?: string;
  category?: string;
  focusArea?: string;
  description: string;
  impactHighlight?: string;
}

// Actual partner logos and collaboration context
const DEFAULT_PARTNERS: Partner[] = [
  {
    name: "eVidyaloka",
    category: "EdTech & Education Partner",
    logo: "/images/partners/Picture1.png",
    focusArea: "Digital Classrooms & Rural Remote Learning",
    description:
      "Collaborated to integrate contextual English and Life Skills curriculum into digital learning centers across remote village schools, empowering volunteer teachers with structured pedagogical modules.",
    impactHighlight: "Reaching underserved rural learners through blended digital classrooms.",
  },
  {
    name: "Educate Girls",
    category: "Impact Partner",
    logo: "/images/partners/Picture2.png",
    focusArea: "Girls' Education & Life Skills",
    description:
      "Partnered on contextual life skills and agency-building interventions, providing learning toolkits designed to bolster classroom participation, decision-making confidence, and retention for adolescent girls.",
    impactHighlight: "Empowering young girls to build voice, agency, and school engagement.",
  },
  {
    name: "Acumen",
    category: "Global Impact Partner",
    logo: "/images/partners/ab-1-3.jpg",
    focusArea: "Social Enterprise Leadership & Scale",
    description:
      "Selected as an Acumen Regional Fellow / portfolio venture, receiving catalytic advisory, social metrics evaluation, and patient capital network support to scale affordable quality education across India.",
    impactHighlight: "Global mentorship on sustainable business models and ethical leadership.",
  },
  {
    name: "Andhra Pradesh State Skill Development Corporation",
    category: "Government Partner",
    logo: "/images/partners/ab-2-1.jpg",
    focusArea: "Youth Employability & English Communication",
    description:
      "Implemented statewide youth employability enhancement modules focusing on practical English communication, workplace critical thinking, interview preparedness, and collaborative problem-solving across polytechnics and degree colleges.",
    impactHighlight: "Statewide skilling partnerships bridging classroom learning to career readiness.",
  },
  {
    name: "Deshpande Foundation",
    category: "Social Innovation Partner",
    logo: "/images/partners/ab-3-1.jpg",
    focusArea: "Sandbox Social Innovation & Rural Fellows",
    description:
      "Collaborated through sandbox innovation initiatives in Hubballi and Telangana to deploy participatory teaching methods, community teacher fellowships, and grassroots capacity building in rural clusters.",
    impactHighlight: "Proven sandbox methodologies scaling teacher leadership at the grassroots level.",
  },
  {
    name: "H T Parekh Foundation",
    category: "Philanthropic Partner",
    logo: "/images/partners/ab-4.jpg",
    focusArea: "CSR School Transformation & Teacher Training",
    description:
      "Supported institutional transformation in budget private and government schools through structured CSR grants, delivering long-term in-service teacher development and classroom learning resources.",
    impactHighlight: "Multi-year programmatic grant backing holistic classroom pedagogy.",
  },
  {
    name: "Miller Center GSBI Alumni",
    category: "Social Enterprise Accelerator",
    logo: "/images/partners/ab-5.jpg",
    focusArea: "Impact Metrics & Organizational Capacity",
    description:
      "Graduated from Santa Clara University's Miller Center Global Social Benefit Institute (GSBI), refining unit economics, social return on investment (SROI), and scalable curriculum distribution systems.",
    impactHighlight: "International validation of scalable, capital-efficient educational delivery.",
  },
  {
    name: "IIT Kanpur (SIIC)",
    category: "Incubation Partner",
    logo: "/images/partners/ab-7.jpg",
    focusArea: "Tech Incubation & Research Translation",
    description:
      "Incubated at Startup Incubation and Innovation Centre (SIIC) IIT Kanpur, exploring innovative learning technologies, cognitive assessment tools, and scientific pedagogy validation for early learners.",
    impactHighlight: "Academic and technological ecosystem support for evidence-backed pedagogy.",
  },
  {
    name: "Yunus Social Business Fund Bengaluru",
    category: "Global Impact Investor",
    logo: "/images/partners/ab-8.jpg",
    focusArea: "Social Business Incubation & Scale",
    description:
      "Engaged through the Yunus Social Business ecosystem to align educational product delivery with Muhammad Yunus's principles of social enterprise self-sustainability, impact depth, and zero-dividend purpose.",
    impactHighlight: "Long-term commitment to mission-driven, non-extractive social education.",
  },
  {
    name: "ET NOW",
    category: "Media Recognition",
    logo: "/images/partners/lg-11.jpg",
    focusArea: "National Innovation & Social Impact Feature",
    description:
      "Recognized and featured on national television by ET NOW for pioneering scalable pedagogical models and low-cost educational innovation transforming classrooms across Tier-2 and rural India.",
    impactHighlight: "National spotlight on grassroots educational excellence and systemic reform.",
  },
];

export default function PartnersMarquee({
  partners = DEFAULT_PARTNERS,
}: {
  partners?: Partner[];
}) {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPartner(null);
      }
    };
    if (selectedPartner) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedPartner]);

  // We duplicate the list to achieve an infinite, seamless loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-b border-[#E8E2D7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F8F5EF] border border-[#E2DDD5] shadow-xs text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4">
            <span>Trusted Collaborations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight mb-4">
            Our Partners
          </h2>

          <p className="text-[#556987] text-sm sm:text-[15px] leading-relaxed font-normal">
            In our journey so far, we have collaborated with visionary companies, 
            foundations, and government bodies that help us get a step closer to empowering every learner.
          </p>
        </div>
      </div>

      {/* Marquee Track Container with Left & Right Gradient Fade */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* Moving Marquee Strip */}
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 px-6">
          {marqueeList.map((partner, index) => (
            <button
              key={`${partner.name}-${index}`}
              type="button"
              onClick={() => setSelectedPartner(partner)}
              title={`Click to see our partnership with ${partner.name}`}
              className="group flex-shrink-0 flex items-center justify-center px-4 py-3 transition-all duration-300 cursor-pointer focus:outline-none rounded-2xl hover:bg-[#FAF7F2]/80 focus-visible:ring-2 focus-visible:ring-[#A21246]"
            >
              {partner.logo ? (
                <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={280}
                    height={110}
                    className="max-h-[90px] sm:max-h-[110px] max-w-[220px] sm:max-w-[280px] w-auto h-auto object-contain transition-opacity duration-300 opacity-95 group-hover:opacity-100 mix-blend-multiply"
                  />
                </div>
              ) : (
                <div className="text-center px-6 py-3">
                  <div className="text-xs uppercase tracking-wider text-[#A21246] font-semibold mb-1">
                    {partner.category || "Partner"}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-[#04315D] group-hover:text-[#A21246] transition-colors leading-snug">
                    {partner.name}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Hint */}
      <div className="text-center mt-6 text-xs text-[#8C98A4] flex items-center justify-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A21246]" />
        <span>Click on any partner to see what we have built together</span>
      </div>

      {/* POP-UP MODAL CARD */}
      {selectedPartner && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-backdrop-fade"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E8E2D7] overflow-hidden animate-modal-pop will-change-transform"
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A21246] via-[#04315D] to-[#107C68]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedPartner(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg bg-[#F8F5EF] text-[#64748B] hover:text-[#04315D] hover:bg-[#EAE4D9] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header: Partner Logo / Name */}
            <div className="flex items-center gap-4 mb-5 pt-1 pr-8">
              {selectedPartner.logo ? (
                <div className="w-24 h-16 sm:w-28 sm:h-18 p-2 rounded-xl bg-[#FAF7F2] border border-[#E8E2D7] flex items-center justify-center shrink-0">
                  <Image
                    src={selectedPartner.logo}
                    alt={selectedPartner.name}
                    width={120}
                    height={60}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              ) : null}

              <div>
                <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-[#A21246] font-bold">
                  {selectedPartner.category || "Impact Partner"}
                </span>
                <h3
                  id="partner-modal-title"
                  className="font-serif text-[19px] sm:text-[21px] font-bold text-[#04315D] leading-snug"
                >
                  {selectedPartner.name}
                </h3>
              </div>
            </div>

            {/* Focus Area Pill */}
            {selectedPartner.focusArea && (
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#04315D]/5 border border-[#04315D]/15 text-[#04315D] text-[12px] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#107C68]" />
                <span>{selectedPartner.focusArea}</span>
              </div>
            )}

            {/* Narrative / Collaboration Details */}
            <div className="mb-5">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-bold mb-1.5">
                What We Have Done Together
              </h4>
              <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#4A5568]">
                {selectedPartner.description}
              </p>
            </div>

            {/* Highlight Box */}
            {selectedPartner.impactHighlight && (
              <div className="bg-[#FAF7F2] border-l-3 border-[#A21246] rounded-r-xl p-3.5 sm:p-4 mb-6">
                <span className="block text-[10.5px] font-mono uppercase tracking-wider text-[#A21246] font-bold mb-1">
                  Key Collaboration Outcome
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#04315D] font-medium leading-snug">
                  {selectedPartner.impactHighlight}
                </p>
              </div>
            )}

            {/* Action / Dismiss */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8E2D7]">
              <button
                type="button"
                onClick={() => setSelectedPartner(null)}
                className="px-5 py-2 rounded-lg bg-[#04315D] hover:bg-[#032342] text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
