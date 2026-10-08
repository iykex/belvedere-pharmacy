"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Syringe,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase-client";
import {
  DEFAULT_HERO_CAMPAIGNS,
  HeroCampaignSlide,
} from "@/lib/types/hero-campaign";
import { track } from "@/lib/analytics/tracker";
import { useTenantContext } from "@/components/providers/tenant-provider";

interface HeroCampaignCarouselProps {
  initialCampaigns?: HeroCampaignSlide[];
}

// Sophisticated, cohesive clinical color themes per campaign type
const CAMPAIGN_THEMES: Record<
  string,
  {
    bgGradient: string;
    tapeBg: string;
    tapeText: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    ctaBg: string;
    ctaHover: string;
    ctaText: string;
    ctaArrowBg: string;
    ctaArrowText: string;
    accentDot: string;
    pinShadow: string;
  }
> = {
  // Flu: Autumn/Winter Warm Amber & Deep Slate Navy
  "seasonal-flu": {
    bgGradient: "bg-gradient-to-br from-[#0f2c4f] via-[#143d6d] to-[#0c2442]",
    tapeBg: "bg-amber-300",
    tapeText: "text-slate-950",
    badgeBg: "bg-amber-400/20",
    badgeBorder: "border-amber-300/40",
    badgeText: "text-amber-200",
    ctaBg: "bg-amber-400 hover:bg-amber-300",
    ctaHover: "hover:bg-amber-300",
    ctaText: "text-slate-950",
    ctaArrowBg: "bg-slate-950",
    ctaArrowText: "text-amber-400",
    accentDot: "bg-amber-400",
    pinShadow: "rgba(15,44,79,0.5)",
  },
  // Meningitis B: High-trust Deep Indigo & Violet Teal
  "meningitis-b": {
    bgGradient: "bg-gradient-to-br from-[#192348] via-[#223163] to-[#121936]",
    tapeBg: "bg-white",
    tapeText: "text-[#1c2957]",
    badgeBg: "bg-indigo-400/20",
    badgeBorder: "border-indigo-300/40",
    badgeText: "text-indigo-200",
    ctaBg: "bg-amber-400 hover:bg-amber-300",
    ctaHover: "hover:bg-amber-300",
    ctaText: "text-slate-950",
    ctaArrowBg: "bg-slate-950",
    ctaArrowText: "text-amber-400",
    accentDot: "bg-indigo-300",
    pinShadow: "rgba(25,35,72,0.5)",
  },
  // COVID-19 Booster: Signature NHS Blue with Clean White tape
  "covid-booster": {
    bgGradient: "bg-gradient-to-br from-[#00386b] via-[#005299] to-[#00284d]",
    tapeBg: "bg-white",
    tapeText: "text-[#005eb8]",
    badgeBg: "bg-sky-400/20",
    badgeBorder: "border-sky-300/40",
    badgeText: "text-sky-100",
    ctaBg: "bg-amber-400 hover:bg-amber-300",
    ctaHover: "hover:bg-amber-300",
    ctaText: "text-slate-950",
    ctaArrowBg: "bg-slate-950",
    ctaArrowText: "text-amber-400",
    accentDot: "bg-sky-300",
    pinShadow: "rgba(0,56,107,0.5)",
  },
  // Pharmacy First: Clinical Forest Emerald & Mint
  "pharmacy-first": {
    bgGradient: "bg-gradient-to-br from-[#0c382b] via-[#134d3c] to-[#08281f]",
    tapeBg: "bg-emerald-300",
    tapeText: "text-slate-950",
    badgeBg: "bg-emerald-400/20",
    badgeBorder: "border-emerald-300/40",
    badgeText: "text-emerald-200",
    ctaBg: "bg-emerald-400 hover:bg-emerald-300",
    ctaHover: "hover:bg-emerald-300",
    ctaText: "text-slate-950",
    ctaArrowBg: "bg-slate-950",
    ctaArrowText: "text-emerald-300",
    accentDot: "bg-emerald-300",
    pinShadow: "rgba(12,56,43,0.5)",
  },
};

