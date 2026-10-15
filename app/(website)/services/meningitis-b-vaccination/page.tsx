import type { Metadata } from "next";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import ClinicalServiceTemplate from "@/components/services/clinical-service-template";
import CTASection from "@/components/shared/cta-section";
import JsonLd from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "MenB Vaccination Belvedere | Meningitis B Jab | Belvedere Pharmacy",
  description:
    "Protect against invasive Meningococcal B disease with the Bexsero vaccine at Belvedere Pharmacy, 11 Picardy Street, Belvedere DA17 5QQ. Private clinical immunisation service for infants, teenagers, and university students. Accredited PharmaDoctor clinic.",
  keywords: [
    "MenB Vaccination Belvedere",
    "meningitis b jab Belvedere",
    "bexsero vaccine Belvedere",
    "menb vaccine university",
    "private meningitis b clinic DA17",
    "Belvedere Pharmacy MenB",
  ],
  alternates: {
    canonical: "/services/meningitis-b-vaccination",
  },
  openGraph: {
    title: "MenB Vaccination Belvedere | Meningitis B Jab | Belvedere Pharmacy",
    description:
      "Private Bexsero Meningitis B vaccination clinic at Belvedere Pharmacy, Kent. Protecting babies, adolescents, and university students.",
    url: "/services/meningitis-b-vaccination",
    type: "website",
  },
};

const MEN_B_PROPS = {
  title: "Meningitis B (MenB) Vaccination & Jab at Belvedere Pharmacy",
  subtitle:
    "Comprehensive protection against invasive Meningococcal B bacteria with the Bexsero vaccine for infants, teenagers, university students, and high-risk travellers in Belvedere, Kent.",
  category: "private" as const,
  fundingBadge: "Private Clinical Service",
  overview:
    "Meningococcal group B (MenB) is the most frequent cause of life-threatening bacterial meningitis and septicaemia (blood poisoning) in the United Kingdom. MenB disease progresses aggressively within 24 hours, presenting with fever, severe headache, neck stiffness, light sensitivity, confusion, and a non-blanching purpuric rash. Vaccination with Bexsero stimulates high-affinity bactericidal antibodies against MenB surface proteins, providing proven clinical protection.",
  clinicalImportance:
    "While the routine NHS childhood immunisation programme covers MenB for infants born after May 2015, older children, teenagers, and young adults entering university or communal living are at elevated transmission risk and are not routinely covered by NHS programmes. Our private clinical service bridges this vital protection gap under accredited Patient Group Directions (PGD).",
  whoIsEligible: [
    "Infants and toddlers from 8 weeks of age not covered by routine NHS scheduling",
    "Adolescents and young adults (ages 14 to 25), particularly university freshers in shared halls of residence",
    "Adults with asplenia, splenic dysfunction, or complement deficiency disorders",
    "Travellers visiting high-prevalence areas or the sub-Saharan meningitis belt",
    "Occupational healthcare, emergency, and laboratory workers exposed to meningococcal isolates",
  ],
  scheduleItems: [
    {
      ageGroup: "Infants (2 to 5 months)",
      schedule: "2 doses (separated by at least 2 months)",
      booster: "1 booster dose at 12 to 15 months",
    },
    {
      ageGroup: "Infants (6 to 11 months)",
      schedule: "2 doses (separated by at least 2 months)",
      booster: "1 booster dose in the second year of life",
    },
    {
      ageGroup: "Children (12 to 23 months)",
      schedule: "2 doses (separated by at least 2 months)",
      booster: "1 booster dose 12–23 months after primary series",
    },
    {
      ageGroup: "Adolescents & Adults (2+ years)",
      schedule: "2 doses (separated by at least 1 month)",
      booster: "No booster currently recommended for healthy individuals",
    },
  ],
  pricingNotes:
    "Administered as a 2-dose course. Price per dose includes clinical pre-screening, private consultation suite fee, vaccine cold-chain supply, injection administration, and post-vaccination observation.",
  whatToExpect: [
    "One-on-one pre-vaccination clinical assessment with our trained duty pharmacist.",
    "Verification of medical history, allergies, and concurrent medications.",
    "Intramuscular injection administered in the upper arm (deltoid) or anterolateral thigh.",
    "Paracetamol guidance provided for infants to mitigate post-vaccine fever.",
    "Post-immunisation observation period in our clinic lounge.",
  ],
  faqs: [
    {
      question: "Why is the MenB vaccine recommended for university students?",
      answer:
        "University freshers living in shared accommodation, halls of residence, and colleges are at significantly higher risk of meningococcal carriage and transmission due to dense communal mixing. Vaccination protects against meningitis and meningococcal sepsis.",
    },
    {
      question: "Does the MenACWY school vaccine protect against Meningitis B?",
      answer:
        "No. The routine MenACWY vaccine given in secondary school protects against strains A, C, W, and Y, but offers NO protection against Meningococcal B. Bexsero is required for MenB immunity.",
    },
    {
      question: "Can MenB be administered alongside other vaccines?",
      answer:
        "Yes, Bexsero can be safely administered alongside routine vaccines, including seasonal flu, COVID-19 boosters, HPV, and travel vaccines, using separate injection sites.",
    },
    {
      question: "Are there any side effects with Bexsero?",
      answer:
        "Common reactions include mild tenderness or redness at the injection site, transient low-grade fever, irritability in infants, and mild headache or fatigue in adults. These typically resolve within 24 to 48 hours.",
    },
  ],
};

export default function MeningitisBPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Meningitis B Vaccination (Bexsero) & MenB Jab",
    description:
      "Immunisation service against Neisseria meningitidis serogroup B for adolescents, students, and children at Belvedere Pharmacy, Kent.",
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
            name: "Meningitis B Vaccination",
            path: "/services/meningitis-b-vaccination",
          },
        ]}
      />
      <JsonLd data={jsonLd} />
      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>
      <main>
        <ClinicalServiceTemplate {...MEN_B_PROPS} />
        <CTASection />
      </main>
    </div>
  );
}
