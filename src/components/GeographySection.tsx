"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, RotateCcw } from "lucide-react";
import IndiaVectorMap, { REACH_STATES } from "./IndiaVectorMap";

export default function GeographySection() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [replayKey, setReplayKey] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // States highlighted in user's reference map
  const reachedStates = REACH_STATES;

  // Trigger animation when the section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setReplayKey((k) => k + 1);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white border-b border-[#E8E2D7] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F8F5EF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-3 sm:px-10 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Contextualisation Narrative (Strict Client Text) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                Geographic Spread
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-5 sm:mb-6">
              Learning across different contexts
            </h2>

            {/* Sub-heading & Client Narrative */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-serif text-[21px] sm:text-[25px] font-bold text-[#A21246] mb-2 sm:mb-3">
                One approach. Many contexts.
              </h3>
              <p className="text-[15px] sm:text-[17px] text-[#475569] leading-[1.7] font-normal">
                Ignis adapts curriculum, examples, activities and implementation to the age, language exposure, culture, geography and lived experience of learners.
              </p>
            </div>

            {/* Interactive Reach State Badges */}
            <div className="bg-[#FAF8F5] border border-[#E8E2D7] rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 mb-6 sm:mb-8">
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#04315D] font-bold flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#A21246] shrink-0 animate-pulse" />
                  <span className="truncate hidden sm:inline">Active Implementation States</span>
                  <span className="truncate sm:hidden">Active States</span>
                </span>
                <span className="shrink-0 whitespace-nowrap text-[10.5px] sm:text-xs font-mono font-bold text-[#A21246] bg-[#A21246]/10 px-2 sm:px-2.5 py-0.5 rounded-full border border-[#A21246]/20">
                  {reachedStates.length} States & UTs
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {reachedStates.map((state) => {
                  const isSelected = selectedState === state.name;
                  return (
                    <button
                      key={state.name}
                      type="button"
                      onClick={() => setSelectedState(isSelected ? null : state.name)}
                      className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-[#96163F] text-white shadow-sm ring-2 ring-[#04315D]/20 scale-105"
                          : "bg-white hover:bg-white text-[#04315D] border border-[#E8E2D7] hover:border-[#A21246]/40"
                      }`}
                    >
                      <MapPin className={`w-3 h-3 ${isSelected ? "text-white" : "text-[#A21246]"}`} />
                      <span>{state.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Visual India Vector Map Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-center w-full">
            <div className="w-full max-w-[620px] bg-[#FAF8F5]/80 hover:bg-[#FAF8F5] transition-all border border-[#E8E2D7] rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-7 shadow-sm relative flex flex-col items-center">
              
              {/* Map Floating Legend Card */}
              <div className="w-full flex items-center justify-between mb-2 sm:mb-3 pb-2.5 sm:pb-3 border-b border-[#E8E2D7]/80 gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-[#B92A2A] shadow-xs shrink-0" />
                  <span className="text-xs font-bold tracking-wider uppercase text-[#04315D] whitespace-nowrap">
                    Our Reach
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#64748B] font-mono whitespace-nowrap shrink-0">
                    · 10 States & UTs
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <span className="text-[11px] text-[#64748B] font-mono hidden md:inline">
                    Interactive Map
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedState(null);
                      setReplayKey((k) => k + 1);
                    }}
                    title="Replay sequence"
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10.5px] sm:text-[11px] font-mono font-medium text-[#04315D] hover:bg-white border border-[#E8E2D7]/70 hover:border-[#E8E2D7] transition-all flex items-center gap-1 sm:gap-1.5 shadow-2xs"
                  >
                    <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A21246]" />
                    <span>Replay</span>
                  </button>
                </div>
              </div>

              {/* The India Map Vector Graphic - Natural responsive container with full visibility */}
              <div className="relative w-full flex items-center justify-center py-2 sm:py-3 px-1 sm:px-2">
                <IndiaVectorMap
                  selectedState={selectedState}
                  onSelectState={setSelectedState}
                  replayKey={replayKey}
                  autoPlay={true}
                  className="w-full max-w-[540px]"
                />
              </div>

              {/* Subtle footer instruction */}
              <div className="w-full text-center pt-2 sm:pt-2.5 border-t border-[#E8E2D7]/50 text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Click states or badges to focus</span>
                <span className="font-mono text-[10px] text-[#A21246] font-semibold">
                  100% Vector Geometries
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

