"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { ArrowRight, X } from "lucide-react";
import { ArrowIcon, HeartIcon, LandmarkIcon, SchoolIcon, TrendIcon } from "./audience/icons";
import {
  CommunityIllustration,
  GrowthIllustration,
  SchoolIllustration,
} from "./audience/illustrations";

type IconComponent = ComponentType<{ className?: string }>;

type Theme = {
  card: string;
  title: string;
  mark: string;
  cta: string;
  ctaArrow: string;
};

type CardData = {
  id: string;
  audience: string;
  audienceSize: string;
  tagline?: { lead: string; highlight: string };
  icons: { Icon: IconComponent; tile: string }[];
  badge?: string;
  rows?: { label: string; text: string; labelClass: string; boxClass: string }[];
  Illustration: ComponentType<{ className?: string }>;
  illustrationMinH: string;
  cta: { label: string; modalAudience: string };
  theme: Theme;
};

const tiles = {
  orange:
    "bg-[linear-gradient(145deg,#FFA45B,#D4500A)] shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_14px_24px_-10px_rgba(212,80,10,0.7)]",
  teal: "bg-[linear-gradient(145deg,#3FC5A6,#0B6B58)] shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_14px_24px_-10px_rgba(15,143,116,0.7)]",
  pink: "bg-[linear-gradient(145deg,#FF7FA8,#B3144A)] shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_14px_24px_-10px_rgba(179,20,74,0.6)]",
  crimson:
    "bg-[linear-gradient(145deg,#FF6C9D,#B20F47)] shadow-[inset_0_2px_0_rgba(255,255,255,0.45),0_14px_24px_-10px_rgba(214,22,90,0.75)]",
};

const CARDS: CardData[] = [
  {
    id: "schools",
    audience: "With Schools",
    audienceSize: "text-[24px] sm:text-[27px]",
    icons: [{ Icon: SchoolIcon, tile: tiles.orange }],
    rows: [
      {
        label: "Programme 01",
        text: "English and Life Skills",
        labelClass: "text-[#D4500A]",
        boxClass:
          "border-[#FCE5D4] shadow-[0_8px_18px_-14px_rgba(212,80,10,0.45)]",
      },
      {
        label: "Programme 02",
        text: "Life Skills, Science and Mathematics",
        labelClass: "text-[#D4500A]",
        boxClass:
          "border-[#FCE5D4] shadow-[0_8px_18px_-14px_rgba(212,80,10,0.45)]",
      },
    ],
    Illustration: SchoolIllustration,
    illustrationMinH: "min-h-[90px]",
    cta: { label: "Explore this route", modalAudience: "With Schools" },
    theme: {
      card: "border border-[#E8E2D7] bg-white shadow-sm hover:shadow-md",
      title: "text-[#04315D]",
      mark: "bg-[linear-gradient(rgba(255,178,122,0.6),rgba(255,178,122,0.6))]",
      cta: "bg-[linear-gradient(100deg,#D4500A,#F08A2E)] shadow-[0_12px_22px_-8px_rgba(212,80,10,0.6)]",
      ctaArrow: "text-[#D4500A]",
    },
  },
  {
    id: "ngos-governments",
    audience: "With NGOs, Foundations & Governments",
    audienceSize: "text-[21px] sm:text-[23px]",
    icons: [
      { Icon: HeartIcon, tile: tiles.teal },
      { Icon: LandmarkIcon, tile: tiles.teal },
    ],
    rows: [
      {
        label: "NGOs & Foundations",
        text: "Design and implement programmes for underserved learners.",
        labelClass: "text-[#0B6B58]",
        boxClass:
          "border-[#D3ECE4] shadow-[0_8px_18px_-14px_rgba(15,143,116,0.5)]",
      },
      {
        label: "Governments & Education Systems",
        text: "Build scalable models for teachers, schools and communities.",
        labelClass: "text-[#0B6B58]",
        boxClass:
          "border-[#D3ECE4] shadow-[0_8px_18px_-14px_rgba(15,143,116,0.5)]",
      },
    ],
    Illustration: CommunityIllustration,
    illustrationMinH: "min-h-[90px]",
    cta: { label: "Explore partnership models", modalAudience: "With NGOs, Foundations & Governments" },
    theme: {
      card: "border border-[#E8E2D7] bg-white shadow-sm hover:shadow-md",
      title: "text-[#04315D]",
      mark: "",
      cta: "bg-[linear-gradient(100deg,#0B6B58,#2FB898)] shadow-[0_12px_22px_-8px_rgba(15,143,116,0.6)]",
      ctaArrow: "text-[#0B6B58]",
    },
  },
  {
    id: "funders-investors",
    audience: "With Funders & Investors",
    audienceSize: "text-[24px] sm:text-[27px]",
    tagline: {
      lead: "Support the next generation for ",
      highlight: "contextual and technology-enabled learning.",
    },
    icons: [{ Icon: TrendIcon, tile: tiles.crimson }],
    badge: "✦ Strategic scale",
    Illustration: GrowthIllustration,
    illustrationMinH: "min-h-[100px]",
    cta: { label: "Explore funding routes", modalAudience: "With Funders & Investors" },
    theme: {
      card: "border border-[#E8E2D7] bg-white shadow-sm hover:shadow-md",
      title: "text-[#04315D]",
      mark: "bg-[linear-gradient(rgba(255,140,180,0.55),rgba(255,140,180,0.55))]",
      cta: "bg-[linear-gradient(100deg,#B20F47,#F0467F)] shadow-[0_12px_22px_-8px_rgba(214,22,90,0.65)]",
      ctaArrow: "text-[#B20F47]",
    },
  },
];

