"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";

interface SubSection {
  title: string;
  href: string;
  tag?: string;
}

interface NavItem {
  label: string;
  href: string;
  sections?: SubSection[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Impact",
    href: "/impact",
    sections: [
      { title: "01 — Impact at Scale", href: "/impact#impact-at-scale", tag: "604K+ Learners" },
      { title: "02 — Reach × Depth", href: "/impact#reach-depth", tag: "80–120 Hrs/Yr" },
      { title: "03 — Capital Efficiency", href: "/impact#capital-efficiency", tag: "$450K Scale" },
      { title: "04 — How Impact is Created", href: "/impact#how-impact-is-created", tag: "5-Step Cycle" },
      { title: "05 — From Reach to Outcomes", href: "/impact#reach-to-outcomes", tag: "4 Dimensions" },
      { title: "06 — The Next Stage", href: "/impact#next-stage", tag: "Next 1M" },
    ],
  },
  {
    label: "CSR Support",
    href: "/csr-support",
    sections: [
      { title: "Rural Teacher Fellows Programme", href: "/csr-support#rural-teacher-fellows", tag: "Fellowship" },
      { title: "Research and Capacity Building", href: "/csr-support#research-capacity-building", tag: "Pedagogy" },
      { title: "Life Skills for Girls", href: "/csr-support#life-skills-girls", tag: "Ages 13–18" },
      { title: "Employment Enhancement for Youth", href: "/csr-support#youth-employment-programme", tag: "Workforce" },
      { title: "Teacher Training for Participatory Learning", href: "/csr-support#teacher-training-participatory-learning", tag: "310K+ Kids" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F8F5EF]/95 backdrop-blur-md border-b border-[#E8E2D7] transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group py-2">
          <Image
            src="/images/ignis_logo_clean.png"
            alt="Ignis"
            width={120}
            height={56}
            priority
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />
        </Link>

        {/* Desktop Navigation Links with Clean Hover Dropdowns */}
        <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-[#2D3748]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group/nav py-4">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1.5 hover:text-[#A21246] transition-colors py-1 group-hover/nav:text-[#A21246]"
              >
                <span>{item.label}</span>
                {item.sections && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover/nav:rotate-180 group-hover/nav:opacity-100" />
                )}
              </Link>

              {/* Hover Dropdown Menu */}
              {item.sections && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-200 ease-out z-50">
                  <div className="w-[340px] bg-white rounded-2xl shadow-xl shadow-[#04315D]/10 border border-[#E8E2D7] p-2.5">
                    {/* Header bar inside dropdown */}
                    <div className="px-3 py-2 border-b border-[#E8E2D7]/70 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A21246]">
                        {item.label} Sections
                      </span>
                      <Link
                        href={item.href}
                        className="text-[11px] font-medium text-[#04315D] hover:text-[#A21246] transition-colors inline-flex items-center gap-1"
                      >
                        <span>View Page</span>
                        <span>→</span>
                      </Link>
                    </div>

                    {/* Section Links */}
                    <div className="flex flex-col gap-1">
                      {item.sections.map((sec) => (
                        <Link
                          key={sec.title}
                          href={sec.href}
                          className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-[#FAF8F5] group/sec transition-colors text-left"
                        >
                          <div className="flex flex-col">
                            <span className="text-[13px] font-medium text-[#04315D] group-hover/sec:text-[#A21246] transition-colors leading-snug">
                              {sec.title}
                            </span>
                          </div>
                          {sec.tag && (
                            <span className="text-[10px] font-mono text-[#64748B] group-hover/sec:text-[#A21246] bg-[#F2EDE2]/70 group-hover/sec:bg-[#A21246]/10 px-2 py-0.5 rounded font-semibold transition-colors shrink-0 ml-2">
                              {sec.tag}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Button (Desktop & Tablets) */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#work-with-us"
            className="inline-flex items-center gap-2 bg-[#A21246] hover:bg-[#860E3A] text-white text-[14px] font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group"
          >
            <span>Partner with Ignis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#04315D] hover:bg-[#EAE4D7] rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#E2DDD5] px-6 py-6 animate-fade-in shadow-xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-3 text-base font-medium text-[#04315D]">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-[#E8E2D7]/60 pb-2">
                <div className="flex items-center justify-between py-1.5">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-[#A21246] transition-colors font-medium text-[15.5px]"
                  >
                    {item.label}
                  </Link>
                  {item.sections && (
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="p-1.5 text-[#64748B] hover:text-[#A21246]"
                      aria-label={`Toggle ${item.label} sections`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeMobileDropdown === item.label ? "rotate-180 text-[#A21246]" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Expanded Section Links */}
                {item.sections && activeMobileDropdown === item.label && (
                  <div className="pl-3 pr-1 py-2 flex flex-col gap-1.5 bg-white/70 rounded-xl my-1 border border-[#E8E2D7]">
                    {item.sections.map((sec) => (
                      <Link
                        key={sec.title}
                        href={sec.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between text-xs py-1.5 text-[#556987] hover:text-[#A21246]"
                      >
                        <span className="leading-snug">{sec.title}</span>
                        {sec.tag && (
                          <span className="text-[9.5px] font-mono bg-[#E8E2D7]/70 text-[#04315D] px-1.5 py-0.5 rounded shrink-0 ml-2">
                            {sec.tag}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3">
              <Link
                href="#work-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center gap-2 bg-[#A21246] hover:bg-[#860E3A] text-white text-[15px] font-medium px-6 py-3 rounded-full shadow transition-colors"
              >
                <span>Partner with Ignis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
