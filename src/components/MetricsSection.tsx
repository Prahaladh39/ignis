"use client";

import { useEffect, useRef, useState } from "react";
import IndiaVectorMap from "./IndiaVectorMap";

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
      value: 12,
      suffix: "+ Years",
      label: "of working with underserved learners",
    },
    {
      value: 600000,
      suffix: "+",
      label: "learners reached directly and through partners",
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-[#E8E2D7] py-14 sm:py-18 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Two Key Numbers Centered */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 sm:divide-x sm:divide-[#E2DDD5]">
            {proofPoints.map((point, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center ${
                  index > 0 ? "sm:pl-8 lg:pl-10" : ""
                }`}
              >
                <div className="font-serif text-[42px] sm:text-[48px] lg:text-[54px] font-bold text-[#04315D] tracking-tight leading-none mb-3">
                  <StatCounter target={point.value} suffix={point.suffix} />
                </div>
                <div className="text-[14.5px] sm:text-[15.5px] text-[#4A5568] leading-[1.5] max-w-[240px] font-medium mx-auto">
                  {point.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: India Vector Map Graphic Centered across all screens (Compact scale) */}
          <div className="w-full flex justify-center items-center overflow-hidden">
            <div className="w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[340px] lg:max-w-[390px] mx-auto flex justify-center items-center translate-x-4 lg:translate-x-0">
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
