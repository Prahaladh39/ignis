"use client";

import Link from "next/link";
import {
  MessageSquareQuote,
  Atom,
  GraduationCap,
  Network,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PROGRAMMES_DATA } from "@/data/programmes";

const ICON_MAP = {
  message: MessageSquareQuote,
  atom: Atom,
  grad: GraduationCap,
  network: Network,
  spark: Sparkles,
};

export default function ProgrammesSection() {
  return (
    <section
      id="programmes"
      className="relative w-full bg-[#FAF8F5] border-b border-[#E8E2D7] pt-10 sm:pt-14 pb-6 sm:pb-8 lg:pb-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        {/* Section Header: Clean & Authoritative */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Programmes
            </span>
          </div>

          <h2 className="font-serif text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.12] tracking-[-0.02em] text-[#04315D] font-normal">
            What We Build
          </h2>
        </div>

        {/* 4 Large Clean Cards (Exact Client Content) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {PROGRAMMES_DATA.map((prog) => {
            const IconComponent = ICON_MAP[prog.iconName];

            return (
              <div
                key={prog.slug}
                className="group relative bg-white border border-[#E8E2D7] rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[#04315D]/40"
              >
                {/* Top Accent Color Line */}
                <div
                  className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-all group-hover:left-4 group-hover:right-4"
                  style={{ backgroundColor: prog.brandColor }}
                />

                {/* Card Top: Number, Icon, Title & Client Description */}
                <div>
                  <div className="flex items-center justify-between mb-6 pt-1">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#94A3B8]">
                      {prog.num}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${prog.badgeBg}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title (Strict Client Copy) */}
                  <h3 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#04315D] mb-4 leading-snug">
                    {prog.title}
                  </h3>

                  {/* Description (Strict Client Copy Only) */}
                  <p className="text-[15px] sm:text-[16px] text-[#475569] leading-[1.7] font-normal mb-8">
                    {prog.description}
                  </p>
                </div>

                {/* Card Bottom: "Learn more" leading to new page */}
                <div className="pt-5 border-t border-[#E8E2D7]/80">
                  <Link
                    href={`/programmes/${prog.slug}`}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold transition-all group/link hover:gap-3"
                    style={{ color: prog.brandColor }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
