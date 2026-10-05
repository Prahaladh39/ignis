"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "The Ignis Model", href: "#model" },
    { label: "Impact", href: "#impact" },
    { label: "Programmes", href: "#programmes" },
    { label: "Research & Evidence", href: "#evidence" },
    { label: "Technology", href: "#technology" },
    { label: "Work With Us", href: "#work-with-us" },
  ];

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

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-[#2D3748]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#A21246] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A21246] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#partner"
            className="inline-flex items-center gap-2 bg-[#A21246] hover:bg-[#860E3A] text-white text-[14px] font-medium px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 group"
          >
            <span>Partner with Ignis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#04315D] hover:bg-[#EAE4D7] rounded-lg transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F5EF] border-b border-[#E2DDD5] px-6 py-6 animate-fade-in shadow-xl">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#04315D]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#A21246] transition-colors border-b border-[#E8E2D7]/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#partner"
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
