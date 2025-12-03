import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NHSMinimalUnderlineAnimated from "@/components/general/nhs-text-animation";
import { Badge } from "@/components/ui/badge";
import Menu from "@/components/general/navigation-menu";
import {
  PFP_BENEFITS,
  PFP_CHECKLIST_ITEMS,
  PFP_CONDITIONS,
} from "@/lib/constants";
import SectionHeader from "@/components/general/section-divider-head";
import IntersectionWrapper from "@/components/wrappers/use-intersection-wrapper";

const AboutSection = () => {
  return (
    <section className="observer-target container py-16 mx-auto">
      <div>
        <SectionHeader heading="About the Programme" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            What is the Pharmacy First Programme?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The NHS Pharmacy First programme allows patients in England and
            Scotland to receive healthcare advice and treatment for various
            common conditions directly from their local pharmacy, reducing the
            strain on GP services.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            At Belvedere Pharmacy, we are committed to offering this valuable
            service to help you access the care you need quickly and
            efficiently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PFP_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 group"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent group-hover:bg-ring transition-colors duration-300">
                  <Icon className="size-6 text-ring group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ConditionsSection = () => {
  return (
    <section className="observer-target container py-16 md:py-24 bg-white mx-auto">
      <div>
        <SectionHeader heading="Health Conditions" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Conditions We Can Help With
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our Pharmacy First service can help you with a range of common
            conditions without needing to see a GP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PFP_CONDITIONS.map((condition, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-60 z-10"></div>
                <img
                  src={condition.image}
                  alt={condition.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-20">
                  {condition.title}
                </h3>
              </div>
              <div className="p-6 grow flex flex-col">
                <p className="text-gray-600 text-sm mb-6 grow">
                  {condition.description}
                </p>
                <Button className="w-full group justify-between">
                  <Link href={""} className="flex">
                    Book your Appointment
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="observer-target container py-16 relative overflow-hidden mx-auto">
      {/* Decorative Brand Blobs */}
      <div className="absolute -top-24 -right-24 size-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 size-64 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left Column: Text & List */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to use our Pharmacy First service?
            </h2>
            <p className="text-white/80 text-lg">
              Book an appointment today and get the care you need without
              waiting for a GP appointment.
            </p>
            <ul className="space-y-2 mt-6">
              {PFP_CHECKLIST_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-3 size-5 text-white shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Action Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4">Book Your Consultation</h3>
            <p className="mb-6">
              Choose a convenient time for your Pharmacy First consultation. Our
              pharmacists are ready to help you.
            </p>
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full text-white hover:text-primary hover:bg-gray-100 shadow-lg"
              >
                <Link href="/appointment"> Book an Appointment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white hover:bg-white/10"
              >
                <Link href="/contact"> Contact Us for More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('/pharmacy-first-banner.svg')] bg-cover bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badges*/}
            <div className="flex flex-wrap gap-3">
              <Badge className="inline-flex items-center gap-2 bg-[#005EB8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Shield className="w-4 h-4" />
                NHS Accredited
              </Badge>
              <Badge className="inline-flex items-center gap-2 bg-white border-2 border-[#005EB8]/20 text-[#005EB8] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <CheckCircle className="w-4 h-4" />
                Certified Pharmacy
              </Badge>
            </div>

            {/*Heading */}
            <h1 className="text-title font-bold text-foreground leading-[1.1] tracking-tight">
              Can't get to the GP?
            </h1>

            {/* Description */}
            <p className="text-card-title leading-relaxed max-w-4xl">
              At Belvedere Pharmacy, we prioritise the patient experience in our
              local community. Recognising the challenges in accessing GP
              services for common health concerns, we now offer Free NHS
              Consultations for our local community. Discover the range of
              consultations available through the NHS Pharmacy First service.
              Visit us to learn more and benefit from our accessible healthcare
              solutions.
            </p>

            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link
                href="/appointment"
                className="flex items-center justify-center gap-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="size-8 stroke-3 transition-all ease-in-out duration-400 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="h-full flex flex-col justify-end ml-auto">
            <NHSMinimalUnderlineAnimated />
          </div>
        </div>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}

export default function NHSPharmacyFirstPage() {
  return (
    <div>
      <header className="fixed top-0 w-full z-50">
        <Menu className="text-foreground!" />
      </header>
      <HeroSection />
      <AboutSection />
      <ConditionsSection />
      <CTASection />
    </div>
  );
}
