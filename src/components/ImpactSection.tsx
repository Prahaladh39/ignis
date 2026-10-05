"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Users, Handshake, Award, GraduationCap } from "lucide-react";

export default function ImpactSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"all" | "direct" | "partner">("all");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter animation state
  const [counts, setCounts] = useState({
    overall: 0,
    direct: 0,
    partner: 0,
    trained: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              overall: Math.floor(ease * 600000),
              direct: Math.floor(ease * 404000),
              partner: Math.floor(ease * 200000),
              trained: Math.floor(ease * 4000),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                overall: 600000,
                direct: 404000,
                partner: 200000,
                trained: 4000,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const ecosystem = [
    "Schools",
    "Teachers",
    "Government",
    "NGOs",
    "CSR partnerships",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F8F5EF] border-b border-[#E8E2D7] text-[#2D3748] py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle organic light reflections */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Block */}
        <div className="max-w-[840px] mb-14 sm:mb-16">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Measurable Scale & Evidence
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[36px] sm:text-[44px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal">
            12 years of learning in the real world
          </h2>

        </div>

        {/* Interactive Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 mb-12">
          
          {/* Hero Stat: 600,000+ Learners Reached Overall */}
          <div 
            onMouseEnter={() => setActiveSegment("all")}
            className={`md:col-span-6 lg:col-span-5 bg-white border transition-all duration-300 rounded-3xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group shadow-sm ${
              activeSegment === "all" ? "border-[#A21246]/40 shadow-md" : "border-[#E8E2D7]"
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-2xl bg-[#A21246]/10 text-[#A21246] border border-[#A21246]/20">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#A21246] bg-[#A21246]/10 px-3 py-1 rounded-full border border-[#A21246]/20 font-bold">
                Total Reach
              </span>
            </div>

            <div>
              <div className="font-serif text-[48px] sm:text-[56px] lg:text-[64px] font-bold leading-none tracking-tight text-[#04315D] mb-3">
                {counts.overall.toLocaleString()}+
              </div>
              <p className="text-[17px] sm:text-[19px] text-[#334155] font-normal">
                Learners reached overall
              </p>
            </div>

            {/* Interactive Visual Distribution Bar */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D7]">
              <div className="flex justify-between text-xs text-[#64748B] mb-2 font-mono font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#A21246]" />
                  Direct: 67%
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#107C68]" />
                  Partners: 33%
                </span>
              </div>
              <div className="h-2.5 w-full bg-[#EAE4D9] rounded-full overflow-hidden flex">
                <div 
                  className={`h-full transition-all duration-300 ${
                    activeSegment === "direct" || activeSegment === "all" ? "bg-[#A21246]" : "bg-[#A21246]/40"
                  }`} 
                  style={{ width: "67%" }} 
                />
                <div 
                  className={`h-full transition-all duration-300 ${
                    activeSegment === "partner" || activeSegment === "all" ? "bg-[#107C68]" : "bg-[#107C68]/40"
                  }`} 
                  style={{ width: "33%" }} 
                />
              </div>
            </div>
          </div>

          {/* Right Column: 3 Complementary Metric Cards */}
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* 404,000+ Directly */}
            <div
              onMouseEnter={() => setActiveSegment("direct")}
              className={`bg-white border transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group ${
                activeSegment === "direct" ? "border-[#A21246]/50 shadow-md" : "border-[#E8E2D7] hover:border-[#A21246]/30"
              }`}
            >
              <div className="p-2.5 w-fit rounded-xl bg-[#A21246]/10 text-[#A21246] border border-[#A21246]/20 mb-6 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-tight text-[#04315D] mb-2">
                  {counts.direct.toLocaleString()}+
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.5]">
                  Learners reached directly
                </p>
              </div>
            </div>

            {/* 200,000+ Through Partners */}
            <div
              onMouseEnter={() => setActiveSegment("partner")}
              className={`bg-white border transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group ${
                activeSegment === "partner" ? "border-[#107C68]/50 shadow-md" : "border-[#E8E2D7] hover:border-[#107C68]/30"
              }`}
            >
              <div className="p-2.5 w-fit rounded-xl bg-[#107C68]/10 text-[#107C68] border border-[#107C68]/20 mb-6 group-hover:scale-105 transition-transform">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-tight text-[#04315D] mb-2">
                  {counts.partner.toLocaleString()}+
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.5]">
                  Additional learners reached through partners
                </p>
              </div>
            </div>

            {/* 4,000+ Young Graduates */}
            <div className="sm:col-span-2 bg-white border border-[#E8E2D7] hover:border-[#DA8216]/50 transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm group">
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-[#DA8216]/10 text-[#DA8216] border border-[#DA8216]/20 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-[36px] sm:text-[40px] font-bold leading-none text-[#04315D] mb-1">
                    {counts.trained.toLocaleString()}+
                  </div>
                  <p className="text-[15px] sm:text-[16px] text-[#475569]">
                    Young graduates and professionals trained
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-[#DA8216] bg-[#DA8216]/10 border border-[#DA8216]/20 px-3 py-1 rounded-full font-bold uppercase sm:text-right w-fit">
                Capacity Building
              </div>
            </div>

          </div>

        </div>

        {/* Second Line: Partner Ecosystem + Evidence CTA Link */}
        <div className="pt-8 border-t border-[#E8E2D7] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Ecosystem Entities with Interactivity */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {ecosystem.map((entity, i) => (
              <span
                key={entity}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#04315D]/40 text-[14px] sm:text-[15px] text-[#04315D] font-medium transition-all shadow-xs cursor-default"
              >
                <span>{entity}</span>
                {i < ecosystem.length - 1 && (
                  <span className="text-[#CBD5E1] hidden sm:inline" aria-hidden="true">
                    •
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Link: See the evidence → */}
          <Link
            href="/impact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#A21246] hover:bg-[#850E38] text-white font-medium text-[15px] hover:gap-3.5 transition-all shadow-sm w-fit group"
          >
            <span>See the evidence</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
          </Link>

        </div>

      </div>
    </section>
  );
}
