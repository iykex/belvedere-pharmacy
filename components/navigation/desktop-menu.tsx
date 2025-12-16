"use client";
import { EXTERNAL_LINKS, MENU_LINKS } from "@/lib/constants/general";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import ModeToggle from "../shared/theme-mode-toggle";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/analytics";

export function DesktopMenu() {
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();
  return (
    <div className="hidden lg:flex items-center gap-x-1">
      {MENU_LINKS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative px-5 py-2.5 text-sm font-medium transition-all duration-300",
              !isActive && "nav-link",
              hasDarkHero
                ? "text-background dark:text-foreground hover:text-background/80 dark:hover:text-foreground/80"
                : "text-foreground hover:text-gray-900 dark:hover:text-foreground/90",
              isScrolled &&
                "bg-background text-foreground hover:text-foreground"
            )}
          >
            {/* Text */}
            <p className="relative text-base hover:text-inherit">
              {item.label}
            </p>

            {/* Active indicator - bottom line */}
            <span
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-out",
                isActive ? "w-6" : "w-0"
              )}
            />

            {/* Hover dot indicator */}
            {!isActive && (
              <span
                className={cn(
                  "absolute top-1 right-1 size-1.5 rounded-full bg-primary opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
                )}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}

export function DesktopMenuButtons() {
  const { hasDarkHero, isScrolled } = useNavigationMenu();

  return (
    <div className="hidden lg:flex items-center gap-x-3">
      <Link
        onClick={() => {
          track(
            TRACKING_EVENTS.orderPrescriptionButton,
            EXTERNAL_LINKS.actions.orderPrescriptions
          );
        }}
        href={EXTERNAL_LINKS.actions.orderPrescriptions}
        className={cn(
          "group relative px-4 py-2 text-sm font-semibold transition-all duration-300 overflow-hidden rounded-lg hover:text-primary",
          hasDarkHero
            ? "text-background dark:text-foreground"
            : "text-foreground",
          isScrolled && "bg-background text-foreground"
        )}
      >
        {/* Sliding underline */}
        <p className="relative text-base">Order Prescriptions</p>
        <span
          className={cn(
            "absolute bottom-1 left-0 right-0 bg-primary h-px mx-auto transition-all duration-500 ease-in-out origin-center",
            "w-0 group-hover:w-1/2"
          )}
        />
      </Link>

      <Button
        asChild
        className="group relative bg-primary hover:bg-primary text-white font-semibold px-6 rounded-lg overflow-hidden transition-all duration-300"
      >
        <Link
          onClick={() => {
            track(
              TRACKING_EVENTS.bookAppointmentButton,
              EXTERNAL_LINKS.actions.bookAppointment
            );
          }}
          href={EXTERNAL_LINKS.actions.bookAppointment}
          className="flex items-center gap-2"
        >
          {/* Shine effect */}
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          <span className="relative z-10">Book Now</span>
          <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
      <ModeToggle />
    </div>
  );
}
