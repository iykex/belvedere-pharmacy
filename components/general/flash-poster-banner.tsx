"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useTenantContext } from "@/components/providers/tenant-provider";

type Poster = { id: string; title: string; imageUrl: string; altText?: string; supportingText?: string; ctaText?: string; ctaHref?: string; branches?: string[]; active?: boolean; startsAt?: string | null; endsAt?: string | null };

export default function FlashPosterBanner() {
  const { slug } = useTenantContext();
  const [poster, setPoster] = useState<Poster | null>(null);
  const [dismissed, setDismissed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const cacheKey = `flash-poster:${slug || "default"}`;
    try {
      const cached = window.sessionStorage.getItem(cacheKey);
      if (cached) setPoster(JSON.parse(cached) as Poster);
    } catch { /* Ignore unavailable or stale browser storage. */ }
    fetch("/api/flash-posters", { cache: "default" }).then((response) => response.ok ? response.json() : { posters: [] }).then((data: { posters?: Poster[] }) => {
      const item = data.posters?.[0];
      if (!cancelled) {
        setPoster(item || null);
        try {
          if (item) window.sessionStorage.setItem(cacheKey, JSON.stringify(item));
          else window.sessionStorage.removeItem(cacheKey);
        } catch { /* Ignore unavailable browser storage. */ }
      }
    }).catch(() => { if (!cancelled) setPoster(null); });
    return () => { cancelled = true; };
  }, [slug]);
  if (!poster || dismissed) return null;
  return <div className="fixed inset-0 z-[100] grid min-h-[100dvh] place-items-center overflow-y-auto bg-black/35 p-4 backdrop-blur-[1px]" role="dialog" aria-modal="true" aria-label={poster.title} onClick={() => setDismissed(true)}><div className="relative max-h-[92svh] w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setDismissed(true)} aria-label="Close announcement" className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"><X className="size-4" /></button><img src={poster.imageUrl} alt={poster.altText || poster.title} className="block max-h-[76svh] w-full object-contain" />{poster.supportingText && <p className="px-5 pt-4 text-center text-sm leading-6 text-muted-foreground">{poster.supportingText}</p>}{poster.ctaText && poster.ctaHref && <div className="p-4 pt-3"><Link href={poster.ctaHref} className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl">{poster.ctaText}<ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" /></Link></div>}</div></div>;
}
