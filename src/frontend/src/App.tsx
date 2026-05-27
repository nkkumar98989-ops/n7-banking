import { Navbar } from "@/components/layout/Navbar";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CoreBankingSection } from "@/components/sections/CoreBankingSection";
import { CtaBannerSection } from "@/components/sections/CtaBannerSection";
import { DigitalBankingSection } from "@/components/sections/DigitalBankingSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-white">
      <Navbar />
      <main className="scroll-smooth">
        <HeroSection />
        <SolutionsSection />
        <CoreBankingSection />
        <CtaBannerSection />
        <section id="resources">
          <InsightsSection />
          <CaseStudiesSection />
        </section>
        <DigitalBankingSection />
      </main>
      <FooterSection id="footer" />
    </div>
  );
}
