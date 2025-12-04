import { ArrowRight, Calendar, CheckCircle, Shield } from "lucide-react";
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
import Image from "next/image";
import WidthConstraint from "@/components/shared/width-constraint";

const AboutSection = () => {
  return (
    <section className="observer-target space-y-14">
      <WidthConstraint className="space-y-8">
        <SectionHeader heading="About the Programme" />
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-card-title font-bold tracking-tight text-foreground">
            What is the Pharmacy First Programme?
          </h2>
          <p className="text-gray-600 leading-9">
            The NHS Pharmacy First programme allows patients in England and
            Scotland to receive healthcare advice and treatment for various
            common conditions directly from their local pharmacy, reducing the
            strain on GP services. At Belvedere Pharmacy, we are committed to
            offering this valuable service to help you access the care you need
            quickly and efficiently.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PFP_BENEFITS.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/20 group"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent group-hover:bg-ring transition-colors duration-300">
                  <Icon className="size-6 text-ring group-hover:text-white" />
                </div>
                <h3 className="text- font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </WidthConstraint>
    </section>
  );
};

const ConditionsSection = () => {
  return (
    <section className="observer-target space-y-14">
      <WidthConstraint className="space-y-8">
        <SectionHeader heading="Health Conditions" />
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-card-title font-bold tracking-tight text-foreground">
            Conditions We Can Help With
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Our Pharmacy First service can help you with a range of common
            conditions without needing to see a GP.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-10">
          {PFP_CONDITIONS.map((condition, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 flex flex-col h-full max-w-md relative"
            >
              <Badge className="absolute top-4 right-4 z-20 bg-[#005EB8] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {condition.badge}
              </Badge>
              <div className="relative h-54 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 to-transparent opacity-60 z-10"></div>
                <Image
                  src={condition.image}
                  alt={condition.title}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-4 text-card-title font-bold text-white z-20">
                  {condition.title}
                </h3>
              </div>
              <div className="p-6 grow flex flex-col">
                <p className="mb-6 grow opacity-70">{condition.description}</p>
                <Button className="group w-fit mx-auto">
                  <Link href={""} className="flex items-center">
                    <Calendar className="mr-2 size-4 transition-transform group-hover:translate-x-1" />
                    Book your Appointment
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="observer-target relative space-y-14">
      {/* Decorative Brand Blobs */}
      <div className="absolute -top-24 -right-24 size-64 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 size-64 rounded-full bg-white/10 blur-3xl"></div>

      <WidthConstraint className="relative z-10">
        <div className="grid gap-8 md:grid-cols-2 place-items-center">
          {/* Left Column: Text & List */}
          <div className="space-y-4">
            <h2 className="text-card-title font-bold tracking-tight">
              Ready to use our Pharmacy First service?
            </h2>
            <p className="text-base max-w-xl text-foreground/70">
              Book an appointment today and get the care you need without
              waiting for a GP appointment.
            </p>
            <ul className="space-y-4 text-foreground/70">
              {PFP_CHECKLIST_ITEMS.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="mr-3 size-5 text-green-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Action Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-sm max-w-2xl space-y-5">
            <h3 className="text-card-title font-bold">
              Book Your Consultation
            </h3>
            <p className="text-base text-foreground/70">
              Choose a convenient time for your Pharmacy First consultation. Our
              pharmacists are ready to help you.
            </p>
            <div className="space-y-4 flex flex-col sm:flex-row justify-between gap-4 ">
              <Button
                size="lg"
                className="w-fit text-white hover:text-primary hover:bg-gray-100 shadow-lg"
              >
                <Link href="/appointment"> Book an Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-fit">
                <Link href="/contact"> Contact Us for More Information</Link>
              </Button>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('/pexels.png')] bg-cover bg-center">
      <div className="w-full h-full min-h-screen pt-[10%] bg-linear-to-r from-[#002f4b] from-2% ">
        <WidthConstraint className="grid lg:grid-cols-2 gap-16 place-items-center">
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
            <h1 className="text-title font-bold text-primary leading-[1.1] tracking-tight">
              Can't get to the GP?
            </h1>

            {/* Description */}
            <p className="text-card-title leading-relaxed max-w-4xl font-medium text-background">
              At Belvedere Pharmacy, we prioritise the patient experience in our
              local community. Recognising the challenges in accessing GP
              services for common health concerns, we now offer Free NHS
              Consultations for our local community.
            </p>

            <Button
              asChild
              size="default"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[20px] px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="h-full flex flex-col justify-end ml-auto pr-6">
            <NHSMinimalUnderlineAnimated />
          </div>
        </WidthConstraint>
      </div>
      {/* Bottom fade transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}

export function NHSImageCard() {
  return (
    <WidthConstraint className="observer-target max-w-5xl">
      <Image
        src="/nhs.jpg"
        alt="NHS"
        width={500}
        height={500}
        loading="lazy"
        className="w-full rounded-xl"
      />
    </WidthConstraint>
  );
}

export default function NHSPharmacyFirstPage() {
  return (
    <div className="space-y-25 overflow-hidden">
      <header className="fixed top-0 w-full z-50">
        <Menu className="backdrop-blur-3xl!" />
      </header>
      <HeroSection />
      <AboutSection />
      <NHSImageCard />
      <ConditionsSection />
      <CTASection />
    </div>
  );
}
