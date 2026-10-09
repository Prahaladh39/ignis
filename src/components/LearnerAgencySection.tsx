"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Compass,
  MessageSquare,
  FlaskConical,
  Lightbulb,
  Zap,
  HelpCircle,
  Target,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function LearnerAgencySection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // The 6-Step Active Learning Cycle (Pedagogical Process)
  const steps = [
    {
      id: 0,
      stepNum: "01",
      name: "Understand",
      icon: BookOpen,
      pairedAgency: "ASK",
      accent: "text-[#04315D] bg-[#04315D]/10 border-[#04315D]/20",
      activeBorder: "border-[#04315D] bg-white ring-2 ring-[#04315D]/20 shadow-md",
      badgeColor: "bg-[#04315D] text-white",
    },
    {
      id: 1,
      stepNum: "02",
      name: "Explore",
      icon: Compass,
      pairedAgency: "THINK",
      accent: "text-[#0F766E] bg-[#0F766E]/10 border-[#0F766E]/20",
      activeBorder: "border-[#0F766E] bg-white ring-2 ring-[#0F766E]/20 shadow-md",
      badgeColor: "bg-[#0F766E] text-white",
    },
    {
      id: 2,
      stepNum: "03",
      name: "Discuss",
      icon: MessageSquare,
      pairedAgency: "COMMUNICATE",
      accent: "text-[#4338CA] bg-[#4338CA]/10 border-[#4338CA]/20",
      activeBorder: "border-[#4338CA] bg-white ring-2 ring-[#4338CA]/20 shadow-md",
      badgeColor: "bg-[#4338CA] text-white",
    },
    {
      id: 3,
      stepNum: "04",
      name: "Apply",
      icon: FlaskConical,
      pairedAgency: "SOLVE",
      accent: "text-[#D97706] bg-[#D97706]/10 border-[#D97706]/20",
      activeBorder: "border-[#D97706] bg-white ring-2 ring-[#D97706]/20 shadow-md",
      badgeColor: "bg-[#D97706] text-white",
    },
    {
      id: 4,
      stepNum: "05",
      name: "Reflect",
      icon: Lightbulb,
      pairedAgency: "DECIDE",
      accent: "text-[#0284C7] bg-[#0284C7]/10 border-[#0284C7]/20",
      activeBorder: "border-[#0284C7] bg-white ring-2 ring-[#0284C7]/20 shadow-md",
      badgeColor: "bg-[#0284C7] text-white",
    },
    {
      id: 5,
      stepNum: "06",
      name: "Act",
      icon: Zap,
      pairedAgency: "ACT",
      accent: "text-[#A21246] bg-[#A21246]/10 border-[#A21246]/20",
      activeBorder: "border-[#A21246] bg-white ring-2 ring-[#A21246]/20 shadow-md",
      badgeColor: "bg-[#A21246] text-white",
    },
  ];

  // The 6 Tangible Agency Capabilities (The Outcome in the Learner)
  const agencyCapabilities = [
    {
      id: 0,
      keyword: "ASK",
      statement: "I can ask questions and seek information.",
      stepName: "Understand",
      stepNum: "01",
      icon: HelpCircle,
      accent: "text-[#04315D] bg-[#04315D]/10 border-[#04315D]/20",
      borderHover: "hover:border-[#04315D]/60 hover:shadow-md",
      activeStyle: "border-[#04315D] ring-2 ring-[#04315D]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
    {
      id: 1,
      keyword: "THINK",
      statement: "I can examine ideas and make sense of what I learn.",
      stepName: "Explore",
      stepNum: "02",
      icon: Lightbulb,
      accent: "text-[#0F766E] bg-[#0F766E]/10 border-[#0F766E]/20",
      borderHover: "hover:border-[#0F766E]/60 hover:shadow-md",
      activeStyle: "border-[#0F766E] ring-2 ring-[#0F766E]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
    {
      id: 2,
      keyword: "COMMUNICATE",
      statement: "I can express myself and listen to others.",
      stepName: "Discuss",
      stepNum: "03",
      icon: MessageSquare,
      accent: "text-[#4338CA] bg-[#4338CA]/10 border-[#4338CA]/20",
      borderHover: "hover:border-[#4338CA]/60 hover:shadow-md",
      activeStyle: "border-[#4338CA] ring-2 ring-[#4338CA]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
    {
      id: 3,
      keyword: "SOLVE",
      statement: "I can use what I know to address problems.",
      stepName: "Apply",
      stepNum: "04",
      icon: Target,
      accent: "text-[#D97706] bg-[#D97706]/10 border-[#D97706]/20",
      borderHover: "hover:border-[#D97706]/60 hover:shadow-md",
      activeStyle: "border-[#D97706] ring-2 ring-[#D97706]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
    {
      id: 4,
      keyword: "DECIDE",
      statement: "I can make informed choices.",
      stepName: "Reflect",
      stepNum: "05",
      icon: Compass,
      accent: "text-[#0284C7] bg-[#0284C7]/10 border-[#0284C7]/20",
      borderHover: "hover:border-[#0284C7]/60 hover:shadow-md",
      activeStyle: "border-[#0284C7] ring-2 ring-[#0284C7]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
    {
      id: 5,
      keyword: "ACT",
      statement: "I have the confidence to take action.",
      stepName: "Act",
      stepNum: "06",
      icon: Zap,
      accent: "text-[#A21246] bg-[#A21246]/10 border-[#A21246]/20",
      borderHover: "hover:border-[#A21246]/60 hover:shadow-md",
      activeStyle: "border-[#A21246] ring-2 ring-[#A21246]/25 bg-[#FAF9F5] shadow-lg -translate-y-1",
    },
  ];

  return (
    <section
      id="model"
      className="relative w-full bg-[#FAF8F5] border-b border-[#E8E2D7] py-18 sm:py-24 lg:py-28 overflow-hidden transition-colors"
    >
      {/* Ambient background illumination */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F4EFE6] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* ============================================================== */}
        {/* HEADER: From knowledge to capability                          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          
          {/* Left Column: Eyebrow + Main Title */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                The Ignis Learning Model
              </span>
            </div>

            <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal">
              From knowledge to capability
            </h2>
          </div>

          {/* Right Column: Strict Client Narrative */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4 lg:pt-4">
            <p className="text-[15.5px] sm:text-[17px] text-[#475569] leading-[1.68] font-normal">
              Ignis programmes use stories, activities, experiments, projects, discussion and reflection to move learners beyond remembering information.
            </p>
            <p className="text-[15.5px] sm:text-[17px] text-[#04315D] font-medium leading-[1.68]">
              Learners practise using knowledge in situations that connect with their own lives, communities and aspirations.
            </p>
          </div>

        </div>

        {/* ============================================================== */}
        {/* HORIZONTAL SIX-STEP PROGRESSION RAIL (Classroom Cycle)        */}
        {/* ============================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#A21246]" />
              <span>The Six-Step Active Learning Cycle</span>
            </div>
            <span className="text-xs text-[#94A3B8] hidden sm:inline-block">
              Hover or tap a step to explore capability link
            </span>
          </div>

          <div className="relative">
            {/* Desktop continuous track connector line */}
            <div className="hidden lg:block absolute top-[48px] left-[4%] right-[4%] h-[2px] bg-gradient-to-r from-[#04315D]/20 via-[#D97706]/30 to-[#A21246]/30 -z-0" />

            {/* Stepper Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === step.id;

                return (
                  <button
                    key={step.name}
                    type="button"
                    onClick={() => setActiveStep(isSelected ? null : step.id)}
                    onMouseEnter={() => setActiveStep(step.id)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`text-left rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? step.activeBorder
                        : "bg-white/80 hover:bg-white border-[#E8E2D7] hover:border-[#CBD5E1] shadow-sm hover:shadow"
                    }`}
                  >
                    {/* Top: Icon + Number + Flow Arrow */}
                    <div className="flex items-center justify-between mb-3 w-full">
                      <div
                        className={`p-2.5 rounded-xl border ${step.accent} transition-transform ${
                          isSelected ? "scale-110" : ""
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono font-bold text-[#64748B]">
                          {step.stepNum}
                        </span>
                        {idx < steps.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-[#94A3B8] hidden lg:block opacity-40" />
                        )}
                      </div>
                    </div>

                    {/* Step Name */}
                    <div>
                      <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#04315D] tracking-tight leading-tight">
                        {step.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-wider text-[#A21246] font-semibold mt-1">
                        Builds {step.pairedAgency} →
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TRANSITION BRIDGE: What does learner agency look like?        */}
        {/* ============================================================== */}
        <div className="relative flex items-center justify-center my-10 sm:my-14">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E8E2D7]" />
          </div>
          <div className="relative bg-[#FAF8F5] px-6 py-2 rounded-full border border-[#E8E2D7] flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#04315D] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#A21246]" />
            <span>Pedagogical Outcome in Practice</span>
          </div>
        </div>

        {/* Sub-heading for Agency */}
        <div className="max-w-[800px] mb-8 sm:mb-10">
          <h3 className="font-serif text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.18] tracking-[-0.02em] text-[#04315D] font-normal">
            What does learner agency look like?
          </h3>
        </div>

        {/* ============================================================== */}
        {/* BENTO GRID: Authentic Portrait + 6 Tangible Capabilities      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* Left Column (Span 5): Authentic Student Photograph with Quote */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[440px] sm:min-h-[520px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8 bg-[#F4EFE6] border border-[#E8E2D7]">
            <Image
              src="/images/agency-boy-hd.jpg"
              alt="Ignis learner looking forward with curiosity and agency"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center mix-blend-multiply opacity-95 transition-transform duration-700 hover:scale-105"
              priority
            />

            {/* Frosted Glass Conviction Badge (Client's exact closing statement) */}
            <div className="relative z-10 bg-white/95 backdrop-blur-md border border-[#E8E2D7] p-5 sm:p-6 rounded-2xl shadow-lg mt-auto">
              <span className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase text-[#A21246] mb-2">
                Core Conviction
              </span>
              <p className="font-serif text-[17px] sm:text-[18px] text-[#04315D] leading-[1.4] font-normal italic">
                &ldquo;These are not separate lessons. They are capabilities that develop through learning.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column (Span 7): 6 Agency Capability Cards (2 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {agencyCapabilities.map((card) => {
              const Icon = card.icon;
              const isSelected = activeStep === card.id;

              return (
                <div
                  key={card.keyword}
                  onMouseEnter={() => setActiveStep(card.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isSelected ? null : card.id)}
                  className={`bg-white border rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? card.activeStyle
                      : `border-[#E8E2D7] ${card.borderHover}`
                  }`}
                >
                  {/* Card Header: Icon, Keyword & Connected Step Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl border ${card.accent} transition-transform group-hover:scale-105 duration-200`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-serif text-[21px] sm:text-[23px] font-bold tracking-wider text-[#04315D]">
                          {card.keyword}
                        </h4>
                      </div>

                      {/* Pill indicating connected learning step */}
                      <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F8F5EF] text-[#64748B] border border-[#E8E2D7]">
                        Step {card.stepNum}
                      </span>
                    </div>

                    {/* First-person declaration statement (Strict Client Copy) */}
                    <p className="text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.6] font-normal">
                      {card.statement}
                    </p>
                  </div>

                  {/* Micro-label indicating active alignment */}
                  <div className="pt-4 mt-2 border-t border-[#F1EBE1] flex items-center justify-between text-xs text-[#64748B]">
                    <span>Learned through {card.stepName}</span>
                    <span
                      className={`font-semibold transition-colors ${
                        isSelected ? "text-[#A21246]" : "text-transparent group-hover:text-[#A21246]"
                      }`}
                    >
                      Active Focus •
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
