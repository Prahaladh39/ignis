"use client";

import { 
  BookOpen, 
  Compass, 
  MessageSquare, 
  FlaskConical, 
  Lightbulb, 
  Zap,
  ArrowRight 
} from "lucide-react";

export default function LearningModelSection() {
  const steps = [
    {
      name: "Understand",
      icon: BookOpen,
      accent: "text-[#04315D] bg-[#04315D]/10 border-[#04315D]/20",
      borderHover: "hover:border-[#04315D]/50 hover:shadow-sm",
    },
    {
      name: "Explore",
      icon: Compass,
      accent: "text-[#107C68] bg-[#107C68]/10 border-[#107C68]/20",
      borderHover: "hover:border-[#107C68]/50 hover:shadow-sm",
    },
    {
      name: "Discuss",
      icon: MessageSquare,
      accent: "text-[#4338CA] bg-[#4338CA]/10 border-[#4338CA]/20",
      borderHover: "hover:border-[#4338CA]/50 hover:shadow-sm",
    },
    {
      name: "Apply",
      icon: FlaskConical,
      accent: "text-[#DA8216] bg-[#DA8216]/10 border-[#DA8216]/20",
      borderHover: "hover:border-[#DA8216]/50 hover:shadow-sm",
    },
    {
      name: "Reflect",
      icon: Lightbulb,
      accent: "text-[#0284C7] bg-[#0284C7]/10 border-[#0284C7]/20",
      borderHover: "hover:border-[#0284C7]/50 hover:shadow-sm",
    },
    {
      name: "Act",
      icon: Zap,
      accent: "text-[#A21246] bg-[#A21246]/10 border-[#A21246]/20",
      borderHover: "hover:border-[#A21246]/50 hover:shadow-sm",
    },
  ];

  return (
    <section
      id="model"
      className="relative w-full bg-white border-b border-[#E8E2D7] py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      
      {/* Subtle ambient background warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8F5EF] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        
        {/* Top Header & Editorial Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-10 sm:mb-14 lg:mb-16">
          
          {/* Left: Eyebrow + Main Heading */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                The Ignis Learning Model
              </span>
            </div>

            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal">
              From knowledge to capability
            </h2>
          </div>

          {/* Right: Strict Client Explanatory Paragraphs */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4 lg:pt-8">
            <p className="text-[15px] sm:text-[17px] text-[#475569] leading-[1.65] font-normal">
              Ignis programmes use stories, activities, experiments, projects, discussion and reflection to move learners beyond remembering information.
            </p>
            <p className="text-[15px] sm:text-[17px] text-[#04315D] font-medium leading-[1.65]">
              Learners practise using knowledge in situations that connect with their own lives, communities and aspirations.
            </p>
          </div>

        </div>

        {/* Horizontal Six-Step Progression Cards with Unique Colored Icons */}
        <div className="relative">
          
          {/* Subtle continuous flow track behind cards on desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#04315D]/15 via-[#DA8216]/25 to-[#A21246]/25 -z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className={`bg-[#FAF8F5]/80 hover:bg-white border border-[#E8E2D7] rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-200 ${step.borderHover} group min-h-[135px] sm:min-h-[160px]`}
                >
                  {/* Top: Colored Icon Badge & Flow Arrow */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-2.5 rounded-xl border ${step.accent} transition-transform group-hover:scale-105 duration-200`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] hidden lg:block opacity-40 group-hover:opacity-90 group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>

                  {/* Step Name */}
                  <div className="mt-1 sm:mt-2">
                    <h3 className="font-serif text-[15px] min-[380px]:text-[17px] sm:text-[19px] lg:text-[21px] font-bold text-[#04315D] tracking-tight leading-tight">
                      {step.name}
                    </h3>
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
