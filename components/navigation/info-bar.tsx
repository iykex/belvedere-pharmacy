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
import WidthConstraint from "@/components/shared/width-constraint";

export default function InfoBar() {
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();
  const { tenant, isTenantReady } = useTenantContext();
  const isHomePage = pathname === "/";

  if (!isTenantReady || !tenant) {
    return (
      <div
        className={cn(
          "py-2.5 transition-colors duration-300",
          isScrolled
            ? "bg-[#10283b]/95 text-foreground"
            : isHomePage
              ? "bg-transparent"
              : "bg-transparent",
        )}
      >
        <WidthConstraint className="mx-0 w-full max-w-none overflow-visible px-4 sm:px-6 xl:px-8">
          <div
            className={cn(
              "info-bar-scrollbar flex items-center gap-3 overflow-x-auto whitespace-nowrap",
              isHomePage && !isScrolled
                ? "text-[#526788] dark:text-white/80"
                : "text-white/80",
            )}
          >
            <InfoBarRowSkeleton
              hasDarkHero={hasDarkHero}
              isScrolled={isScrolled}
            />
          </div>
        </WidthConstraint>
      </div>
    );
  }

  const items = [
    { title: "Find Us", description: formatAddressInline(tenant), icon: MapPin },
    {
      title: "Opening Hours",
      description: formatOpeningHoursSummary(tenant),
      icon: Clock,
    },
    { title: "Call Us", description: tenant.phone, icon: PhoneOutgoing },
  ];

  const darkHeaderText = isScrolled || hasDarkHero;

  const renderItem = (
    item: (typeof items)[number],
    key: string,
    opts?: { hideFromA11y?: boolean },
  ) => {
    const Icon = item.icon;
    return (
      <div
        key={key}
        aria-hidden={opts?.hideFromA11y ? true : undefined}
        className={cn(
          "flex shrink-0 items-center gap-1.5 sm:gap-2 transition-colors duration-300",
          darkHeaderText
            ? "text-white/80"
            : isHomePage
              ? "text-[#475569] dark:text-white/80"
              : "text-foreground/75",
        )}
      >
        <Icon
          className={cn(
            "size-3 sm:size-3.5 shrink-0",
            isHomePage && !isScrolled
              ? "text-[#597495] dark:text-[#7bb0e7]"
              : "text-primary",
          )}
        />
        <span
          className={cn(
            "hidden sm:inline font-bold text-xs tracking-tight",
            isHomePage && !isScrolled
              ? "text-[#0f172a] dark:text-white"
              : darkHeaderText
                ? "text-white"
                : "text-foreground",
          )}
        >
          {item.title}:
        </span>
        <span
          className={cn(
            "text-[10px] sm:text-xs font-medium",
            isHomePage && !isScrolled
              ? "text-[#334155] dark:text-white/80"
              : darkHeaderText
                ? "text-white/80"
                : "text-foreground/75",
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
        "transition-colors duration-300",
        isScrolled
          ? "bg-[#10283b]/95 text-foreground"
          : isHomePage
            ? "bg-transparent"
            : "bg-transparent",
      )}
    >
      <WidthConstraint className="mx-0 w-full max-w-none overflow-visible px-4 sm:px-6 xl:px-8">
        <div className="info-bar-scrollbar flex items-center justify-between gap-6 overflow-x-auto py-2 whitespace-nowrap">
          {items.map((item, index) => (
            <div key={item.title} className="flex shrink-0 items-center gap-6">
              {renderItem(item, item.title)}
              {!isHomePage && index < items.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "hidden h-4 w-px sm:block",
                    darkHeaderText ? "bg-white/15" : "bg-foreground/10",
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </WidthConstraint>
    </div>
  );
}
