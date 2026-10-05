import Image from "next/image";
import { 
  HelpCircle, 
  Lightbulb, 
  Compass, 
  Target, 
  MessageSquare, 
  Zap 
} from "lucide-react";

export default function LearnerAgencySection() {
  const agencyCards = [
    {
      keyword: "ASK",
      statement: "I can ask questions and seek information.",
      icon: HelpCircle,
      accent: "text-[#A21246] bg-[#A21246]/10 border-[#A21246]/20",
      borderHover: "hover:border-[#A21246]/50",
    },
    {
      keyword: "THINK",
      statement: "I can examine ideas and make sense of what I learn.",
      icon: Lightbulb,
      accent: "text-[#04315D] bg-[#04315D]/10 border-[#04315D]/20",
      borderHover: "hover:border-[#04315D]/50",
    },
    {
      keyword: "DECIDE",
      statement: "I can make informed choices.",
      icon: Compass,
      accent: "text-[#107C68] bg-[#107C68]/10 border-[#107C68]/20",
      borderHover: "hover:border-[#107C68]/50",
    },
    {
      keyword: "SOLVE",
      statement: "I can use what I know to address problems.",
      icon: Target,
      accent: "text-[#DA8216] bg-[#DA8216]/10 border-[#DA8216]/20",
      borderHover: "hover:border-[#DA8216]/50",
    },
    {
      keyword: "COMMUNICATE",
      statement: "I can express myself and listen to others.",
      icon: MessageSquare,
      accent: "text-[#4338CA] bg-[#4338CA]/10 border-[#4338CA]/20",
      borderHover: "hover:border-[#4338CA]/50",
    },
    {
      keyword: "ACT",
      statement: "I have the confidence to take action.",
      icon: Zap,
      accent: "text-[#A21246] bg-[#A21246]/10 border-[#A21246]/20",
      borderHover: "hover:border-[#A21246]/50",
    },
  ];

  return (
    <section className="relative w-full bg-[#F8F5EF] border-b border-[#E8E2D7] py-16 sm:py-20 lg:py-24 overflow-hidden">
      
      {/* Ambient background blur circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading (Strict Client Content) */}
        <div className="max-w-[780px] mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal">
            What does learner agency look like?
          </h2>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
          
          {/* Left Column: Full HD Illustration - Natural, no box border or shadow */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[420px] sm:min-h-[480px] lg:min-h-full flex items-center justify-center">
            <Image
              src="/images/agency-boy-hd.jpg"
              alt="Young learner looking up with curiosity and aspirations"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center mix-blend-multiply"
              priority
            />
          </div>

          {/* Bento Tiles 2 to 7: 6 Capability Cards (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {agencyCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.keyword}
                  className={`bg-white border border-[#E8E2D7] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 ${card.borderHover} group`}
                >
                  {/* Top: Icon + Keyword */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`p-2.5 rounded-xl border ${card.accent} transition-transform group-hover:scale-105 duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-[20px] sm:text-[22px] font-bold tracking-wider text-[#04315D]">
                      {card.keyword}
                    </h3>
                  </div>

                  {/* First-person declaration statement */}
                  <p className="text-[15px] sm:text-[16px] text-[#334155] leading-[1.6] font-normal">
                    {card.statement}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