export default function FutureActionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAudience, setModalAudience] = useState<string>("For Funders & Investors");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    setFormData({ name: "", email: "", phone: "", organization: "", message: "" });
  };

  return (
    <section
      id="work-with-us"
      aria-label="Ways to get involved"
      className="relative w-full bg-[#FAF8F5] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-b border-[#E8E2D7]"
    >
      {/* Subtle dotted backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(rgba(11,42,74,0.07)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
        
        {/* ============================================================== */}
        {/* MAIN PITCH: Can education help young people shape futures?      */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.16em] uppercase text-[#A21246]">
              Let’s Talk
            </span>
            <span className="w-6 h-[2px] bg-[#A21246]" aria-hidden="true" />
          </div>

          {/* Heading (Exact Client Copy) */}
          <h2 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] leading-[1.12] tracking-[-0.02em] font-normal text-[#04315D] mb-5">
            Can Education Help Young People <br className="hidden sm:inline" />
            Shape Their Own Futures?
          </h2>

          {/* Subhead (Exact Client Copy) */}
          <p className="text-sm sm:text-[15px] text-[#556987] leading-relaxed max-w-2xl mx-auto mb-9 font-normal">
            We believe it can—when learning gives young people not just knowledge, but the confidence and capability to use it.
          </p>

          {/* Primary CTA Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => handleOpenModal("General Inquiry")}
              className="group inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl bg-[#A21246] hover:bg-[#850D37] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Talk to Ignis</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* NEW DESIGN: 3 VIBRANT AUDIENCE CARDS WITH VECTOR ILLUSTRATIONS */}
        {/* ============================================================== */}
        <div className="relative mx-auto grid max-w-[1140px] grid-cols-1 items-stretch gap-5 sm:gap-6 min-[900px]:grid-cols-3 mb-12 sm:mb-16">
          {CARDS.map(
            ({
              id,
              audience,
              audienceSize,
              tagline,
              icons,
              badge,
              rows,
              Illustration,
              illustrationMinH,
              cta,
              theme,
            }) => (
              <article
                key={id}
                onClick={() => handleOpenModal(cta.modalAudience)}
                className={`group relative flex flex-col overflow-hidden rounded-[26px] p-[22px] sm:p-[26px] transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 min-[900px]:min-h-[530px] cursor-pointer ${theme.card}`}
              >
                {/* icon tiles (+ optional badge) */}
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {icons.map(({ Icon, tile }, i) => (
                      <div
                        key={i}
                        className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${tile}`}
                      >
                        <Icon className="h-5.5 w-5.5 text-white" />
                      </div>
                    ))}
                  </div>
                  {badge && (
                    <span className="rounded-full bg-[linear-gradient(100deg,#B20F47,#E0457F)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      {badge}
                    </span>
                  )}
                </div>

                {/* big audience title */}
                <h3
                  className={`relative mt-4 self-start font-display font-extrabold leading-[1.1] tracking-[-0.02em] ${audienceSize} ${theme.title}`}
                >
                  {audience}
                </h3>

                {tagline && (
                  <p className="relative mt-2 font-display text-[18px] sm:text-[20px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0B2A4A]">
                    {tagline.lead}
                    <span>
                      {tagline.highlight}
                    </span>
                  </p>
                )}

                {rows && (
                  <div className="relative mt-3.5 flex flex-col gap-2.5">
                    {rows.map((row) => (
                      <div
                        key={row.label}
                        className={`rounded-[16px] border bg-white/85 px-3.5 py-2.5 ${row.boxClass}`}
                      >
                        <p
                          className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${row.labelClass}`}
                        >
                          {row.label}
                        </p>
                        <p className="mt-1 font-display text-[15px] sm:text-[16px] font-extrabold leading-[1.25] text-[#0B2A4A]">
                          {row.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* illustration (bleeds to the card edges) */}
                <div
                  className={`-mx-[22px] sm:-mx-[26px] mb-3 mt-1 flex flex-1 items-end ${illustrationMinH}`}
                >
                  <Illustration className="block h-auto w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:-translate-y-1 group-hover:scale-105" />
                </div>

                {/* CTA with moving white light shimmer */}
                <div
                  className={`shimmer-btn group/cta relative flex items-center justify-between overflow-hidden rounded-full py-2.5 pl-4 sm:pl-5 pr-2 sm:pr-2.5 text-[13.5px] sm:text-[14px] font-bold text-white no-underline shadow-md ${theme.cta}`}
                >
                  <span className="relative z-10 whitespace-nowrap truncate">{cta.label}</span>
                  <span className="relative z-10 flex h-[30px] w-[30px] sm:h-[32px] sm:w-[32px] items-center justify-center rounded-full bg-white transition-transform group-hover/cta:translate-x-1 shrink-0 ml-2">
                    <ArrowIcon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${theme.ctaArrow}`} />
                  </span>
                </div>
              </article>
            ),
          )}
        </div>

        {/* ============================================================== */}
        {/* CENTRAL CONVICTION QUOTE (Exact Client Copy)                   */}
        {/* ============================================================== */}
        <div className="relative rounded-2xl bg-white border border-[#E8E2D7] p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-sm mt-10 sm:mt-12">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A21246] font-bold mb-2.5">
            The Central Conviction
          </div>

          <blockquote className="font-serif text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.35] text-[#04315D] italic font-normal">
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
            className="relative w-full max-w-lg bg-[#FAF8F5] text-[#2D3748] rounded-2xl p-6 sm:p-8 border border-[#E8E2D7] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-lg bg-white border border-[#E8E2D7] flex items-center justify-center text-[#475569] hover:text-[#04315D] transition-colors cursor-pointer"
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
                    Let’s Talk
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
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold font-mono text-[#04315D] uppercase tracking-wider mb-1.5">
                      Organization / School Name
                    </label>
                    <input
                      type="text"
                      placeholder="Government High School / CSR Foundation"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-[#E8E2D7] bg-white text-sm text-[#2D3748] focus:outline-none focus:border-[#A21246]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#A21246] hover:bg-[#850D37] text-white text-sm font-semibold transition-all shadow-md mt-2 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-xl bg-[#107C68]/10 text-[#107C68] flex items-center justify-center mx-auto mb-4 border border-[#107C68]/20">
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
                  className="px-6 py-2.5 rounded-lg bg-[#04315D] hover:bg-[#032547] text-white text-xs font-semibold transition-colors cursor-pointer"
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
