import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import PartnersMarquee from "@/components/PartnersMarquee";
import RuralTeacherFellowsSection from "@/components/RuralTeacherFellowsSection";
import ResearchCapacitySection from "@/components/ResearchCapacitySection";
import LifeSkillsGirlsSection from "@/components/LifeSkillsGirlsSection";
import YouthEmploymentSection from "@/components/YouthEmploymentSection";
import TeacherTrainingSection from "@/components/TeacherTrainingSection";
import IgnisInMediaMarquee from "@/components/IgnisInMediaMarquee";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Compass,
  Lightbulb,
  Pencil,
  Atom,
  Languages,
} from "lucide-react";

export const metadata: Metadata = {
  title: "CSR Support & Partnerships | Ignis Careers",
  description:
    "Partner with Ignis through Corporate Social Responsibility (CSR) initiatives to build foundational life skills, language proficiency, and student agency across underserved communities in India.",
};

export default function CsrSupportPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex flex-col">
      {/* Header Navigation */}
      <Navbar />

      {/* Top Pointy Navigation Bar: Horizontal on Desktop/Laptop, Vertical on Tablet/Mobile */}
      <section className="relative w-full bg-white border-b border-[#E8E2D7] py-2.5 sm:py-4">
        <div className="max-w-[1440px] mx-auto px-2 sm:px-6 lg:px-12 flex justify-center">
          <nav aria-label="CSR Programme Navigation" className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-1.5 sm:gap-2.5 w-full max-w-md lg:max-w-none">
            <a
              href="#rural-teacher-fellows"
              className="group flex items-center justify-between lg:justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-[#A21246] hover:bg-[#780A32] text-white border border-[#A21246] hover:border-[#780A32] text-[10.5px] xs:text-[11.5px] sm:text-xs xl:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-sm hover:translate-x-0.5 lg:hover:translate-x-0 lg:hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Rural Teacher Fellows Programme</span>
              <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[11px] sm:text-xs shrink-0">→</span>
            </a>

            <a
              href="#research-capacity-building"
              className="group flex items-center justify-between lg:justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-[#A21246] hover:bg-[#780A32] text-white border border-[#A21246] hover:border-[#780A32] text-[10.5px] xs:text-[11.5px] sm:text-xs xl:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-sm hover:translate-x-0.5 lg:hover:translate-x-0 lg:hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Research and Capacity Building</span>
              <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[11px] sm:text-xs shrink-0">→</span>
            </a>

            <a
              href="#life-skills-girls"
              className="group flex items-center justify-between lg:justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-[#A21246] hover:bg-[#780A32] text-white border border-[#A21246] hover:border-[#780A32] text-[10.5px] xs:text-[11.5px] sm:text-xs xl:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-sm hover:translate-x-0.5 lg:hover:translate-x-0 lg:hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Life Skills for Girls</span>
              <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[11px] sm:text-xs shrink-0">→</span>
            </a>

            <a
              href="#youth-employment-programme"
              className="group flex items-center justify-between lg:justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-[#A21246] hover:bg-[#780A32] text-white border border-[#A21246] hover:border-[#780A32] text-[10px] xs:text-[11px] sm:text-xs xl:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-sm hover:translate-x-0.5 lg:hover:translate-x-0 lg:hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Employment Enhancement Programme for Youth</span>
              <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[11px] sm:text-xs shrink-0">→</span>
            </a>

            <a
              href="#teacher-training-participatory-learning"
              className="group flex items-center justify-between lg:justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md bg-[#A21246] hover:bg-[#780A32] text-white border border-[#A21246] hover:border-[#780A32] text-[10.5px] xs:text-[11.5px] sm:text-xs xl:text-[13px] font-medium transition-all duration-200 shadow-2xs hover:shadow-sm hover:translate-x-0.5 lg:hover:translate-x-0 lg:hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Teacher Training for Participatory Learning</span>
              <span className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 transition-transform text-[11px] sm:text-xs shrink-0">→</span>
            </a>
          </nav>
        </div>
      </section>

      {/* Hero Intro for CSR Support */}
      <section className="relative pt-8 pb-10 lg:pt-12 lg:pb-14 bg-gradient-to-b from-[#F2EDE2]/60 to-[#F8F5EF] border-b border-[#E8E2D7] overflow-hidden">
        {/* Subtle study-related floating background icons */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {/* Top-left: Book */}
          <div className="animate-float-slow absolute top-8 left-[8%] text-[#04315D]/[0.18] rotate-[-12deg]">
            <BookOpen className="w-14 h-14 sm:w-16 sm:h-16" strokeWidth={1.5} />
          </div>

          {/* Top-right: Graduation Cap */}
          <div className="animate-float-reverse absolute top-10 right-[10%] text-[#A21246]/[0.18] rotate-[15deg]">
            <GraduationCap className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
          </div>

          {/* Middle-left: Compass / Geometry */}
          <div className="animate-float-reverse absolute top-1/2 left-[4%] -translate-y-1/2 text-[#A21246]/[0.16] rotate-[8deg]">
            <Compass className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={1.5} />
          </div>

          {/* Middle-right: Atom / Science */}
          <div className="animate-float-slow absolute top-1/2 right-[5%] -translate-y-1/2 text-[#04315D]/[0.16] rotate-[-10deg]">
            <Atom className="w-14 h-14 sm:w-16 sm:h-16" strokeWidth={1.5} />
          </div>

          {/* Bottom-left: Pencil */}
          <div className="animate-float-slow absolute bottom-6 left-[14%] text-[#04315D]/[0.18] rotate-[-25deg]">
            <Pencil className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
          </div>

          {/* Bottom-right: Languages / Communication */}
          <div className="animate-float-reverse absolute bottom-8 right-[15%] text-[#A21246]/[0.18] rotate-[12deg]">
            <Languages className="w-11 h-11 sm:w-13 sm:h-13" strokeWidth={1.5} />
          </div>

          {/* Soft ambient light accents */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#A21246]/5 to-[#04315D]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-xs font-semibold tracking-wider text-[#A21246] uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Impact CSR Collaborations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#04315D] font-normal tracking-tight leading-[1.15] mb-6">
            Transforming Classrooms Through Purposeful CSR Partnerships
          </h1>

          <p className="text-base sm:text-[17px] text-[#556987] font-normal leading-relaxed max-w-2xl mx-auto">
            Co-create sustainable, measurable impact in government and affordable private schools. Ignis aligns with your CSR mandates in education, life skills, and teacher capacity building.
          </p>
        </div>
      </section>

      {/* Section 1: Our Partners (Marquee Scroller) */}
      <PartnersMarquee />

      {/* Section 2: Rural Teacher Fellows Programme */}
      <RuralTeacherFellowsSection />

      {/* Section 3: Research and Capacity Building */}
      <ResearchCapacitySection />

      {/* Section 4: Life Skills for Girls */}
      <LifeSkillsGirlsSection />

      {/* Section 5: Employment Enhancement Programme for Youth */}
      <YouthEmploymentSection />

      {/* Section 6: Teacher Training for Participatory Learning */}
      <TeacherTrainingSection />

      {/* Section 7: Ignis in Media (Marquee Scroller) */}
      <IgnisInMediaMarquee />

      {/* Floating CTA for Mobile */}
      <FloatingCta />

      {/* Footer */}
      <Footer />
    </main>
  );
}
