"use client";

import { useState } from "react";
import {
  Building2,
  GraduationCap,
  Users2,
  Sparkles,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Award,
} from "lucide-react";
import Link from "next/link";

interface PriorityItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  icon: typeof Building2;
  cost: string;
  scaleGoal: string;
  description: string;
  highlights: string[];
  color: {
    badgeBg: string;
    badgeText: string;
    borderActive: string;
    accent: string;
  };
}

const PRIORITIES: PriorityItem[] = [
  {
    id: "low-cost-schools",
    badge: "Pillar 1 · Scaled Core",
    title: "Low-Cost Private Schools (APS)",
    subtitle: "Affordable Private Schools charging <INR 20,000 ($200–$300) / year",
    icon: Building2,
    cost: "SGD 13 (₹800) / student / year",
    scaleGoal: "Targeting 2.2 Million students by 2027",
    description:
      "Ignis has partnered with over 650 affordable private schools, reaching 200,000+ children in the last 6 years alone. Our English and Life Skills Lab is a turnkey capacity-building programme that equips local teachers to lead joyful, participatory learning rather than rote memorization.",
    highlights: [
      "Works with budget schools charging <INR 20,000 per year",
      "Delivered at an ultra-lean cost of just SGD 13/student annually",
      "Rolling out mobile apps for synchronous hybrid STEM + English learning",
      "Scaling to 2.2 million learners across semi-urban and rural clusters by 2027",
    ],
    color: {
      badgeBg: "bg-[#A21246]/10",
      badgeText: "text-[#A21246]",
      borderActive: "border-[#A21246]",
      accent: "#A21246",
    },
  },
  {
    id: "govt-fellowship",
    badge: "Pillar 2 · Systemic Fellowship",
    title: "Teacher Fellowship for Government Schools",
    subtitle: "Community-based systemic intervention in public schools",
    icon: GraduationCap,
    cost: "SGD 75 / student / year",
    scaleGoal: "Expanding to 920 government schools by 2027",
    description:
      "A deeply rooted community fellowship supported by pioneering institutional philanthropic funds such as the H T Parekh Foundation. Ignis fellows work directly inside state-run government schools to transform classroom dynamics, mentor teachers, and bridge learning deficits.",
    highlights: [
      "Scaled to 32 model government schools with intensive support",
      "Supported by prestigious philanthropic foundations like H T Parekh Foundation",
      "Comprehensive community-based intervention at SGD 75/student per year",
      "Establishing a dedicated institutional scaling division targeting 920 schools by 2027",
    ],
    color: {
      badgeBg: "bg-[#04315D]/10",
      badgeText: "text-[#04315D]",
      borderActive: "border-[#04315D]",
      accent: "#04315D",
    },
  },
  {
    id: "partnerships",
    badge: "Pillar 3 · Collective Impact",
    title: "Non-Profit & Government Alliances",
    subtitle: "State-wide public education and multi-stakeholder coalitions",
    icon: Users2,
    cost: "Co-funded / Systemic Alliance",
    scaleGoal: "State-wide deployment across multiple Indian states",
    description:
      "Ignis collaborates directly with state governments (such as the State of Andhra Pradesh) and leading social impact leaders including United Way of Hyderabad and Delhi, and Deshpande Foundation, institutionalizing active learning into large-scale educational ecosystems.",
    highlights: [
      "Architected hybrid learning models with the Government of Andhra Pradesh",
      "Multi-year implementation partnerships with United Way (Hyderabad & Delhi)",
      "Co-designed rural educational initiatives with Deshpande Foundation",
      "Ensures maximum leverage of public school infrastructure and state teacher cadres",
    ],
    color: {
      badgeBg: "bg-[#0D5C4D]/10",
      badgeText: "text-[#0D5C4D]",
      borderActive: "border-[#0D5C4D]",
      accent: "#0D5C4D",
    },
  },
  {
    id: "direct-learners",
    badge: "Pillar 4 · Direct Agency",
    title: "Low-Income Direct Learners (B2C & Youth)",
    subtitle: "Empowering first-generation college students and youth",
    icon: Smartphone,
    cost: "Affordable Micro-Learning",
    scaleGoal: "Direct mobile app rollout across India",
    description:
      "A forward-looking direct-to-learner pilot empowering youth, first-generation college goers, and school students from low-income households with conversational English, career choices, emotional quotient, and workplace readiness tools.",
    highlights: [
      "Targeted at youth and first-generation learners facing unemployment risks",
      "Focuses on practical career awareness, scholarship access, and communicative confidence",
      "Technology-enabled micro-curricula delivered through accessible mobile formats",
      "Designed to help young adults break intergenerational cycles of poverty",
    ],
    color: {
      badgeBg: "bg-[#B45309]/10",
      badgeText: "text-[#B45309]",
      borderActive: "border-[#B45309]",
      accent: "#B45309",
    },
  },
];

