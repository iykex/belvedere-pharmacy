import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NHSMinimalUnderlineAnimated from "@/components/general/nhs-text-animation";
import { Badge } from "@/components/ui/badge";
import Menu from "@/components/general/navigation-menu";

export default function NHSPharmacyFirstHero() {
  return (
    <>
      <header className="fixed top-0 w-full z-50">
        <Menu className="text-foreground!" />
      </header>
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
                At Belvedere Pharmacy, we prioritise the patient experience in
                our local community. Recognising the challenges in accessing GP
                services for common health concerns, we now offer Free NHS
                Consultations for our local community. Discover the range of
                consultations available through the NHS Pharmacy First service.
                Visit us to learn more and benefit from our accessible
                healthcare solutions.
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
    </>
  );
}
