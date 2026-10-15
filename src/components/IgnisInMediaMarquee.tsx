"use client";

import Image from "next/image";
import { Newspaper } from "lucide-react";

export interface MediaOutlet {
  name: string;
  logo?: string;
}

const DEFAULT_MEDIA: MediaOutlet[] = [
  {
    name: "Business Standard",
    logo: "/images/media/lg-1.jpg",
  },
  {
    name: "BW Education",
    logo: "/images/media/lg-2.jpg",
  },
  {
    name: "The Economic Times",
    logo: "/images/media/lg-3.jpg",
  },
  {
    name: "EdTechReview",
    logo: "/images/media/lg-4.jpg",
  },
  {
    name: "Inc42",
    logo: "/images/media/lg-5.jpg",
  },
  {
    name: "The Hindu BusinessLine",
    logo: "/images/media/lg-7.jpg",
  },
  {
    name: "Onmanorama",
    logo: "/images/media/lg-8.jpg",
  },
  {
    name: "Telangana Today",
    logo: "/images/media/lg-9.jpg",
  },
  {
    name: "YourStory",
    logo: "/images/media/lg-10.jpg",
  },
  {
    name: "ET NOW",
    logo: "/images/partners/lg-11.jpg",
  },
  {
    name: "ETV Telangana",
    logo: "/images/media/lg-12.jpg",
  },
  {
    name: "CNBC TV18",
    logo: "/images/media/lg-13.jpg",
  },
];

export default function IgnisInMediaMarquee({
  mediaList = DEFAULT_MEDIA,
}: {
  mediaList?: MediaOutlet[];
}) {
  const marqueeItems = [...mediaList, ...mediaList];

  return (
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden border-b border-[#E8E2D7]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#04315D]/10 border border-[#04315D]/20 text-xs font-semibold tracking-wider text-[#04315D] uppercase mb-4">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Press & Recognition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#04315D] font-normal tracking-tight">
            Ignis in Media
          </h2>

          {/* Editorial Diamond Divider */}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#A21246]/40" />
            <div className="w-2 h-2 rotate-45 bg-[#A21246]" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#A21246]/40" />
          </div>

          <p className="text-[#556987] text-sm sm:text-[15px] leading-relaxed font-normal">
            Covered by leading national and regional publications for transforming grassroots education and teacher capability.
          </p>
        </div>
      </div>

      {/* Marquee Track Container with Left & Right Gradient Fade */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none" />

        {/* Moving Marquee Strip - Completely transparent standalone logos */}
        <div className="animate-marquee flex items-center gap-14 sm:gap-20 px-6">
          {marqueeItems.map((outlet, index) => (
            <div
              key={`${outlet.name}-${index}`}
              className="group flex-shrink-0 flex items-center justify-center px-4 py-2 transition-all duration-300"
            >
              {outlet.logo ? (
                <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={outlet.logo}
                    alt={outlet.name}
                    width={260}
                    height={90}
                    className="max-h-[60px] sm:max-h-[75px] max-w-[200px] sm:max-w-[260px] w-auto h-auto object-contain transition-opacity duration-300 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                  />
                </div>
              ) : (
                <div className="px-6 py-3 text-center border-b border-transparent group-hover:border-[#A21246] transition-colors">
                  <span className="font-serif font-bold text-lg sm:text-2xl tracking-tight text-[#04315D] group-hover:text-[#A21246] transition-colors">
                    {outlet.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
