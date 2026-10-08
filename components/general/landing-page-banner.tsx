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
    <section className="relative min-h-[640px] lg:min-h-[720px] xl:min-h-[760px] pt-28 sm:pt-32 lg:pt-24 pb-16 lg:pb-12 flex items-center bg-[#FFFFFF] dark:bg-[#001424] overflow-hidden">
      {/* Decorative subtle floating teal ring/circle accents on pure white background */}
      <div className="absolute -top-10 left-8 sm:left-14 size-36 sm:size-44 rounded-full border-[10px] sm:border-[12px] border-[#50D3C5]/20 pointer-events-none" />
      <div className="absolute bottom-12 left-4 sm:left-8 size-24 sm:size-32 rounded-full border-[8px] sm:border-[10px] border-[#50D3C5]/20 pointer-events-none" />
      <div className="absolute -bottom-6 left-1/4 size-20 rounded-full border-[6px] border-[#50D3C5]/15 pointer-events-none" />
      <div className="hidden lg:block absolute bottom-6 right-16 size-24 rounded-full border-[8px] border-[#50D3C5]/20 pointer-events-none z-0" />

      {/* Right curved mint/teal diagonal backdrop container on desktop extending to edge */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-6 lg:bottom-10 w-[50%] xl:w-[48%] bg-gradient-to-br from-[#86DCD2] via-[#50D3C5] to-[#45C5B6] rounded-bl-[160px] xl:rounded-bl-[220px] overflow-hidden pointer-events-none shadow-xs">
        {/* Decorative translucent circles inside teal backdrop */}
        <div className="absolute -top-12 right-12 size-60 rounded-full border-[18px] border-white/25 pointer-events-none" />
        <div className="absolute top-1/3 -right-8 size-40 rounded-full border-[12px] border-white/20 pointer-events-none" />
        <div className="absolute bottom-12 right-24 size-28 rounded-full border-[10px] border-white/20 pointer-events-none" />
      </div>

      {/* Main Content Layout */}
      <div className="relative w-full h-full flex items-center">
        <WidthConstraint className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 z-10 py-6 lg:py-16">
              {/* NHS & Private Healthcare Badge */}
              <Badge
                variant="secondary"
                className="border border-[#50D3C5]/40 bg-[#50D3C5]/15 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#1b8073] dark:text-[#50D3C5] rounded-full inline-flex items-center shadow-2xs backdrop-blur-xs"
              >
                <BadgeCheckIcon className="size-4 mr-1.5 text-[#259b8b]" />
                NHS & Private Healthcare Services
              </Badge>

              {/* Headline - Deep charcoal/navy (#1E293B) bold sans-serif text */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] font-extrabold text-[#1E293B] dark:text-white tracking-tight leading-[1.12]">
                Your Trusted <br />
                Partner in <br />
                <span className="text-[#259b8b] dark:text-[#50D3C5]">
                  Community Healthcare
                </span>
              </h1>

              {/* Subheadline - Muted grey (#64748B) paragraph */}
              <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-300 max-w-xl leading-relaxed font-normal">
                Experience accessible, professional healthcare with expert advice,
                prescription services, and personalized care tailored to your needs.
              </p>

              {/* Call-to-Action Group */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                {/* Primary Button: Rounded teal pill button (#50D3C5) */}
                <Button
                  asChild
                  className="rounded-full bg-[#50D3C5] hover:bg-[#45C5B6] text-white px-7 sm:px-9 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer border-0"
                >
                  <Link
                    href="/book"
                    onClick={() => {
                      track(TRACKING_EVENTS.bookAppointmentButton, "/book");
                    }}
                  >
                    Get Started
                  </Link>
                </Button>

                {/* Secondary Action: Phone icon in circular white badge beside Call us now! */}
                {phoneHref && (
                  <a
                    href={phoneHref}
                    onClick={() => {
                      track(TRACKING_EVENTS.phoneContactClick, phoneHref);
                    }}
                    className="group inline-flex items-center gap-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-[#1E293B] dark:text-slate-100 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md px-5 sm:px-6 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95"
                  >
                    <div className="size-7 rounded-full bg-[#50D3C5]/20 flex items-center justify-center text-[#1b8073] group-hover:scale-110 transition-transform">
                      <Phone className="size-3.5" />
                    </div>
                    <span className="text-[#1E293B] dark:text-slate-200 group-hover:text-[#259b8b] transition-colors">
                      Call us now!
                    </span>
                  </a>
                )}

                {/* Order Prescriptions link */}
                <Link
                  href={prescriptionsHref}
                  {...externalLinkProps(prescriptionsHref)}
                  onClick={() => {
                    track(TRACKING_EVENTS.orderPrescriptionButton, prescriptionsHref);
                  }}
                  className="text-sm font-semibold text-[#64748B] dark:text-slate-300 hover:text-[#259b8b] dark:hover:text-[#50D3C5] px-3 py-2 transition-colors flex items-center gap-1.5"
                >
                  <span>Order Prescriptions</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              {/* Social Proof / Metrics Row (Bottom Left): Circular teal background icons */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-7 border-t border-slate-100 dark:border-slate-800/80 max-w-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#50D3C5]/20 flex items-center justify-center text-[#1b8073] shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-[#1E293B] dark:text-white leading-tight">
                      50+
                    </p>
                    <p className="text-xs font-semibold text-[#64748B] dark:text-slate-400">
                      Services
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#50D3C5]/20 flex items-center justify-center text-[#1b8073] shrink-0">
                    <Stethoscope className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-[#1E293B] dark:text-white leading-tight">
                      100%
                    </p>
                    <p className="text-xs font-semibold text-[#64748B] dark:text-slate-400">
                      NHS Certified
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-11 sm:size-12 rounded-full bg-[#50D3C5]/20 flex items-center justify-center text-[#1b8073] shrink-0">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-[#1E293B] dark:text-white leading-tight">
                      50K+
                    </p>
                    <p className="text-xs font-semibold text-[#64748B] dark:text-slate-400">
                      Patients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Element: Existing Medical Team Photo enclosed in curved teal shape */}
            <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-end justify-center z-10">
              <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[580px] xl:h-[640px] rounded-3xl lg:rounded-none lg:rounded-bl-[160px] xl:rounded-bl-[220px] overflow-hidden flex items-end justify-center bg-gradient-to-br from-[#86DCD2] via-[#50D3C5] to-[#45C5B6] lg:bg-transparent shadow-xl lg:shadow-none">
                {/* Mobile / Tablet Rings */}
                <div className="lg:hidden absolute -top-10 right-6 size-44 rounded-full border-[14px] border-white/25 pointer-events-none" />
                <div className="lg:hidden absolute bottom-6 right-8 size-24 rounded-full border-[8px] border-white/20 pointer-events-none" />

                {/* Team Photo */}
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
                  {/* Subtle teal gradient blend at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#45C5B6]/35 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </WidthConstraint>
      </div>
    </section>
  );
}
