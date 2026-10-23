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
    label: "Home",
    href: "/",
    sections: [
      { title: "Our Journey", href: "/#metrics-reach", tag: "600K+ Kids" },
      { title: "Let’s Talk", href: "/#work-with-us", tag: "Collaborate" },
      { title: "The Ignis Difference", href: "/#ignis-difference", tag: "Integrated" },
      { title: "Active Learning Model", href: "/#model", tag: "6-Step Cycle" },
      { title: "Programmes", href: "/#programmes", tag: "Curricula" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
    sections: [
      { title: "Impact at Scale", href: "/impact#impact-at-scale", tag: "604K+ Learners" },
      { title: "How Impact is Created", href: "/impact#how-impact-is-created", tag: "5-Step Cycle" },
      { title: "From Reach to Outcomes", href: "/impact#reach-to-outcomes", tag: "5 Pillars" },
      { title: "Reach × Depth", href: "/impact#reach-depth", tag: "80–120 Hrs/Yr" },
      { title: "Capital Efficiency", href: "/impact#capital-efficiency", tag: "$450K Scale" },
      { title: "The Next Stage", href: "/impact#next-stage", tag: "Next 1M" },
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

        {/* Center Floating Partner Button for Mobile & Tablets */}
        <div className="flex lg:hidden items-center justify-center">
          <Link
            href="#work-with-us"
            className="animate-cta-float inline-flex items-center gap-1.5 bg-[#A21246] hover:bg-[#860E3A] text-white text-[11.5px] xs:text-xs sm:text-[13px] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-md shadow-[#A21246]/25 hover:shadow-lg transition-all duration-200 border border-white/20 active:translate-y-0"
          >
            <span>Partner with Us</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Right CTA Button & Social Icons (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#work-with-us"
            className="inline-flex items-center gap-2 bg-[#A21246] hover:bg-[#860E3A] text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 group"
          >
            <span>Partner with Ignis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          {/* Social Media Links with Official Brand Colors (Right of Button) */}
          <div className="flex items-center gap-1.5 border-l border-[#E8E2D7] pl-3.5">
            <a
              href="https://www.facebook.com/IgnisCareers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#1877F2]/10 transition-all duration-200"
              aria-label="Facebook"
            >
              <svg className="w-[18px] h-[18px] text-[#1877F2] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ignis_careers?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#E4405F]/10 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="nav-ig-radial" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="10%" stopColor="#fdf497" />
                    <stop offset="50%" stopColor="#fd5949" />
                    <stop offset="68%" stopColor="#d6249f" />
                    <stop offset="100%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect width="24" height="24" rx="6.5" fill="url(#nav-ig-radial)" />
                <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.7" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ignis-careers/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#0A66C2]/10 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-[18px] h-[18px] text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UC2Jp1jcGqAK-alzwvJbOLhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#FF0000]/10 transition-all duration-200"
              aria-label="YouTube"
            >
              <svg className="w-[19px] h-[19px] text-[#FF0000] fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
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

              {/* Mobile Social Links with Official Brand Colors */}
              <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-[#E8E2D7]">
                <a
                  href="https://www.facebook.com/IgnisCareers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-[#E8E2D7] shadow-xs hover:scale-105 transition-transform"
                  aria-label="Facebook"
                >
                  <svg className="w-[18px] h-[18px] text-[#1877F2] fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ignis_careers?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-[#E8E2D7] shadow-xs hover:scale-105 transition-transform"
                  aria-label="Instagram"
                >
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24">
                    <defs>
                      <radialGradient id="mob-nav-ig-radial" cx="30%" cy="107%" r="150%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="10%" stopColor="#fdf497" />
                        <stop offset="50%" stopColor="#fd5949" />
                        <stop offset="68%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect width="24" height="24" rx="6.5" fill="url(#mob-nav-ig-radial)" />
                    <rect x="4.5" y="4.5" width="15" height="15" rx="4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3.7" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
                    <circle cx="16.5" cy="7.5" r="1.1" fill="#FFFFFF" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ignis-careers/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-[#E8E2D7] shadow-xs hover:scale-105 transition-transform"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[18px] h-[18px] text-[#0A66C2] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2Jp1jcGqAK-alzwvJbOLhQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white border border-[#E8E2D7] shadow-xs hover:scale-105 transition-transform"
                  aria-label="YouTube"
                >
                  <svg className="w-[19px] h-[19px] text-[#FF0000] fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
