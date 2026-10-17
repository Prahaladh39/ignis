import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import UspSection from "@/components/UspSection";
import LearningModelSection from "@/components/LearningModelSection";
import ProgrammesSection from "@/components/ProgrammesSection";
import FutureActionSection from "@/components/FutureActionSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Editorial Header Navigation */}
      <Navbar />

      {/* Recreated Authentic Hero Section */}
      <HeroSection />

      {/* Detached Counter Up / Proof Points Section */}
      <MetricsSection />

      {/* Section 8: Final Action / Partnerships (Can education help young people shape their own futures?) */}
      <FutureActionSection />

      {/* Core Proposition / USP Section */}
      <UspSection />

      {/* The Ignis Learning Model (From knowledge to capability) */}
      <LearningModelSection />

      {/* Section 7: Programmes (What we build) */}
      <ProgrammesSection />

      {/* Floating Sticky CTA on Scroll */}
      <FloatingCta />

      {/* Institutional Footer */}
      <Footer />
    </main>
  );
}
