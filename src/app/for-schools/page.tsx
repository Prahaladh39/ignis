import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IgnisInMediaMarquee from "@/components/IgnisInMediaMarquee";
import SchoolSectionBackdrop from "@/components/SchoolSectionBackdrop";

export const metadata: Metadata = {
  title: "For Schools | English and Life Skills Lab (ELSL) | Ignis Careers",
  description:
    "Partner with Ignis to build a stronger learning culture in your school: English and Life Skills Lab (ELSL), STEM Labs, and Ignis Career Awareness Program.",
};

export default function ForSchoolsPage() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar />

      {/* ============================================================== */}
      {/* TOP POINTY NAVIGATION BAR: EXACT 3 FLOATING BUTTONS (MATCHING CSR SUPPORT) */}
      {/* ============================================================== */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E2D7] py-3 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <nav
            aria-label="School Programme Navigation"
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 lg:gap-4 max-w-4xl mx-auto w-full items-stretch"
          >
            <a
              href="#elsl"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[58px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                English and Life Skills Lab (ELSL)
              </span>
            </a>

            <a
              href="#stem-labs"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[58px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                STEM Labs
              </span>
            </a>

            <a
              href="#career-awareness"
              className="group flex items-center justify-center text-center p-2 sm:p-2.5 lg:p-3 rounded-xl sm:rounded-2xl bg-[#A21246] hover:bg-[#860C38] text-white border border-[#A21246]/30 transition-all duration-300 shadow-[0_6px_16px_rgba(162,18,70,0.28)] hover:shadow-[0_10px_24px_rgba(162,18,70,0.45)] hover:-translate-y-1 active:translate-y-0 min-h-[48px] sm:min-h-[58px]"
            >
              <span className="text-[12px] sm:text-[13.5px] font-semibold leading-tight">
                Ignis Career Awareness Program
              </span>
            </a>
          </nav>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION: IGNIS IN MEDIA (MARQUEE SCROLLER)                     */}
      {/* ============================================================== */}
      <IgnisInMediaMarquee className="!pb-3 sm:!pb-5 !border-b-0" />

      {/* ============================================================== */}
      {/* SECTION: ENGLISH AND LIFE SKILLS LAB (ELSL)                    */}
      {/* ============================================================== */}
      <SchoolSectionBackdrop id="elsl" variant="elsl">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10">
          {/* Centered Heading: Matched with Impact Page typography */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              English and Life Skills Lab (ELSL)
            </h2>

            {/* Editorial Diamond Divider */}
            <div className="flex items-center justify-center gap-4 my-3.5">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-3 text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                <p>
                  This is Ignis Careers&apos; flagship product. It is a comprehensive school partnership aimed at imparting English and Life Skills to students and creating a culture of joyful learning in schools. The integrated Life Skills component covers <strong className="text-[#04315D] font-semibold">Problem Solving, Decision Making, Creative Thinking, Critical Thinking, Self Awareness, Empathy, Interpersonal Relationship, Good Communication, and Emotional Balance</strong>, as recommended by WHO and UNICEF.
                </p>

                <p>
                  The English language component focuses on actual language use, eschewing theoretical, rules-based instruction for a participatory application based approach to language learning. Students are encouraged to speak, make mistakes and learn from their mistakes to build confidence.
                </p>
              </div>
            </div>

            {/* Right Image Column: Clean with No Background */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full relative max-w-[500px]">
                <Image
                  src="/images/prt.png"
                  alt="English and Life Skills Lab (ELSL) Key Features"
                  width={576}
                  height={336}
                  className="w-full h-auto object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Centered Continuation Text & Videos */}
          <div className="mt-4 sm:mt-6 lg:mt-8">
            {/* Centered Descriptive Text */}
            <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8">
              <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                The year-long support programme includes 42 hours of teacher training and curriculum orientation. The training focuses on helping teachers adopt a participatory, learner-centred approach to education that focuses on understanding and internalising concepts than memory.
              </p>
              <p className="text-[13px] sm:text-[14px] text-[#556987] leading-relaxed font-normal">
                ELSL comprises 8 levels of a level appropriate and culturally relevant curriculum for Class 2 to Class 10. The carefully created lessons and activities
              </p>
            </div>

            {/* 2 YouTube Videos in Responsive 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-md hover:shadow-xl transition-all duration-300 bg-[#07223F] hover:-translate-y-1">
                <iframe
                  src="https://www.youtube.com/embed/7nyQzSlvT18?rel=0&modestbranding=1"
                  title="ELSL Classroom Experience - Ignis Careers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#E8E2D7] shadow-md hover:shadow-xl transition-all duration-300 bg-[#07223F] hover:-translate-y-1">
                <iframe
                  src="https://www.youtube.com/embed/lqIuYYqgZW4?rel=0&modestbranding=1"
                  title="English and Life Skills Lab in Action - Ignis Careers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </SchoolSectionBackdrop>

      {/* ============================================================== */}
      {/* SECTION: STEM LABS                                             */}
      {/* ============================================================== */}
      <SchoolSectionBackdrop id="stem-labs" variant="stem">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8 lg:pb-10">
          {/* Centered Heading: Matched with Impact Page typography */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              STEM Labs
            </h2>

            {/* Editorial Diamond Divider */}
            <div className="flex items-center justify-center gap-4 my-3.5">
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
              <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
              <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-3 text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                <p>
                  An outcome of the post-COVID 19 milieu is the realisation that the future of education lies in a hybrid model that complements classroom learning with purposeful online engagements. Ignis has developed a STEM curriculum for students from class 6 to class 10 that prioritizes cognitive development over memorization.
                </p>

                <p>
                  The activity-based curriculum encourages students to internalize the basic concepts and to derive understanding through experiment and observation. The program encourages critical enquiry and discovery through participatory projects and also complementary AV aids.
                </p>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full relative rounded-2xl sm:rounded-3xl border border-[#E8E2D7] bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 shadow-xl shadow-[#04315D]/6 transition-all duration-300 hover:shadow-2xl hover:border-[#0D5C4D]/40 overflow-hidden">
                <div className="relative aspect-[1040/615] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#07223F]">
                  <Image
                    src="/images/labs.jpg"
                    alt="Ignis STEM Labs Classroom Engagement with AV Aids"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SchoolSectionBackdrop>

      {/* ============================================================== */}
      {/* SECTION: IGNIS CAREER AWARENESS PROGRAM                        */}
      {/* ============================================================== */}
      <SchoolSectionBackdrop id="career-awareness" variant="careers">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 lg:pb-18">
          {/* Centered Heading: Matched with Impact Page typography */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="font-serif text-[26px] sm:text-[34px] lg:text-[40px] text-[#04315D] font-normal tracking-tight leading-[1.15]">
              Ignis Career Awareness Program
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
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full relative rounded-2xl sm:rounded-3xl border border-[#E8E2D7] bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 shadow-xl shadow-[#04315D]/6 transition-all duration-300 hover:shadow-2xl hover:border-[#B45309]/40 overflow-hidden">
                <div className="relative aspect-[1280/820] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#07223F]">
                  <Image
                    src="/images/Picture1.jpg"
                    alt="Students showcasing career aspiration charts in Ignis Career Awareness Program"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="space-y-3 text-sm sm:text-[14.5px] lg:text-[15px] text-[#556987] leading-relaxed font-normal">
                <p>
                  The career awareness program is part of our commitment towards a holistic approach to education. Students from vulnerable communities, mostly first-generation learners, are often at a loss about the career choices available, and the steps required to achieve their career goals.
                </p>

                <p>
                  Ignis’ offers a range of customised programs ranging from a one-day introductory engagement to a comprehensive month-long program that focuses on guiding the beneficiaries through a path of self-discovery of their interests, talents, and their intellectual and emotional quotients to narrow down their career options. The program also guides them on seeking and availing scholarships and other government aids. The more comprehensive engagement also involves a parent counselling session to help parents understand their child’s interests and achievements and provide them with the right encouragement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SchoolSectionBackdrop>

      {/* Footer */}
      <Footer />
    </main>
  );
}
