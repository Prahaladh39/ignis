"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";

export interface Partner {
  name: string;
  logo?: string;
  category?: string;
}

// Actual partner logos uploaded in /public/images/partners/
const DEFAULT_PARTNERS: Partner[] = [
  {
    name: "eVidyaloka",
    category: "EdTech & Education Partner",
    logo: "/images/partners/Picture1.png",
  },
  {
    name: "Educate Girls",
    category: "Impact Partner",
    logo: "/images/partners/Picture2.png",
  },
  {
    name: "Acumen",
    category: "Global Impact Partner",
    logo: "/images/partners/ab-1-3.jpg",
  },
  {
    name: "Andhra Pradesh State Skill Development Corporation",
    category: "Government Partner",
    logo: "/images/partners/ab-2-1.jpg",
  },
  {
    name: "Deshpande Foundation",
    category: "Social Innovation Partner",
    logo: "/images/partners/ab-3-1.jpg",
  },
  {
    name: "H T Parekh Foundation",
    category: "Philanthropic Partner",
    logo: "/images/partners/ab-4.jpg",
  },
  {
    name: "Miller Center GSBI Alumni",
    category: "Social Enterprise Accelerator",
    logo: "/images/partners/ab-5.jpg",
  },
  {
    name: "IIT Kanpur (SIIC)",
    category: "Incubation Partner",
    logo: "/images/partners/ab-7.jpg",
  },
  {
    name: "Yunus Social Business Fund Bengaluru",
    category: "Global Impact Investor",
    logo: "/images/partners/ab-8.jpg",
  },
  {
    name: "ET NOW",
    category: "Media Recognition",
    logo: "/images/partners/lg-11.jpg",
  },
];

export default function PartnersMarquee({
  partners = DEFAULT_PARTNERS,
}: {
  partners?: Partner[];
}) {
  // We duplicate the list to achieve an infinite, seamless loop
  const marqueeList = [...partners, ...partners];

  return (
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-b border-[#E8E2D7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8F5EF] border border-[#E2DDD5] shadow-xs text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Trusted Collaborations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight">
            Our Partners
          </h2>

          {/* Elegant Editorial Diamond Divider (matching old brand identity in a modern aesthetic) */}
          <div className="flex items-center justify-center gap-4 my-5">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
            <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
          </div>

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
            <div
              key={`${partner.name}-${index}`}
              className="group flex-shrink-0 flex items-center justify-center px-4 py-3 transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>

      {/* Subtle indicator hint */}
      <div className="text-center mt-8 text-xs text-[#8C98A4]">
        Hover over any partner to pause the scroller
      </div>
    </section>
  );
}
