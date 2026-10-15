"use client";

import { useTenantContext } from "@/components/providers/tenant-provider";
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
import {
  ShieldCheck,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Info,
  Syringe,
  Building2,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { externalLinkProps } from "@/lib/utils/external-link";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import JsonLd from "@/components/shared/json-ld";

export interface ScheduleItem {
  ageGroup: string;
  schedule: string;
  booster?: string;
}

export interface RelatedServiceItem {
  title: string;
  href: string;
  badge: string;
  desc: string;
}

export interface RelatedGuideItem {
  title: string;
  href: string;
  readTime: string;
}

export interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  category: "private" | "nhs" | "both";
  fundingBadge: string;
  overview: string;
  clinicalImportance: string;
  whoIsEligible: string[];
  scheduleItems?: ScheduleItem[];
  pricingNotes?: string;
  whatToExpect: string[];
  faqs: { question: string; answer: string }[];
  nhsNbsUrl?: string;
  relatedServices?: RelatedServiceItem[];
  relatedGuides?: RelatedGuideItem[];
}

const DEFAULT_RELATED_SERVICES: RelatedServiceItem[] = [
  {
    title: "Seasonal Flu Vaccination",
    href: "/services/flu-vaccination",
    badge: "NHS Free & Private",
    desc: "Annual quadrivalent flu jabs for seniors 65+, medical risk groups, pregnant women, and private walk-ins.",
  },
  {
    title: "COVID-19 Seasonal Booster",
    href: "/services/covid-vaccination",
    badge: "NHS Free Service",
    desc: "Official JCVI-approved variant boosters for older adults, immunocompromised patients, and healthcare carers.",
  },
  {
    title: "Meningitis B (MenB) Vaccination",
    href: "/services/meningitis-b-vaccination",
    badge: "Private Clinic",
    desc: "Bexsero immunisation protecting adolescents, university students, and toddlers under accredited PGD.",
  },
  {
    title: "NHS Pharmacy First",
    href: "/pharmacy-first",
    badge: "NHS Treatment",
    desc: "Immediate clinical consultations and prescription treatments for 7 common conditions without GP wait times.",
  },
];

const DEFAULT_RELATED_GUIDES: RelatedGuideItem[] = [
  {
    title: "Who is Eligible for the Free NHS Flu Jab? (2026/27 Guidance)",
    href: "/blogs/who-is-eligible-for-the-nhs-flu-jab",
    readTime: "4 min read",
  },
  {
    title: "Can I Have Flu and COVID Vaccinations Together? Clinical Evidence",
    href: "/blogs/can-i-have-flu-and-covid-vaccinations-together",
    readTime: "4 min read",
  },
  {
    title: "MenB Vaccination: Who is Eligible in 2026? NHS & Private Guide",
    href: "/blogs/menb-vaccine-eligibility-2026",
    readTime: "5 min read",
  },
];

