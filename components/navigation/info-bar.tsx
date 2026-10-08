"use client";

import { Clock, MapPin, PhoneOutgoing } from "lucide-react";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { InfoBarRowSkeleton } from "@/components/shared/tenant-skeletons";
import {
  formatAddressInline,
  formatOpeningHoursSummary,
} from "@/lib/utils/format-tenant";
import { cn } from "@/lib/utils/utils";

export default function InfoBar() {
  const { hasDarkHero, isScrolled } = useNavigationMenu();
  const { tenant, isTenantReady } = useTenantContext();

  if (!isTenantReady || !tenant) {
    return (
      <div
        className={cn(
          "py-1.5 sm:py-2 px-3 transition-all duration-300 ease-in-out border-b border-slate-100/80 dark:border-slate-800/80 overflow-hidden bg-slate-50/80 dark:bg-[#001d33]/80 backdrop-blur-md",
          hasDarkHero && "bg-transparent text-white border-white/10",
          isScrolled && "bg-background text-foreground"
        )}
      >
        <div className="info-bar-marquee flex w-max shrink-0 items-center gap-x-6 md:gap-x-10 whitespace-nowrap">
          <InfoBarRowSkeleton hasDarkHero={hasDarkHero} isScrolled={isScrolled} />
          <InfoBarRowSkeleton
            ariaHidden
            hasDarkHero={hasDarkHero}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    );
  }

  const items = [
    { title: "Find Us", description: formatAddressInline(tenant), icon: MapPin },
    { title: "Opening Hours", description: formatOpeningHoursSummary(tenant), icon: Clock },
    { title: "Call Us", description: tenant.phone, icon: PhoneOutgoing },
  ];

  const textColorClass = cn(
    hasDarkHero
      ? "text-white"
      : "text-slate-700 dark:text-slate-200",
    isScrolled && "text-slate-800 dark:text-slate-100"
  );

  const renderItem = (
    item: (typeof items)[number],
    key: string,
    opts?: { hideFromA11y?: boolean }
  ) => {
    const Icon = item.icon;
    return (
      <div
        key={key}
        aria-hidden={opts?.hideFromA11y ? true : undefined}
        className={cn(
          "flex shrink-0 items-center gap-1.5 sm:gap-2 transition-colors duration-300",
          textColorClass
        )}
      >
        <Icon className="size-3 sm:size-3.5 text-[#259b8b] dark:text-[#50D3C5] shrink-0" />
        <span
          className={cn(
            "font-semibold text-[11px] sm:text-xs",
            textColorClass
          )}
        >
          {item.title}:
        </span>
        <span
          className={cn(
            "text-[11px] sm:text-xs font-normal text-slate-600 dark:text-slate-300",
            textColorClass
          )}
        >
          {item.description}
        </span>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "py-1.5 sm:py-2 px-3 transition-all duration-300 ease-in-out border-b border-slate-100/80 dark:border-slate-800/80 overflow-hidden bg-slate-50/80 dark:bg-[#001d33]/80 backdrop-blur-md",
        hasDarkHero && "bg-transparent text-white border-white/10",
        isScrolled && "bg-background/95 text-foreground"
      )}
    >
      <div className="info-bar-marquee flex w-max shrink-0 items-center gap-x-6 md:gap-x-10 whitespace-nowrap">
        {items.map((item) => renderItem(item, item.title))}
        {items.map((item) =>
          renderItem(item, `${item.title}-dup`, { hideFromA11y: true })
        )}
      </div>
    </div>
  );
}
