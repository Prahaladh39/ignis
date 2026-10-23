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

  const pillars = {
    age: {
      name: "Age-Appropriate",
      focus: "Scaffolded for cognitive & emotional readiness at each growth stage",
      detail: "Aligning learning materials with children's developmental milestones and maturity levels.",
    },
    cultural: {
      name: "Culturally Relevant",
      focus: "Rooted in local dialects, community stories & lived realities",
      detail: "Grounding concepts in familiar local contexts so students connect learning to their lives.",
    },
    tarl: {
      name: "TARL (Teaching at Right Level)",
      focus: "Grouping by actual competency rather than age or grade",
      detail: "Instruction tailored to what the student knows today, closing foundational learning gaps.",
    },
    personalised: {
      name: "Personalised",
      focus: "Individual pacing, self-expression & tailored student agency",
      detail: "Enabling every child to build voice, critical inquiry, and confidence at their own pace.",
    },
  };

  return (
    <section
      id="ignis-difference"
      className="relative w-full bg-[#FFFFFF] border-b border-[#E8E2D7] py-10 sm:py-14 lg:py-16 overflow-hidden"
    >
      
      {/* Ambient background warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8F5EF] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#A21246]/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Client Narrative & Editorial Rationale */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3.5">
                <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
                <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                  The Ignis Difference
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-4">
                Meeting Every Learner Where They Are.{" "}
                <span className="text-[#AF1B49] italic font-serif block sm:inline">
                  Building Agency for Life.
                </span>
              </h2>

              {/* Narrative Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-[#556987] font-normal mb-6">
                <p>
                  Every classroom in India holds diverse developmental needs and living contexts. True capability is not built through one-size-fits-all textbooks, but through pedagogy grounded in the learner's reality.
                </p>
                <p>
                  The Ignis Difference integrates foundational life skills into English, Science, and Mathematics through four core pillars:
                </p>
              </div>

              {/* 4 Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {/* 1. Age-Appropriate */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#107C68]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#107C68]" />
                    <h4 className="font-serif font-bold text-[15px] text-[#04315D]">Age-Appropriate</h4>
                  </div>
                  <p className="text-xs text-[#556987] leading-relaxed">
                    Designed to align seamlessly with children's cognitive, socio-emotional, and physical growth stages.
                  </p>
                </div>

                {/* 2. Culturally Relevant */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#DA8216]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#DA8216]" />
                    <h4 className="font-serif font-bold text-[15px] text-[#04315D]">Culturally Relevant</h4>
                  </div>
                  <p className="text-xs text-[#556987] leading-relaxed">
                    Rooted in local contexts, regional stories, community lived experiences, and familiar daily realities.
                  </p>
                </div>

                {/* 3. TARL */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#04315D]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#04315D]" />
                    <h4 className="font-serif font-bold text-[15px] text-[#04315D]">
                      TARL <span className="text-[11px] font-normal text-[#64748B] font-sans">(Teaching at the Right Level)</span>
                    </h4>
                  </div>
                  <p className="text-xs text-[#556987] leading-relaxed">
                    Grouping by actual current learning competency rather than age or grade, eliminating learning deficits.
                  </p>
                </div>

                {/* 4. Personalised */}
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] hover:border-[#9E1A47]/40 transition-colors">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#9E1A47]" />
                    <h4 className="font-serif font-bold text-[15px] text-[#04315D]">Personalised</h4>
                  </div>
                  <p className="text-xs text-[#556987] leading-relaxed">
                    Tailored pacing, formative scaffolding, and interactive activities that empower each learner to discover their voice.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote / Punchline Box */}
            <div className="relative bg-[#F8F5EF] border-l-4 border-[#AF1B49] rounded-r-xl p-4 sm:p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#AF1B49] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#1E293B] italic font-serif">
                    “By teaching at the right level with culturally rooted and age-appropriate content, every child receives personalised pathways to build lasting confidence and real-world agency.”
                  </p>
                  <span className="block mt-2 text-[11px] font-bold tracking-wider uppercase text-[#64748B]">
                    The Ignis Pedagogical Framework
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4-Pillar Pedagogical Architecture Diagram */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] bg-[#FAF8F5] border border-[#E8E2D7] rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-[#E8E2D7] pb-2.5 mb-3">
                <div>
                  <span className="text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#A21246] block">
                    Pedagogical Blueprint
                  </span>
                  <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#04315D]">
                    The 4 Pillars of Capability
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 bg-white rounded-full border border-[#E2DDD5] text-[11px] text-[#64748B]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Learner-Centric</span>
                </div>
              </div>

              {/* The 4-Pillar Organic Venn Diagram (Age-Appropriate, Culturally Relevant, TARL, Personalised) */}
              <div className="relative w-full max-w-[300px] sm:max-w-[330px] mx-auto aspect-[410/370] my-2 select-none">
                <svg
                  viewBox="0 0 410 370"
                  className="w-full h-full overflow-visible"
                >
                  <defs>
                    <filter id="center-shadow-refined" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#04315D" floodOpacity="0.18" />
                    </filter>
                    <filter id="label-shadow-refined" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  {/* Soft background grounding halo */}
                  <circle cx="205" cy="185" r="140" fill="#EFECE6" opacity="0.6" />

                  {/* 1. Overlapping 4 Outer Petal Circles Group with multiply blending */}
                  <g style={{ mixBlendMode: "multiply" }}>
                    
                    {/* Top: Age-Appropriate (Teal/Emerald) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("age")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="205"
                        cy="118"
                        r="76"
                        fill="#107C68"
                        opacity="0.9"
                      />
                    </g>

                    {/* Right: Culturally Relevant (Golden Amber) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("cultural")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="270"
                        cy="185"
                        r="76"
                        fill="#DA8216"
                        opacity="0.9"
                      />
                    </g>

                    {/* Bottom: TARL - Teaching at Right Level (Deep Navy) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("tarl")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="205"
                        cy="252"
                        r="76"
                        fill="#04315D"
                        opacity="0.9"
                      />
                    </g>

                    {/* Left: Personalised (Rich Maroon/Crimson) */}
                    <g
                      className="cursor-pointer transition-transform duration-200 hover:opacity-95"
                      onMouseEnter={() => setActiveSubject("personalised")}
                      onMouseLeave={() => setActiveSubject(null)}
                    >
                      <circle
                        cx="140"
                        cy="185"
                        r="76"
                        fill="#9E1A47"
                        opacity="0.9"
                      />
                    </g>
                  </g>

                  {/* 2. Center Elevated Circle: AGENCY & LIFE SKILLS */}
                  <g filter="url(#center-shadow-refined)">
                    <circle
                      cx="205"
                      cy="185"
                      r="46"
                      fill="#FAF7F2"
                      stroke="#FFFFFF"
                      strokeWidth="3.5"
                    />
                  </g>

                  {/* 3. Icons & Labels rendered ON TOP of all circles so nothing is covered */}

                  {/* Top: Age-Appropriate */}
                  <g className="pointer-events-none" filter="url(#label-shadow-refined)">
                    <text
                      x="205"
                      y="85"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-bold text-[13.5px] tracking-wide"
                    >
                      Age-Appropriate
                    </text>
                    <text
                      x="205"
                      y="100"
                      textAnchor="middle"
                      fill="#E6F4F1"
                      className="font-mono text-[9.5px] uppercase tracking-wider opacity-90"
                    >
                      Growth &bull; Stage
                    </text>
                  </g>

                  {/* Right: Culturally Relevant */}
                  <g className="pointer-events-none" filter="url(#label-shadow-refined)">
                    <text
                      x="300"
                      y="180"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-bold text-[13px] tracking-wide"
                    >
                      Culturally
                    </text>
                    <text
                      x="300"
                      y="196"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-bold text-[13px] tracking-wide"
                    >
                      Relevant
                    </text>
                    <text
                      x="300"
                      y="210"
                      textAnchor="middle"
                      fill="#FEF3C7"
                      className="font-mono text-[9px] uppercase tracking-wider opacity-90"
                    >
                      Local Realities
                    </text>
                  </g>

                  {/* Bottom: TARL */}
                  <g className="pointer-events-none" filter="url(#label-shadow-refined)">
                    <text
                      x="205"
                      y="278"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-bold text-[14px] tracking-wide"
                    >
                      TARL
                    </text>
                    <text
                      x="205"
                      y="294"
                      textAnchor="middle"
                      fill="#DBEAFE"
                      className="font-mono text-[9.5px] uppercase tracking-wider opacity-90"
                    >
                      Right Level Learning
                    </text>
                  </g>

                  {/* Left: Personalised */}
                  <g className="pointer-events-none" filter="url(#label-shadow-refined)">
                    <text
                      x="110"
                      y="182"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      className="font-sans font-bold text-[13.5px] tracking-wide"
                    >
                      Personalised
                    </text>
                    <text
                      x="110"
                      y="198"
                      textAnchor="middle"
                      fill="#FCE7F3"
                      className="font-mono text-[9px] uppercase tracking-wider opacity-90"
                    >
                      Tailored Voice
                    </text>
                  </g>

                  {/* Center Core: AGENCY */}
                  <g className="pointer-events-none">
                    <circle
                      cx="205"
                      cy="166"
                      r="4.5"
                      fill="none"
                      stroke="#A21246"
                      strokeWidth="2"
                    />
                    <path
                      d="M 197 179 C 197 174 201 172 205 172 C 209 172 213 174 213 179"
                      fill="none"
                      stroke="#A21246"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <text
                      x="205"
                      y="194"
                      textAnchor="middle"
                      fill="#04315D"
                      className="font-serif font-bold text-[17px] tracking-tight"
                    >
                      Agency
                    </text>
                    <text
                      x="205"
                      y="208"
                      textAnchor="middle"
                      fill="#A21246"
                      className="font-mono font-bold text-[10px] tracking-widest uppercase"
                    >
                      Life Skills
                    </text>
                  </g>
                </svg>
              </div>

              {/* Dynamic Context Pill on Pillar Interaction */}
              <div className="min-h-[46px] flex items-center justify-center my-1.5 px-3 py-1.5 bg-[#FAF7F2] rounded-xl border border-[#E8E2D7] text-center">
                {activeSubject && pillars[activeSubject as keyof typeof pillars] ? (
                  <div className="animate-fadeIn">
                    <span className="text-[12px] font-bold text-[#04315D] mr-1.5">
                      {pillars[activeSubject as keyof typeof pillars].name}:
                    </span>
                    <span className="text-[12px] text-[#4A5568]">
                      {pillars[activeSubject as keyof typeof pillars].focus}
                    </span>
                  </div>
                ) : (
                  <div className="text-[11.5px] text-[#64748B]">
                    Click or hover over any pillar to view pedagogical focus
                  </div>
                )}
              </div>

              {/* Foundational Capabilities Across English, Science & Maths */}
              <div className="bg-white border border-[#E2DDD5] rounded-xl p-3 sm:p-3.5 shadow-xs mb-0">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#AF1B49]" />
                    <span className="text-[11px] font-bold tracking-wider text-[#04315D] uppercase">
                      INTEGRATED OUTCOMES
                    </span>
                  </div>
                  <span className="text-[10.5px] text-[#64748B] font-medium hidden sm:inline">
                    English &bull; Science &bull; Maths
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] sm:text-[11.5px] font-medium bg-[#F8F5EF] text-[#334155] border border-[#E8E2D7] hover:border-[#AF1B49]/40 hover:bg-white hover:text-[#AF1B49] transition-all cursor-default"
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
