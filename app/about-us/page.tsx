import Menu from "@/components/shared/navigation-menu";
import CTASection from "@/components/shared/cta-section";
import Banner from "@/components/about/banner";
import OurStorySection from "@/components/about/our-story-section";
import OurValuesSection from "@/components/about/our-values-section";
import TeamSection from "@/components/about/team-section";
import ContactLocationSection from "@/components/about/contact-location";

export default function Page() {
  return (
    <div className="overflow-hidden space-y-20 sm:space-y-30 mb-30">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <Banner />
      <OurStorySection />
      <OurValuesSection />
      <CTASection />
      <div className="bg-linear-to-br from-primary/5 to-chart-2/5 space-y-30 py-4">
        <TeamSection />
        <ContactLocationSection />
      </div>
    </div>
  );
}