export default function AboutInteractivePriorities() {
  const [activeTab, setActiveTab] = useState<string>(PRIORITIES[0].id);

  const currentPriority =
    PRIORITIES.find((p) => p.id === activeTab) || PRIORITIES[0];
  const IconComponent = currentPriority.icon;

  return (
    <div className="w-full">
      {/* 4 Interactive Tab Selector Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {PRIORITIES.map((priority, idx) => {
          const isActive = priority.id === activeTab;
          const TabIcon = priority.icon;
          return (
            <button
              key={priority.id}
              onClick={() => setActiveTab(priority.id)}
              className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                isActive
                  ? "bg-white shadow-xl shadow-[#04315D]/8 border-[#A21246] -translate-y-1"
                  : "bg-white/70 hover:bg-white border-[#E8E2D7] hover:border-[#04315D]/30 hover:shadow-md"
              }`}
            >
              {/* Top Accent Strip */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${
                  isActive ? "bg-[#A21246]" : "bg-transparent group-hover:bg-[#04315D]/20"
                }`}
              />

              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#A21246] text-white"
                      : "bg-[#FAF8F5] text-[#556987] group-hover:bg-[#04315D]/10 group-hover:text-[#04315D]"
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono font-semibold text-[#8C98A4]">
                  0{idx + 1}
                </span>
              </div>

              <h4
                className={`text-[15px] sm:text-[16px] font-semibold leading-snug transition-colors ${
                  isActive ? "text-[#04315D]" : "text-[#2B3A4A] group-hover:text-[#04315D]"
                }`}
              >
                {priority.title}
              </h4>
              <p className="text-xs text-[#8C98A4] mt-1 line-clamp-1">
                {priority.scaleGoal}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Tab Spotlight Showcase Card */}
      <div className="bg-white rounded-3xl border border-[#E8E2D7] p-6 sm:p-10 lg:p-12 shadow-xl shadow-[#04315D]/6 relative overflow-hidden">
        {/* Soft Background Tint */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#A21246]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Details & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E2D7] w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-[#A21246] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#04315D]">
                {currentPriority.badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-[#04315D] font-normal tracking-tight mb-2">
              {currentPriority.title}
            </h3>
            <p className="text-sm sm:text-[15px] font-medium text-[#A21246] mb-5">
              {currentPriority.subtitle}
            </p>

            <p className="text-base text-[#556987] leading-relaxed mb-6 font-normal">
              {currentPriority.description}
            </p>

            {/* Checklist of highlights */}
            <div className="space-y-3 mb-8">
              {currentPriority.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#334155]">
                  <CheckCircle2 className="w-5 h-5 text-[#A21246] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[#E8E2D7]">
              <Link
                href="/csr-support"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#A21246] hover:bg-[#860C38] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Partner in Scaling This Pillar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/for-schools"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#04315D] border border-[#E8E2D7] text-sm font-semibold transition-all duration-300"
              >
                <span>Explore School Curriculum</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Key Stats & Metric Badges */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#F8F5EF] border border-[#E8E2D7]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8C98A4]">
                Cost Efficiency Metric
              </span>
              <p className="text-2xl sm:text-3xl font-serif text-[#04315D] font-normal mt-1">
                {currentPriority.cost}
              </p>
              <p className="text-xs text-[#556987] mt-1.5 leading-relaxed">
                Empowering schools through hyper-frugal, high-impact capacity building designed for vulnerable communities.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#04315D] text-white shadow-lg">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                Strategic Scale Milestone
              </span>
              <p className="text-2xl sm:text-3xl font-serif text-[#EBA635] font-normal mt-1">
                {currentPriority.scaleGoal}
              </p>
              <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                Building long-term institutional pathways to permanently end rote-learning and empower educators.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E8E2D7] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#A21246]/10 flex items-center justify-center text-[#A21246] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#04315D]">
                  Acumen Lean Data Verified
                </p>
                <p className="text-xs text-[#556987]">
                  80% of beneficiaries earn &lt; SGD 8/day; 90% college enrollment rate after intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

