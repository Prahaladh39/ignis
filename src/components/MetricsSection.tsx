"use client";

import { useEffect, useRef, useState } from "react";

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
    {
      staticText: "India-wide",
      label: "work across multiple states and education systems",
    },
  ];

  return (
    <section className="relative w-full bg-white border-b border-[#E8E2D7] py-12 sm:py-16">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-[#E2DDD5]">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10"
            >
              <div className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] font-bold text-[#04315D] tracking-tight leading-none mb-2.5">
                {point.value !== undefined ? (
                  <StatCounter target={point.value} suffix={point.suffix} />
                ) : (
                  <span>{point.staticText}</span>
                )}
              </div>
              <div className="text-[13.5px] sm:text-[14.5px] text-[#4A5568] leading-[1.5] max-w-[280px] font-medium mx-auto">
                {point.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
