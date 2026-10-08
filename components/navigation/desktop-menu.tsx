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
  const { pathname } = useNavigationMenu();
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
              isActive
                ? "bg-primary/10 text-primary"
                : "text-foreground/75 hover:bg-primary/5 hover:text-foreground",
              "group relative flex items-center rounded-full px-[clamp(0.55rem,1vw,0.875rem)] py-2 text-[clamp(0.72rem,0.8vw,0.875rem)] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
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
          className="group h-11 rounded-full border border-primary/65 bg-background px-1.5 pl-5 pr-1.5 text-[clamp(0.78rem,0.9vw,0.875rem)] font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary/40"
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
            <span>Book Appointment</span>
            <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight aria-hidden className="size-4" />
            </span>
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
          "group relative rounded-full px-[clamp(0.55rem,1vw,0.875rem)] py-2 text-[clamp(0.72rem,0.8vw,0.875rem)] font-semibold transition-colors duration-200 hover:bg-primary/5 hover:text-primary",
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
        className="group h-11 rounded-full border border-primary/65 bg-background px-1.5 pl-5 pr-1.5 font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary/40"
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
          <span>Book Appointment</span>
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight aria-hidden className="size-4" />
          </span>
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
