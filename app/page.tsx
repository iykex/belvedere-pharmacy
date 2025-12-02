import DownloadAppSection from "@/components/general/download-app-section";
import KeyBenefits from "@/components/general/key-benefits";
import Banner from "@/components/general/landing-page-banner";
import NewsletterSection from "@/components/general/newsletter";
import { OurProcessSection } from "@/components/general/our-process-section";
import { NHSPharmacyFirstSection } from "@/components/general/pharmacy-first-services-section";
import PharmacyServicesMarquee from "@/components/general/pharmacy-services-marquee-section";
import Testimonials from "@/components/general/testimonials-section";

export default function LandingPage() {
  return (
    <div className="space-y-20 overflow-hidden">
      <Banner />
      <PharmacyServicesMarquee />
      <NHSPharmacyFirstSection />
      <KeyBenefits />
      <OurProcessSection />
      <Testimonials />
      <DownloadAppSection />
      <NewsletterSection />
    </div>
  );
}
