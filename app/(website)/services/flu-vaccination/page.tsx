import type { Metadata } from "next";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import ClinicalServiceTemplate from "@/components/services/clinical-service-template";
import CTASection from "@/components/shared/cta-section";
import JsonLd from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "Flu Jab Belvedere | NHS & Private Flu Vaccination | Belvedere Pharmacy",
  description:
    "Get your seasonal flu jab or walk-in flu vaccination at Belvedere Pharmacy, 11 Picardy Street, Belvedere DA17 5QQ. Free NHS flu jabs for eligible cohorts & private walk-in clinic. Accredited immunisation service in Kent.",
  keywords: [
    "flu jab Belvedere",
    "flu vaccination Belvedere",
    "NHS flu jab Belvedere",
    "private flu jab Belvedere",
    "flu jab DA17",
    "walk in flu jab Belvedere",
    "Belvedere Pharmacy flu clinic",
  ],
  alternates: {
    canonical: "/services/flu-vaccination",
  },
  openGraph: {
    title: "Flu Jab Belvedere | NHS & Private Flu Vaccination | Belvedere Pharmacy",
    description:
      "Official NHS free flu jab clinic & affordable private quadrivalent flu vaccination in Belvedere, Kent. Walk in or book online today.",
    url: "/services/flu-vaccination",
    type: "website",
  },
};

const FLU_PROPS = {
  title: "Flu Vaccination & Flu Jab in Belvedere",
  subtitle:
    "Official NHS free flu jab clinic and walk-in private quadrivalent flu vaccination providing proven clinical protection against seasonal influenza strains for individuals, vulnerable patients, and families across Belvedere, Erith, and Bexley.",
  category: "both" as const,
  fundingBadge: "NHS Free & Private Service",
  overview:
    "Influenza is an acute viral respiratory infection that circulates each winter across the UK. For seniors, pregnant women, and high-risk individuals, seasonal flu can trigger severe complications, pneumonia, hospitalisation, and worsening of underlying conditions. Getting your flu jab updates your immune defenses to match the specific virus strains recommended by the World Health Organization (WHO) and JCVI for the current season.",
  clinicalImportance:
    "Annual immunisation remains the single most effective way to prevent seasonal influenza and protect vulnerable family and community members from transmission. Immunity develops within 10 to 14 days following your vaccination.",
  whoIsEligible: [
    "NHS Free Cohort: Adults aged 65 and over (including anyone turning 65 by 31 March)",
    "NHS Free Cohort: Individuals aged 18 to 64 with qualifying chronic medical conditions (asthma on steroid inhalers, COPD, heart disease, diabetes, chronic kidney/liver conditions, immunosuppression, BMI 40+)",
    "NHS Free Cohort: Pregnant individuals at any gestational stage",
    "NHS Free Cohort: Registered unpaid or paid carers, and frontline health & social care workers",
    "Private Walk-in Clinic: Any individual aged 18+ seeking personal protection against seasonal flu who does not qualify for free NHS provision",
  ],
  pricingNotes:
    "100% Free of charge for eligible NHS cohorts (funded directly by NHS England). Fixed affordable private fee for individuals not qualifying under NHS rules. Corporate flu vouchers accepted.",
  whatToExpect: [
    "Brief clinical eligibility screening and consent verification with our registered duty pharmacist.",
    "Quick intramuscular injection in your upper deltoid muscle in our private consultation room.",
    "NHS summary care record automatically updated and synced with your registered GP surgery.",
    "Immediate guidance on aftercare and managing mild, transient post-injection arm tenderness.",
  ],
  faqs: [
    {
      question: "Can I get my flu jab and COVID booster at the same appointment in Belvedere?",
      answer:
        "Yes! Co-administration of the seasonal flu vaccine and the COVID-19 booster is clinically proven safe and effective. Both vaccines can be given during the same visit in opposite arms.",
    },
    {
      question: "Can the flu vaccine give me the flu?",
      answer:
        "No. Adult flu vaccines used in UK community pharmacies contain inactivated (killed) virus components that cannot multiply or cause influenza infection.",
    },
    {
      question: "Do I need to book an appointment or can I walk in to Belvedere Pharmacy?",
      answer:
        "Both walk-ins and pre-booked slots are welcomed. Walk in during our opening hours (Mon-Fri 09:00 - 18:30) or book online through PharmaDoctor or the NHS National Booking Service.",
    },
    {
      question: "Who qualifies for a free NHS flu jab?",
      answer:
        "Anyone aged 65+, individuals with long-term medical conditions (asthma, diabetes, heart disease), pregnant women, registered carers, and close contacts of immunosuppressed individuals qualify for free NHS vaccination.",
    },
  ],
  nhsNbsUrl: "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/",
};

export default function FluVaccinationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Seasonal Influenza Vaccination & Flu Jab",
    description:
      "Seasonal flu jab and influenza immunisation service at Belvedere Pharmacy for NHS eligible cohorts and private walk-in patients.",
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
            name: "Flu Vaccination",
            path: "/services/flu-vaccination",
          },
        ]}
      />
      <JsonLd data={jsonLd} />
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <main>
        <ClinicalServiceTemplate {...FLU_PROPS} />
        <CTASection />
      </main>
    </div>
  );
}
