import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import UspSection from "@/components/UspSection";
import LearnerAgencySection from "@/components/LearnerAgencySection";
import LearningModelSection from "@/components/LearningModelSection";
import ImpactSection from "@/components/ImpactSection";
import GeographySection from "@/components/GeographySection";
import ProgrammesSection from "@/components/ProgrammesSection";
import FutureActionSection from "@/components/FutureActionSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Editorial Header Navigation */}
      <Navbar />

      {/* Recreated Authentic Hero Section */}
      <HeroSection />

      {/* Detached Counter Up / Proof Points Section */}
      <MetricsSection />

      {/* Core Proposition / USP Section */}
      <UspSection />

      {/* Section 3: Learner Agency Section */}
      <LearnerAgencySection />

      {/* Section 4: The Ignis Learning Model (From knowledge to capability) */}
      <LearningModelSection />

      {/* Section 5: Impact Numbers (12 years of learning in the real world) */}
      <ImpactSection />

      {/* Section 6: Geographic Spread (Learning across different contexts) */}
      <GeographySection />

      {/* Section 7: Programmes (What we build) */}
      <ProgrammesSection />

      {/* Section 8: Final Action (Can education help young people shape their own futures?) */}
      <FutureActionSection />

      {/* Institutional Footer */}
      <Footer />
    </main>
  );
}
