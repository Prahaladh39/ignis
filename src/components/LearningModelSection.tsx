"use client";

import Image from "next/image";
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
      iconColor: "text-[#0284C7]",
      badgeBg: "bg-[#0284C7]/10 border-[#0284C7]/30",
      topBar: "bg-[#0284C7]",
      numColor: "text-[#0284C7]",
      num: "01",
    },
    {
      name: "Explore",
      icon: Compass,
      iconColor: "text-[#10B981]",
      badgeBg: "bg-[#10B981]/10 border-[#10B981]/30",
      topBar: "bg-[#10B981]",
      numColor: "text-[#10B981]",
      num: "02",
    },
    {
      name: "Discuss",
      icon: MessageSquare,
      iconColor: "text-[#8B5CF6]",
      badgeBg: "bg-[#8B5CF6]/10 border-[#8B5CF6]/30",
      topBar: "bg-[#8B5CF6]",
      numColor: "text-[#8B5CF6]",
      num: "03",
    },
    {
      name: "Apply",
      icon: FlaskConical,
      iconColor: "text-[#F59E0B]",
      badgeBg: "bg-[#F59E0B]/10 border-[#F59E0B]/30",
      topBar: "bg-[#F59E0B]",
      numColor: "text-[#F59E0B]",
      num: "04",
    },
    {
      name: "Reflect",
      icon: Lightbulb,
      iconColor: "text-[#06B6D4]",
      badgeBg: "bg-[#06B6D4]/10 border-[#06B6D4]/30",
      topBar: "bg-[#06B6D4]",
      numColor: "text-[#06B6D4]",
      num: "05",
    },
    {
      name: "Act",
      icon: Zap,
      iconColor: "text-[#EC4899]",
      badgeBg: "bg-[#EC4899]/10 border-[#EC4899]/30",
      topBar: "bg-[#EC4899]",
      numColor: "text-[#EC4899]",
      num: "06",
    },
  ];

  return (
    <section
      id="model"
      className="relative w-full border-b border-[#E2E8F0] py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/students_reading_model.jpg"
          alt="Students engaged in collaborative reading and active learning"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[38%_15%] sm:object-[center_35%]"
        />
        {/* Responsive scrim: stronger dark overlay on mobile so cards pop and faces remain distinct, gentle gradient on desktop */}
        <div className="absolute inset-0 bg-black/55 sm:bg-gradient-to-t sm:from-black/45 sm:via-black/20 sm:to-black/30 backdrop-blur-[0.5px] sm:backdrop-blur-none" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        
        {/* Top Header & Editorial Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start mb-10 sm:mb-12 lg:mb-16">
          
          {/* Left: Eyebrow + Main Heading with crisp white card backing */}
          <div className="lg:col-span-7 bg-white/92 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-6 h-[3px] bg-gradient-to-r from-[#A21246] via-[#F59E0B] to-[#0284C7] rounded-full" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A21246]">
                The Ignis Learning Model
              </span>
            </div>

            <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal">
              From Knowledge to Capability
            </h2>
          </div>

          {/* Right: Explanatory Paragraphs Overlaid with white glass card */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4 bg-white/92 backdrop-blur-md p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:mt-0">
            <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.65] font-normal">
              Ignis programmes use stories, activities, experiments, projects, discussion and reflection to move learners beyond remembering information.
            </p>
            <p className="text-[15px] sm:text-[16px] text-[#04315D] font-medium leading-[1.65] border-l-3 border-[#A21246] pl-3">
              Learners practise using knowledge in situations that connect with their own lives, communities and aspirations.
            </p>
          </div>

        </div>

        {/* Horizontal Six-Step Progression Cards Overlaid */}
        <div className="relative">
          
          {/* Colorful flow track behind cards on desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[3px] bg-gradient-to-r from-[#0284C7] via-[#F59E0B] to-[#EC4899] rounded-full opacity-60 -z-0" />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.name}
                  className="bg-white/92 hover:bg-white backdrop-blur-md border border-white/80 hover:border-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between transition-all duration-200 group min-h-[145px] sm:min-h-[170px] shadow-[0_8px_25px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_35px_rgb(0,0,0,0.18)] hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Colorful Top Accent Stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-[4px] ${step.topBar}`} />

                  {/* Top: Icon Badge & Flow Arrow */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-2.5 rounded-xl border ${step.badgeBg} transition-transform group-hover:scale-110 duration-200 shadow-sm`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${step.iconColor}`} />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className={`text-[12px] font-mono font-bold ${step.numColor} tracking-wider`}>
                        {step.num}
                      </span>
                      {idx < steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-slate-400 hidden lg:block group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                  </div>

                  {/* Step Name */}
                  <div className="mt-1 sm:mt-2">
                    <h3 className="font-serif text-[16px] min-[380px]:text-[18px] sm:text-[20px] lg:text-[21px] font-bold text-[#04315D] tracking-tight leading-tight group-hover:text-[#A21246] transition-colors">
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
