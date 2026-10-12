"use client";

import { useState } from "react";
import {
  ArrowRight,
  School,
  HeartHandshake,
  Landmark,
  Coins,
  X,
  Sparkles,
} from "lucide-react";

export default function FutureActionSection() {
  const [selectedRoute, setSelectedRoute] = useState<string>("funders");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAudience, setModalAudience] = useState<string>("For Funders & Investors");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleOpenModal = (audienceName: string) => {
    setModalAudience(audienceName);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  return (
    <section
      id="work-with-us"
      className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 lg:py-32 overflow-hidden border-b border-[#E8E2D7]"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        
        {/* ============================================================== */}
        {/* MAIN PITCH: Can education help young people shape futures?      */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Dialogue & Partnerships
            </span>
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
          </div>

          {/* Heading (Exact Client Copy) */}
          <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] font-normal text-[#04315D] mb-5">
            Can education help young people <br className="hidden sm:inline" />
            shape their own futures?
          </h2>

          {/* Subhead (Exact Client Copy) */}
          <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
            We believe it can—when learning gives young people not just knowledge, but the confidence and capability to use it.
          </p>

          {/* Primary CTA Button (Exact Client Copy) */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => handleOpenModal("General Inquiry")}
              className="group inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#A21246] hover:bg-[#850D37] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Talk to Ignis</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3 CLEAN PATHWAY CARDS                                          */}
        {/* Card 1: For Schools                                            */}
        {/* Card 2: Combined For NGOs, Foundations & Governments           */}
        {/* Card 3: For Funders & Investors (BIG CARD with increased font) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-16 sm:mb-20">
          
          {/* ------------------------------------------------------------ */}
          {/* CARD 1: FOR SCHOOLS                                          */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => {
              setSelectedRoute("schools");
              handleOpenModal("For Schools");
            }}
            onMouseEnter={() => setSelectedRoute("schools")}
            className={`group relative bg-white border rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
              selectedRoute === "schools"
                ? "border-[#B45309] ring-2 ring-[#B45309]/15 shadow-md"
                : "border-[#E8E2D7] hover:border-[#B45309]/40"
            }`}
          >
            {/* Top Accent Color Bar */}
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-[#B45309] rounded-b-full transition-all group-hover:left-4 group-hover:right-4" />

            <div>
              {/* Header: Icon & Indicator */}
              <div className="flex items-center justify-between mb-6 pt-1">
                <div className="w-12 h-12 rounded-2xl bg-[#B45309]/10 text-[#B45309] flex items-center justify-center transition-transform group-hover:scale-110 duration-200 border border-[#B45309]/20">
                  <School className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold">
                  Route 01
                </span>
              </div>

              {/* Audience Eyebrow */}
              <h3 className="font-mono text-[11.5px] uppercase tracking-[0.14em] font-bold text-[#B45309] mb-3">
                For Schools
              </h3>

              {/* Action Headline (Exact Client Copy) */}
              <p className="font-serif text-[21px] sm:text-[23px] leading-snug font-bold text-[#04315D] mb-6">
                Build a stronger learning culture.
              </p>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-4 border-t border-[#E8E2D7]/80 flex items-center justify-between text-xs font-semibold text-[#04315D] group-hover:text-[#B45309] transition-colors">
              <span>Explore this route</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 2: COMBINED FOR NGOS, FOUNDATIONS & GOVERNMENTS         */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => {
              setSelectedRoute("ngos-gov");
              handleOpenModal("For NGOs, Foundations & Governments");
            }}
            onMouseEnter={() => setSelectedRoute("ngos-gov")}
            className={`group relative bg-white border rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
              selectedRoute === "ngos-gov"
                ? "border-[#0D5C4D] ring-2 ring-[#0D5C4D]/15 shadow-md"
                : "border-[#E8E2D7] hover:border-[#0D5C4D]/40"
            }`}
          >
            {/* Top Accent Color Bar */}
            <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#0D5C4D] to-[#A21246] rounded-b-full transition-all group-hover:left-4 group-hover:right-4" />

            <div>
              {/* Header: Dual Icons & Indicator */}
              <div className="flex items-center justify-between mb-5 pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0D5C4D]/10 text-[#0D5C4D] flex items-center justify-center transition-transform group-hover:scale-105 duration-200 border border-[#0D5C4D]/20">
                    <HeartHandshake className="w-4.5 h-4.5" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#A21246]/10 text-[#A21246] flex items-center justify-center transition-transform group-hover:scale-105 duration-200 border border-[#A21246]/20">
                    <Landmark className="w-4.5 h-4.5" />
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] font-semibold">
                  Route 02
                </span>
              </div>

              {/* Combined Audience Eyebrow */}
              <h3 className="font-mono text-[11.5px] uppercase tracking-[0.14em] font-bold text-[#0D5C4D] mb-4">
                For NGOs, Foundations & Governments
              </h3>

              {/* Dual-Stream Action Modules (Both Exact Client Copies Included) */}
              <div className="space-y-4 mb-6">
                <div className="pb-3.5 border-b border-[#F1EBE1]">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0D5C4D] block mb-1">
                    NGOs & Foundations
                  </span>
                  <p className="font-serif text-[17px] sm:text-[18px] leading-snug font-bold text-[#04315D]">
                    Design and implement programmes for underserved learners.
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#A21246] block mb-1">
                    Governments & Education Systems
                  </span>
                  <p className="font-serif text-[17px] sm:text-[18px] leading-snug font-bold text-[#04315D]">
                    Build scalable models for teachers, schools and communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-4 border-t border-[#E8E2D7]/80 flex items-center justify-between text-xs font-semibold text-[#04315D] group-hover:text-[#0D5C4D] transition-colors">
              <span>Explore partnership models</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 3: FOR FUNDERS & INVESTORS (BIG CARD with increased font) */}
          {/* ------------------------------------------------------------ */}
          <div
            onClick={() => {
              setSelectedRoute("funders");
              handleOpenModal("For Funders & Investors");
            }}
            onMouseEnter={() => setSelectedRoute("funders")}
            className={`group relative bg-white border-2 rounded-3xl p-8 sm:p-9 lg:p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-2 ${
              selectedRoute === "funders"
                ? "border-[#A21246] ring-4 ring-[#A21246]/10 shadow-xl"
                : "border-[#A21246]/60 hover:border-[#A21246]"
            }`}
          >
            {/* Top Prominent Accent Color Bar */}
            <div className="absolute top-0 left-6 right-6 h-[4px] bg-[#A21246] rounded-b-full transition-all group-hover:left-3 group-hover:right-3" />

            <div>
              {/* Header: Large Icon & Prominent Highlight Pill */}
              <div className="flex items-center justify-between mb-6 pt-1">
                <div className="w-14 h-14 rounded-2xl bg-[#A21246]/10 text-[#A21246] flex items-center justify-center transition-transform group-hover:scale-110 duration-200 border border-[#A21246]/25 shadow-xs">
                  <Coins className="w-7 h-7" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A21246]/10 border border-[#A21246]/20 text-[#A21246] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Strategic Scale</span>
                </div>
              </div>

              {/* Large Audience Eyebrow */}
              <h3 className="font-mono text-[13px] sm:text-[14px] uppercase tracking-[0.16em] font-extrabold text-[#A21246] mb-4">
                For Funders & Investors
              </h3>

              {/* BIG TYPOGRAPHY Headline Action (Exact Client Copy with Increased Font Size) */}
              <p className="font-serif text-[26px] sm:text-[29px] lg:text-[32px] leading-[1.2] font-bold text-[#04315D] mb-8 tracking-tight">
                Support the next generation for contextual and technology-enabled learning.
              </p>
            </div>

            {/* Bottom Action Link (Prominent) */}
            <div className="pt-5 border-t border-[#E8E2D7] flex items-center justify-between text-sm font-bold text-[#A21246] group-hover:text-[#850D37] transition-colors">
              <span>Explore investment & funding routes</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
            </div>
          </div>

        </div>

        {/* ============================================================== */}
        {/* CENTRAL CONVICTION QUOTE (Exact Client Copy)                   */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl bg-white border border-[#E8E2D7] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A21246] font-bold mb-3">
            The Central Conviction
          </div>

          <blockquote className="font-serif text-[20px] sm:text-[26px] lg:text-[28px] leading-[1.35] text-[#04315D] italic font-normal">
            &ldquo;Ignis helps young people turn what they learn into the confidence and capability necessary to make choices, solve problems and shape their own lives.&rdquo;
          </blockquote>
        </div>

      </div>

      {/* ============================================================== */}
      {/* MODAL DIALOG: "Talk to Ignis"                                  */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-[#FAF8F5] text-[#2D3748] rounded-3xl p-6 sm:p-8 border border-[#E8E2D7] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#E8E2D7] flex items-center justify-center text-[#475569] hover:text-[#04315D] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-6 pr-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A21246] font-bold block mb-1">
                    {modalAudience}
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-bold text-[#04315D] leading-tight mb-2">
                    Talk to Ignis
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    Connect directly with our programmatic team to discuss tailored implementation for your institution.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Dr. S. K. Sharma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Institutional Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@organization.org"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Organization / Institution *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Organization or Foundation Name"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Context or Questions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details on your student community, region, or learning goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#A21246] hover:bg-[#850D37] text-white text-sm font-semibold transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-[#107C68]/10 text-[#107C68] flex items-center justify-center mx-auto mb-4 border border-[#107C68]/20">
                  <span className="text-2xl font-bold">✓</span>
                </div>
                <h4 className="font-serif text-[24px] font-bold text-[#04315D] mb-2">
                  Message Sent
                </h4>
                <p className="text-sm text-[#475569] max-w-xs mx-auto mb-6">
                  Thank you for reaching out. An Ignis partner lead will connect with you within 24–48 hours to explore collaboration.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-full bg-[#04315D] hover:bg-[#032547] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
