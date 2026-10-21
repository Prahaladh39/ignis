"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] border-t border-[#E8E2D7] py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A21246]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#04315D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Stay Informed
            </span>
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-[#04315D] font-normal mb-4">
            Subscribe To Our Newsletter
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-[15.5px] text-[#556987] leading-relaxed max-w-xl mx-auto mb-8 font-normal">
            Get quarterly field insights, research reports, and pedagogical updates on foundational learning and student agency across India.
          </p>

          {!isSubscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                <input
                  type="email"
                  required
                  placeholder="Enter your institutional or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-[#E8E2D7] focus:border-[#A21246] focus:outline-none text-[14.5px] text-[#04315D] placeholder:text-[#94A3B8] shadow-xs transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#A21246] hover:bg-[#850D37] text-white text-[14.5px] font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-[#107C68]/30 text-[#107C68] shadow-xs animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-5 h-5" />
              <span className="text-[14.5px] font-medium">
                Thank you for subscribing! You are now on our list.
              </span>
            </div>
          )}

          <p className="text-xs text-[#94A3B8] mt-4 font-normal">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
