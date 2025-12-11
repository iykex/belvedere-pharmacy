import CTASection from "@/components/shared/cta-section";
import { HeroSection } from "@/components/pharmacy-first/hero";
import { AboutSection } from "@/components/pharmacy-first/about-programme";
import { ConditionsSection } from "@/components/pharmacy-first/conditions";
import NavigationMenu from "@/components/navigation/navigation-menu";

export default function NHSPharmacyFirstPage() {
  return (
    <div className="pb-30 space-y-20 sm:space-y-30 overflow-hidden">
      <header className="fixed top-0 w-full z-50">
        <NavigationMenu />
      </header>
      <HeroSection />
      <AboutSection />
      <ConditionsSection />
      <CTASection />
    </div>
  );
}
