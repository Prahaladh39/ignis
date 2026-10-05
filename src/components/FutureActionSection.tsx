"use client";

import { useState } from "react";
import {
  ArrowRight,
  School,
  HeartHandshake,
  Landmark,
  Coins,
  X,
  CheckCircle2,
} from "lucide-react";

interface RouteItem {
  id: string;
  audience: string;
  action: string;
  color: string;
  accentBg: string;
  borderColor: string;
  icon: typeof School;
}

const ROUTES: RouteItem[] = [
  {
    id: "schools",
    audience: "For Schools",
    action: "Build a stronger learning culture.",
    color: "#B45309",
    accentBg: "bg-[#B45309]/10 text-[#B45309]",
    borderColor: "hover:border-[#B45309]/50",
    icon: School,
  },
  {
    id: "ngos",
    audience: "For NGOs & Foundations",
    action: "Design and implement programmes for underserved learners.",
    color: "#0D5C4D",
    accentBg: "bg-[#0D5C4D]/10 text-[#0D5C4D]",
    borderColor: "hover:border-[#0D5C4D]/50",
    icon: HeartHandshake,
  },
  {
    id: "governments",
    audience: "For Governments & Education Systems",
    action: "Build scalable models for teachers, schools and communities.",
    color: "#A21246",
    accentBg: "bg-[#A21246]/10 text-[#A21246]",
    borderColor: "hover:border-[#A21246]/50",
    icon: Landmark,
  },
  {
    id: "funders",
    audience: "For Funders & Investors",
    action: "Support the next generation for contextual and technology-enabled learning.",
    color: "#04315D",
    accentBg: "bg-[#04315D]/10 text-[#04315D]",
    borderColor: "hover:border-[#04315D]/50",
    icon: Coins,
  },
];

export default function FutureActionSection() {
  const [selectedRoute, setSelectedRoute] = useState<string>("schools");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAudience, setModalAudience] = useState<string>("For Schools");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const activeRouteData =
    ROUTES.find((r) => r.id === selectedRoute) || ROUTES[0];

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
        {/* Main Pitch: Exact Client Copy */}
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
          <p className="text-[16px] sm:text-[19px] text-[#475569] leading-[1.65] max-w-2xl mx-auto mb-9 font-normal">
            We believe it can—when learning gives young people not just knowledge, but the confidence and capability to use it.
          </p>

          {/* Primary CTA (Exact Client Copy) */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => handleOpenModal(activeRouteData.audience)}
              className="group inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#A21246] hover:bg-[#850D37] text-white text-[15px] font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Talk to Ignis</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 4 Clean Pathway Cards on Warm White Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {ROUTES.map((route) => {
            const IconComp = route.icon;
            const isSelected = selectedRoute === route.id;

            return (
              <div
                key={route.id}
                onClick={() => {
                  setSelectedRoute(route.id);
                  handleOpenModal(route.audience);
                }}
                onMouseEnter={() => setSelectedRoute(route.id)}
                className={`group relative bg-white border rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1.5 ${
                  isSelected
                    ? "border-[#04315D] ring-2 ring-[#04315D]/10 shadow-lg"
                    : "border-[#E8E2D7]"
                } ${route.borderColor}`}
              >
                {/* Top Accent Color Bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-all group-hover:left-4 group-hover:right-4"
                  style={{ backgroundColor: route.color }}
                />

                {/* Top: Icon & Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-5 pt-1">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200 ${route.accentBg}`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div
                      className="w-2 h-2 rounded-full transition-opacity"
                      style={{
                        backgroundColor: route.color,
                        opacity: isSelected ? 1 : 0.35,
                      }}
                    />
                  </div>

                  {/* Audience Label (Exact Client Copy) */}
                  <h3
                    className="font-mono text-[11px] uppercase tracking-wider font-bold mb-3"
                    style={{ color: route.color }}
                  >
                    {route.audience}
                  </h3>

                  {/* Action Objective (Exact Client Copy) */}
                  <p className="font-serif text-[20px] sm:text-[22px] leading-snug font-bold text-[#04315D] mb-6">
                    {route.action}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E8E2D7]/80 flex items-center justify-between text-xs font-semibold text-[#04315D] group-hover:text-[#A21246] transition-colors">
                  <span>Explore this route</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Anchor Statement Band (Exact Client Copy) */}
        <div className="relative rounded-3xl bg-white border border-[#E8E2D7] p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A21246] font-bold mb-3">
            The Central Conviction
          </div>

          <blockquote className="font-serif text-[20px] sm:text-[26px] lg:text-[28px] leading-[1.35] text-[#04315D] italic font-normal">
            &ldquo;Ignis helps young people turn what they learn into the confidence and capability necessary to make choices, solve problems and shape their own lives.&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Modal Dialog: "Talk to Ignis" */}
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
                      Organization / School *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Institution or Foundation Name"
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
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#208F80]/10 text-[#208F80] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-[24px] font-bold text-[#04315D]">
                  Request Received
                </h4>
                <p className="text-sm text-[#475569] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. An Ignis partner lead will connect with you within 24–48 hours to explore collaboration.
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-6 py-2.5 rounded-full bg-[#04315D] text-white text-xs font-semibold mt-4 cursor-pointer"
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
