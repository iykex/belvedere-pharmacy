import Menu from "@/components/general/navigation-menu";
import { ServicesCTA } from "@/components/services/services-cta";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesHeading } from "@/components/services/services-header";
import { WhyChooseUs } from "@/components/services/why-choose-us";

export default function ServicesPage() {
  return (
    <div className="space-y-40 overflow-hidden pt-[10%]">
      <header className="fixed top-0 w-full z-50">
        <Menu className="text-foreground!" />
      </header>
      <ServicesHeading />
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesCTA />
    </div>
  );
}
