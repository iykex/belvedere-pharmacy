import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Navigation,
  Train,
  Bus,
  Car,
  Syringe,
  Pill,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import Menu from "@/components/navigation/navigation-menu";
import { BreadcrumbJsonLd } from "@/components/shared/seo/breadcrumb-jsonld";
import JsonLd from "@/components/shared/json-ld";
import CTASection from "@/components/shared/cta-section";
import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { externalLinkProps } from "@/lib/utils/external-link";

export const BRANCH_DETAILS = {
  belvedere: {
    slug: "belvedere",
    name: "Belvedere Pharmacy",
    locality: "Belvedere",
    county: "Kent",
    postcode: "DA17 5QQ",
    addressLine1: "11 Picardy Street",
    phone: "020 8311 4087",
    phoneHref: "tel:02083114087",
    email: "info@belvederepharmacy.com",
    gphcNumber: "1032549",
    superintendent: "Michael Tweneboa-Koduah (MRPharmS)",
    companyName: "MECKAY LIMITED (Company No. 06454698)",
    coordinates: { latitude: 51.4925, longitude: 0.1528 },
    mapUrl: "https://maps.google.com/?q=11+Picardy+Street+Belvedere+DA17+5QQ",
    pharmadoctorUrl: "https://www.phdr.co.uk/2483",
    nhsNbsUrl: "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/",
    openingHours: [
      { day: "Monday", hours: "09:00 – 18:30" },
      { day: "Tuesday", hours: "09:00 – 18:30" },
      { day: "Wednesday", hours: "09:00 – 18:30" },
      { day: "Thursday", hours: "09:00 – 18:30" },
      { day: "Friday", hours: "09:00 – 18:30" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    summaryIntro:
      "Belvedere Pharmacy is your trusted community healthcare and walk-in clinical service provider on Picardy Street in Belvedere, Kent. Operating under superintendent pharmacist Michael Tweneboa-Koduah, we provide accredited NHS prescriptions, Pharmacy First treatments, free NHS flu jabs, COVID-19 boosters, and private Meningitis B (MenB) immunisation in our confidential consultation rooms.",
    areasServed: [
      "Belvedere",
      "Erith",
      "Abbey Wood",
      "Thamesmead",
      "Bexley (DA17 & DA8)",
      "North Heath",
    ],
    transit: {
      train: "Belvedere Railway Station (Southeastern, approx. 4 minutes walk via Picardy Road)",
      buses: "London Bus routes 180, 229, 401, 469, and B12 stop within a short walking distance",
      parking: "Free short-stay street parking bays available along Picardy Street and adjoining streets",
    },
    services: [
      {
        title: "Flu Jab (NHS Free & Private)",
        href: "/services/flu-vaccination",
        badge: "Seasonal Service",
        desc: "Annual quadrivalent flu vaccination for seniors 65+, clinical cohorts, pregnant women, and private walk-ins.",
      },
      {
        title: "COVID-19 Seasonal Booster",
        href: "/services/covid-vaccination",
        badge: "NHS Free Service",
        desc: "Variant-updated COVID-19 booster vaccinations under the NHS England seasonal campaign.",
      },
      {
        title: "Meningitis B (MenB) Clinic",
        href: "/services/meningitis-b-vaccination",
        badge: "Private Clinic",
        desc: "Bexsero immunisation for infants, adolescents, and university students under accredited PGD.",
      },
      {
        title: "NHS Pharmacy First",
        href: "/pharmacy-first",
        badge: "NHS Treatment",
        desc: "Immediate clinical consultation and prescription-only medications for 7 common minor ailments without seeing a GP.",
      },
      {
        title: "Electronic Prescription Service (EPS)",
        href: "/services",
        badge: "NHS Dispensing",
        desc: "Fast, accurate dispensing of electronic GP repeat prescriptions with text message collection alerts.",
      },
      {
        title: "Blood Pressure Checks",
        href: "/services",
        badge: "NHS Health Check",
        desc: "Free NHS cardiovascular risk screening and ambulatory blood pressure monitoring for adults aged 40+.",
      },
    ],
    faqs: [
      {
        q: "Do I need to book in advance for a flu jab or Pharmacy First at Belvedere?",
        a: "Both walk-ins and pre-booked slots are warmly welcomed. You can walk in during opening hours (Mon-Fri 09:00 - 18:30) or book online through our PharmaDoctor and NHS NBS portals.",
      },
      {
        q: "How close is Belvedere Pharmacy to the train station?",
        a: "We are located at 11 Picardy Street, just a 4-minute walk (approx. 300 metres) from Belvedere Railway Station.",
      },
      {
        q: "Can I nominate Belvedere Pharmacy for my NHS repeat prescriptions?",
        a: "Yes. Simply nominate Belvedere Pharmacy via the NHS App or ask our dispensary team to set us as your electronic prescription nomination.",
      },
    ],
  },
  kidbrooke: {
    slug: "kidbrooke",
    name: "Kidbrooke Pharmacy",
    locality: "Kidbrooke",
    county: "London SE",
    postcode: "SE3 8AR",
    addressLine1: "134 Rochester Way",
    phone: "020 8319 0115",
    phoneHref: "tel:02083190115",
    email: "info@kidbrookepharmacy.com",
    gphcNumber: "1040316",
    superintendent: "Michael Tweneboa-Koduah (MRPharmS)",
    companyName: "MECKAY LIMITED (Company No. 06454698)",
    coordinates: { latitude: 51.4644, longitude: 0.0384 },
    mapUrl: "https://maps.google.com/?q=134+Rochester+Way+London+SE3+8AR",
    pharmadoctorUrl: "https://www.phdr.co.uk/500",
    nhsNbsUrl: "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/",
    openingHours: [
      { day: "Monday", hours: "09:00 – 18:00" },
      { day: "Tuesday", hours: "09:00 – 18:00" },
      { day: "Wednesday", hours: "09:00 – 18:00" },
      { day: "Thursday", hours: "09:00 – 18:00" },
      { day: "Friday", hours: "09:00 – 18:00" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    summaryIntro:
      "Kidbrooke Pharmacy is your accredited NHS community pharmacy on Rochester Way in Kidbrooke, South East London (SE3). Serving local residents across Kidbrooke, Blackheath, and Eltham, we provide dedicated clinical consultations, NHS Pharmacy First treatments, seasonal flu jabs, COVID-19 boosters, and private travel and MenB immunisations in our modern consultation suite.",
    areasServed: [
      "Kidbrooke",
      "Blackheath",
      "Eltham",
      "Greenwich (SE3 & SE10)",
      "Lee",
      "Kidbrooke Village",
    ],
    transit: {
      train: "Kidbrooke Station and Blackheath Station (Southeastern, frequent connections to London Bridge & Charing Cross)",
      buses: "London Bus routes 132, 286, and 386 stop directly along Rochester Way and surrounding roads",
      parking: "Dedicated street-level parking bays available directly in front of the parade",
    },
    services: [
      {
        title: "Flu Jab (NHS Free & Private)",
        href: "/services/flu-vaccination",
        badge: "Seasonal Service",
        desc: "Annual quadrivalent flu vaccination clinic for eligible NHS patients and private walk-in customers.",
      },
      {
        title: "COVID-19 Seasonal Booster",
        href: "/services/covid-vaccination",
        badge: "NHS Free Service",
        desc: "Official NHS COVID-19 booster vaccinations delivering updated variant protection for seniors and vulnerable patients.",
      },
      {
        title: "Meningitis B (MenB) Clinic",
        href: "/services/meningitis-b-vaccination",
        badge: "Private Clinic",
        desc: "Bexsero immunisation course protecting teenagers, university freshers, and children under private PGD.",
      },
      {
        title: "NHS Pharmacy First",
        href: "/pharmacy-first",
        badge: "NHS Treatment",
        desc: "Consultations and fast prescription treatments for sinusitis, sore throats, earache, infected bites, and UTIs.",
      },
      {
        title: "NHS Blood Pressure Check",
        href: "/services",
        badge: "NHS Screening",
        desc: "Walk-in blood pressure measurement and cardiovascular health guidance for adults aged 40+.",
      },
      {
        title: "NHS Contraception Service",
        href: "/services",
        badge: "NHS Confidential",
        desc: "Free initiation and ongoing supply of oral contraceptive pills in private consultation.",
      },
    ],
    faqs: [
      {
        q: "Where is Kidbrooke Pharmacy located?",
        a: "We are situated at 134 Rochester Way, London SE3 8AR, with easy public transit and parking outside.",
      },
      {
        q: "Can I receive both flu and COVID vaccinations at Kidbrooke Pharmacy?",
        a: "Yes. Where eligible, we offer co-administration so you can receive your flu jab and COVID booster at the same appointment.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book online via our PharmaDoctor booking portal, NHS National Booking Service, or by calling 020 8319 0115.",
      },
    ],
  },
  lowfield: {
    slug: "lowfield",
    name: "Lowfield Pharmacy",
    locality: "Dartford",
    county: "Kent",
    postcode: "DA1 1HP",
    addressLine1: "63 Lowfield Street",
    phone: "01322 220779",
    phoneHref: "tel:01322220779",
    email: "info@lowfieldpharmacy.co.uk",
    gphcNumber: "1032871",
    superintendent: "Michael Tweneboa-Koduah (MRPharmS)",
    companyName: "MECKAY LIMITED (Company No. 06454698)",
    coordinates: { latitude: 51.4428, longitude: 0.2185 },
    mapUrl: "https://maps.google.com/?q=63+Lowfield+Street+Dartford+DA1+1HP",
    pharmadoctorUrl: "https://www.phdr.co.uk/6430",
    nhsNbsUrl: "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/",
    openingHours: [
      { day: "Monday", hours: "09:00 – 18:00" },
      { day: "Tuesday", hours: "09:00 – 18:00" },
      { day: "Wednesday", hours: "09:00 – 18:00" },
      { day: "Thursday", hours: "09:00 – 18:00" },
      { day: "Friday", hours: "09:00 – 18:00" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    summaryIntro:
      "Lowfield Pharmacy is an accredited community healthcare clinic located at 63 Lowfield Street in the heart of Dartford, Kent (DA1). We provide comprehensive NHS prescription services, Pharmacy First clinical assessments, walk-in seasonal flu vaccinations, COVID-19 boosters, and private Meningitis B immunisations for residents across Dartford, Stone, Crayford, and Wilmington.",
    areasServed: [
      "Dartford Town Centre",
      "Stone",
      "Crayford",
      "Wilmington",
      "Darenth",
      "Dartford (DA1 & DA2)",
    ],
    transit: {
      train: "Dartford Railway Station (approx. 8–10 minutes walk, direct links to London Charing Cross, Cannon Street & Gravesend)",
      buses: "Arriva Kent Thameside and Fastrack buses stop along Lowfield Street and Dartford Town Centre",
      parking: "Nearby town centre car parks including Priory Shopping Centre and on-street pay-and-display bays",
    },
    services: [
      {
        title: "Flu Jab (NHS Free & Private)",
        href: "/services/flu-vaccination",
        badge: "Seasonal Service",
        desc: "Annual influenza vaccinations for Dartford seniors, clinical risk groups, carers, and private walk-ins.",
      },
      {
        title: "COVID-19 Seasonal Booster",
        href: "/services/covid-vaccination",
        badge: "NHS Free Service",
        desc: "Accredited NHS vaccination clinic administering variant-adapted mRNA booster doses.",
      },
      {
        title: "Meningitis B (MenB) Clinic",
        href: "/services/meningitis-b-vaccination",
        badge: "Private Clinic",
        desc: "Bexsero immunisation course for toddlers, adolescents, and college students under private PGD.",
      },
      {
        title: "NHS Pharmacy First",
        href: "/pharmacy-first",
        badge: "NHS Treatment",
        desc: "Same-day consultation and prescription treatment for 7 common conditions without a GP appointment.",
      },
      {
        title: "NHS Contraception Service",
        href: "/services",
        badge: "NHS Free Service",
        desc: "Free confidential consultation and repeat supply of oral contraception for women.",
      },
      {
        title: "Blood Pressure Checks",
        href: "/services",
        badge: "NHS Health Check",
        desc: "Free NHS hypertension screening and advice for adults aged 40 and older.",
      },
    ],
    faqs: [
      {
        q: "Where in Dartford is Lowfield Pharmacy located?",
        a: "We are at 63 Lowfield Street, Dartford DA1 1HP, just south of the town centre near Central Park.",
      },
      {
        q: "Can I walk in for a flu jab in Dartford?",
        a: "Yes, walk-ins are welcome daily during opening hours (Mon-Fri 09:00 - 18:00). You can also reserve a slot online.",
      },
      {
        q: "What NHS Pharmacy First conditions do you treat?",
        a: "We evaluate and treat earache, sore throat, sinusitis, infected insect bites, impetigo, shingles, and uncomplicated UTIs in women.",
      },
    ],
  },
} as const;

export function generateStaticParams() {
  return [
    { slug: "belvedere" },
    { slug: "kidbrooke" },
    { slug: "lowfield" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = BRANCH_DETAILS[slug as keyof typeof BRANCH_DETAILS];

  if (!branch) {
    return {
      title: "Pharmacy Branch Not Found",
    };
  }

  const title = `${branch.name} | NHS & Community Pharmacy in ${branch.locality}, ${branch.county} ${branch.postcode.split(" ")[0]}`;
  const description = `${branch.name} at ${branch.addressLine1}, ${branch.locality} ${branch.postcode}. NHS repeat prescriptions, walk-in flu jabs, COVID boosters, Meningitis B clinic, and Pharmacy First care. Tel: ${branch.phone}.`;

  return {
    title,
    description,
    keywords: [
      branch.name,
      `pharmacy ${branch.locality}`,
      `flu jab ${branch.locality}`,
      `COVID vaccination ${branch.locality}`,
      `MenB vaccination ${branch.locality}`,
      `pharmacy near me ${branch.locality}`,
      branch.postcode,
      "NHS Pharmacy",
      "Pharmacy First",
    ],
    alternates: {
      canonical: `/pharmacies/${branch.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_GB",
      url: `/pharmacies/${branch.slug}`,
    },
  };
}

export default async function BranchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branch = BRANCH_DETAILS[slug as keyof typeof BRANCH_DETAILS];

  if (!branch) {
    notFound();
  }

  const otherBranches = Object.values(BRANCH_DETAILS).filter(
    (b) => b.slug !== branch.slug
  );

  const pharmacyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    name: branch.name,
    image: "/ui/home-banner.png",
    telephone: branch.phone,
    email: branch.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.addressLine1,
      addressLocality: branch.locality,
      addressRegion: branch.county,
      postalCode: branch.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.coordinates.latitude,
      longitude: branch.coordinates.longitude,
    },
    url: `https://www.${branch.slug === "lowfield" ? "lowfieldpharmacy.com" : `${branch.slug}pharmacy.com`}/pharmacies/${branch.slug}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: branch.slug === "belvedere" ? "18:30" : "18:00",
      },
    ],
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pharmacy Clinical Services",
      itemListElement: branch.services.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: svc.title,
          description: svc.desc,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: branch.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="overflow-hidden space-y-12 sm:space-y-16 pb-28 pt-24 sm:pt-28 bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Pharmacies", path: "/pharmacies" },
          { name: branch.name, path: `/pharmacies/${branch.slug}` },
        ]}
      />
      <JsonLd data={pharmacyJsonLd} />
      <JsonLd data={faqJsonLd} />

      <header className="fixed top-0 w-full z-50">
        <Menu />
      </header>

      <main>
        <WidthConstraint className="space-y-12 sm:space-y-16">
          {/* Breadcrumb Navigation */}
          <div>
            <Link
              href="/pharmacies"
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
            >
              ← Back to All Pharmacy Locations
            </Link>
          </div>

          {/* Branch Hero Section */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-card to-background p-6 sm:p-12 shadow-lg">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 flex items-center gap-1.5 shadow-sm">
                  <Building2 className="size-3.5" />
                  NHS Community Pharmacy
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-xs">
                  GPhC Reg: {branch.gphcNumber}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight">
                {branch.name} — Healthcare &amp; Clinical Services in {branch.locality}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {branch.summaryIntro}
              </p>

              {/* Contact Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70">
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span>
                    {branch.addressLine1}, {branch.locality} {branch.postcode}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70">
                  <Phone className="size-4 text-primary shrink-0" />
                  <a
                    href={branch.phoneHref}
                    className="font-bold text-primary hover:underline"
                  >
                    {branch.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border/70">
                  <Clock className="size-4 text-primary shrink-0" />
                  <span>Mon – Fri: 09:00 – {branch.slug === "belvedere" ? "18:30" : "18:00"}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                >
                  <a
                    href={branch.pharmadoctorUrl}
                    {...externalLinkProps(branch.pharmadoctorUrl)}
                    className="flex items-center gap-2"
                  >
                    <CalendarCheck className="size-4" />
                    Book Service via PharmaDoctor
                    <ExternalLink className="size-4" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="font-semibold">
                  <a
                    href={branch.mapUrl}
                    {...externalLinkProps(branch.mapUrl)}
                    className="flex items-center gap-2"
                  >
                    <Navigation className="size-4 text-primary" />
                    Get Directions (Google Maps)
                  </a>
                </Button>

                <Button asChild size="lg" variant="ghost" className="font-semibold">
                  <a href={branch.phoneHref} className="flex items-center gap-2">
                    <Phone className="size-4" />
                    Call Pharmacy
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Clinical Governance Notice */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 text-xs sm:text-sm text-foreground flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="size-6 text-primary shrink-0" />
              <div>
                <strong>Superintendent Clinical Governance: </strong>
                Operated by {branch.companyName} under Superintendent Pharmacist {branch.superintendent}. Fully inspected and regulated by the General Pharmaceutical Council (GPhC).
              </div>
            </div>
            <Badge variant="outline" className="border-primary/40 font-mono text-xs">
              GPhC #{branch.gphcNumber}
            </Badge>
          </div>

          {/* Two-Column Grid: Services + Branch Details */}
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left 2 Columns: Clinical Services available at this branch */}
            <div className="lg:col-span-2 space-y-8">
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Clinical Services at {branch.name}
                  </h2>
                  <Badge variant="secondary" className="text-xs">
                    Walk-in &amp; Bookable
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our fully qualified clinical pharmacists offer private and NHS healthcare consultations on-site in {branch.locality}.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {branch.services.map((service, idx) => (
                    <Card
                      key={idx}
                      className="border border-border/80 hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
                    >
                      <CardHeader className="space-y-1.5 pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-[10px] font-bold uppercase tracking-wider font-mono">
                            {service.badge}
                          </Badge>
                          <Syringe className="size-4 text-primary/70" />
                        </div>
                        <CardTitle className="text-base font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-xs text-muted-foreground leading-relaxed">
                          {service.desc}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <Link
                          href={service.href}
                          className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore Service &amp; Eligibility</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Transit, Parking, and Local Directions */}
              <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground">
                  How to Find Us &amp; Parking in {branch.locality}
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="p-4 rounded-xl border border-border bg-card space-y-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                      <Train className="size-4 text-primary" />
                      <span>By Train</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {branch.transit.train}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                      <Bus className="size-4 text-primary" />
                      <span>By Bus</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {branch.transit.buses}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-2">
                    <div className="flex items-center gap-2 font-bold text-sm text-foreground">
                      <Car className="size-4 text-primary" />
                      <span>Parking</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {branch.transit.parking}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-muted/40 text-xs text-muted-foreground space-y-1">
                  <div className="font-semibold text-foreground">Areas Proudly Served:</div>
                  <p>{branch.areasServed.join(" • ")}</p>
                </div>
              </section>

              {/* Branch FAQs */}
              <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <HelpCircle className="size-6 text-primary" />
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {branch.faqs.map((faq, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Right 1 Column: Operating Hours & Direct Booking Sidebar */}
            <div className="space-y-6">
              {/* Hours Card */}
              <Card className="border border-border shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <Clock className="size-4 text-primary" />
                    Opening Hours
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Accredited duty pharmacists available during all open hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="divide-y divide-border/60 text-xs">
                    {branch.openingHours.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-2">
                        <span className="font-medium text-foreground">{item.day}</span>
                        <span
                          className={
                            item.hours === "Closed"
                              ? "font-semibold text-muted-foreground"
                              : "font-bold text-primary"
                          }
                        >
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-sm"
                    >
                      <a
                        href={branch.pharmadoctorUrl}
                        {...externalLinkProps(branch.pharmadoctorUrl)}
                      >
                        Book Appointment at this Branch
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information Card */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-base font-bold">
                    Direct Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Address:</span>
                    <p>{branch.addressLine1}</p>
                    <p>{branch.locality}, {branch.county}</p>
                    <p>{branch.postcode}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Telephone:</span>
                    <p>
                      <a
                        href={branch.phoneHref}
                        className="text-primary font-bold underline"
                      >
                        {branch.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Email:</span>
                    <p>{branch.email}</p>
                  </div>
                  <div className="pt-2 border-t border-border text-[11px]">
                    <span className="font-semibold text-foreground">NHS NBS Booking:</span>
                    <p className="mt-1">
                      <a
                        href={branch.nhsNbsUrl}
                        {...externalLinkProps(branch.nhsNbsUrl)}
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        NHS National Booking Service <ExternalLink className="size-3" />
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Other Branches in Group */}
              <Card className="border border-border/80 bg-muted/20">
                <CardHeader>
                  <CardTitle className="text-sm font-bold">
                    Other Meckay Pharmacy Branches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-xs">
                  {otherBranches.map((other) => (
                    <div
                      key={other.slug}
                      className="p-3 rounded-lg border border-border/70 bg-card space-y-1"
                    >
                      <div className="font-bold text-foreground">{other.name}</div>
                      <div className="text-muted-foreground">
                        {other.addressLine1}, {other.locality} ({other.postcode})
                      </div>
                      <div className="pt-1 flex items-center justify-between">
                        <a
                          href={other.phoneHref}
                          className="font-medium text-primary hover:underline"
                        >
                          {other.phone}
                        </a>
                        <Link
                          href={`/pharmacies/${other.slug}`}
                          className="text-primary font-bold hover:underline inline-flex items-center gap-0.5"
                        >
                          View Branch <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </WidthConstraint>
      </main>

      <CTASection />
    </div>
  );
}
