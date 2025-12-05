import Menu from "@/components/general/navigation-menu";
import CTASection from "@/components/about/cta-section";
import Banner from "@/components/about/banner";
import OurStorySection from "@/components/about/our-story-section";
import OurValuesSection from "@/components/about/our-values-section";
import TeamSection from "@/components/about/team-section";
import ContactLocationSection from "@/components/about/contact-location";

export default function Page() {
  return (
    <div className="overflow-hidden space-y-20">
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <Banner />
      <OurStorySection />
      <CTASection />
      <OurValuesSection />
      <TeamSection />
      <ContactLocationSection />
    </div>
  );
}
