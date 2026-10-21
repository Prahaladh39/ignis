"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Compass,
  Lightbulb,
  Send,
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface CounterProps {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function CounterUpNumber({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  duration = 2000,
}: CounterProps) {
  const [val, setVal] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const start = performance.now();

          const frame = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out expo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(from + ease * (to - from));
            setVal(current);

            if (progress < 1) {
              requestAnimationFrame(frame);
            } else {
              setVal(to);
            }
          };

          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

interface RangeCounterProps {
  startTo: number;
  endTo: number;
  suffix?: string;
  duration?: number;
}

function RangeCounterUp({
  startTo,
  endTo,
  suffix = "",
  duration = 2000,
}: RangeCounterProps) {
  const [valStart, setValStart] = useState(0);
  const [valEnd, setValEnd] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const start = performance.now();

          const frame = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setValStart(Math.floor(ease * startTo));
            setValEnd(Math.floor(ease * endTo));

            if (progress < 1) {
              requestAnimationFrame(frame);
            } else {
              setValStart(startTo);
              setValEnd(endTo);
            }
          };

          requestAnimationFrame(frame);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startTo, endTo, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {valStart}–{valEnd}
      {suffix}
    </span>
  );
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex flex-col text-[#2D3748]">
      {/* Navigation */}
      <Navbar />

      {/* SECTION 01 — IMPACT AT SCALE */}
      <section id="impact-at-scale" className="scroll-mt-20 lg:scroll-mt-24 relative w-full py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/* Subtle radial ambient gradients for an editorial feel */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-80 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          {/* Section Marker Tag */}
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-8 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-[#A21246]">
              01 — IMPACT AT SCALE
            </span>
          </div>

          {/* 2-Column Split: Editorial Narrative on Left | Metric Pillar Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN (Span 6): Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Main Headline */}
              <h1 className="font-serif text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] tracking-[-0.025em] text-[#04315D] font-normal mb-5">
                Learning at scale. <br className="hidden sm:inline" />
                <span className="italic font-serif text-[#A21246]">Impact that compounds.</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-3.5">
                Ignis is building a scalable learning ecosystem that enables large numbers of learners to access sustained, meaningful learning experiences.
              </p>

              {/* Supporting Evidence Paragraph */}
              <div className="relative pl-4 sm:pl-5 border-l-2 border-[#A21246]/40 py-0.5">
                <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
                  With $450,000 in investment Ignis has reached 604,000+ learners—404,000+ directly and more than 200,000+ through partner organisations.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN (Span 6): Structured Metric Display (No hover effects, animated Counter-Up) */}
            <div className="lg:col-span-6 flex flex-col gap-3 max-w-[480px] w-full lg:ml-auto">
              
              {/* Card 1: 604K+ Learners reached */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-4 sm:p-4.5 shadow-2xs flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="font-serif text-[30px] sm:text-[34px] font-bold tracking-tight leading-none text-[#A21246]">
                    <CounterUpNumber to={604} suffix="K+" duration={1800} />
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8] font-semibold tracking-wider uppercase">
                    01
                  </span>
                </div>
                <div className="text-[14px] sm:text-[14.5px] font-medium text-[#04315D] leading-snug mb-2">
                  Learners reached
                </div>
                <div className="w-full h-1 bg-[#F1EBE1] rounded-full overflow-hidden">
                  <div className="h-full bg-[#A21246] w-14" />
                </div>
              </div>

              {/* Card 2: 80–120 Hours of learning per learner, per year */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-4 sm:p-4.5 shadow-2xs flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="font-serif text-[30px] sm:text-[34px] font-bold tracking-tight leading-none text-[#04315D]">
                    <RangeCounterUp startTo={80} endTo={120} duration={1800} />
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8] font-semibold tracking-wider uppercase">
                    02
                  </span>
                </div>
                <div className="text-[14px] sm:text-[14.5px] font-medium text-[#04315D] leading-snug mb-2">
                  Hours of learning per learner, per year
                </div>
                <div className="w-full h-1 bg-[#F1EBE1] rounded-full overflow-hidden">
                  <div className="h-full bg-[#04315D] w-14" />
                </div>
              </div>

              {/* Card 3: 48–72M Estimated annual learner-hours */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-4 sm:p-4.5 shadow-2xs flex flex-col justify-between">
                <div className="flex items-baseline justify-between mb-1">
                  <div className="font-serif text-[30px] sm:text-[34px] font-bold tracking-tight leading-none text-[#107C68]">
                    <RangeCounterUp startTo={48} endTo={72} suffix="M" duration={1800} />
                  </div>
                  <span className="text-[10px] font-mono text-[#94A3B8] font-semibold tracking-wider uppercase">
                    03
                  </span>
                </div>
                <div className="text-[14px] sm:text-[14.5px] font-medium text-[#04315D] leading-snug mb-2">
                  Estimated annual learner-hours
                </div>
                <div className="w-full h-1 bg-[#F1EBE1] rounded-full overflow-hidden">
                  <div className="h-full bg-[#107C68] w-14" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 02 — HOW IMPACT IS CREATED                             */}
      {/* 5-Step Continuous Learning Cycle with Responsive Photo Background */}
      {/* ============================================================== */}
      <section id="how-impact-is-created" className="scroll-mt-20 lg:scroll-mt-24 relative w-full border-t border-[#E8E2D7] py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Responsive Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/how_impact_created_bg.jpg"
            alt="Smiling school students gesturing thumbs-up"
            fill
            sizes="100vw"
            className="object-cover object-center sm:object-[center_22%]"
            priority
          />
          {/* Subtle light dark scrim so the students and their smiles are clearly and brightly visible */}
          <div className="absolute inset-0 bg-black/25 sm:bg-gradient-to-t sm:from-black/45 sm:via-black/15 sm:to-black/30" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          {/* Section Marker */}
          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
            <span className="w-8 h-[2px] bg-white" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-white drop-shadow-sm">
              02 — HOW IMPACT IS CREATED
            </span>
          </div>

          {/* Section Heading & Subtitle in elegant backdrop */}
          <div className="max-w-3xl mb-6 sm:mb-10 bg-white/65 hover:bg-white/80 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-colors">
            <h2 className="font-serif text-[26px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-2">
              How Impact Is Created
            </h2>
            <p className="text-[14px] sm:text-[16px] text-[#334155] leading-relaxed">
              Our model is built around a continuous learning cycle.
            </p>
          </div>

          {/* The 5 Continuous Cycle Steps in Floating Frosted Glass Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5 mb-6 sm:mb-10">
            
            {/* Step 1: Understand */}
            <div className="bg-white/45 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#04315D]/15 text-[#04315D] flex items-center justify-center border border-[#04315D]/25">
                    <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#04315D] font-bold tracking-widest uppercase bg-white/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/80">
                    01
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-[#04315D] mb-1 sm:mb-2 leading-snug">
                  Understand
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                  We study learners, their contexts, needs and aspirations.
                </p>
              </div>
              <div className="w-full h-1 bg-white/60 rounded-full overflow-hidden mt-3 sm:mt-5">
                <div className="h-full bg-[#04315D] w-8 sm:w-12" />
              </div>
            </div>

            {/* Step 2: Design */}
            <div className="bg-white/45 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#A21246]/15 text-[#A21246] flex items-center justify-center border border-[#A21246]/25">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#A21246] font-bold tracking-widest uppercase bg-white/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/80">
                    02
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-[#04315D] mb-1 sm:mb-2 leading-snug">
                  Design
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                  Research informs relevant learning experiences, products and programmes.
                </p>
              </div>
              <div className="w-full h-1 bg-white/60 rounded-full overflow-hidden mt-3 sm:mt-5">
                <div className="h-full bg-[#A21246] w-8 sm:w-12" />
              </div>
            </div>

            {/* Step 3: Deliver */}
            <div className="bg-white/45 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#107C68]/15 text-[#107C68] flex items-center justify-center border border-[#107C68]/25">
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#107C68] font-bold tracking-widest uppercase bg-white/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/80">
                    03
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-[#04315D] mb-1 sm:mb-2 leading-snug">
                  Deliver
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                  Educators, technology and partner organisations bring these experiences to learners.
                </p>
              </div>
              <div className="w-full h-1 bg-white/60 rounded-full overflow-hidden mt-3 sm:mt-5">
                <div className="h-full bg-[#107C68] w-8 sm:w-12" />
              </div>
            </div>

            {/* Step 4: Measure */}
            <div className="bg-white/45 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center border border-[#0284C7]/25">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#0284C7] font-bold tracking-widest uppercase bg-white/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/80">
                    04
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-[#04315D] mb-1 sm:mb-2 leading-snug">
                  Measure
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                  We track participation, engagement and relevant learning indicators.
                </p>
              </div>
              <div className="w-full h-1 bg-white/60 rounded-full overflow-hidden mt-3 sm:mt-5">
                <div className="h-full bg-[#0284C7] w-8 sm:w-12" />
              </div>
            </div>

            {/* Step 5: Improve */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-1 bg-white/45 hover:bg-white/70 backdrop-blur-md border border-white/60 hover:border-white rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 flex flex-col justify-between shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#AF1B49]/15 text-[#AF1B49] flex items-center justify-center border border-[#AF1B49]/25">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#AF1B49] font-bold tracking-widest uppercase bg-white/70 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/80">
                    05
                  </span>
                </div>
                <h3 className="font-serif text-[17px] sm:text-[21px] lg:text-[23px] font-bold text-[#04315D] mb-1 sm:mb-2 leading-snug">
                  Improve
                </h3>
                <p className="text-[12px] sm:text-[14px] text-[#1E293B] leading-snug sm:leading-relaxed font-medium">
                  Evidence and feedback inform the next generation of our programmes and products.
                </p>
              </div>
              <div className="w-full h-1 bg-white/60 rounded-full overflow-hidden mt-3 sm:mt-5">
                <div className="h-full bg-[#AF1B49] w-8 sm:w-12" />
              </div>
            </div>

          </div>

          {/* Section Summary Box */}
          <div className="bg-white/60 hover:bg-white/75 backdrop-blur-md border border-white/60 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-2xl transition-colors">
            <p className="text-[13px] sm:text-[15px] text-[#04315D] font-medium leading-relaxed">
              The result is a model designed to learn while it scales.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 03 — FROM REACH TO OUTCOMES                            */}
      {/* ============================================================== */}
      <section id="reach-to-outcomes" className="scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-10 lg:py-12 bg-white border-t border-[#E8E2D7]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          {/* Section Eyebrow */}
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-8 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-[#A21246]">
              03 — FROM REACH TO OUTCOMES
            </span>
          </div>

          {/* Section Header & Narrative */}
          <div className="max-w-3xl mb-6 sm:mb-8">
            <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#04315D] tracking-tight leading-[1.12] mb-3">
              Counting Learners Is Not Enough
            </h2>
            <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-3">
              Reach tells us who we serve. Engagement tells us how deeply they participate. Outcomes tell us what difference the experience makes.
            </p>
            <p className="text-sm sm:text-[15px] text-[#04315D] font-medium leading-relaxed">
              Our impact framework therefore looks across four dimensions:
            </p>
          </div>

          {/* Four Dimensions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Dimension 1: REACH */}
            <div className="bg-[#FAF6F0]/70 border border-[#E8E2D7] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#04315D]/10 text-[#04315D] flex items-center justify-center">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10.5px] font-mono text-[#94A3B8] font-bold tracking-widest uppercase">
                    01
                  </span>
                </div>
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#04315D] uppercase mb-1.5">
                  REACH
                </div>
                <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#04315D] mb-2 leading-snug">
                  Who are we reaching?
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#556987] leading-relaxed">
                  Learners, schools, communities and partner organisations.
                </p>
              </div>
              <div className="w-full h-1 bg-[#E8E2D7] rounded-full overflow-hidden mt-5">
                <div className="h-full bg-[#04315D] w-12" />
              </div>
            </div>

            {/* Dimension 2: ENGAGEMENT */}
            <div className="bg-[#FAF6F0]/70 border border-[#E8E2D7] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#A21246]/10 text-[#A21246] flex items-center justify-center">
                    <Activity className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10.5px] font-mono text-[#94A3B8] font-bold tracking-widest uppercase">
                    02
                  </span>
                </div>
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#A21246] uppercase mb-1.5">
                  ENGAGEMENT
                </div>
                <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#04315D] mb-2 leading-snug">
                  How are learners participating?
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#556987] leading-relaxed">
                  Participation, duration and sustained engagement.
                </p>
              </div>
              <div className="w-full h-1 bg-[#E8E2D7] rounded-full overflow-hidden mt-5">
                <div className="h-full bg-[#A21246] w-12" />
              </div>
            </div>

            {/* Dimension 3: LEARNING */}
            <div className="bg-[#FAF6F0]/70 border border-[#E8E2D7] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#107C68]/10 text-[#107C68] flex items-center justify-center">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10.5px] font-mono text-[#94A3B8] font-bold tracking-widest uppercase">
                    03
                  </span>
                </div>
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#107C68] uppercase mb-1.5">
                  LEARNING
                </div>
                <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#04315D] mb-2 leading-snug">
                  What are learners gaining?
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#556987] leading-relaxed">
                  Knowledge, skills and capabilities relevant to each programme.
                </p>
              </div>
              <div className="w-full h-1 bg-[#E8E2D7] rounded-full overflow-hidden mt-5">
                <div className="h-full bg-[#107C68] w-12" />
              </div>
            </div>

            {/* Dimension 4: OPPORTUNITY */}
            <div className="bg-[#FAF6F0]/70 border border-[#E8E2D7] rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#AF1B49]/10 text-[#AF1B49] flex items-center justify-center">
                    <Sparkles className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[10.5px] font-mono text-[#94A3B8] font-bold tracking-widest uppercase">
                    04
                  </span>
                </div>
                <div className="text-[10.5px] font-mono font-bold tracking-widest text-[#AF1B49] uppercase mb-1.5">
                  OPPORTUNITY
                </div>
                <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#04315D] mb-2 leading-snug">
                  What can learning enable?
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#556987] leading-relaxed">
                  Longer-term educational, personal and economic opportunities.
                </p>
              </div>
              <div className="w-full h-1 bg-[#E8E2D7] rounded-full overflow-hidden mt-5">
                <div className="h-full bg-[#AF1B49] w-12" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 04 — REACH × DEPTH                                     */}
      {/* Left: Blended Image | Right: Managed Editorial Content         */}
      {/* ============================================================== */}
      <section id="reach-depth" className="scroll-mt-20 lg:scroll-mt-24 relative w-full bg-[#F2EDE2]/60 border-t border-[#E8E2D7] py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/* Soft background light blooms */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#04315D]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          {/* Section Marker */}
          <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
            <span className="w-8 h-[2px] bg-[#04315D]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-[#04315D]">
              04 — REACH × DEPTH
            </span>
          </div>

          {/* 2-Column Balanced Editorial Structure: Cards on Left | Narrative on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN (Span 6): Depth & Reach Metric Cards */}
            <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
              
              {/* Highlight Callout: 80–120 hours per learner, per year */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-5 sm:p-5.5 shadow-xs">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#A21246] font-bold block mb-1.5">
                  Learning Depth
                </span>
                <p className="text-[16px] sm:text-[17.5px] text-[#04315D] font-medium leading-[1.4] mb-3">
                  Our programmes typically provide <span className="font-bold text-[#A21246] font-serif text-[22px] sm:text-[24px]">80–120 hours</span> of learning activities per learner each year.
                </p>
                <div className="w-full h-1 bg-[#F1EBE1] rounded-full overflow-hidden">
                  <div className="h-full bg-[#A21246] w-20" />
                </div>
              </div>

              {/* Annual Exposure Box */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-5 sm:p-5.5 shadow-xs">
                <p className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] mb-1.5 font-semibold">
                  Across 604,000+ learners, this represents an estimated:
                </p>
                <div className="font-serif text-[36px] sm:text-[42px] font-bold text-[#04315D] tracking-tight leading-none mb-1.5">
                  48–72 million
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#475569] leading-snug">
                  Learner-hours of annual learning exposure
                </p>
              </div>

              {/* Our Reach Breakdown Card */}
              <div className="bg-white border border-[#E8E2D7] rounded-2xl p-5 sm:p-5.5 shadow-xs">
                <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#107C68] font-bold mb-3">
                  Our reach
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E8E2D7]">
                  <div className="flex flex-col">
                    <span className="font-serif text-[28px] sm:text-[32px] font-bold text-[#04315D] leading-none mb-1">
                      404K+
                    </span>
                    <span className="text-[13.5px] text-[#475569] leading-snug">
                      Learners reached directly
                    </span>
                  </div>
                  <div className="flex flex-col pt-3 sm:pt-0 sm:pl-5">
                    <span className="font-serif text-[28px] sm:text-[32px] font-bold text-[#107C68] leading-none mb-1">
                      200K+
                    </span>
                    <span className="text-[13.5px] text-[#475569] leading-snug">
                      Learners reached through partner organisations
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (Span 6): Core Narrative & Philosophy */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              
              {/* Main Section Headline */}
              <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-4">
                We measure more than the number of learners reached.
              </h2>

              {/* Sub-paragraph */}
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
                Impact is not only about how many people experience a programme. It is also about the depth of that experience.
              </p>

              {/* Narrative on Direct Engagement and Partnerships */}
              <div className="bg-white border-l-3 border-[#04315D] border-y border-r border-[#E8E2D7] rounded-r-2xl p-4 sm:p-4.5 shadow-2xs mb-4">
                <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
                  This combination of direct engagement and partnerships allows Ignis to reach large populations while continuously learning from the communities we serve.
                </p>
              </div>

              {/* Footnote / Basis Note */}
              <p className="text-[11.5px] sm:text-[12.5px] text-[#718096] leading-relaxed font-mono border-t border-[#E8E2D7] pt-3">
                Learner-hour estimates are based on 604,000+ learners and an estimated 80–120 hours of annual learning activities per learner.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 05 — CAPITAL EFFICIENCY                                 */}
      {/* Left: Text from Document | Right: Blended Classroom Image       */}
      {/* ============================================================== */}
      <section id="capital-efficiency" className="scroll-mt-20 lg:scroll-mt-24 relative w-full bg-[#F8F5EF] border-t border-[#E8E2D7] py-8 sm:py-10 lg:py-12 overflow-hidden">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          {/* Section Marker */}
          <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
            <span className="w-8 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-[#A21246]">
              05 — CAPITAL EFFICIENCY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN (Span 6): Text from Document */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              
              {/* Main Headline */}
              <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-6">
                Turning Investment Into Learning at Scale
              </h2>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
                The $450,000 raised by Ignis has supported the capabilities needed to design, deliver and scale learning—including research, people, technology, learning resources and partnerships.
              </p>

              {/* Secondary Lead */}
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-6">
                The relationship between our investment and aggregate reach provides a simple view of capital efficiency.
              </p>

              {/* Highlighted Capital Efficiency Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
                
                {/* Metric 1: ~$0.75 (Highlighted) */}
                <div className="bg-white border-2 border-[#A21246] rounded-2xl p-5 sm:p-6 shadow-sm">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A21246] font-bold block mb-1.5">
                    Efficiency Metric
                  </span>
                  <div className="font-serif text-[38px] sm:text-[44px] font-bold text-[#A21246] leading-none mb-2">
                    ~$0.75
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#04315D] font-medium leading-snug">
                    Capital raised per learner reached
                  </p>
                </div>

                {/* Metric 2: <1¢ */}
                <div className="bg-white border border-[#E8E2D7] rounded-2xl p-5 sm:p-6 shadow-2xs">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] font-semibold block mb-1.5">
                    Unit Economics
                  </span>
                  <div className="font-serif text-[38px] sm:text-[44px] font-bold text-[#04315D] leading-none mb-2">
                    &lt;1¢
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#475569] leading-snug">
                    Capital raised per learner-hour
                  </p>
                </div>

              </div>

              {/* Explanation Note */}
              <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed mb-4">
                These figures illustrate the scale of learning exposure associated with the capital raised.
              </p>

              {/* Disclaimer Footnote */}
              <p className="text-[12px] sm:text-[13px] text-[#718096] leading-relaxed font-mono border-t border-[#E8E2D7] pt-3.5">
                Capital-efficiency metrics are calculated using $450,000 of investment, 604,000+ learners and estimated annual learner-hours. They are not financial returns or a formal Social Return on Investment (SROI) calculation.
              </p>

            </div>

            {/* RIGHT COLUMN (Span 6): Authentic Blended Classroom Image */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D7]/80 bg-white group">
                
                {/* Authentic Documentary Classroom Image - Full display without side cropping */}
                <Image
                  src="/images/capital_efficiency_ignis_students.jpg"
                  alt="Young students proudly displaying handmade IGNIS learning letters"
                  width={1024}
                  height={576}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-101"
                />

                {/* Soft gradient blend overlays for harmony with canvas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04315D]/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 06 — THE NEXT STAGE                                    */}
      {/* ============================================================== */}
      <section id="next-stage" className="scroll-mt-20 lg:scroll-mt-24 py-8 sm:py-10 lg:py-12 bg-[#FAF6F0] border-b border-[#E8E2D7]">
        <div className="max-w-[1360px] mx-auto px-5 sm:px-10 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT COLUMN (Span 6): Narrative & Core Pillars */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              
              {/* Section Eyebrow */}
              <div className="flex items-center gap-2.5 mb-5 sm:mb-6">
                <span className="w-8 h-[2px] bg-[#A21246]" aria-hidden="true" />
                <span className="text-[12px] sm:text-[13px] font-mono font-bold tracking-[0.18em] uppercase text-[#A21246]">
                  06 — THE NEXT STAGE
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] font-bold text-[#04315D] tracking-tight leading-[1.12] mb-4">
                From 604,000 to the Next Million
              </h2>

              {/* Narrative paragraphs */}
              <div className="space-y-3 mb-6">
                <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
                  Our first phase has demonstrated the potential to deliver meaningful learning experiences at significant scale.
                </p>
                <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed">
                  The next phase is about extending that model through technology, partnerships and new delivery models—including approaches that can take quality learning deeper into smaller towns and underserved communities.
                </p>
                <div className="relative pl-4 sm:pl-5 border-l-2 border-[#A21246]/40 py-0.5">
                  <p className="text-sm sm:text-[15px] text-[#04315D] font-medium leading-relaxed">
                    Our ambition is not simply to reach more people. It is to make meaningful learning more accessible, scalable and measurable.
                  </p>
                </div>
              </div>

              {/* 3 Pillars: More learners. More learning. More opportunity. */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-white border border-[#E8E2D7] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
                  <div className="text-[10.5px] font-mono font-bold tracking-wider text-[#A21246] uppercase mb-0.5">
                    Scale
                  </div>
                  <div className="text-[14px] sm:text-[14.5px] font-semibold text-[#04315D]">
                    More learners.
                  </div>
                </div>

                <div className="bg-white border border-[#E8E2D7] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
                  <div className="text-[10.5px] font-mono font-bold tracking-wider text-[#04315D] uppercase mb-0.5">
                    Depth
                  </div>
                  <div className="text-[14px] sm:text-[14.5px] font-semibold text-[#04315D]">
                    More learning.
                  </div>
                </div>

                <div className="bg-white border border-[#E8E2D7] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
                  <div className="text-[10.5px] font-mono font-bold tracking-wider text-[#107C68] uppercase mb-0.5">
                    Outcomes
                  </div>
                  <div className="text-[14px] sm:text-[14.5px] font-semibold text-[#04315D]">
                    More opportunity.
                  </div>
                </div>
              </div>

              {/* CTA Link */}
              <div>
                <a
                  href="/csr-support"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#A21246] hover:bg-[#850E38] text-white text-[14px] font-medium transition-all shadow-sm hover:shadow-md group"
                >
                  <span>Partner with Ignis</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN (Span 6): Group of Educators & Teachers Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[620px] rounded-3xl overflow-hidden border border-[#E8E2D7] shadow-lg group bg-white">
                <Image
                  src="/images/next_stage_teachers_v2.jpg"
                  alt="Group of educators and teachers trained by Ignis"
                  width={1024}
                  height={540}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-101"
                  priority={false}
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
