"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Handshake,
  GraduationCap,
} from "lucide-react";

export default function ImpactSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"direct" | "partner">("direct");
  const sectionRef = useRef<HTMLElement>(null);

  // Counter animation state
  const [counts, setCounts] = useState({
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
              direct: Math.floor(ease * 404000),
              partner: Math.floor(ease * 200000),
              trained: Math.floor(ease * 4000),
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({
                direct: 404000,
                partner: 200000,
                trained: 4000,
              });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
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
      id="impact"
      ref={sectionRef}
      className="relative w-full bg-[#F8F5EF] border-b border-[#E8E2D7] text-[#2D3748] py-18 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Subtle organic light reflections */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* ============================================================== */}
        {/* HEADER: 12 years of learning in the real world                 */}
        {/* ============================================================== */}
        <div className="max-w-[840px] mb-10 sm:mb-14">
          <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Measurable Scale & Evidence
            </span>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal">
            12 years of learning in the real world
          </h2>
        </div>

        {/* ============================================================== */}
        {/* IMPACT CARDS GRID: 3 Key Metric Cards                           */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12 sm:mb-14">
          
          {/* Card 1: 404,000+ Learners Reached Directly */}
          <div
            onMouseEnter={() => setActiveSegment("direct")}
            className={`bg-white border transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group ${
              activeSegment === "direct"
                ? "border-[#A21246]/50 shadow-md"
                : "border-[#E8E2D7] hover:border-[#A21246]/30"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[#A21246]/10 text-[#A21246] border border-[#A21246]/20 group-hover:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] bg-[#F8F5EF] px-2.5 py-0.5 rounded-full border border-[#E8E2D7]">
                  Direct
                </span>
              </div>

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2.5">
                {counts.direct.toLocaleString()}+
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#334155] leading-snug">
                Learners reached directly
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[12px] text-[#64748B] font-mono">
              In-classroom programmes
            </div>
          </div>

          {/* Card 3: 200,000+ Additional Learners Through Partners */}
          <div
            onMouseEnter={() => setActiveSegment("partner")}
            className={`bg-white border transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group ${
              activeSegment === "partner"
                ? "border-[#107C68]/50 shadow-md"
                : "border-[#E8E2D7] hover:border-[#107C68]/30"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[#107C68]/10 text-[#107C68] border border-[#107C68]/20 group-hover:scale-105 transition-transform">
                  <Handshake className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#107C68] bg-[#107C68]/10 px-2.5 py-0.5 rounded-full border border-[#107C68]/20">
                  Partners
                </span>
              </div>

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2.5">
                {counts.partner.toLocaleString()}+
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#334155] leading-snug">
                Additional learners reached through partners
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[12px] text-[#64748B] font-mono">
              NGOs & CSR scaling
            </div>
          </div>

          {/* Card 4: 4,000+ Young Graduates and Professionals Trained */}
          <div className="bg-white border border-[#E8E2D7] hover:border-[#DA8216]/50 transition-all duration-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[#DA8216]/10 text-[#DA8216] border border-[#DA8216]/20 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#DA8216] bg-[#DA8216]/10 border border-[#DA8216]/20 px-2.5 py-0.5 rounded-full font-bold uppercase">
                  Capacity Building
                </span>
              </div>

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none text-[#04315D] mb-2.5">
                {counts.trained.toLocaleString()}+
              </div>
              <p className="text-[15px] sm:text-[16px] text-[#334155] leading-snug">
                Young graduates & professionals trained
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[12px] text-[#64748B] font-mono">
              Employability & communication
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* SECOND LINE: Partner Ecosystem + Evidence CTA Link             */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-[#E8E2D7] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Ecosystem Entities */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {ecosystem.map((entity, i) => (
              <span
                key={entity}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#04315D]/40 text-[13.5px] sm:text-[14px] text-[#04315D] font-medium transition-all shadow-xs cursor-default"
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
            href="/#evidence"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#A21246] hover:bg-[#850E38] text-white font-semibold text-[15px] hover:gap-3.5 transition-all shadow-sm w-fit group"
          >
            <span>See the evidence</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5" />
          </Link>

        </div>

      </div>
    </section>
  );
}
