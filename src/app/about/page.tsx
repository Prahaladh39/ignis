import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Building2,
  GraduationCap,
  HeartHandshake,
  Smartphone,
  BookOpen,
  Leaf,
  Globe2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ignis Careers",
  description:
    "Learn about Ignis Careers: Vision & Mission, Our Priorities, and Our Story.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar />

      {/* ============================================================== */}
      {/* TOP FLOATING ANCHOR NAVIGATION BAR: EXACT 3 BUTTONS            */}
      {/* ============================================================== */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E2D7] py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            aria-label="About Us Navigation"
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4 max-w-3xl mx-auto w-full items-stretch"
          >
            <a
              href="#vision-mission"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[56px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                VISION & MISSION
              </span>
            </a>

            <a
              href="#priorities"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[56px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                OUR PRIORITIES
              </span>
            </a>

            <a
              href="#story"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[56px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                OUR STORY
              </span>
            </a>
          </nav>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 1: VISION & MISSION                                    */}
      {/* ============================================================== */}
      <section
        id="vision-mission"
        className="scroll-mt-24 pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 bg-white border-b border-[#E8E2D7] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Heading: Matched with Impact Page typography */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              VISION & MISSION
            </h2>

            {/* Editorial Diamond Divider */}
            <div className="flex items-center justify-center gap-4 my-3.5">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
            </div>
          </div>

          {/* Top Row: Image (Left) + Vision & Mission Text (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-12">
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full relative rounded-2xl sm:rounded-3xl border border-[#E8E2D7] bg-white p-2 sm:p-2.5 shadow-xl shadow-[#04315D]/6 overflow-hidden">
                <div className="relative aspect-[808/623] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#07223F]">
                  <Image
                    src="/images/about/about_hero.jpg"
                    alt="About Ignis"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div>
                <h4 className="font-serif text-[18px] sm:text-[21px] font-bold text-[#04315D] mb-1.5 leading-snug">
                  Our Vision
                </h4>
                <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                  To reduce social inequality through quality and purposeful education by transforming the teaching and learning processes.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-[18px] sm:text-[21px] font-bold text-[#04315D] mb-1.5 leading-snug">
                  Our Mission
                </h4>
                <div className="space-y-2 text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                  <p>
                    Break away from rote learning and passive teaching practises and set a culture of active and collaborative learning
                  </p>
                  <p>
                    We reach and empower school leaders, teachers and children in socially disadvantaged communities to understand their need and communicate the benefits for improving the quality of education.
                  </p>
                  <p>
                    We design innovative, affordable and culturally relevant English and Life Skills programmes for the disadvantaged communities delivered through experiential and joyful learning approach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: The Problem & The Solution */}
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch pt-8 border-t border-[#E8E2D7]">
            {/* The Problem */}
            <article className="group flex flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#eadfce] bg-white shadow-[0_10px_30px_-15px_rgba(11,45,92,.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="px-7 sm:px-8 pt-7 sm:pt-8 pb-5">
                <span className="mb-4 grid h-12 w-12 sm:h-13 sm:w-13 place-items-center rounded-2xl bg-gradient-to-br from-[#d4520c] to-[#f28c2b] text-white shadow-[0_8px_20px_-4px_rgba(228,102,24,.45)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3h7l5 5v13H7z" />
                    <path d="M14 3v5h5M10 13h6M10 17h6" />
                  </svg>
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#0b2d5c] leading-snug">
                  The Problem
                </h3>
                <div className="mt-3.5 space-y-3 text-[14px] sm:text-[15px] text-[#556987] leading-relaxed font-normal">
                  <p>
                    The current education system only prepares students for examinations but deprives them of essential life skills. They are taught by rote and are very rarely given the opportunity to overcome real-life challenges using what they have learnt.
                  </p>
                  <p>
                    The lack of life skills deprives them of the ability to make informed decisions and also drastically decreases their ability to understand and process information, thus contributing to their unemployability.
                  </p>
                </div>
              </div>

              <div className="mt-auto border-t border-[#f4ebdf] bg-[#faf5ee]/50 overflow-hidden">
                <svg viewBox="0 0 340 190" className="block w-full h-28 sm:h-36" aria-hidden="true">
                  <path d="M0 150Q80 128 170 144T340 140V190H0Z" fill="#fde4cc" />
                  <circle cx="288" cy="46" r="24" fill="#ffc98e" />
                  <circle cx="288" cy="46" r="34" fill="none" stroke="#f6b56f" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
                  <g stroke="#e8701a" strokeWidth="2" strokeLinecap="round">
                    <path d="M40 60v8M36 64h8M120 36v8M116 40h8M318 112v8M314 116h8" />
                  </g>
                  <g transform="rotate(-8 82 100)">
                    <rect x="58" y="70" width="46" height="58" rx="5" fill="#fff" stroke="#d4520c" strokeWidth="2.5" />
                    <path d="M66 84h30M66 94h30M66 104h20" stroke="#f6a04a" strokeWidth="3" strokeLinecap="round" />
                    <path d="M84 112l5 5 9-10" stroke="#d4520c" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <rect x="112" y="104" width="62" height="12" rx="3" fill="#f6a04a" stroke="#d4520c" strokeWidth="2.5" />
                  <rect x="118" y="92" width="52" height="12" rx="3" fill="#fbc58a" stroke="#d4520c" strokeWidth="2.5" />
                  <rect x="124" y="80" width="42" height="12" rx="3" fill="#d4520c" />
                  <path d="M216 150V100a17 17 0 0 1 34 0v50z" fill="#16967c" />
                  <circle cx="233" cy="82" r="13" fill="#fcc9a0" />
                  <rect x="100" y="124" width="176" height="11" rx="3" fill="#fff" stroke="#d4520c" strokeWidth="2.5" />
                  <path d="M114 135v18M262 135v18" stroke="#d4520c" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="226" cy="60" r="3" fill="#d4520c" />
                  <circle cx="230" cy="67" r="2" fill="#d4520c" />
                  <circle cx="236" cy="36" r="18" fill="#fff" stroke="#d4520c" strokeWidth="2.5" />
                  <text x="236" y="44" textAnchor="middle" fontFamily="var(--font-fraunces),Georgia,serif" fontWeight="800" fontSize="22" fill="#d4520c">?</text>
                </svg>
              </div>
            </article>

            {/* The Solution */}
            <article className="group flex flex-col overflow-hidden rounded-[28px] sm:rounded-[32px] border border-[#d5ece4] bg-white shadow-[0_10px_30px_-15px_rgba(11,45,92,.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="px-7 sm:px-8 pt-7 sm:pt-8 pb-5">
                <span className="mb-4 grid h-12 w-12 sm:h-13 sm:w-13 place-items-center rounded-2xl bg-gradient-to-br from-[#0d7a66] to-[#35b79a] text-white shadow-[0_8px_20px_-4px_rgba(15,143,116,.45)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />
                  </svg>
                </span>
                <h3 className="font-serif text-[22px] sm:text-[26px] font-bold text-[#0b2d5c] leading-snug">
                  The Solution
                </h3>
                <div className="mt-3.5 space-y-3 text-[14px] sm:text-[15px] text-[#556987] leading-relaxed font-normal">
                  <p>
                    After four years of intensive research in the villages of India, we’ve come up with an English and Life Skills curriculum. We nurture a culture of learning by promoting joyful learning. The English and Life Skills curriculum enables them to read, write, listen and communicate with ease. Their ability to read and assimilate a wide variety of text becomes easier.
                  </p>
                  <p>
                    Now, five year after Ignis’ intervention, 90 percent of the children going to schools in the villages are enrolled in higher education in colleges.
                  </p>
                  <p>
                    Now, in 2019, all the girls are still in school.
                  </p>
                </div>
              </div>

              <div className="mt-auto border-t border-[#e2f1ec] bg-[#effaf6]/50 overflow-hidden">
                <svg viewBox="0 0 340 190" className="block w-full h-28 sm:h-36" aria-hidden="true">
                  <circle cx="170" cy="118" r="66" fill="#dcf2ea" />
                  <path d="M0 152Q85 136 170 150T340 146V190H0Z" fill="#c4e9de" />
                  <g stroke="#2f9e86" strokeWidth="2" strokeLinecap="round">
                    <path d="M34 70v8M30 74h8M312 60v8M308 64h8M120 30v8M116 34h8" />
                  </g>
                  <g fill="none" stroke="#2f9e86" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round">
                    <path d="M85 100Q112 70 140 92" />
                    <path d="M140 92Q170 62 200 98" />
                    <path d="M200 98Q226 72 255 106" />
                  </g>
                  <circle cx="170" cy="52" r="22" fill="#f6c445" opacity=".28" />
                  <circle cx="170" cy="50" r="11" fill="#f6c445" />
                  <rect x="164" y="60" width="12" height="6" rx="2" fill="#e0a82a" />
                  <path d="M70 127a15 15 0 0 1 30 0V152H70Z" fill="#16967c" />
                  <circle cx="85" cy="108" r="11" fill="#fcc9a0" />
                  <path d="M125 119a15 15 0 0 1 30 0V152H125Z" fill="#e5457c" />
                  <circle cx="140" cy="100" r="11" fill="#fcc9a0" />
                  <path d="M185 125a15 15 0 0 1 30 0V152H185Z" fill="#f59a3c" />
                  <circle cx="200" cy="106" r="11" fill="#fcc9a0" />
                  <path d="M240 130a15 15 0 0 1 30 0V152H240Z" fill="#3cc4a4" />
                  <circle cx="255" cy="112" r="11" fill="#fcc9a0" />
                  <path d="M304 152v-30" stroke="#16967c" strokeWidth="3" strokeLinecap="round" />
                  <path d="M304 130c-15 0-23-8-23-21 15 0 23 8 23 21z" fill="#3cc4a4" />
                  <path d="M304 122c13 0 21-7 21-18-13 0-21 7-21 18z" fill="#86d9c1" />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: OUR PRIORITIES                                      */}
      {/* ============================================================== */}
      <section
        id="priorities"
        className="scroll-mt-24 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-16 bg-[#FAF8F5] bg-[radial-gradient(#e6dfd1_1px,transparent_1px)] [background-size:20px_20px] border-b border-[#E8E2D7] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              OUR PRIORITIES
            </h2>

            {/* Editorial Diamond Divider */}
            <div className="flex items-center justify-center gap-4 my-3.5">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
            </div>
          </div>

          {/* Lead Overview Paragraph Card */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-12">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8E2D7] bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-[0_10px_30px_-15px_rgba(4,49,93,0.08)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#04315D] via-[#A21246] to-[#D4520C]" />
              <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                Ignis works to mitigate the educational crisis aggravated by COVID-19 through a tech-enabled hybrid mode of learning, promoting STEM, English and Life Skills education for underprivileged students, through capacity building in low-income schools that cater to these students. 80% of the students that Ignis support are from low-income families that earn less than SGD 8/day, according to a lean data study by Acumen. Till date we have served over 310000 students, primarily from poor and underserved communities, trained over 12000 teachers across more than 1500 schools.
              </p>
            </div>
          </div>

          {/* 4 Priorities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 mb-10 sm:mb-12">
            {/* 1. Low-Cost Schools */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-[0_4px_20px_-6px_rgba(4,49,93,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(162,18,70,0.18)] hover:border-[#F7C6D6]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A21246] to-[#D92D65]" />
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#A21246] to-[#D92D65] text-white shadow-[0_8px_18px_-4px_rgba(162,18,70,0.45)] group-hover:scale-105 transition-transform duration-300">
                    <Building2 className="w-6 h-6" />
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#FFF0F4] text-[#A21246] border border-[#FCD5E2]">
                    Priority 01
                  </span>
                </div>

                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#04315D] mb-3 leading-snug">
                  1. Low-Cost Schools:
                </h3>

                <div className="space-y-3 text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  <p>
                    We have worked with 650 schools (over 200,000 students) in the last 6 years. Our English and Life Skills Lab is a capacity building program that costs SGD 13/student per year. Low-cost-schools, also called affordable private schools are those that charge less than INR 20,000/- (USD 200-300) per year.
                  </p>
                  <p>
                    We are currently developing mobile apps to deliver STEM along with English and life skills to help schools to equip teachers and train students through synchronous hybrid models. This will be offered at SGD 20 per student/year. We aim to scale this to 2.2 million students by 2027. This will help them break the culture of learning by rote and move to skills based participatory learning.
                  </p>
                </div>
              </div>
            </article>

            {/* 2. Teacher Fellowship Program for Government Schools */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-[0_4px_20px_-6px_rgba(4,49,93,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(4,49,93,0.18)] hover:border-[#BFD8F2]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#04315D] to-[#1E6091]" />
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#04315D] to-[#1E6091] text-white shadow-[0_8px_18px_-4px_rgba(4,49,93,0.45)] group-hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#F0F5FA] text-[#04315D] border border-[#D0E1F3]">
                    Priority 02
                  </span>
                </div>

                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#04315D] mb-3 leading-snug">
                  2. Teacher Fellowship Program for Government Schools:
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  This has been scaled to 32 schools by 2020. This is supported by grants from funds like H T Parekh Foundation. This community based intervention (at SGD 75 per student/year) will be scaled to 920 schools by 2027. Ignis is developing a separate division to explore more partnerships to scale this.
                </p>
              </div>
            </article>

            {/* 3. Non Profit and Government Partnerships */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-[0_4px_20px_-6px_rgba(4,49,93,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(13,122,102,0.18)] hover:border-[#BCE8DA]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0D7A66] to-[#35B79A]" />
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#0D7A66] to-[#35B79A] text-white shadow-[0_8px_18px_-4px_rgba(13,122,102,0.45)] group-hover:scale-105 transition-transform duration-300">
                    <HeartHandshake className="w-6 h-6" />
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#EFF9F6] text-[#0D7A66] border border-[#C5EBDF]">
                    Priority 03
                  </span>
                </div>

                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#04315D] mb-3 leading-snug">
                  3. Non Profit and Government Partnerships:
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  Ignis worked with the state of Andhra Pradesh to build a similar hybrid model. We have been working with United Way of Hyderabad and Delhi, and Deshpande Foundation to scale similar models.
                </p>
              </div>
            </article>

            {/* 4. Low-Income Learners */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-[0_4px_20px_-6px_rgba(212,82,12,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(212,82,12,0.18)] hover:border-[#FAD2B8]">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4520C] to-[#F28C2B]" />
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#D4520C] to-[#F28C2B] text-white shadow-[0_8px_18px_-4px_rgba(212,82,12,0.45)] group-hover:scale-105 transition-transform duration-300">
                    <Smartphone className="w-6 h-6" />
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-[#FFF5EE] text-[#D4520C] border border-[#FBD9BD]">
                    Priority 04
                  </span>
                </div>

                <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#04315D] mb-3 leading-snug">
                  4. Low-Income Learners:
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  We are piloting a B2C model of training low-income learners from schools, colleges and also youth. This affordable solution will be scaled once the apps are developed.
                </p>
              </div>
            </article>
          </div>

          {/* Supporting Priorities Text Blocks & SDGs */}
          <div className="max-w-4xl mx-auto space-y-5">
            {/* Pedagogy & Environment Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Box 1: Activity-based & Conceptual Learning */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E8E2D7] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#04315D]/10 text-[#04315D]">
                    <BookOpen className="w-4 h-4" />
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#04315D]/20 to-transparent" />
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  We focus on activity-based learning and encourage group projects, classroom interactions and adopt a participatory approach to learning. We prioritize conceptual understanding rather than rote-based learning. We ensure personal attention for all students. We believe that a culturally relevant purposeful education that prioritizes meta-learning skills and critical thinking will provide students from hitherto deprived communities with the required tools to pursue higher education and make informed choices about their careers. This will ultimately help them break the cycle of intergenerational poverty.
                </p>
              </div>

              {/* Box 2: Environmental Awareness & Nutrition */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E8E2D7] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#0D7A66]/10 text-[#0D7A66]">
                    <Leaf className="w-4 h-4" />
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#0D7A66]/20 to-transparent" />
                </div>
                <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                  Awareness of the environment and responsible social behaviour is part of the integrated life skills component of our engagements. For instance, we discourage the use of single-use plastics and target at least a 30% reduction in its use during the first year of engagement. Since we work with predominantly poor communities, we also focus on proper nutrition and hygiene practices.
                </p>
              </div>
            </div>

            {/* UN Sustainable Development Goals Showcase */}
            <div className="rounded-2xl border border-[#E8E2D7] bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#04315D] text-white shadow-sm">
                  <Globe2 className="w-4 h-4" />
                </span>
                <p className="text-sm sm:text-[14.5px] font-semibold text-[#04315D]">
                  We address the following UN mandated Sustainable Development Goals (SDGs):
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {/* SDG 4 */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF0F2] border border-[#FCD2D8] text-[#C5192D] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#C5192D]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">Quality Education</span>
                </div>

                {/* SDG 5 */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF2EE] border border-[#FDD9CF] text-[#FF3A21] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF3A21]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">Gender Equality</span>
                </div>

                {/* SDG 10 */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FDF0F6] border border-[#F9CFE3] text-[#DD1367] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#DD1367]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">Reduced Inequality</span>
                </div>

                {/* SDG 1 */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFF0F2] border border-[#FCD2D8] text-[#E5243B] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#E5243B]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">No Poverty</span>
                </div>

                {/* SDG 17 */}
                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F0F5FA] border border-[#D0E1F3] text-[#19486A] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#19486A]" />
                  <span className="text-xs sm:text-[13px] font-semibold tracking-wide">Partnerships for the Goals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: OUR STORY                                           */}
      {/* ============================================================== */}
      <section
        id="story"
        className="scroll-mt-24 pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-14 lg:pb-18 bg-white border-b border-[#E8E2D7] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              OUR STORY
            </h2>

            {/* Editorial Diamond Divider */}
            <div className="flex items-center justify-center gap-4 my-3.5">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="w-full relative rounded-2xl sm:rounded-3xl border border-[#E8E2D7] bg-white p-2 sm:p-2.5 shadow-xl shadow-[#04315D]/6 overflow-hidden">
                <div className="relative aspect-[1020/593] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#07223F]">
                  <Image
                    src="/images/about/our_story.jpg"
                    alt="What is our Story?"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h4 className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-[#04315D] mb-2.5 leading-snug">
                What is our Story?
              </h4>
              <p className="text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal mb-5">
                How did two passionate educationists start a social enterprise that ensured 200,000 children and 10,000 teachers across India?
              </p>
              <div>
                <a
                  href="https://www.igniscareers.com/ignis-story/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#A21246] hover:bg-[#860C38] text-white text-[13px] sm:text-[14px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Read More
                </a>
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
