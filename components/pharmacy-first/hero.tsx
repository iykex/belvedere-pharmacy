"use client";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import WidthConstraint from "../shared/width-constraint";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "@/public/ui/pfp-banner.png";
import { EXTERNAL_LINKS } from "@/lib/constants/general";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/analytics";

export function HeroSection() {
  return (
    <section className="overflow-hidden relative pb-8">
      <div className="w-full h-full pt-40 px-2 sm:px-0 sm:pt-[10%]">
        <WidthConstraint className="grid lg:grid-cols-2 gap-16 place-items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badges*/}
            <div className="flex flex-wrap gap-3">
              <Badge className="inline-flex items-center gap-2 bg-[#005EB8] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <Shield className="size-4" />
                NHS Accredited
              </Badge>
              <Badge className="inline-flex items-center gap-2 bg-white border-2 border-[#005EB8]/20 text-[#005EB8] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <CheckCircle className="size-4" />
                Certified Pharmacy
              </Badge>
            </div>

            {/*Heading */}
            <h1 className="text-title font-bold text-primary leading-[1.1] tracking-tight">
              Can't get to the GP?
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-white/60 text-lg leading-relaxed max-w-xl lg:text-justify">
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
                href={EXTERNAL_LINKS.actions.bookAppointment}
                onClick={() => {
                  track(
                    TRACKING_EVENTS.bookAppointmentButton,
                    EXTERNAL_LINKS.actions.bookAppointment
                  );
                }}
                className="flex items-center justify-center gap-3"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="size-6.5 stroke-3 transition-all ease-in-out duration-400 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Image src={bannerImage} alt="banner" placeholder="blur" />
          </div>
        </WidthConstraint>
      </div>
    </section>
  );
}
