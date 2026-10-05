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
            
            {/* Eyebrow / Tagline */}
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
                Better Learning. Brighter Futures.
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-[36px] sm:text-[44px] md:text-[50px] lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal mb-5 sm:mb-6">
              Learning that gives young people the{" "}
              <span className="text-[#AF1B49] italic font-serif">
                confidence to act.
              </span>
            </h1>

            {/* Sub-head Paragraph */}
            <p className="text-[16px] sm:text-[17.5px] leading-[1.65] text-[#334155] max-w-[520px] font-normal mb-8 sm:mb-9">
              Ignis integrates Life Skills with English, Science and Maths to help young learners build knowledge, confidence and agency to make decisions, solve problems, communicate and participate in the world around them.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="#explore"
                className="inline-flex items-center justify-center gap-2.5 bg-[#A21246] hover:bg-[#860E3A] text-white text-[15px] font-medium px-7 sm:px-8 py-3.5 rounded-full shadow-md shadow-[#A21246]/15 hover:shadow-lg hover:shadow-[#A21246]/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Ignis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#work-with-us"
                className="inline-flex items-center justify-center gap-2.5 border border-[#04315D]/30 hover:border-[#04315D] bg-transparent hover:bg-[#04315D]/5 text-[#04315D] text-[15px] font-medium px-7 sm:px-8 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Work with Ignis</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </Link>
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