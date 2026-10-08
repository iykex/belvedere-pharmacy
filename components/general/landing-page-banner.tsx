"use client";

import WidthConstraint from "@/components/shared/width-constraint";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "@/public/ui/home-banner.png";
import { Phone, Building2, Stethoscope, Users, BadgeCheckIcon, ArrowRight } from "lucide-react";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { externalLinkProps } from "@/lib/utils/external-link";

export default function Banner() {
  const { tenant } = useTenantContext();
  const phoneHref = tenant ? `tel:${tenant.phone.replace(/\D/g, "")}` : "#";
  const prescriptionsHref = tenant?.orderPrescriptionsUrl ?? "/services";

  return (
    <section className="relative min-h-[640px] lg:min-h-[740px] pt-28 sm:pt-32 lg:pt-24 pb-16 lg:pb-0 flex items-center bg-white dark:bg-[#001424] overflow-hidden">
      {/* Decorative background watermark rings matching reference design */}
      <div className="absolute -top-10 left-12 size-36 rounded-full border-[10px] border-[#78d6c4]/20 pointer-events-none" />
      <div className="absolute bottom-10 left-4 size-24 rounded-full border-[8px] border-[#78d6c4]/20 pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 size-20 rounded-full border-[8px] border-[#78d6c4]/15 pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative w-full h-full flex items-center">
        <WidthConstraint className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Existing Content formatted with exact reference aesthetics */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 z-10 py-6 lg:py-16">
              {/* NHS Badge */}
              <Badge
                variant="secondary"
                className="border border-[#78d6c4]/40 bg-[#78d6c4]/15 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#1f8775] dark:text-[#78d6c4] shadow-2xs backdrop-blur-xs rounded-full inline-flex items-center"
              >
                <BadgeCheckIcon className="size-4 mr-1.5 text-[#2da594]" />
                NHS & Private Healthcare Services
              </Badge>

              {/* Main Headline - Existing copy with 3-line layout */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Your Trusted <br />
                Partner in <br />
                <span className="text-[#2da594] dark:text-[#78d6c4]">
                  Community Healthcare
                </span>
              </h1>

              {/* Subtitle - Existing copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
                Experience accessible, professional healthcare with expert advice,
                prescription services, and personalized care tailored to your needs.
              </p>

              {/* Action Buttons: Mint "Book an Appointment", White "Call us now!", and "Order Prescriptions" */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Button
                  asChild
                  className="rounded-full bg-[#78d6c4] hover:bg-[#60c9b6] text-white px-7 sm:px-9 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer border-0"
                >
                  <Link
                    href="/book"
                    onClick={() => {
                      track(TRACKING_EVENTS.bookAppointmentButton, "/book");
                    }}
                  >
                    Book an Appointment
                  </Link>
                </Button>

                {phoneHref && (
                  <a
                    href={phoneHref}
                    onClick={() => {
                      track(TRACKING_EVENTS.phoneContactClick, phoneHref);
                    }}
                    className="group inline-flex items-center gap-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md px-6 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95"
                  >
                    <div className="size-7 rounded-full bg-[#78d6c4]/20 flex items-center justify-center text-[#239a85] group-hover:scale-110 transition-transform">
                      <Phone className="size-3.5" />
                    </div>
                    <span>Call us now!</span>
                  </a>
                )}

                <Link
                  href={prescriptionsHref}
                  {...externalLinkProps(prescriptionsHref)}
                  onClick={() => {
                    track(TRACKING_EVENTS.orderPrescriptionButton, prescriptionsHref);
                  }}
                  className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#2da594] dark:hover:text-[#78d6c4] px-3 py-2 transition-colors flex items-center gap-1.5"
                >
                  <span>Order Prescriptions</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Trust Counter Row: Matching reference design badges */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-7 border-t border-slate-100 dark:border-slate-800/80 max-w-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#78d6c4]/20 flex items-center justify-center text-[#239a85] shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      50+
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Services
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#78d6c4]/20 flex items-center justify-center text-[#239a85] shrink-0">
                    <Stethoscope className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      100%
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      NHS Certified
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#78d6c4]/20 flex items-center justify-center text-[#239a85] shrink-0">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      50K+
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Patients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Signature Curved Mint/Teal Organic Shape framing the Existing Photo */}
            <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-end justify-center">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[620px] xl:h-[660px] bg-gradient-to-br from-[#7dd8c6] via-[#70cfbe] to-[#5ec4b6] rounded-3xl lg:rounded-none lg:rounded-bl-[160px] xl:rounded-bl-[220px] overflow-hidden flex items-end justify-center shadow-xl lg:shadow-none">
                {/* Watermark Concentric Rings inside the teal area */}
                <div className="absolute -top-12 right-8 size-56 rounded-full border-[18px] border-white/20 pointer-events-none" />
                <div className="absolute top-1/3 -right-6 size-36 rounded-full border-[10px] border-white/15 pointer-events-none" />
                <div className="absolute bottom-8 right-20 size-24 rounded-full border-[8px] border-white/15 pointer-events-none" />

                {/* Existing Pharmacy Photo */}
                <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
                  <Image
                    src={bannerImage}
                    alt={`${tenant?.displayName ?? "Community pharmacy"} team providing local healthcare`}
                    fill
                    className="object-cover object-center lg:object-right-top transition-transform duration-700 hover:scale-105"
                    priority
                    quality={90}
                    placeholder="blur"
                  />
                  {/* Gentle gradient wash at base for organic transition */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5ec4b6]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </WidthConstraint>
      </div>
    </section>
  );
}
