"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Users, Award, School } from "lucide-react";

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

export default function TeacherTrainingSection() {
  const metrics = [
    {
      target: 310199,
      suffix: "+",
      label: "Happy Children",
      icon: Users,
      accent: "text-[#A21246]",
      bg: "bg-[#A21246]/10",
    },
    {
      target: 12048,
      suffix: "+",
      label: "Better Teachers",
      icon: Award,
      accent: "text-[#04315D]",
      bg: "bg-[#04315D]/10",
    },
    {
      target: 1542,
      suffix: "+",
      label: "Satisfied Schools",
      icon: School,
      accent: "text-[#2D6A4F]",
      bg: "bg-[#2D6A4F]/10",
    },
  ];

  return (
    <section
      id="teacher-training-participatory-learning"
      className="scroll-mt-20 lg:scroll-mt-24 py-10 sm:py-14 lg:py-16 bg-[#F8F5EF] border-b border-[#E8E2D7] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-[480px] rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-sm hover:shadow-md transition-all duration-300 bg-white p-2.5">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
                <Image
                  src="/images/teacher-training.png"
                  alt="Teachers engaged in participatory, activity-based workshop with Ignis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text & 3 Metric Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Educator Capacity & Pedagogy</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight leading-[1.15] mb-5">
              Teacher Training for Participatory Learning
            </h2>

            {/* Paragraph 1 - Reduced typography size */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
              Ignis also organises training programmes for teachers. The programmes focus on inculcating student-centred participatory, activity-based teaching methodologies. The programmes are offered to schools as a capacity building initiative for teachers and also invite open enrolments.
            </p>

            {/* Paragraph 2 - Reduced typography size */}
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-7">
              Since March 2020, and considering the increasing dependence on hybrid learning, we have also incorporated orientation on online teaching methodologies, tools, and resources.
            </p>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {metrics.map((metric) => {
                const IconComp = metric.icon;
                return (
                  <div
                    key={metric.label}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E2D7] shadow-xs flex flex-col justify-between hover:border-[#A21246]/30 transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg ${metric.bg} ${metric.accent} flex items-center justify-center mb-3`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-serif font-bold text-[#04315D] tracking-tight">
                        <StatCounter target={metric.target} suffix={metric.suffix} />
                      </div>
                      <div className="text-xs font-medium text-[#556987] mt-1 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
