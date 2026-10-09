"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Handshake,
  Award,
  GraduationCap,
  MapPin,
  RotateCcw,
} from "lucide-react";
import IndiaVectorMap, { REACH_STATES } from "./IndiaVectorMap";

export default function ImpactSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"all" | "direct" | "partner">("all");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [replayKey, setReplayKey] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  // States specified by client
  const reachedStates = REACH_STATES;

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
        {/* CENTERPIECE: INDIA MAP SHOWCASE                                 */}
        {/* Left: Text & 10 States List | Right: Centered India Map        */}
        {/* ============================================================== */}
        <div className="bg-white border border-[#E8E2D7] rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN (Span 5): Context Copy & 10 States List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Header & Client Copy */}
              <div className="mb-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#04315D] leading-tight">
                    One approach. Many contexts.
                  </h3>
                  <span className="text-[11.5px] font-mono font-bold text-[#A21246] bg-[#A21246]/10 px-3 py-1 rounded-full border border-[#A21246]/20 shrink-0">
                    {reachedStates.length} States & UTs
                  </span>
                </div>

                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal">
                  Ignis adapts curriculum, examples, activities and implementation to the age, language exposure, culture, geography and lived experience of learners.
                </p>
              </div>

              {/* Verified Implementation States List (2-column interactive grid) */}
              <div className="pt-4 border-t border-[#F1EBE1]">
                <div className="flex items-center justify-between mb-3 px-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Active Implementation States
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">
                    Click to highlight
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {reachedStates.map((state, idx) => {
                    const isSelected = selectedState === state.name;
                    return (
                      <button
                        key={state.name}
                        type="button"
                        onClick={() => setSelectedState(isSelected ? null : state.name)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-[13.5px] sm:text-[14px] font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#96163F] text-white shadow-xs ring-2 ring-[#04315D]/20 font-semibold scale-[1.02]"
                            : "bg-[#FAF8F5] hover:bg-white text-[#04315D] border border-[#E8E2D7] hover:border-[#A21246]/40"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <MapPin
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? "text-white" : "text-[#A21246]"
                            }`}
                          />
                          <span className="truncate">{state.name}</span>
                        </div>
                        <span
                          className={`text-[10.5px] font-mono ml-1 shrink-0 ${
                            isSelected ? "text-white/80" : "text-[#94A3B8]"
                          }`}
                        >
                          {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (Span 7): The India Map Vector Graphic */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="w-full max-w-[580px] bg-[#FAF8F5]/80 border border-[#E8E2D7] rounded-2xl p-4 sm:p-5 relative flex flex-col items-center shadow-2xs">
                
                {/* Map Floating Legend Bar */}
                <div className="w-full flex items-center justify-between pb-3 mb-2 border-b border-[#E8E2D7]/80">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#B92A2A] shadow-xs" />
                    <span className="text-xs font-bold tracking-wider uppercase text-[#04315D]">
                      Our Reach
                    </span>
                    <span className="text-[11px] text-[#64748B] font-mono">
                      · Verified Footprint
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedState(null);
                      setReplayKey((k) => k + 1);
                    }}
                    title="Replay sequence"
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-[#04315D] hover:bg-white border border-[#E8E2D7] transition-all flex items-center gap-1.5 shadow-2xs"
                  >
                    <RotateCcw className="w-3 h-3 text-[#A21246]" />
                    <span>Replay</span>
                  </button>
                </div>

                {/* Vector Map Canvas */}
                <div className="relative w-full flex items-center justify-center py-2">
                  <IndiaVectorMap
                    selectedState={selectedState}
                    onSelectState={setSelectedState}
                    replayKey={replayKey}
                    autoPlay={true}
                    className="w-full max-w-[500px]"
                  />
                </div>

                {/* Map Footer Instruction */}
                <div className="w-full text-center pt-2.5 border-t border-[#E8E2D7]/60 text-[11px] text-[#64748B] flex items-center justify-between">
                  <span>Click states or list to focus</span>
                  <span className="font-mono text-[10.5px] text-[#A21246] font-semibold">
                    100% Vector Geometries
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* NUMBERS SECTION: BELOW THE INDIA MAP                            */}
        {/* 4 Quantified Impact Metrics Across the Screen                  */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-14">
          
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

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2">
                {counts.overall.toLocaleString()}+
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#334155] font-normal leading-snug">
                Learners reached overall
              </p>
            </div>

            {/* Visual Distribution Bar */}
            <div className="mt-5 pt-4 border-t border-[#F1EBE1]">
              <div className="flex justify-between text-[11px] text-[#64748B] mb-1.5 font-mono">
                <span>Direct: 67%</span>
                <span>Partners: 33%</span>
              </div>
              <div className="h-2 w-full bg-[#EAE4D9] rounded-full overflow-hidden flex">
                <div className="h-full bg-[#A21246]" style={{ width: "67%" }} />
                <div className="h-full bg-[#107C68]" style={{ width: "33%" }} />
              </div>
            </div>
          </div>

          {/* Card 2: 404,000+ Learners Reached Directly */}
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

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2">
                {counts.direct.toLocaleString()}+
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-snug">
                Learners reached directly
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[11px] text-[#64748B] font-mono">
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

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2">
                {counts.partner.toLocaleString()}+
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-snug">
                Additional learners reached through partners
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[11px] text-[#64748B] font-mono">
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
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#DA8216] bg-[#DA8216]/10 px-2.5 py-0.5 rounded-full border border-[#DA8216]/20 font-bold">
                  Capacity
                </span>
              </div>

              <div className="font-serif text-[38px] sm:text-[44px] font-bold leading-none tracking-tight text-[#04315D] mb-2">
                {counts.trained.toLocaleString()}+
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-snug">
                Young graduates and professionals trained
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#F1EBE1] text-[11px] text-[#64748B] font-mono">
              Fellowships & educators
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
