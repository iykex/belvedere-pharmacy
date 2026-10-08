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

  if (!isTenantReady || !tenant) {
    return (
      <div
        className={cn(
          "py-2.5 transition-colors duration-300",
          isScrolled ? "bg-[#061a2a]/95 text-foreground" : "bg-transparent"
        )}
      >
        <WidthConstraint className="mx-0 w-full max-w-none overflow-visible px-4 sm:px-6 xl:px-8">
          <div className="info-bar-scrollbar flex items-center gap-3 overflow-x-auto whitespace-nowrap text-white/80">
            <InfoBarRowSkeleton hasDarkHero={hasDarkHero} isScrolled={isScrolled} />
          </div>
        </WidthConstraint>
      </div>
    );
  }

  const items = [
    { title: "Find Us", description: formatAddressInline(tenant), icon: MapPin },
    { title: "Opening Hours", description: formatOpeningHoursSummary(tenant), icon: Clock },
    { title: "Call Us", description: tenant.phone, icon: PhoneOutgoing },
  ];

  const darkHeaderText = isScrolled || ((pathname === "/" || hasDarkHero) && !isScrolled);
  const textColorClass = darkHeaderText ? "text-white/80" : "text-foreground/75";

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
          "flex shrink-0 items-center gap-1 sm:gap-2 transition-colors duration-300",
          textColorClass
        )}
      >
        <Icon className="size-3 sm:size-4 text-primary shrink-0" />
        <span
          className={cn(
            "hidden sm:inline font-medium text-xs",
            textColorClass
          )}
        >
          {item.title}:
        </span>
        <span
          className={cn(
            "text-[10px] sm:text-xs font-semibold",
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
        "transition-colors duration-300",
        isScrolled ? "bg-[#061a2a]/95 text-foreground" : "bg-transparent"
      )}
    >
      <WidthConstraint className="mx-0 w-full max-w-none overflow-visible px-4 sm:px-6 xl:px-8">
        <div className="info-bar-scrollbar flex items-center justify-between gap-5 overflow-x-auto py-2.5 whitespace-nowrap">
          {items.map((item, index) => (
            <div key={item.title} className="flex shrink-0 items-center gap-5">
              {renderItem(item, item.title)}
              {index < items.length - 1 && (
                <span aria-hidden className={cn("hidden h-4 w-px sm:block", darkHeaderText ? "bg-white/15" : "bg-foreground/10")} />
              )}
            </div>
          ))}
        </div>
      </WidthConstraint>
    </div>
  );
}
