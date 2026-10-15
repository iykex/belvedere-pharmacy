import type { Metadata } from "next";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import ClinicalServiceTemplate from "@/components/services/clinical-service-template";
import CTASection from "@/components/shared/cta-section";
import JsonLd from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "COVID-19 Vaccination Belvedere | Book Your COVID Jab | Belvedere Pharmacy",
  description:
    "Official NHS COVID-19 booster vaccination clinic at Belvedere Pharmacy, 11 Picardy Street, Belvedere DA17 5QQ. Protecting seniors aged 65+, vulnerable individuals, and healthcare carers. Accredited NHS vaccination clinic.",
  keywords: [
    "COVID-19 Vaccination Belvedere",
    "covid jab Belvedere",
    "covid booster Belvedere",
    "NHS covid vaccination DA17",
    "walk in covid jab Belvedere",
    "Belvedere Pharmacy covid booster",
  ],
  alternates: {
    canonical: "/services/covid-vaccination",
  },
  openGraph: {
    title: "COVID-19 Vaccination Belvedere | Book Your COVID Jab | Belvedere Pharmacy",
    description:
      "Book your NHS seasonal COVID booster or walk into Belvedere Pharmacy. Accredited NHS seasonal immunisation clinic.",
    url: "/services/covid-vaccination",
    type: "website",
  },
};

const COVID_PROPS = {
  title: "COVID-19 Vaccination & Booster Jab at Belvedere Pharmacy",
  subtitle:
    "Accredited NHS COVID-19 booster immunisation delivering updated variant mRNA protection for seniors, clinically vulnerable patients, carers, and health workers across Belvedere, Kent.",
  category: "nhs" as const,
  fundingBadge: "NHS Commissioned Free Service",
  overview:
    "COVID-19 continues to evolve and circulate across the UK, resulting in increased respiratory hospital admissions among older adults and clinically vulnerable groups during colder months. The NHS seasonal vaccination campaign utilises updated mRNA variant vaccines specifically engineered to boost neutralising antibody levels against current SARS-CoV-2 strains.",
  clinicalImportance:
    "Protection from previous doses or past infection wanes substantially after 6 months. Receiving your seasonal booster bolsters clinical immunity and dramatically reduces the risk of severe illness, long-term complications, and hospital admission.",
  whoIsEligible: [
    "All adults aged 65 and older (including care home residents)",
    "Individuals aged 6 months to 64 years with defined clinical vulnerabilities (asthma on steroids, COPD, heart, kidney, or liver disease, diabetes, immunosuppression)",
    "Pregnant women at any stage of pregnancy",
    "Frontline health and social care workers",
    "Household contacts of individuals with severe immunosuppression",
  ],
  pricingNotes:
    "100% Free of charge for all eligible cohorts under the NHS England seasonal immunisation programme.",
  whatToExpect: [
    "Check-in and NHS cohort verification with our dispensary team.",
    "Pre-injection clinical questions regarding recent illnesses or previous vaccine reactions.",
    "Intramuscular injection by an accredited vaccinator pharmacist in our clean, private consultation room.",
    "Official immunization record automatically synced with your NHS App profile and GP records.",
  ],
  faqs: [
    {
      question: "How do I book my NHS COVID booster at Belvedere Pharmacy?",
      answer:
        "You can book through the NHS National Booking Service (NBS), call NHS 119, or walk into Belvedere Pharmacy directly during our vaccination clinic hours.",
    },
    {
      question: "Can I receive my COVID booster if I recently had COVID-19?",
      answer:
        "If you have active symptoms or a fever, wait until you are fully recovered before getting your booster. No minimum wait period is required once symptoms have resolved.",
    },
    {
      question: "Which vaccine will I receive?",
      answer:
        "The pharmacy administers the latest JCVI-approved updated variant mRNA vaccine supplied directly through the NHS England supply chain.",
    },
    {
      question: "Can I get my seasonal flu jab at the same appointment?",
      answer:
        "Yes, co-administration of the flu jab and COVID booster is safe, effective, and recommended by NHS England. Injections are given in opposite arms.",
    },
  ],
  nhsNbsUrl: "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/",
};

export default function CovidVaccinationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "COVID-19 Seasonal Booster Vaccination",
    description:
      "NHS COVID-19 seasonal booster immunisation clinic at Belvedere Pharmacy, 11 Picardy Street, Belvedere, Kent.",
    procedureType: "https://schema.org/PercutaneousProcedure",
    provider: {
      "@type": "Pharmacy",
      name: "Belvedere Pharmacy",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11 Picardy Street",
        addressLocality: "Belvedere",
        addressRegion: "Kent",
        postalCode: "DA17 5QQ",
        addressCountry: "GB",
      },
      telephone: "+442083114087",
    },
  };

  return (
    <div className="overflow-hidden space-y-12 sm:space-y-20 pb-30 pt-24 sm:pt-28">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "COVID-19 Vaccination",
            path: "/services/covid-vaccination",
          },
        ]}
      />
      <JsonLd data={jsonLd} />
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <main>
        <ClinicalServiceTemplate {...COVID_PROPS} />
        <CTASection />
      </main>
    </div>
  );
}
