import Menu from "@/components/shared/navigation-menu";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHeading } from "@/components/services/services-header";
import { WhyChooseUs } from "@/components/services/why-choose-us";
import CTASection from "@/components/shared/cta-section";

export default function ServicesPage() {
  return (
    <div className="space-y-30 mb-30 overflow-hidden pt-34 sm:pt-[10%]">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <ServicesHeading />
      <WhyChooseUs />
      <ServicesGrid />
      <CTASection />
    </div>
  );
}