export function HeroCampaignCarousel({
  initialCampaigns = DEFAULT_HERO_CAMPAIGNS,
}: HeroCampaignCarouselProps) {
  const { tenant } = useTenantContext();
  const [campaignsList, setCampaignsList] = useState<HeroCampaignSlide[]>(initialCampaigns);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeAnim, setFadeAnim] = useState(true);

  // Live real-time Firestore sync with hero_activities collection
  useEffect(() => {
    try {
      const q = query(collection(db, "hero_activities"), orderBy("priority", "asc"));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const liveData: HeroCampaignSlide[] = [];
            snapshot.forEach((docSnap) => {
              const d = docSnap.data();
              liveData.push({
                id: docSnap.id,
                badge: d.badge || "",
                badgeVariant: d.badgeVariant || "seasonal",
                title: d.title || "",
                subtitle: d.subtitle || "",
                description: d.description || "",
                highlights: Array.isArray(d.highlights) ? d.highlights : [],
                ctaText: d.ctaText || "Learn More",
                ctaHref: d.ctaHref || "#",
                ctaKind: d.ctaKind || "internal",
                isNhsFunded: Boolean(d.isNhsFunded),
                active: d.active !== undefined ? Boolean(d.active) : true,
                priority: Number(d.priority) || 1,
                tenantIds: Array.isArray(d.branches)
                  ? d.branches
                  : Array.isArray(d.tenantIds)
                  ? d.tenantIds
                  : ["belvedere", "kidbrooke", "lowfield"],
              });
            });
            if (liveData.length > 0) {
              setCampaignsList(liveData);
            }
          }
        },
        (error) => {
          console.warn("[HeroCarousel] Firestore real-time listener fallback:", error);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.warn("[HeroCarousel] Firestore offline fallback:", e);
    }
  }, []);

  // Filter campaigns for this active pharmacy tenant site
  const tenantSlug = tenant?.id;
  const campaigns = campaignsList.filter(
    (c) =>
      c.active &&
      (!tenantSlug || !c.tenantIds || c.tenantIds.includes(tenantSlug)),
  );

  // Guard index out of range if slides are added or removed
  useEffect(() => {
    if (currentIndex >= campaigns.length && campaigns.length > 0) {
      setCurrentIndex(0);
    }
  }, [campaigns.length, currentIndex]);

  const activeSlide = campaigns[currentIndex] || campaigns[0];
  const theme =
    activeSlide && CAMPAIGN_THEMES[activeSlide.id]
      ? CAMPAIGN_THEMES[activeSlide.id]
      : activeSlide?.badgeVariant === "nhs"
      ? CAMPAIGN_THEMES["covid-booster"]
      : activeSlide?.badgeVariant === "private"
      ? CAMPAIGN_THEMES["meningitis-b"]
      : activeSlide?.badgeVariant === "urgent"
      ? CAMPAIGN_THEMES["meningitis-b"]
      : CAMPAIGN_THEMES["seasonal-flu"];

  const handleSlideChange = (newIndex: number) => {
    setFadeAnim(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeAnim(true);
    }, 150);
  };

  // Auto-advance every 6.5s unless hovering
  useEffect(() => {
    if (isPaused || campaigns.length <= 1) return;
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % campaigns.length);
        setFadeAnim(true);
      }, 150);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, campaigns.length]);

  if (!activeSlide) return null;

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + campaigns.length) % campaigns.length;
    handleSlideChange(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % campaigns.length;
    handleSlideChange(nextIdx);
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[calc(100vw-2rem)] pt-1 sm:max-w-[430px] lg:max-w-none lg:pt-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft floating paper drop shadow & organic tilt */}
      <div className="relative rotate-0 transition-all duration-500 ease-out sm:rotate-[1.5deg] sm:hover:rotate-0">
        {/* Realistic 3D White Push Pin at Top Right */}
        <div className="absolute -top-3 right-4 z-30 pointer-events-none drop-shadow-[0_5px_10px_rgba(59,159,231,0.2)] sm:-top-3.5 sm:right-6">
          <div className="relative flex items-center justify-center">
            {/* Spherical pinhead with glass specular shine */}
            <div className="size-8 rounded-full bg-radial from-white via-slate-100 to-slate-300 border border-white/95 shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <div className="size-2 rounded-full bg-white blur-[0.4px] -mt-1.5 -ml-1.5" />
            </div>
            {/* Pin base collar */}
            <div className="absolute -bottom-1 size-5 rounded-full bg-slate-300 shadow-sm -z-10" />
            {/* Cast shadow behind pin onto the note */}
            <div className="absolute top-2.5 left-4 w-7 h-4 rounded-full bg-[#001a33]/35 blur-xs -z-20 rotate-45" />
          </div>
        </div>

        {/* Paper Note Body - Dynamic Gradient with rich paper texture */}
        <div
          className={`relative rounded-2xl ${theme.bgGradient} p-5 text-white shadow-[0_18px_36px_-24px_rgba(59,159,231,0.45),0_4px_12px_rgba(12,44,78,0.18)] border-t border-l border-white/25 overflow-hidden transition-[box-shadow,transform,background-color] duration-500 sm:p-8`}
        >
          {/* Paper fiber grain texture */}
          <div
            className="absolute inset-0 opacity-12 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)",
              backgroundSize: "6px 6px",
              backgroundPosition: "0 0, 3px 3px",
            }}
          />

          {/* Diagonal translucent tape ribbon at top-left corner */}
          <div className="absolute -top-1 -left-1 z-20 pointer-events-none overflow-hidden size-32">
            <div
              className={`absolute top-5 -left-9 w-36 py-1 ${theme.tapeBg} ${theme.tapeText} text-[10px] font-black tracking-wider uppercase text-center -rotate-45 shadow-[0_2px_6px_rgba(0,26,51,0.24)] border-y border-black/10 select-none`}
            >
              {activeSlide.badgeVariant === "nhs"
                ? "NHS SERVICE"
                : activeSlide.badgeVariant === "private"
                ? "PRIVATE CARE"
                : "SEASONAL"}
            </div>
          </div>

          {/* Subdued watermark emblem in background */}
          <div className="absolute -right-10 -bottom-10 pointer-events-none opacity-5">
            <Syringe className="size-48 stroke-1 text-white sm:size-64" />
          </div>

          {/* Top meta row: Badge + Slide counter */}
          <div className="mb-4 flex items-center justify-between gap-2 pl-11 sm:mb-5 sm:gap-3 sm:pl-16">
            {/* Clinical context badge */}
            <div
              className={`inline-flex min-w-0 items-center gap-1.5 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} px-2.5 py-1 text-[11px] font-semibold backdrop-blur-xs shadow-xs sm:px-3 sm:text-xs`}
            >
              <span className={`size-1.5 rounded-full ${theme.accentDot} animate-pulse`} />
              <span className="line-clamp-1">{activeSlide.badge}</span>
            </div>

            {/* Slide pagination pill */}
            <div className="flex items-center gap-1 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-white/80 border border-white/10 shrink-0">
              <span>{currentIndex + 1}</span>
              <span className="opacity-40">/</span>
              <span>{campaigns.length}</span>
            </div>
          </div>

          {/* Main Content Area with cross-fade animation */}
          <div
            className={`transition-opacity duration-200 ${
              fadeAnim ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Title & Subtitle */}
            <div className="mb-3">
              <h3 className="text-xl font-black leading-[1.15] tracking-tight text-white drop-shadow-xs sm:text-3xl">
                {activeSlide.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-amber-300 mt-1 drop-shadow-xs">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="mb-4 hidden line-clamp-2 text-[11px] font-normal leading-relaxed text-slate-100/90 sm:mb-5 sm:block sm:text-sm sm:line-clamp-3">
              {activeSlide.description}
            </p>

            {/* Key Clinical Highlights Checklist */}
            <div className="mb-4 hidden space-y-1.5 rounded-xl border border-white/10 bg-black/20 p-2.5 backdrop-blur-xs sm:mb-6 sm:block sm:space-y-2 sm:p-3">
              {activeSlide.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-200 sm:gap-2.5 sm:text-xs">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-300 sm:size-4" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* High-Contrast Interactive CTA Button */}
            <Link
              href={activeSlide.ctaHref}
              onClick={() => {
                track("hero_carousel_cta_click", activeSlide.ctaHref);
              }}
              className={`group/cta flex w-full items-center justify-between rounded-full ${theme.ctaBg} ${theme.ctaText} px-4 py-3 text-xs font-black shadow-[0_6px_14px_rgba(59,159,231,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_9px_18px_rgba(59,159,231,0.24)] active:translate-y-0 active:scale-[0.98] cursor-pointer sm:px-5 sm:py-3.5 sm:text-sm`}
            >
              <span>{activeSlide.ctaText}</span>
              <div
                className={`size-7 rounded-full ${theme.ctaArrowBg} ${theme.ctaArrowText} flex items-center justify-center transition-transform duration-200 group-hover/cta:translate-x-1`}
              >
                <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>

          {/* Bottom Navigation: Dots + Arrows */}
          <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 sm:mt-5 sm:pt-4">
            {/* Slide Indicator Dots */}
            <div className="flex items-center gap-1.5">
              {campaigns.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSlideChange(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? "w-6 bg-white shadow-xs"
                      : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="size-8 rounded-full bg-[#001a33]/35 text-white shadow-[0_3px_8px_rgba(59,159,231,0.16)] hover:bg-[#001a33]/55 flex items-center justify-center border border-white/15 backdrop-blur-xs transition-all cursor-pointer active:scale-95"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="size-8 rounded-full bg-[#001a33]/35 text-white shadow-[0_3px_8px_rgba(59,159,231,0.16)] hover:bg-[#001a33]/55 flex items-center justify-center border border-white/15 backdrop-blur-xs transition-all cursor-pointer active:scale-95"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