export default function ClinicalServiceTemplate({
  title,
  subtitle,
  category,
  fundingBadge,
  overview,
  clinicalImportance,
  whoIsEligible,
  scheduleItems,
  pricingNotes,
  whatToExpect,
  faqs,
  nhsNbsUrl,
  relatedServices = DEFAULT_RELATED_SERVICES,
  relatedGuides = DEFAULT_RELATED_GUIDES,
}: ServiceTemplateProps) {
  const { tenant } = useTenantContext();
  const privateBookingUrl =
    tenant?.privateBookingUrl || "https://www.phdr.co.uk/2483";

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="space-y-12 sm:space-y-16 py-8">
      <JsonLd data={faqJsonLd} />
      <WidthConstraint>
        {/* Breadcrumb / Back Link */}
        <div className="pb-2">
          <Link
            href="/services"
            className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            ← Back to All Pharmacy Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-card to-background p-6 sm:p-12 shadow-lg">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
                {fundingBadge}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Clinical Vaccination Clinic
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {subtitle}
            </p>

            {/* Current branch confirmation */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1 font-medium text-foreground">
                <MapPin className="size-4 text-primary" />
                {tenant?.displayName ?? "Belvedere Pharmacy"}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="size-4 text-primary" />
                {tenant?.phone ?? "020 8311 4087"}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-4 text-primary" />
                Mon - Fri: 09:00 - 18:30
              </span>
            </div>

            {/* CTA Booking Bar */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              {category !== "nhs" && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md"
                >
                  <a
                    href={privateBookingUrl}
                    {...externalLinkProps(privateBookingUrl)}
                    onClick={() => {
                      track(TRACKING_EVENTS.bookAppointmentButton, privateBookingUrl);
                    }}
                    className="flex items-center gap-2"
                  >
                    <CalendarCheck className="size-4" />
                    Book via PharmaDoctor Portal
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}

              {category !== "private" && (
                <Button
                  asChild
                  size="lg"
                  variant={category === "nhs" ? "default" : "outline"}
                  className="font-bold"
                >
                  <a
                    href={
                      nhsNbsUrl ||
                      "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/"
                    }
                    {...externalLinkProps(
                      nhsNbsUrl ||
                        "https://www.nhs.uk/nhs-services/pharmacies/book-pharmacy-services/"
                    )}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="size-4" />
                    NHS National Booking Service
                  </a>
                </Button>
              )}

              <Button asChild size="lg" variant="ghost" className="font-semibold">
                <Link href="/book">Booking Hub &amp; Walk-ins →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Double-Booking Safety Alert */}
        <div className="mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs sm:text-sm text-foreground flex items-start gap-3">
          <ShieldCheck className="size-5 shrink-0 text-primary mt-0.5" />
          <div>
            <strong>Single Source of Truth Safeguard: </strong>
            To prevent calendar slot conflicts and ensure immediate clinical capacity, private bookings are allocated live via our accredited PharmaDoctor clinical dispensary system. Walk-in patients are also welcome during pharmacy opening hours.
          </div>
        </div>

        {/* Two-Column Details Grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {/* Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Clinical Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Clinical Overview &amp; Importance
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {overview}
              </p>
              <div className="rounded-xl border border-border bg-card p-5 space-y-2">
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-2">
                  <Info className="size-4 text-primary" />
                  Why Vaccination Matters
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {clinicalImportance}
                </p>
              </div>
            </section>

            {/* Who is Eligible / Recommended */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Who Should Receive This Vaccination?
              </h2>
              <div className="rounded-xl border border-border bg-card p-6">
                <ul className="space-y-3">
                  {whoIsEligible.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="size-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Dosage Schedule Table (if provided) */}
            {scheduleItems && scheduleItems.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  Recommended Dosing &amp; Schedule
                </h2>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-muted text-foreground font-semibold">
                      <tr>
                        <th className="p-3">Age / Cohort</th>
                        <th className="p-3">Primary Schedule</th>
                        <th className="p-3">Booster Dose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {scheduleItems.map((row, idx) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          <td className="p-3 font-medium text-foreground">
                            {row.ageGroup}
                          </td>
                          <td className="p-3 text-muted-foreground">
                            {row.schedule}
                          </td>
                          <td className="p-3 text-muted-foreground">
                            {row.booster ?? "Not required"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Frequently Asked Questions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold text-sm sm:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Related Clinical Health Guides */}
            {relatedGuides.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <BookOpen className="size-5 text-primary" />
                    Clinical Health Guides &amp; Advice
                  </h2>
                  <Link
                    href="/blogs"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    All Health Guides →
                  </Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {relatedGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      href={guide.href}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-all flex flex-col justify-between group"
                    >
                      <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <span className="mt-2 text-[11px] text-muted-foreground font-medium">
                        {guide.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related Clinical Services */}
            {relatedServices.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-border">
                <h2 className="text-xl font-bold text-foreground">
                  Related Healthcare Services
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedServices.map((svc, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-[10px] font-bold uppercase tracking-wider font-mono">
                          {svc.badge}
                        </Badge>
                        <h3 className="font-bold text-sm text-foreground">
                          {svc.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {svc.desc}
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-border/60">
                        <Link
                          href={svc.href}
                          className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                        >
                          View Details <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar (1 Column) */}
          <div className="space-y-6">
            {/* Quick Action Card */}
            <Card className="border-2 border-primary/30 shadow-md">
              <CardHeader className="space-y-1">
                <Badge className="w-fit bg-primary text-primary-foreground text-xs">
                  {fundingBadge}
                </Badge>
                <CardTitle className="text-lg font-bold">
                  Book Your Vaccination
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pricingNotes && (
                  <div className="rounded-lg bg-muted/60 p-3 text-xs text-muted-foreground">
                    <strong className="text-foreground">Pricing &amp; Clinical Consultation: </strong>
                    {pricingNotes}
                  </div>
                )}

                <div className="space-y-2">
                  {category !== "nhs" && (
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                    >
                      <a
                        href={privateBookingUrl}
                        {...externalLinkProps(privateBookingUrl)}
                      >
                        Book via PharmaDoctor
                      </a>
                    </Button>
                  )}

                  <Button asChild variant="outline" className="w-full font-semibold">
                    <Link href="/book">
                      View All Booking Options
                    </Link>
                  </Button>
                </div>

                <div className="pt-2 border-t border-border/60 text-xs text-muted-foreground space-y-1">
                  <div className="font-semibold text-foreground">Current Clinic Location:</div>
                  <p>{tenant?.displayName ?? "Belvedere Pharmacy"}</p>
                  <p>{tenant?.address?.line1 ?? "11 Picardy Street"}</p>
                  <p>{tenant?.address?.postcode ?? "DA17 5QQ"}</p>
                  <p className="pt-1">
                    Tel:{" "}
                    <a
                      href={`tel:${tenant?.phone ?? "02083114087"}`}
                      className="text-primary font-medium underline"
                    >
                      {tenant?.phone ?? "020 8311 4087"}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Our Community Branches */}
            <Card className="border border-border">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Building2 className="size-4 text-primary" />
                  Available at All Branches
                </CardTitle>
                <CardDescription className="text-xs">
                  Walk in or book across any Meckay Pharmacy branch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <Link
                  href="/pharmacies/belvedere"
                  className="p-2.5 rounded-lg border border-border/60 hover:border-primary/40 flex items-center justify-between group block"
                >
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Belvedere Pharmacy
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      11 Picardy Street, Belvedere DA17
                    </div>
                  </div>
                  <ArrowRight className="size-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/pharmacies/kidbrooke"
                  className="p-2.5 rounded-lg border border-border/60 hover:border-primary/40 flex items-center justify-between group block"
                >
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Kidbrooke Pharmacy
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      134 Rochester Way, London SE3
                    </div>
                  </div>
                  <ArrowRight className="size-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/pharmacies/lowfield"
                  className="p-2.5 rounded-lg border border-border/60 hover:border-primary/40 flex items-center justify-between group block"
                >
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">
                      Lowfield Pharmacy
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      63 Lowfield Street, Dartford DA1
                    </div>
                  </div>
                  <ArrowRight className="size-3 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="border border-border">
              <CardHeader className="space-y-1">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <Syringe className="size-4 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {whatToExpect.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </WidthConstraint>
    </div>
  );
}
