"use client";

import { useRef, ReactNode } from "react";
import {
  BookOpen,
  MessageSquareQuote,
  Languages,
  Pencil,
  Sparkles,
  Atom,
  Compass,
  Lightbulb,
  GraduationCap,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

interface SchoolSectionBackdropProps {
  id: string;
  variant: "elsl" | "stem" | "careers";
  className?: string;
  children: ReactNode;
}

export default function SchoolSectionBackdrop({
  id,
  variant,
  className = "",
  children,
}: SchoolSectionBackdropProps) {
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      id={id}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden scroll-mt-24 transition-colors duration-300 ${
        variant === "elsl"
          ? "bg-[#FCFAF6] border-b border-[#E8E2D7]"
          : variant === "stem"
          ? "bg-[#F7FAF8] border-b border-[#E0EBE5]"
          : "bg-[#FBF9F5] border-b border-[#E8E2D7]"
      } ${className}`}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      {/* ============================================================== */}
      {/* 1. TEXTURE GRID PATTERN                                        */}
      {/* ============================================================== */}
      {variant === "elsl" && (
        <>
          {/* Lined Notebook / Dotted Parchment Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(4, 49, 93, 0.08) 1.2px, transparent 1.2px), linear-gradient(to bottom, transparent 31px, rgba(162, 18, 70, 0.035) 32px)",
              backgroundSize: "24px 24px, 100% 32px",
            }}
            aria-hidden="true"
          />
          {/* Subtle Red Margin Line on the left edge (school notebook look) */}
          <div
            className="hidden sm:block absolute left-6 sm:left-10 lg:left-16 top-0 bottom-0 w-[1.5px] bg-[#A21246]/10 pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      {variant === "stem" && (
        <>
          {/* Blueprint / Graph Paper Grid Pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(13, 92, 77, 0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(13, 92, 77, 0.065) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          {/* Isometric Subgrid Highlight */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(13, 92, 77, 0.15) 1.5px, transparent 1.5px)",
              backgroundSize: "140px 140px",
            }}
            aria-hidden="true"
          />
        </>
      )}

      {variant === "careers" && (
        <>
          {/* Constellation / Trajectory Dotted Matrix */}
          <div
            className="absolute inset-0 pointer-events-none opacity-65"
            style={{
              backgroundImage:
                "radial-gradient(rgba(180, 83, 9, 0.11) 1.4px, transparent 1.4px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          {/* Diagonal Ray Accent */}
          <div
            className="absolute inset-0 pointer-events-none opacity-25"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(180, 83, 9, 0.03) 40px, rgba(180, 83, 9, 0.03) 41px)",
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* ============================================================== */}
      {/* 2. INTERACTIVE CURSOR SPOTLIGHT GLOW                           */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 hidden sm:block"
        style={{
          background:
            variant === "elsl"
              ? "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(162, 18, 70, 0.08), rgba(4, 49, 93, 0.04) 40%, transparent 80%)"
              : variant === "stem"
              ? "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(13, 92, 77, 0.11), rgba(235, 166, 53, 0.05) 45%, transparent 80%)"
              : "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(180, 83, 9, 0.09), rgba(162, 18, 70, 0.05) 45%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient background glowing orbs */}
      <div
        className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-50 ${
          variant === "elsl"
            ? "bg-[#A21246]/10"
            : variant === "stem"
            ? "bg-[#0D5C4D]/12"
            : "bg-[#B45309]/10"
        }`}
        aria-hidden="true"
      />
      <div
        className={`absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-50 ${
          variant === "elsl"
            ? "bg-[#04315D]/10"
            : variant === "stem"
            ? "bg-[#EBA635]/10"
            : "bg-[#A21246]/10"
        }`}
        aria-hidden="true"
      />

      {/* ============================================================== */}
      {/* 3. FLOATING THEMED MOTIFS & ICONS                              */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        {variant === "elsl" && (
          <>
            {/* Top-left: Book */}
            <div className="animate-float-slow absolute top-8 left-[3%] text-[#04315D]/[0.15] rotate-[-12deg]">
              <BookOpen className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.4} />
            </div>
            {/* Top-right: Speech quotes */}
            <div className="animate-float-reverse absolute top-10 right-[4%] text-[#A21246]/[0.16] rotate-[15deg]">
              <MessageSquareQuote className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.4} />
            </div>
            {/* Middle-left: Languages */}
            <div className="animate-float-reverse absolute top-1/2 left-[2%] -translate-y-1/2 text-[#A21246]/[0.13] rotate-[8deg]">
              <Languages className="w-10 h-10 sm:w-13 sm:h-13" strokeWidth={1.4} />
            </div>
            {/* Bottom-right: Pencil */}
            <div className="animate-float-slow absolute bottom-6 right-[3%] text-[#04315D]/[0.15] rotate-[-22deg]">
              <Pencil className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.4} />
            </div>
            {/* Ambient Watermark Glyph: Quotes */}
            <span className="hidden xl:block absolute top-1/3 right-[10%] font-serif text-8xl text-[#04315D]/[0.03] select-none font-bold">
              “ ”
            </span>
          </>
        )}

        {variant === "stem" && (
          <>
            {/* Top-left: Atom */}
            <div className="animate-float-slow absolute top-8 left-[3%] text-[#0D5C4D]/[0.18] rotate-[-10deg]">
              <Atom className="w-14 h-14 sm:w-18 sm:h-18" strokeWidth={1.4} />
            </div>
            {/* Top-right: Compass */}
            <div className="animate-float-reverse absolute top-10 right-[4%] text-[#0D5C4D]/[0.16] rotate-[15deg]">
              <Compass className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.4} />
            </div>
            {/* Middle-right: Lightbulb */}
            <div className="animate-float-slow absolute top-1/2 right-[2%] -translate-y-1/2 text-[#EBA635]/[0.22] rotate-[-8deg]">
              <Lightbulb className="w-11 h-11 sm:w-14 sm:h-14" strokeWidth={1.4} />
            </div>
            {/* Bottom-left: Math Sigma glyph */}
            <span className="hidden sm:block animate-float-reverse absolute bottom-8 left-[4%] font-mono text-4xl sm:text-5xl text-[#0D5C4D]/[0.12] select-none font-bold">
              ∑
            </span>
            {/* Bottom-right: Math Pi glyph */}
            <span className="hidden sm:block animate-float-slow absolute bottom-6 right-[8%] font-mono text-4xl sm:text-5xl text-[#0D5C4D]/[0.12] select-none font-bold">
              π
            </span>
          </>
        )}

        {variant === "careers" && (
          <>
            {/* Top-left: Graduation Cap */}
            <div className="animate-float-slow absolute top-8 left-[3%] text-[#B45309]/[0.18] rotate-[-12deg]">
              <GraduationCap className="w-14 h-14 sm:w-18 sm:h-18" strokeWidth={1.4} />
            </div>
            {/* Top-right: Target */}
            <div className="animate-float-reverse absolute top-10 right-[4%] text-[#A21246]/[0.16] rotate-[10deg]">
              <Target className="w-12 h-12 sm:w-15 sm:h-15" strokeWidth={1.4} />
            </div>
            {/* Middle-left: Compass */}
            <div className="animate-float-slow absolute top-1/2 left-[2%] -translate-y-1/2 text-[#B45309]/[0.15] rotate-[15deg]">
              <Compass className="w-10 h-10 sm:w-13 sm:h-13" strokeWidth={1.4} />
            </div>
            {/* Bottom-right: Trending Up */}
            <div className="animate-float-reverse absolute bottom-6 right-[4%] text-[#04315D]/[0.16] rotate-[-15deg]">
              <TrendingUp className="w-11 h-11 sm:w-14 sm:h-14" strokeWidth={1.4} />
            </div>
            {/* Bottom-left: Award */}
            <div className="animate-float-slow absolute bottom-8 left-[6%] text-[#B45309]/[0.16] rotate-[8deg]">
              <Award className="w-10 h-10 sm:w-13 sm:h-13" strokeWidth={1.4} />
            </div>
          </>
        )}
      </div>

      {/* ============================================================== */}
      {/* 4. SECTION FOREGROUND CONTENT                                  */}
      {/* ============================================================== */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}

