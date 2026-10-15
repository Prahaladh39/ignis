"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function UspSection() {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  const capabilities = [
    "Agency",
    "Confidence",
    "Decision-making",
    "Empathy",
    "Problem-solving",
    "Communication",
  ];

  const subjects = {
    english: {
      name: "English",
      focus: "Communication, Expression & Active Listening",
      detail: "Using language to express oneself, comprehend diverse perspectives, and communicate with clarity.",
    },
    science: {
      name: "Science",
      focus: "Inquiry, Observation & Critical Thinking",
      detail: "Examining phenomena, asking questions, testing assumptions, and drawing reasoned conclusions.",
    },
    mathematics: {
      name: "Mathematics",
      focus: "Logic, Analysis & Practical Problem Solving",
      detail: "Reasoning with numbers, evaluating trade-offs, and modeling real-world situations systematically.",
    },
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] border-b border-[#E8E2D7] py-10 sm:py-14 lg:py-16 overflow-hidden">
      
      {/* Ambient background warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8F5EF] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-start">
          
          {/* Left Column: Client Narrative & Editorial Rationale */}
          <div className="lg:col-span-5 flex flex-col justify-start lg:pt-1">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                The Ignis Difference
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[34px] sm:text-[40px] lg:text-[44px] xl:text-[48px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-6">
              Life Skills are not an extra subject.{" "}
              <span className="text-[#AF1B49] italic font-serif block sm:inline">
                They are what learning is for.
              </span>
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-[15px] leading-relaxed text-[#556987] font-normal mb-8">
              <p>
                Young people need more than knowledge to navigate education, work and everyday life. They need to be able to communicate, think critically, make decisions, solve problems, understand themselves and work with others.
              </p>
              <p className="font-medium text-[#04315D]">
                Ignis builds these capabilities into everyday learning.
              </p>
            </div>

            {/* Quote / Punchline Box */}
            <div className="relative bg-[#F8F5EF] border-l-4 border-[#AF1B49] rounded-r-xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#AF1B49] shrink-0 mt-1" />
                <div>
                  <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#1E293B] italic font-serif">
                    “We don’t teach English, Science and Maths as mere subjects for test scores. We help learners use what they learn to understand and respond to real situations and solve real-life problems.”
                  </p>
                  <span className="block mt-3 text-[12px] font-bold tracking-wider uppercase text-[#64748B]">
                    The Ignis Pedagogical Philosophy
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Venn Diagram Integrated Model (Matching Shared Image) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-[#E8E2D7] rounded-3xl p-5 sm:p-8 lg:p-9 shadow-sm relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-4 mb-5">
                <div>
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] uppercase text-[#A21246] block">
                    Pedagogical Blueprint
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#04315D]">
                    The Integrated Learning Model
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white rounded-full border border-[#E2DDD5] text-[12px] text-[#64748B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Foundational Integration</span>
                </div>
              </div>

              {/* The Venn Diagram (English, Science, Mathematics & Life Skills Center) */}
              <div className="relative w-full max-w-[390px] sm:max-w-[430px] mx-auto aspect-[410/360] my-2 select-none">
                <svg
                  viewBox="0 0 410 360"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    {/* Shadow for elevated center Life Skills circle */}
                    <filter id="center-shadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#04315D" floodOpacity="0.16" />
                    </filter>
                    {/* Subtle text shadow for high legibility */}
                    <filter id="label-shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.35" />
                    </filter>
                  </defs>

                  {/* Soft background grounding halo */}
                  <circle cx="205" cy="185" r="130" fill="#EFECE6" opacity="0.65" />

                  {/* 1. Overlapping Outer Circles Group with multiply blending */}
                  <g style={{ mixBlendMode: "multiply" }}>
                    
                    {/* Science (Top Circle - Emerald Teal) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("science")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="205"
                        cy="112"
                        r="85"
                        fill="#107C68"
                        opacity="0.92"
                      />
                    </g>

                    {/* English (Bottom-Left Circle - Maroon/Crimson) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("english")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="135"
                        cy="224"
                        r="85"
                        fill="#9E1A47"
                        opacity="0.92"
                      />
                    </g>

                    {/* Mathematics (Bottom-Right Circle - Rich Golden Amber for maximum contrast) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("mathematics")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="275"
                        cy="224"
                        r="85"
                        fill="#DA8216"
                        opacity="0.92"
                      />
                    </g>
                  </g>

                  {/* 2. Center Circle: LIFE SKILLS (Elevated floating card in center) */}
                  <g filter="url(#center-shadow)">
                    <circle
                      cx="205"
                      cy="185"
                      r="49"
                      fill="#FAF7F2"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                    />
                  </g>

                  {/* 3. Icons & Labels rendered ON TOP of all circles so nothing is covered */}

                  {/* Science Content */}
                  <g className="pointer-events-none" filter="url(#label-shadow)">
                    {/* Atom Icon */}
                    <g transform="translate(205, 78)">
                      <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
                      <ellipse cx="0" cy="0" rx="13" ry="5.5" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                      <ellipse cx="0" cy="0" rx="13" ry="5.5" transform="rotate(60)" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                      <ellipse cx="0" cy="0" rx="13" ry="5.5" transform="rotate(120)" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                    </g>
                    <text
                      x="205"
                      y="112"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-semibold text-[15px] tracking-wide"
                    >
                      Science
                    </text>
                  </g>

                  {/* English Content */}
                  <g className="pointer-events-none" filter="url(#label-shadow)">
                    {/* Book Icon */}
                    <g transform="translate(118, 202)">
                      <path
                        d="M -11 -7 C -6 -9 -2 -7 0 -5 C 2 -7 6 -9 11 -7 L 11 8 C 6 6 2 8 0 10 C -2 8 -6 6 -11 8 Z"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                      <line x1="0" y1="-5" x2="0" y2="10" stroke="#FFFFFF" strokeWidth="1.8" />
                      <line x1="-8" y1="-2" x2="-3" y2="-3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="-8" y1="2" x2="-3" y2="1" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="3" y1="-3" x2="8" y2="-2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                      <line x1="3" y1="1" x2="8" y2="2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
                    </g>
                    <text
                      x="118"
                      y="238"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-semibold text-[15px] tracking-wide"
                    >
                      English
                    </text>
                  </g>

                  {/* Mathematics Content - Centered in outer region, high contrast & 100% visible */}
                  <g className="pointer-events-none" filter="url(#label-shadow)">
                    {/* Calculator / Grid Icon */}
                    <g transform="translate(292, 202)">
                      <rect
                        x="-10"
                        y="-12"
                        width="20"
                        height="24"
                        rx="3.5"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="1.8"
                      />
                      <line x1="-6" y1="-6.5" x2="6" y2="-6.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="-4.5" cy="-0.5" r="1.2" fill="#FFFFFF" />
                      <circle cx="0" cy="-0.5" r="1.2" fill="#FFFFFF" />
                      <circle cx="4.5" cy="-0.5" r="1.2" fill="#FFFFFF" />
                      <circle cx="-4.5" cy="5" r="1.2" fill="#FFFFFF" />
                      <circle cx="0" cy="5" r="1.2" fill="#FFFFFF" />
                      <circle cx="4.5" cy="5" r="1.2" fill="#FFFFFF" />
                    </g>
                    <text
                      x="292"
                      y="238"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-semibold text-[14px] tracking-wide"
                    >
                      Mathematics
                    </text>
                  </g>

                  {/* Life Skills Content */}
                  <g className="pointer-events-none">
                    {/* User / Learner Silhouette Icon */}
                    <g transform="translate(205, 163)">
                      <circle
                        cx="0"
                        cy="-7"
                        r="5"
                        fill="none"
                        stroke="#04315D"
                        strokeWidth="2.2"
                      />
                      <path
                        d="M -9.5 8 C -9.5 3 -4.5 0.5 0 0.5 C 4.5 0.5 9.5 3 9.5 8"
                        fill="none"
                        stroke="#04315D"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </g>
                    {/* Life Skills Typography */}
                    <text
                      x="205"
                      y="193"
                      textAnchor="middle"
                      fill="#04315D"
                      className="font-serif font-bold text-[18px] tracking-tight"
                    >
                      Life
                    </text>
                    <text
                      x="205"
                      y="212"
                      textAnchor="middle"
                      fill="#04315D"
                      className="font-serif font-bold text-[18px] tracking-tight"
                    >
                      Skills
                    </text>
                  </g>
                </svg>
              </div>

              {/* Dynamic Context Pill on Subject Interaction */}
              <div className="min-h-[46px] flex items-center justify-center my-3 px-2">
                {activeSubject ? (
                  <div className="text-center animate-fadeIn">
                    <span className="text-[12.5px] font-bold text-[#04315D] mr-1.5">
                      {subjects[activeSubject as keyof typeof subjects].name}:
                    </span>
                    <span className="text-[12.5px] text-[#4A5568]">
                      {subjects[activeSubject as keyof typeof subjects].focus}
                    </span>
                  </div>
                ) : (
                  <div className="text-center text-[12px] text-[#64748B]">
                    English + Science + Maths integrated with Life Skills to build learner agency
                  </div>
                )}
              </div>

              {/* Foundational Capabilities Chips */}
              <div className="bg-white border border-[#E2DDD5] rounded-2xl p-4 sm:p-5 shadow-sm mb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#AF1B49]" />
                    <span className="text-[12px] font-bold tracking-wider text-[#04315D] uppercase">
                      FOUNDATIONAL CAPABILITIES
                    </span>
                  </div>
                  <span className="text-[11.5px] text-[#64748B] font-medium hidden sm:inline">
                    Developed across all subjects
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center px-3 py-1 rounded-full text-[12px] sm:text-[13px] font-medium bg-[#F8F5EF] text-[#334155] border border-[#E8E2D7] hover:border-[#AF1B49]/40 hover:bg-white hover:text-[#AF1B49] transition-all cursor-default"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
