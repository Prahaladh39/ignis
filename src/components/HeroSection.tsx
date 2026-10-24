import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#F8F5EF] border-b border-[#E2DDD5] overflow-hidden flex flex-col">
      
      {/* Top Hero Content Area (Text on Left, Full-Bleed Photo on Right) */}
      <div className="relative w-full flex-1">
        
        {/* Full-Bleed Photograph on Desktop: Generated image with built-in left fade */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-full pointer-events-none z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-desktop.jpg"
              alt="Ignis learner in classroom actively engaged in participatory learning"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
            />
            {/* Cream overlay: solid on the left behind text, fading into photo */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EF] from-40% via-[#F8F5EF]/80 via-50% to-transparent to-65% pointer-events-none" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-18 lg:pb-24">
          <div className="w-full lg:max-w-[540px] xl:max-w-[600px] flex flex-col justify-center">
            
            {/* Eyebrow / Tagline: Explicitly highlight Non-Profit & Education Partnerships */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                Partnering With Non-Profits, CSRs &amp; Schools
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[50px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal mb-5 sm:mb-6">
              Learning that gives young people the{" "}
              <span className="text-[#AF1B49] italic font-serif">
                confidence to act.
              </span>
            </h1>

            {/* Sub-head Paragraph: Clearly articulates what Ignis is + collaboration with Non-Profits & NGOs */}
            <p className="text-sm sm:text-[15px] leading-relaxed text-[#4A5568] max-w-[540px] font-normal mb-8 sm:mb-9">
              <strong className="text-[#04315D] font-semibold">Ignis Careers</strong> is an education and life skills organisation. We integrate Life Skills into English, Science, and Maths — co-designing and scaling participatory learning programmes alongside non-profit organisations, CSR foundations, and government school systems to build real agency, voice, and problem-solving capabilities in underserved learners.
            </p>

            {/* Single CTA Button */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8">
              <Link
                href="#work-with-us"
                className="inline-flex items-center justify-center gap-2.5 bg-[#A21246] hover:bg-[#860E3A] text-white text-[15px] font-semibold px-7 sm:px-8 py-3.5 rounded-xl shadow-md shadow-[#A21246]/15 hover:shadow-lg hover:shadow-[#A21246]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Partner with Ignis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Overlapping Avatar Stack & Impact Proof (Mobile S & M Optimized) */}
            <div className="pt-5 border-t border-[#E8E2D7]/80 flex items-center gap-3 sm:gap-3.5">
              {/* Overlapping circular partner logos */}
              <div className="flex items-center -space-x-2.5 shrink-0 py-0.5">
                <div
                  title="Educate Girls"
                  className="inline-block w-9 h-9 xs:w-10 xs:h-10 sm:w-[42px] sm:h-[42px] rounded-full ring-2 ring-black/25 border border-black/15 bg-white shadow-xs overflow-hidden relative"
                >
                  <Image
                    src="/images/partners/Picture2.png"
                    alt="Educate Girls"
                    fill
                    sizes="42px"
                    className="object-contain p-1"
                  />
                </div>

                <div
                  title="eVidyaloka"
                  className="inline-block w-9 h-9 xs:w-10 xs:h-10 sm:w-[42px] sm:h-[42px] rounded-full ring-2 ring-black/25 border border-black/15 bg-white shadow-xs overflow-hidden relative"
                >
                  <Image
                    src="/images/partners/Picture1.png"
                    alt="eVidyaloka"
                    fill
                    sizes="42px"
                    className="object-contain p-1"
                  />
                </div>

                <div
                  title="Deshpande Foundation"
                  className="inline-block w-9 h-9 xs:w-10 xs:h-10 sm:w-[42px] sm:h-[42px] rounded-full ring-2 ring-black/25 border border-black/15 bg-white shadow-xs overflow-hidden relative"
                >
                  <Image
                    src="/images/partners/ab-3-1.jpg"
                    alt="Deshpande Foundation"
                    fill
                    sizes="42px"
                    className="object-contain p-1"
                  />
                </div>

                <div
                  title="Acumen"
                  className="inline-block w-9 h-9 xs:w-10 xs:h-10 sm:w-[42px] sm:h-[42px] rounded-full ring-2 ring-black/25 border border-black/15 bg-white shadow-xs overflow-hidden relative"
                >
                  <Image
                    src="/images/partners/ab-1-3.jpg"
                    alt="Acumen"
                    fill
                    sizes="42px"
                    className="object-contain p-1"
                  />
                </div>

                <div
                  title="AP Skill Development"
                  className="inline-block w-9 h-9 xs:w-10 xs:h-10 sm:w-[42px] sm:h-[42px] rounded-full ring-2 ring-black/25 border border-black/15 bg-white shadow-xs overflow-hidden relative"
                >
                  <Image
                    src="/images/partners/ab-2-1.jpg"
                    alt="APSSDC"
                    fill
                    sizes="42px"
                    className="object-contain p-1"
                  />
                </div>
              </div>

              {/* Text highlighting non-profit partnerships - clean responsive stack */}
              <div className="flex-1 min-w-0 text-[12.5px] xs:text-[13px] sm:text-[14px] leading-[1.3] text-[#04315D]">
                <span className="font-bold text-[#A21246] block xs:inline">
                  Partnered with leading{" "}
                </span>
                <span className="font-semibold text-[#04315D]">
                  non-profit organisations across India
                </span>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Photo (renders directly below copy with clean rounded styling) */}
          <div className="lg:hidden mt-8 sm:mt-10 w-full relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-sm border border-[#E8E2D7]">
            <Image
              src="/images/hero-student-balanced.png"
              alt="Ignis learner in classroom actively engaged in participatory learning"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>

    </section>
  );
}