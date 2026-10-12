"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Handshake,
  Award,
  GraduationCap,
  RotateCcw,
} from "lucide-react";
import IndiaVectorMap from "./IndiaVectorMap";

export default function ImpactSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"all" | "direct" | "partner">("all");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [replayKey, setReplayKey] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

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
          setReplayKey((k) => k + 1);

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
        {/* UNIFIED IMPACT & MAP DASHBOARD:                                 */}
        {/* Left: Numbers Cards | Right: India Vector Map                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch mb-12 sm:mb-14">
          
          {/* LEFT COLUMN (Span 6): Numbers Cards                           */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5">
            
            {/* Card 1: 600,000+ Learners Reached Overall (Hero Stat) */}
            <div
              onMouseEnter={() => setActiveSegment("all")}
              className={`bg-white border transition-all duration-300 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm group ${
                activeSegment === "all"
                  ? "border-[#A21246]/50 shadow-md ring-1 ring-[#A21246]/20"
                  : "border-[#E8E2D7]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 rounded-xl bg-[#A21246]/10 text-[#A21246] border border-[#A21246]/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A21246] bg-[#A21246]/10 px-2.5 py-0.5 rounded-full border border-[#A21246]/20 font-bold">
                    Total Reach
                  </span>
                </div>

                <div className="font-serif text-[42px] sm:text-[48px] font-bold leading-none tracking-tight text-[#04315D] mb-2.5">
                  {counts.overall.toLocaleString()}+
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#334155] font-normal leading-snug">
                  Learners reached overall
                </p>
              </div>

              {/* Visual Distribution Bar */}
              <div className="mt-5 pt-4 border-t border-[#F1EBE1]">
                <div className="flex justify-between text-[11.5px] text-[#64748B] mb-1.5 font-mono">
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
                  <div className="h-full bg-[#A21246]" style={{ width: "67%" }} />
                  <div className="h-full bg-[#107C68]" style={{ width: "33%" }} />
                </div>
              </div>
            </div>

            {/* Split Row: 404,000+ Directly & 200,000+ Through Partners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 2: 404,000+ Learners Reached Directly */}
              <div
                onMouseEnter={() => setActiveSegment("direct")}
                className={`bg-white border transition-all duration-200 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm group ${
                  activeSegment === "direct"
                    ? "border-[#A21246]/50 shadow-md"
                    : "border-[#E8E2D7] hover:border-[#A21246]/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 w-fit rounded-xl bg-[#A21246]/10 text-[#A21246] border border-[#A21246]/20 group-hover:scale-105 transition-transform">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] bg-[#F8F5EF] px-2.5 py-0.5 rounded-full border border-[#E8E2D7]">
                      Direct
                    </span>
                  </div>

                  <div className="font-serif text-[32px] sm:text-[36px] font-bold leading-none tracking-tight text-[#04315D] mb-1.5">
                    {counts.direct.toLocaleString()}+
                  </div>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-snug">
                    Learners reached directly
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F1EBE1] text-[11px] text-[#64748B] font-mono">
                  In-classroom programmes
                </div>
              </div>

              {/* Card 3: 200,000+ Additional Learners Through Partners */}
              <div
                onMouseEnter={() => setActiveSegment("partner")}
                className={`bg-white border transition-all duration-200 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm group ${
                  activeSegment === "partner"
                    ? "border-[#107C68]/50 shadow-md"
                    : "border-[#E8E2D7] hover:border-[#107C68]/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 w-fit rounded-xl bg-[#107C68]/10 text-[#107C68] border border-[#107C68]/20 group-hover:scale-105 transition-transform">
                      <Handshake className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#107C68] bg-[#107C68]/10 px-2.5 py-0.5 rounded-full border border-[#107C68]/20">
                      Partners
                    </span>
                  </div>

                  <div className="font-serif text-[32px] sm:text-[36px] font-bold leading-none tracking-tight text-[#04315D] mb-1.5">
                    {counts.partner.toLocaleString()}+
                  </div>
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-snug">
                    Additional learners reached through partners
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F1EBE1] text-[11px] text-[#64748B] font-mono">
                  NGOs & CSR scaling
                </div>
              </div>

            </div>

            {/* Card 4: 4,000+ Young Graduates and Professionals Trained */}
            <div className="bg-white border border-[#E8E2D7] hover:border-[#DA8216]/50 transition-all duration-200 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm group">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#DA8216]/10 text-[#DA8216] border border-[#DA8216]/20 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-[30px] sm:text-[34px] font-bold leading-none text-[#04315D] mb-1">
                    {counts.trained.toLocaleString()}+
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#475569]">
                    Young graduates and professionals trained
                  </p>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#DA8216] bg-[#DA8216]/10 border border-[#DA8216]/20 px-3 py-1 rounded-full font-bold uppercase sm:text-right w-fit">
                Capacity Building
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Span 6): The India Map Vector Graphic           */}
          <div className="lg:col-span-6 bg-white border border-[#E8E2D7] rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col justify-between">
            
            {/* Map Header */}
            <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#E8E2D7]/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#B92A2A] shadow-xs" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#04315D]">
                  Nationwide Impact
                </span>
                <span className="text-[11px] text-[#64748B] font-mono">
                  · Verified Reach Footprint
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedState(null);
                  setReplayKey((k) => k + 1);
                }}
                title="Replay sequence"
                className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-[#04315D] hover:bg-white border border-[#E8E2D7] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 text-[#A21246]" />
                <span>Replay</span>
              </button>
            </div>

            {/* Vector Map Canvas */}
            <div className="relative w-full flex items-center justify-center py-2 flex-1">
              <IndiaVectorMap
                selectedState={selectedState}
                onSelectState={setSelectedState}
                replayKey={replayKey}
                autoPlay={true}
                className="w-full max-w-[500px]"
              />
            </div>

            {/* Map Footer Note */}
            <div className="w-full text-center pt-2.5 border-t border-[#E8E2D7]/60 text-[11px] text-[#64748B] flex items-center justify-between">
              <span>Click highlighted states on the map to focus</span>
              <span className="font-mono text-[10.5px] text-[#A21246] font-semibold">
                100% Vector Geometries
              </span>
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
            href="/#evidence"
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
