"use client";

import { useEffect, useRef, useState } from "react";
import IndiaVectorMap from "./IndiaVectorMap";
import { Users, Handshake, GraduationCap } from "lucide-react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function StatCounter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out exponential curve: fast climb, smooth landing
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const nextValue = Math.floor(easeProgress * target);

            setCount(nextValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="inline-flex items-baseline">
      <span className="tabular-nums">{count.toLocaleString()}</span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

export default function MetricsSection() {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const proofPoints = [
    {
      value: 404000,
      suffix: "+",
      label: "Learners reached directly",
      sublabel: "In-classroom programmes",
      tag: "Direct Reach",
      icon: Users,
      iconColor: "text-[#A21246]",
      iconBg: "bg-[#A21246]/10",
      iconBorder: "border-[#A21246]/20",
      accentBar: "bg-[#A21246]",
    },
    {
      value: 200000,
      suffix: "+",
      label: "Additional learners reached through partners",
      sublabel: "NGOs & CSR scaling",
      tag: "Partnerships",
      icon: Handshake,
      iconColor: "text-[#107C68]",
      iconBg: "bg-[#107C68]/10",
      iconBorder: "border-[#107C68]/20",
      accentBar: "bg-[#107C68]",
    },
    {
      value: 4000,
      suffix: "+",
      label: "Young graduates & professionals trained",
      sublabel: "Employability & communication",
      tag: "Capacity",
      icon: GraduationCap,
      iconColor: "text-[#DA8216]",
      iconBg: "bg-[#DA8216]/10",
      iconBorder: "border-[#DA8216]/20",
      accentBar: "bg-[#DA8216]",
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-[#E8E2D7] py-8 sm:py-10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading directly above cards + 3 Metric Cards (7 cols) */}
          <div className="lg:col-span-7 w-full flex flex-col">
            {/* Title directly on top of the first card / cards row */}
            <div className="mb-3.5 sm:mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#A21246]" aria-hidden="true" />
                <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                  Measurable Reach & Scale
                </span>
              </div>

              <h2 className="font-serif text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal">
                Proven impact across classrooms
              </h2>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4.5">
            {proofPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FAF8F5] border border-[#E8E2D7] rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:border-[#A21246]/40 transition-all duration-200 group"
                >
                  <div>
                    {/* Top row: Icon badge + Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-9 h-9 rounded-xl ${point.iconBg} ${point.iconBorder} border flex items-center justify-center ${point.iconColor} group-hover:scale-105 transition-transform`}>
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[10.5px] font-mono uppercase tracking-wider font-semibold text-[#64748B] bg-white px-2 py-0.5 rounded-full border border-[#E8E2D7]">
                        {point.tag}
                      </span>
                    </div>

                    {/* Animated Number */}
                    <div className="font-serif text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-[#04315D] tracking-tight leading-none mb-2.5">
                      <StatCounter target={point.value} suffix={point.suffix} />
                    </div>

                    {/* Metric Label */}
                    <div className="text-[14px] sm:text-[14.5px] font-semibold text-[#04315D] leading-snug mb-3">
                      {point.label}
                    </div>
                  </div>

                  {/* Bottom: Accent bar & Darkened Sublabel */}
                  <div className="pt-3 border-t border-[#E8E2D7]">
                    <div className="text-[12.5px] text-[#1E293B] font-medium leading-tight">
                      {point.sublabel}
                    </div>
                    <div className="w-full h-1 bg-[#E8E2D7] rounded-full overflow-hidden mt-2.5">
                      <div className={`h-full ${point.accentBar} w-10 group-hover:w-16 transition-all duration-300`} />
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

          {/* Right Column: India Vector Map Graphic (5 cols, larger comfortable scale) */}
          <div className="lg:col-span-5 w-full flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[370px] lg:max-w-[420px] mx-auto flex justify-center items-center">
              <IndiaVectorMap
                selectedState={selectedState}
                onSelectState={setSelectedState}
                autoPlay={true}
                className="w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
