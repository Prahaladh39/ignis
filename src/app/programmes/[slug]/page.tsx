import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  MessageSquareQuote,
  Atom,
  GraduationCap,
  Network,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROGRAMMES_DATA, ProgrammeItem } from "@/data/programmes";

const ICON_MAP = {
  message: MessageSquareQuote,
  atom: Atom,
  grad: GraduationCap,
  network: Network,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROGRAMMES_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const programme = PROGRAMMES_DATA.find((p) => p.slug === slug);

  if (!programme) {
    return { title: "Programme Not Found | Ignis Careers" };
  }

  return {
    title: `${programme.title} | Ignis Careers`,
    description: programme.description,
  };
}

export default async function ProgrammeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const programme = PROGRAMMES_DATA.find((p) => p.slug === slug);

  if (!programme) {
    notFound();
  }

  const IconComponent = ICON_MAP[programme.iconName];
  const otherProgrammes = PROGRAMMES_DATA.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb & Navigation */}
        <div className="w-full border-b border-[#E8E2D7] bg-[#F8F5EF]/80">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-4 flex items-center justify-between text-xs sm:text-sm">
            <Link
              href="/#programmes"
              className="inline-flex items-center gap-2 text-[#04315D] font-semibold hover:text-[#A21246] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Overview</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-[#94A3B8] font-mono text-xs">
              <Link href="/" className="hover:underline">Home</Link>
              <span>/</span>
              <Link href="/#programmes" className="hover:underline">What we build</Link>
              <span>/</span>
              <span className="text-[#04315D] font-bold">{programme.title}</span>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative w-full py-16 sm:py-24 border-b border-[#E8E2D7] bg-white overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs font-bold tracking-widest text-[#94A3B8]">
                  PILLAR {programme.num}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8E2D7]" />
                <span
                  className="text-xs font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${programme.brandColor}15`,
                    color: programme.brandColor,
                  }}
                >
                  {programme.eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.08] tracking-[-0.025em] text-[#04315D] font-normal mb-6">
                {programme.title}
              </h1>

              {/* Exact Client Sentence */}
              <p className="font-serif text-[20px] sm:text-[24px] text-[#A21246] leading-snug italic mb-8">
                &ldquo;{programme.description}&rdquo;
              </p>

              {/* Extended Editorial Overview */}
              <p className="text-[16px] sm:text-[18px] text-[#475569] leading-[1.75]">
                {programme.overview}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-[#E8E2D7]">
              {programme.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span
                    className="font-serif text-[36px] sm:text-[44px] font-bold leading-tight"
                    style={{ color: programme.brandColor }}
                  >
                    {metric.stat}
                  </span>
                  <span className="text-xs sm:text-sm text-[#475569] font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Pillars & Pedagogical Architecture */}
        <section className="py-16 sm:py-24 border-b border-[#E8E2D7]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A21246] font-bold block mb-2">
                Pedagogical Architecture
              </span>
              <h2 className="font-serif text-[30px] sm:text-[40px] text-[#04315D] leading-tight font-normal">
                How This Capability Is Built
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programme.keyPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E8E2D7] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#E8E2D7] flex items-center justify-center font-mono text-xs font-bold text-[#04315D]">
                        0{idx + 1}
                      </span>
                      <h3 className="font-serif text-[22px] font-bold text-[#04315D]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-[#475569] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Classroom Applications */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D7]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A21246] font-bold block mb-2">
                  Field Practice
                </span>
                <h2 className="font-serif text-[30px] sm:text-[38px] text-[#04315D] leading-tight font-normal mb-6">
                  What Learners Actually Do
                </h2>
                <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mb-6">
                  Ignis replaces passive memorization with active inquiry. In every classroom, learning connects directly to community problems, peer collaboration, and genuine student autonomy.
                </p>

                {/* Target Agency Outcome Highlight Card */}
                <div
                  className="rounded-3xl p-6 sm:p-7 border"
                  style={{
                    backgroundColor: `${programme.brandColor}08`,
                    borderColor: `${programme.brandColor}30`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider font-bold" style={{ color: programme.brandColor }}>
                    <Sparkles className="w-4 h-4" />
                    <span>Target Agency Outcome</span>
                  </div>
                  <p className="font-serif text-[18px] text-[#04315D] leading-snug font-medium italic">
                    &ldquo;{programme.agencyOutcome}&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {programme.realLifeExamples.map((example, i) => (
                  <div
                    key={i}
                    className="bg-[#FAF8F5] border border-[#E8E2D7] rounded-2xl p-6 flex items-start gap-4"
                  >
                    <CheckCircle2
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: programme.brandColor }}
                    />
                    <p className="text-[15px] text-[#2D3748] leading-relaxed">
                      {example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Programmes Navigation Carousel/List */}
        <section className="py-16 sm:py-20 bg-[#FAF8F5]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#A21246] font-bold block mb-1">
                  Explore Further
                </span>
                <h3 className="font-serif text-[26px] sm:text-[32px] text-[#04315D] font-normal">
                  Other Pillars in Our Model
                </h3>
              </div>
              <Link
                href="/#programmes"
                className="text-xs sm:text-sm font-semibold text-[#04315D] hover:text-[#A21246] transition-colors"
              >
                View All What We Build →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProgrammes.map((item) => (
                <Link
                  key={item.slug}
                  href={`/programmes/${item.slug}`}
                  className="bg-white border border-[#E8E2D7] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#94A3B8]">
                        PILLAR {item.num}
                      </span>
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.brandColor }}
                      />
                    </div>
                    <h4 className="font-serif text-[20px] font-bold text-[#04315D] mb-2 group-hover:text-[#A21246] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E8E2D7]/60 flex items-center justify-between text-xs font-semibold text-[#04315D]">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
