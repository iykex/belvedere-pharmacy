"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Pill, Stethoscope, UsersRound } from "lucide-react";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { BannerHeroActionsSkeleton } from "@/components/shared/tenant-skeletons";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import { externalLinkProps } from "@/lib/utils/external-link";
import { formatAddressInline, formatOpeningHoursSummary } from "@/lib/utils/format-tenant";
import { HeroCampaignCarousel } from "./hero-campaign-carousel";
import "@/styles/home-hero.css";

const highlights = [
  { line1: "Expert", line2: "Advice", icon: Stethoscope, tone: "blue" },
  { line1: "Prescription", line2: "Services", icon: Pill, tone: "green" },
  { line1: "Personalized", line2: "Care", icon: UsersRound, tone: "yellow" },
] as const;

export default function Banner() {
  const { tenant, isTenantReady } = useTenantContext();

  return (
    <section className="bp-hero" aria-labelledby="bp-hero-title">
      <svg className="bp-hero__clip" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="bp-hero-backdrop-mask" clipPathUnits="objectBoundingBox">
            <path d="M .19 0 H 1 V 1 C .79 .985 .55 .945 .33 .915 C .2 .895 .16 .83 .145 .74 C .13 .64 .08 .57 .055 .46 C .025 .35 .035 .25 .075 .17 C .115 .085 .14 .025 .19 0 Z" />
          </clipPath>
          <clipPath id="bp-hero-mobile-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 H 1 V .8 C .9 .885 .77 .955 .56 .995 C .36 1 .16 .93 0 .81 Z" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="bp-hero__sweep"
        viewBox="0 0 1600 150"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 150 H530 C580 124 625 94 665 86 C740 66 810 78 890 86 C1150 104 1330 143 1600 150 L1600 151 L0 151 Z" />
      </svg>

      <div className="bp-hero__container">
        <div className="bp-hero__visual">
          <div className="bp-hero__media">
            <Image
              src="/ui/home-banner.png"
              alt="A Belvedere pharmacist helping a patient in the pharmacy"
              fill
              priority
              sizes="(max-width: 639px) 100vw, (max-width: 1359px) 50vw, 70vw"
              className="bp-hero__photo"
            />
          </div>
          <div className="bp-hero__outline" aria-hidden="true" />
          {/* Mint Green Medical Cross Floating Tile */}
          <div className="bp-hero__float bp-hero__float--cross" aria-hidden="true">
            <svg viewBox="0 0 40 40" className="size-9 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6 C14 3.8 15.8 2 18 2 L22 2 C24.2 2 26 3.8 26 6 L26 14 L34 14 C36.2 14 38 15.8 38 18 L38 22 C38 24.2 36.2 26 34 26 L26 26 L26 34 C26 36.2 24.2 38 22 38 L18 38 C15.8 38 14 36.2 14 34 L14 26 L6 26 C3.8 26 2 24.2 2 22 L2 18 C2 15.8 3.8 14 6 14 L14 14 Z" />
            </svg>
          </div>
          {/* Light Blue Capsule Pill Floating Tile */}
          <div className="bp-hero__float bp-hero__float--pill" aria-hidden="true">
            <svg viewBox="0 0 38 38" className="size-9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="rotate(-38 19 19)">
                <path d="M10 19 C10 14.03 14.03 10 19 10 C23.97 10 28 14.03 28 19 L28 19 L10 19 Z" fill="#0875ff" />
                <path d="M10 19 L28 19 L28 19 C28 23.97 23.97 28 19 28 C14.03 28 10 23.97 10 19 Z" fill="#ffffff" />
                <rect x="9.5" y="9.5" width="19" height="19" rx="9.5" stroke="#0875ff" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
          {/* Warm Amber Heart Floating Tile */}
          <div className="bp-hero__float bp-hero__float--heart" aria-hidden="true">
            <svg viewBox="0 0 38 38" className="size-9" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 32.5 C18.3 32.5 17.7 32.2 17.2 31.7 C12.1 26.8 6 20.9 6 14.5 C6 9.8 9.8 6 14.5 6 C16.8 6 18.8 6.9 20.2 8.5 C21.6 6.9 23.6 6 25.9 6 C30.6 6 34.4 9.8 34.4 14.5 C34.4 20.9 28.3 26.8 23.2 31.7 C22.7 32.2 22.1 32.5 21.4 32.5 L19 32.5 Z"
                fill="#ea9c00"
              />
              <path
                d="M8.5 17.5 L13 17.5 L15.5 12 L19.5 23.5 L22.5 15 L25 17.5 L31.5 17.5"
                stroke="#ffffff"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="bp-hero__copy">
          <div className="bp-hero__eyebrow">
            <Image
              src="/logo/nhs-logo-white-on-blue.webp"
              alt="NHS"
              width={70}
              height={29}
              priority
            />
            <span>NHS &amp; Private healthcare services</span>
          </div>
          <h1 id="bp-hero-title" className="bp-hero__title">
            Your Trusted<br />Pharmacy in<br />
            <span>Belvedere</span>
          </h1>
          {/* Subtle curved underline smile matching reference */}
          <svg
            className="bp-hero__underline"
            viewBox="0 0 200 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 3 13 C 45 4, 130 1, 197 6 C 145 11, 55 14, 3 13 Z"
              fill="#FFBA00"
            />
          </svg>
          <p className="bp-hero__description">
            Accredited NHS repeat prescriptions, walk-in flu jabs, COVID boosters, Meningitis B clinic, and NHS Pharmacy First consultations in Belvedere, Kent.
          </p>

          <div className="bp-hero__highlights" aria-label="How we help">
            {highlights.map(({ line1, line2, icon: Icon, tone }) => (
              <div className="bp-hero__highlight" key={`${line1}-${line2}`}>
                <span className={`bp-hero__highlight-icon bp-hero__highlight-icon--${tone}`}>
                  <Icon aria-hidden="true" />
                </span>
                <span className="bp-hero__highlight-text">
                  <span>{line1}</span>
                  <span>{line2}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="bp-hero__actions">
            {isTenantReady && tenant ? (
              <>
                <Link
                  href="/book"
                  onClick={() => track(TRACKING_EVENTS.bookAppointmentButton, "/book")}
                  className="bp-hero__action bp-hero__action--primary"
                >
                  <CalendarDays aria-hidden="true" />
                  <span>Book an Appointment</span>
                  <span className="bp-hero__action-arrow">
                    <ArrowRight aria-hidden="true" />
                  </span>
                </Link>
                <Link
                  href={tenant.orderPrescriptionsUrl}
                  {...externalLinkProps(tenant.orderPrescriptionsUrl)}
                  onClick={() =>
                    track(
                      TRACKING_EVENTS.orderPrescriptionButton,
                      tenant.orderPrescriptionsUrl,
                    )
                  }
                  className="bp-hero__action bp-hero__action--secondary"
                >
                  {/* Prescription Document Icon matching reference */}
                  <svg
                    viewBox="0 0 24 24"
                    className="size-6 shrink-0 fill-none stroke-[#086bfa] stroke-[2] stroke-linecap-round stroke-linejoin-round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="12" x2="12" y2="18" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  <span>Order Prescriptions</span>
                </Link>
              </>
            ) : (
              <BannerHeroActionsSkeleton />
            )}
          </div>
        </div>

        <div className="bp-hero__carousel">
          <HeroCampaignCarousel />
        </div>

        {isTenantReady && tenant && (
          <div className="bp-hero__mobile-details">
            <p>
              <strong>Find us</strong>
              <span>{formatAddressInline(tenant)}</span>
            </p>
            <p>
              <strong>Opening hours</strong>
              <span>{formatOpeningHoursSummary(tenant)}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
