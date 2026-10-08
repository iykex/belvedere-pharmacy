"use client";
import { MENU_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { DesktopNavActionsSkeleton } from "@/components/shared/tenant-skeletons";
import ModeToggle from "../shared/theme-mode-toggle";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { track } from "@/lib/analytics/tracker";
import { externalLinkProps } from "@/lib/utils/external-link";

export function DesktopMenu() {
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();
  return (
    <div className="hidden lg:flex items-center gap-x-1 xl:gap-x-2">
      {MENU_LINKS.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href === "/blogs" &&
            (pathname.startsWith("/blogs") || pathname.startsWith("/blog")));

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-medium transition-colors duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5ec4b6]",
              isActive
                ? "text-[#2ca594] font-bold"
                : hasDarkHero
                ? "text-white/90 hover:text-white"
                : "text-slate-700 dark:text-slate-200 hover:text-[#2ca594] dark:hover:text-[#5ec4b6]",
              isScrolled &&
                (isActive
                  ? "text-[#2ca594] font-bold"
                  : "text-slate-700 dark:text-slate-200 hover:text-[#2ca594]")
            )}
          >
            {/* Text */}
            <span className="relative">
              {item.label}
            </span>

            {/* Active indicator dot */}
            {isActive && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#5ec4b6]" />
            )}
          </Link>
        );
      })}
    </div>
  );
}

export function DesktopMenuButtons() {
  const { hasDarkHero, isScrolled } = useNavigationMenu();
  const { tenant, isTenantReady } = useTenantContext();

  if (!isTenantReady || !tenant) {
    return (
      <div className="hidden lg:flex items-center gap-x-3">
        <DesktopNavActionsSkeleton />
        <ModeToggle />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex items-center gap-x-3">
      <Link
        onClick={() => {
          track(
            TRACKING_EVENTS.orderPrescriptionButton,
            tenant.orderPrescriptionsUrl
          );
        }}
        href={tenant.orderPrescriptionsUrl}
        {...externalLinkProps(tenant.orderPrescriptionsUrl)}
        className={cn(
          "text-sm font-semibold transition-colors duration-200 hover:text-[#2ca594] px-2",
          hasDarkHero
            ? "text-white/90 hover:text-white"
            : "text-slate-700 dark:text-slate-200",
          isScrolled && "text-slate-700 dark:text-slate-200 hover:text-[#2ca594]"
        )}
      >
        Prescriptions
      </Link>

      {/* Rounded-full Pill Button matching MediWise Contact CTA */}
      <Button
        asChild
        className="rounded-full bg-[#5ec4b6] hover:bg-[#4ab4a5] text-white px-7 py-2.5 font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer border-0"
      >
        <Link
          onClick={() => {
            track(
              TRACKING_EVENTS.bookAppointmentButton,
              tenant.bookAppointmentUrl
            );
          }}
          href={tenant.bookAppointmentUrl}
          {...externalLinkProps(tenant.bookAppointmentUrl)}
        >
          Book Now
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
