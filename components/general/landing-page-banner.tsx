import WidthConstraint from "@/components/shared/width-constraint";
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  Clock3,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import bannerImage from "@/public/ui/home-banner.png";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { BannerHeroActionsSkeleton } from "@/components/shared/tenant-skeletons";
import { externalLinkProps } from "@/lib/utils/external-link";
import { HeroCampaignCarousel } from "./hero-campaign-carousel";
import {
  formatAddressInline,
  formatOpeningHoursSummary,
} from "@/lib/utils/format-tenant";

export default function Banner() {
  const { tenant, isTenantReady } = useTenantContext();

  const actionButtons =
    isTenantReady && tenant
      ? [
          {
            text: "Book an Appointment",
            href: "/book",
            variant: "primary" as const,
            icon: true,
            tracking: TRACKING_EVENTS.bookAppointmentButton,
          },
          {
            text: "Order Prescriptions",
            href: tenant.orderPrescriptionsUrl,
            variant: "secondary" as const,
            icon: false,
            tracking: TRACKING_EVENTS.orderPrescriptionButton,
          },
        ]
      : null;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-12 pt-24 lg:min-h-screen lg:h-auto lg:py-16">
      {/* Background Image with CDN optimization */}
      <Image
        src={bannerImage}
        alt={`${tenant?.displayName ?? "Community pharmacy"} team providing local healthcare`}
        fill
        className="object-cover object-center"
        priority
        quality={85}
        placeholder="blur"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#001a33]/82 via-[#001a33]/68 to-[#001a33]/30 dark:from-[#001122]/82 dark:via-[#001122]/68 dark:to-[#001122]/28" />

      {/* Content */}
      <div className="relative w-full h-full flex items-center">
        <WidthConstraint>
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Content - Takes 7 columns */}
            <div className="space-y-7 sm:space-y-8 lg:col-span-7">
              <div className="flex w-fit max-w-full items-center gap-2.5 text-[clamp(0.78rem,1.6vw,1rem)] font-semibold leading-tight text-white sm:gap-3">
                <Image
                  src="/logo/nhs-logo-white-on-blue.webp"
                  alt="NHS"
                  width={70}
                  height={29}
                  className="h-auto w-[clamp(3.75rem,9vw,4.375rem)] shrink-0 object-contain shadow-[0_4px_10px_rgba(0,94,184,0.2)]"
                />
                <span className="truncate">NHS &amp; Private healthcare services</span>
              </div>

              <h1 className="max-w-[13ch] text-[clamp(2rem,5vw,3.75rem)] font-black leading-[0.98] tracking-[-0.04em] text-balance text-white">
                Your Trusted Partner in <br />
                <span className="text-[#F9A825]">Community Healthcare</span>
              </h1>

              <p className="max-w-[58ch] text-[clamp(0.98rem,1.45vw,1.125rem)] font-normal leading-[1.55] text-pretty text-slate-100">
                Experience accessible, professional healthcare with expert
                advice, prescription services, and personalized care tailored to
                your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {actionButtons ? (
                  actionButtons.map((btn) => (
                    <Button
                      key={btn.text}
                      asChild
                      className={
                        btn.variant === "primary"
                          ? "group min-h-14 w-full min-w-0 rounded-full bg-[#F9A825] px-2 py-2 text-[clamp(0.82rem,1.3vw,1rem)] font-black tracking-[0.01em] text-slate-950 shadow-[0_14px_30px_rgba(249,168,37,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffc107] hover:shadow-[0_18px_34px_rgba(249,168,37,0.36)] active:translate-y-0 focus-visible:ring-4 focus-visible:ring-amber-300 sm:w-auto"
                          : "group min-h-14 w-full min-w-0 rounded-full bg-[#001a33]/70 px-[clamp(1rem,3vw,1.5rem)] py-3 text-[clamp(0.82rem,1.3vw,1rem)] font-bold tracking-[0.01em] text-white shadow-[0_12px_26px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#002f4b]/85 hover:shadow-[0_16px_30px_rgba(0,0,0,0.28)] active:translate-y-0 focus-visible:ring-4 focus-visible:ring-white/60 sm:w-auto"
                      }
                    >
                      <Link
                        onClick={() => {
                          track(btn.tracking, btn.href);
                        }}
                        href={btn.href}
                        {...externalLinkProps(btn.href)}
                        className="flex w-full items-center justify-center gap-3"
                      >
                        {btn.icon ? (
                          <CalendarDays aria-hidden className="size-[1.15em] shrink-0" />
                        ) : (
                          <ClipboardList aria-hidden className="size-5" />
                        )}
                        <span className="whitespace-nowrap">{btn.text}</span>
                        {btn.icon && (
                          <span className="ml-auto grid size-9 shrink-0 place-items-center rounded-full bg-slate-950/10 transition-colors duration-300 group-hover:bg-slate-950/15">
                            <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        )}
                      </Link>
                    </Button>
                  ))
                ) : (
                  <BannerHeroActionsSkeleton />
                )}
              </div>

              <div className="flex items-center gap-3 pt-1 sm:pt-2">
                <div className="flex -space-x-2" aria-hidden="true">
                  {["colin-bradbury", "alfrina-thomas", "lesley-sellman", "oeben"].map((name) => (
                    <Image
                      key={name}
                      src={`/testimonials/${name}.png`}
                      alt=""
                      width={40}
                      height={40}
                      className="size-9 rounded-full border-2 border-[#001a33] object-cover sm:size-10"
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-base font-bold text-white sm:text-lg">Thousands</p>
                  <p className="text-xs font-medium text-white/65 sm:text-sm">of patients trust our care</p>
                </div>
              </div>

              {isTenantReady && tenant && (
                <div className="mt-10 grid gap-5 px-1 sm:mt-12 lg:hidden">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-[#6AB8F0]" />
                    <div className="min-w-0">
                      <p className="text-[clamp(0.6rem,0.75vw,0.7rem)] font-semibold uppercase tracking-[0.12em] text-white/55">
                        Find us
                      </p>
                      <p className="mt-0.5 text-[clamp(0.72rem,0.9vw,0.82rem)] font-medium leading-relaxed text-white/90">
                        {formatAddressInline(tenant)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 size-4 shrink-0 text-[#6AB8F0]" />
                    <div className="min-w-0">
                      <p className="text-[clamp(0.6rem,0.75vw,0.7rem)] font-semibold uppercase tracking-[0.12em] text-white/55">
                        Opening hours
                      </p>
                      <p className="mt-0.5 text-[clamp(0.72rem,0.9vw,0.82rem)] font-medium leading-relaxed text-white/90">
                        {formatOpeningHoursSummary(tenant)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side - Dynamic Hero Campaign Carousel - Takes 5 columns */}
            <div className="hidden w-full items-center justify-center lg:col-span-5 lg:flex">
              <HeroCampaignCarousel />
            </div>
          </div>
        </WidthConstraint>
      </div>

    </section>
  );
}
