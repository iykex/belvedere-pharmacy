"use client";

import WidthConstraint from "@/components/shared/width-constraint";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, Building2, Stethoscope, Users } from "lucide-react";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";

export default function Banner() {
  const { tenant } = useTenantContext();
  const phoneHref = tenant ? `tel:${tenant.phone.replace(/\D/g, "")}` : "#";

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] pt-28 sm:pt-32 lg:pt-24 pb-14 lg:pb-0 flex items-center bg-white dark:bg-[#001424] overflow-hidden">
      {/* Decorative background watermark rings matching reference design */}
      <div className="absolute -top-12 left-10 size-44 rounded-full border-[12px] border-[#5ec4b6]/15 pointer-events-none" />
      <div className="absolute bottom-12 left-4 size-28 rounded-full border-[8px] border-[#5ec4b6]/15 pointer-events-none" />
      <div className="absolute -bottom-6 left-1/3 size-20 rounded-full border-[6px] border-[#5ec4b6]/10 pointer-events-none" />

      {/* Main Content Layout */}
      <div className="relative w-full h-full flex items-center">
        <WidthConstraint className="px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Headlines, CTA Buttons, Stats */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 z-10 py-6 lg:py-16">
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.9rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.14]">
                Putting your <br />
                health first with <br />
                <span className="text-[#34a492] dark:text-[#5ec4b6]">
                  empathy and skill
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
                We are leading healthcare facility across our communities
                dedicated to providing exceptional service for all patients.
              </p>

              {/* Action Buttons: "Get Started" and "Call us now!" */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asChild
                  className="rounded-full bg-[#5ec4b6] hover:bg-[#4ab4a5] text-white px-8 sm:px-10 py-6 text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer border-0"
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

                {phoneHref && (
                  <a
                    href={phoneHref}
                    onClick={() => {
                      track(TRACKING_EVENTS.phoneContactClick, phoneHref);
                    }}
                    className="group inline-flex items-center gap-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md px-6 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-95"
                  >
                    <div className="size-8 rounded-full bg-[#5ec4b6]/20 flex items-center justify-center text-[#2ba794] group-hover:scale-110 transition-transform">
                      <Phone className="size-4" />
                    </div>
                    <span>Call us now!</span>
                  </a>
                )}
              </div>

              {/* Trust Counter Row: 50+ Clinics, 2K+ Doctors, 50K+ Patients */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-800/80 max-w-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-10 sm:size-11 rounded-full bg-[#5ec4b6]/20 flex items-center justify-center text-[#238b75] shrink-0">
                    <Building2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      50+
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Clinics
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-10 sm:size-11 rounded-full bg-[#5ec4b6]/20 flex items-center justify-center text-[#238b75] shrink-0">
                    <Stethoscope className="size-5" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                      2K+
                    </p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Doctors
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="size-10 sm:size-11 rounded-full bg-[#5ec4b6]/20 flex items-center justify-center text-[#238b75] shrink-0">
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

            {/* Right Column: Signature Curved Mint/Teal Container with Medical Team Photo */}
            <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-end justify-center">
              <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[600px] xl:h-[640px] bg-gradient-to-br from-[#76d3b9] via-[#5ec4b6] to-[#42b090] rounded-3xl lg:rounded-none lg:rounded-bl-[120px] xl:rounded-bl-[160px] overflow-hidden flex items-end justify-center shadow-xl lg:shadow-none">
                {/* Watermark Rings inside teal background */}
                <div className="absolute top-6 right-6 size-48 rounded-full border-[14px] border-white/20 pointer-events-none" />
                <div className="absolute top-1/3 left-6 size-32 rounded-full border-[10px] border-white/15 pointer-events-none" />
                <div className="absolute bottom-10 right-10 size-24 rounded-full border-[8px] border-white/10 pointer-events-none" />

                {/* Healthcare Team Photo */}
                <div className="relative w-full h-full flex items-end justify-center">
                  <Image
                    src="/ui/medical-team-hero.jpg"
                    alt="NHS and private healthcare clinical staff"
                    fill
                    className="object-cover object-top"
                    priority
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>
        </WidthConstraint>
      </div>
    </section>
  );
}
