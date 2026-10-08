"use client";
import { MENU_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { DesktopNavActionsSkeleton } from "@/components/shared/tenant-skeletons";
import ModeToggle from "../shared/theme-mode-toggle";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { track } from "@/lib/analytics/tracker";
import { externalLinkProps } from "@/lib/utils/external-link";

export function DesktopMenu() {
  const { hasDarkHero, pathname } = useNavigationMenu();
  const isHomePage = pathname === "/";
  return (
    <div className="hidden lg:flex items-center gap-x-0.5 xl:gap-x-1">
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
              isHomePage
                ? isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-primary"
                : hasDarkHero
                ? isActive
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
                : isActive
                ? "bg-primary/10 text-primary"
                : "text-foreground/75 hover:bg-primary/5 hover:text-foreground",
              "group relative flex items-center rounded-full px-3 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary xl:px-3.5 xl:text-sm",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function DesktopMenuButtons() {
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();
  const { tenant, isTenantReady } = useTenantContext();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    if (!isTenantReady || !tenant) {
      return <div className="hidden lg:block h-10 w-32 animate-pulse rounded-full bg-slate-200" />;
    }

    return (
      <div className="hidden lg:flex items-center">
        <Button
          asChild
          className="h-10 rounded-full border-0 bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
        >
          <Link
            href={tenant.bookAppointmentUrl}
            {...externalLinkProps(tenant.bookAppointmentUrl)}
            onClick={() => {
              track(
                TRACKING_EVENTS.bookAppointmentButton,
                tenant.bookAppointmentUrl
              );
            }}
          >
            Book Appointment
          </Link>
        </Button>
      </div>
    );
  }

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
          "group relative rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:bg-primary/5 hover:text-primary",
          hasDarkHero
            ? "text-background dark:text-foreground"
            : "text-foreground",
          isScrolled && "text-foreground"
        )}
      >
        Order Prescriptions
      </Link>
      <Button
        asChild
        size="default"
        className="h-10 rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
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
          Book Appointment
          <ArrowRight className="size-4" />
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
