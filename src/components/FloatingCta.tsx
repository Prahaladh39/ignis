"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear smoothly once the user scrolls past the hero section (> 350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="sm:hidden fixed bottom-5 right-5 z-40 animate-in fade-in slide-in-from-bottom-3 duration-300"
    >
      <Link
        href="#work-with-us"
        className="group inline-flex items-center gap-2 bg-[#A21246] hover:bg-[#850D37] text-white text-[13px] sm:text-[14px] font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-[#A21246]/25 hover:shadow-xl hover:shadow-[#A21246]/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-white/20"
      >
        <Handshake className="w-4 h-4 text-white/90" />
        <span>Partner with Us</span>
        <ArrowRight className="w-3.5 h-3.5 opacity-80 transition-transform group-hover:translate-x-1" />
      </Link>
    </aside>
  );
}
