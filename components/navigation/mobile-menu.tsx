"use client";

import ModeToggle from "../shared/theme-mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Clock,
  MapPin,
  MenuIcon,
  Phone,
  X,
  Home,
  ShieldCheck,
  Stethoscope,
  BookOpen,
  Building2,
  Users,
  PhoneCall,
  Calendar,
  Pill,
  HeartPulse,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MENU_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { cn } from "@/lib/utils/utils";
import { track } from "@/lib/analytics/tracker";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { formatOpeningHoursSummary } from "@/lib/utils/format-tenant";
import { MobileSheetTenantPanelSkeleton } from "@/components/shared/tenant-skeletons";
import { externalLinkProps } from "@/lib/utils/external-link";
import { TENANT_DISPLAY_NAMES } from "@/lib/config/tenant";

const MENU_ICON_MAP: Record<string, React.ElementType> = {
  "/": Home,
  "/pharmacy-first": ShieldCheck,
  "/services": Stethoscope,
  "/blogs": BookOpen,
  "/pharmacies": Building2,
  "/about-us": Users,
  "/contact-us": PhoneCall,
};

export default function MobileMenu() {
  const { tenant, isTenantReady, slug } = useTenantContext();
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();

  const phoneHref = tenant ? `tel:${tenant.phone.replace(/\D/g, "")}` : "#";
  const displayName = tenant?.displayName ?? TENANT_DISPLAY_NAMES[slug];
  const nameWords = displayName.split(" ");
  const primaryName = nameWords[0] ?? "Pharmacy";
  const secondaryName = nameWords.slice(1).join(" ") || "Pharmacy";
  const logoSrc = `/logo/${slug}-logo.png`;

  return (
    <div className="lg:hidden flex items-center gap-2 relative">
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "transition-all duration-300 h-10 w-10 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              hasDarkHero && !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-foreground/10"
            )}
            aria-label="Open mobile menu"
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full h-full sm:w-[380px] p-0 border-0 bg-background [&>button]:hidden flex flex-col"
        >
          {/* Mobile Menu Header */}
          <div className="bg-[#002f4b] p-5 pb-6 text-white shrink-0">
            <SheetHeader className="mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={logoSrc}
                    alt={`${displayName} logo`}
                    width={40}
                    height={40}
                    className="size-10 object-contain shrink-0"
                    priority
                  />
                  <SheetTitle className="text-left text-white">
                    <span className="block font-bold leading-tight text-base">
                      {primaryName}
                    </span>
                    <span className="text-xs text-white/70 font-normal">
                      {secondaryName}
                    </span>
                  </SheetTitle>
                </div>
                <SheetClose className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
                  <X className="size-5" />
                  <span className="sr-only">Close navigation</span>
                </SheetClose>
              </div>
            </SheetHeader>

            {/* Quick Contact & Info Card */}
            <div className="space-y-3">
              {!isTenantReady || !tenant ? (
                <MobileSheetTenantPanelSkeleton />
              ) : (
                <>
                  {/* Call Banner */}
                  <a
                    href={phoneHref}
                    onClick={() => track(TRACKING_EVENTS.phoneContactClick, phoneHref)}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all group active:scale-[0.99]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg text-white">
                        <Phone className="size-4" />
                      </div>
                      <div>
                        <p className="text-[11px] text-white/70 font-medium flex items-center gap-1.5">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Tap to Call Directly
                        </p>
                        <p className="text-sm font-bold text-white tracking-wide">
                          {tenant.phone}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="size-4 text-white/50 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Hours & Location Chips */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2.5">
                      <Clock className="size-3.5 text-amber-300 shrink-0" />
                      <div className="truncate">
                        <p className="text-[10px] text-white/60">Hours</p>
                        <p className="font-semibold text-white truncate text-[11px]">
                          {formatOpeningHoursSummary(tenant)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-2.5">
                      <MapPin className="size-3.5 text-primary shrink-0" />
                      <div className="truncate">
                        <p className="text-[10px] text-white/60">Location</p>
                        <p className="font-semibold text-white truncate text-[11px]">
                          {tenant.address.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Fast Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white text-xs font-bold py-2.5 rounded-xl shadow-sm active:scale-95 transition-all"
                    >
                      <Link
                        href={tenant.bookAppointmentUrl}
                        {...externalLinkProps(tenant.bookAppointmentUrl)}
                        onClick={() =>
                          track(
                            TRACKING_EVENTS.bookAppointmentButton,
                            tenant.bookAppointmentUrl
                          )
                        }
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="size-3.5" />
                        <span>Book Now</span>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2.5 rounded-xl active:scale-95 transition-all"
                    >
                      <Link
                        href={tenant.orderPrescriptionsUrl}
                        {...externalLinkProps(tenant.orderPrescriptionsUrl)}
                        onClick={() =>
                          track(
                            TRACKING_EVENTS.orderPrescriptionButton,
                            tenant.orderPrescriptionsUrl
                          )
                        }
                        className="flex items-center justify-center gap-1.5"
                      >
                        <Pill className="size-3.5" />
                        <span>Prescriptions</span>
                      </Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation Items List */}
          <div className="p-5 flex-1 overflow-y-auto space-y-1">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-1">
              Navigation
            </p>
            {MENU_LINKS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/blogs" &&
                  (pathname.startsWith("/blogs") ||
                    pathname.startsWith("/blog")));
              const Icon = MENU_ICON_MAP[item.href] || ChevronRight;
              const isPharmacyFirst = item.href === "/pharmacy-first";

              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "group flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200",
                      isActive
                        ? "bg-primary/10 text-primary font-bold border-l-4 border-primary pl-3 shadow-xs"
                        : "text-foreground hover:bg-accent/60 dark:hover:bg-white/5"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "size-8 rounded-lg flex items-center justify-center transition-colors",
                          isActive
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                        )}
                      >
                        <Icon className="size-4" />
                      </div>
                      <span className="text-base">{item.label}</span>
                      {isPharmacyFirst && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-[#005EB8] text-white">
                          NHS
                        </span>
                      )}
                    </div>

                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform duration-200 group-hover:translate-x-1",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-primary"
                      )}
                    />
                  </Link>
                </SheetClose>
              );
            })}

            {/* NHS Emergency Advice Card */}
            <div className="pt-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs">
                <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 mb-1">
                  <HeartPulse className="size-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>Urgent Medical Need?</span>
                </div>
                <p className="text-muted-foreground dark:text-slate-300 leading-relaxed text-[11px]">
                  Call <strong>NHS 111</strong> for free 24/7 non-emergency medical assistance, or <strong>999</strong> for immediate life-threatening emergencies.
                </p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
