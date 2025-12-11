import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHeading } from "@/components/services/services-header";
import { WhyChooseUs } from "@/components/services/why-choose-us";
import CTASection from "@/components/shared/cta-section";
import NavigationMenu from "@/components/navigation/navigation-menu";

export default function ServicesPage() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 pb-30">
      <header className="fixed top-0 w-full z-50">
        <NavigationMenu />
      </header>
      <ServicesHeading />
      <WhyChooseUs />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
