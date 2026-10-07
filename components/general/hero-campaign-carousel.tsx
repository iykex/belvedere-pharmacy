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
      className="relative w-full max-w-[430px] mx-auto lg:max-w-none pt-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Soft floating paper drop shadow & organic tilt */}
      <div className="relative rotate-[1.5deg] hover:rotate-0 transition-all duration-500 ease-out">
        {/* Realistic 3D White Push Pin at Top Right */}
        <div className="absolute -top-3.5 right-6 z-30 pointer-events-none drop-shadow-[0_8px_12px_rgba(0,0,0,0.5)]">
          <div className="relative flex items-center justify-center">
            {/* Spherical pinhead with glass specular shine */}
            <div className="size-8 rounded-full bg-radial from-white via-slate-100 to-slate-300 border border-white/95 shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.3)] flex items-center justify-center">
              <div className="size-2 rounded-full bg-white blur-[0.4px] -mt-1.5 -ml-1.5" />
            </div>
            {/* Pin base collar */}
            <div className="absolute -bottom-1 size-5 rounded-full bg-slate-300 shadow-sm -z-10" />
            {/* Cast shadow behind pin onto the note */}
            <div className="absolute top-2.5 left-4 w-7 h-4 rounded-full bg-black/45 blur-xs -z-20 rotate-45" />
          </div>
        </div>

        {/* Paper Note Body - Dynamic Gradient with rich paper texture */}
        <div
          className={`relative rounded-2xl ${theme.bgGradient} text-white p-7 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.65),0_4px_16px_rgba(0,0,0,0.4)] border-t border-l border-white/25 overflow-hidden transition-colors duration-500`}
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
              className={`absolute top-5 -left-9 w-36 py-1 ${theme.tapeBg} ${theme.tapeText} text-[10px] font-black tracking-wider uppercase text-center -rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.35)] border-y border-black/10 select-none`}
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
            <Syringe className="size-64 stroke-1 text-white" />
          </div>

          {/* Top meta row: Badge + Slide counter */}
          <div className="flex items-center justify-between gap-3 mb-5 pl-14 sm:pl-16">
            {/* Clinical context badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} ${theme.badgeText} text-xs font-semibold backdrop-blur-xs shadow-xs`}
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
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-xs leading-[1.15]">
                {activeSlide.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-amber-300 mt-1 drop-shadow-xs">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-100/90 leading-relaxed font-normal mb-5 line-clamp-3">
              {activeSlide.description}
            </p>

            {/* Key Clinical Highlights Checklist */}
            <div className="space-y-2 mb-6 bg-black/20 backdrop-blur-xs rounded-xl p-3 border border-white/10">
              {activeSlide.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="size-4 text-emerald-300 shrink-0 mt-0.5" />
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
              className={`group/cta flex items-center justify-between w-full ${theme.ctaBg} ${theme.ctaText} font-black text-sm px-5 py-3.5 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-200 active:scale-[0.98] cursor-pointer`}
            >
              <span>{activeSlide.ctaText}</span>
              <div
                className={`size-7 rounded-lg ${theme.ctaArrowBg} ${theme.ctaArrowText} flex items-center justify-center transition-transform duration-200 group-hover/cta:translate-x-1`}
              >
                <ArrowRight className="size-4" />
              </div>
            </Link>
          </div>

          {/* Bottom Navigation: Dots + Arrows */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/15">
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
                className="size-8 rounded-lg bg-black/30 hover:bg-black/50 text-white flex items-center justify-center border border-white/15 backdrop-blur-xs transition-colors cursor-pointer active:scale-95"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next slide"
                className="size-8 rounded-lg bg-black/30 hover:bg-black/50 text-white flex items-center justify-center border border-white/15 backdrop-blur-xs transition-colors cursor-pointer active:scale-95"
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
