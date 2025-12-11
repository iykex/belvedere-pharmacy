import FAQSection from "@/components/contact/faq-section";
import Hero from "@/components/contact/hero";
import ContactLocation from "@/components/contact/contact-location";
import Map from "@/components/contact/map";
import CTASection from "@/components/shared/cta-section";
import NavigationMenu from "@/components/navigation/navigation-menu";

export default function ContactPage() {
  return (
    <div className="overflow-hidden  space-y-20 sm:space-y-30 pb-30">
      <header className="fixed top-0 w-full z-50">
        <NavigationMenu />
      </header>
      <Hero />
      <ContactLocation />
      <Map />
      <FAQSection />
      <CTASection />
    </div>
  );
}
