"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase-client";
import { DEFAULT_HERO_CAMPAIGNS, type HeroCampaignSlide } from "@/lib/types/hero-campaign";
import { track } from "@/lib/analytics/tracker";
import { useTenantContext } from "@/components/providers/tenant-provider";

interface HeroCampaignCarouselProps { initialCampaigns?: HeroCampaignSlide[] }

export function HeroCampaignCarousel({ initialCampaigns = DEFAULT_HERO_CAMPAIGNS }: HeroCampaignCarouselProps) {
  const { tenant } = useTenantContext();
  const [campaignsList, setCampaignsList] = useState(initialCampaigns);
  const [currentIndex, setCurrentIndex] = useState(() => Math.max(0, initialCampaigns.findIndex((slide) => slide.id === "seasonal-flu")));
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "hero_activities"), orderBy("priority", "asc")),
        (snapshot) => {
          if (snapshot.empty) return;
          const liveData: HeroCampaignSlide[] = snapshot.docs.map((docSnap) => {
            const d = docSnap.data();
            return {
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
              tenantIds: Array.isArray(d.branches) ? d.branches : Array.isArray(d.tenantIds) ? d.tenantIds : ["belvedere", "kidbrooke", "lowfield"],
            };
          });
          setCampaignsList(liveData);
        },
        (error) => console.warn("[HeroCarousel] Firestore real-time listener fallback:", error),
      );
      return () => unsubscribe();
    } catch (error) {
      console.warn("[HeroCarousel] Firestore offline fallback:", error);
    }
  }, []);

  const campaigns = useMemo(() => campaignsList.filter((slide) => slide.active && (!tenant?.id || !slide.tenantIds || slide.tenantIds.includes(tenant.id))), [campaignsList, tenant?.id]);
  const safeIndex = currentIndex < campaigns.length ? currentIndex : 0;
  const activeSlide = campaigns[safeIndex];

  useEffect(() => {
    if (isPaused || reducedMotion || campaigns.length < 2) return;
    const interval = window.setInterval(() => setCurrentIndex((index) => (index + 1) % campaigns.length), 6500);
    return () => window.clearInterval(interval);
  }, [isPaused, reducedMotion, campaigns.length]);

  if (!activeSlide) return null;
  const goTo = (index: number) => setCurrentIndex((index + campaigns.length) % campaigns.length);

  return (
    <div className="bp-carousel" role="region" aria-roledescription="carousel" aria-label="Featured pharmacy services" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocusCapture={() => setIsPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}>
      <div className="bp-carousel__top">
        <span className="bp-carousel__badge"><Sparkles aria-hidden="true" />{activeSlide.badge}</span>
        <div className="bp-carousel__nav">
          <button type="button" onClick={() => goTo(safeIndex - 1)} aria-label="Previous featured service"><ChevronLeft aria-hidden="true" /></button>
          <span aria-label={`Slide ${safeIndex + 1} of ${campaigns.length}`}>{safeIndex + 1} / {campaigns.length}</span>
          <button type="button" onClick={() => goTo(safeIndex + 1)} aria-label="Next featured service"><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>

      <div className="bp-carousel__content" key={activeSlide.id} aria-live="polite" aria-atomic="true">
        <h2>{activeSlide.title}</h2>
        <p className="bp-carousel__subtitle">{activeSlide.subtitle}</p>
        <p className="bp-carousel__description">{activeSlide.description}</p>
        <ul className="bp-carousel__highlights">
          {activeSlide.highlights.map((highlight, index) => <li key={`${activeSlide.id}-${index}`}><span><Check aria-hidden="true" /></span>{highlight}</li>)}
        </ul>
        <Link href={activeSlide.ctaHref} onClick={() => track("hero_carousel_cta_click", activeSlide.ctaHref)} className="bp-carousel__cta"><span>{activeSlide.ctaText}</span><span className="bp-carousel__cta-arrow"><ArrowRight aria-hidden="true" /></span></Link>
      </div>
      <div className="bp-carousel__dots" aria-label="Select a featured service">
        {campaigns.map((slide, index) => <button key={slide.id} type="button" onClick={() => goTo(index)} aria-label={`Show ${slide.title}`} aria-current={safeIndex === index ? "true" : undefined} className={safeIndex === index ? "is-active" : ""} />)}
      </div>
    </div>
  );
}
