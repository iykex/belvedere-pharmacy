"use client";
import { MENU_LINKS, ABOUT_US_INFO_BANNER } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon, ArrowRight, X, Phone, MapPin, Clock, ChevronRight } from "lucide-react";
import { ReactNode, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MenuButtons({
  outlineButtonClassName,
  solidButtonClassName,
  wrapperClassName,
  outlineButtonText,
  solidButtonText,
  solidButtonIcon,
}: {
  wrapperClassName?: string;
  outlineButtonClassName?: string;
  solidButtonClassName?: string;
  outlineButtonText?: string;
  solidButtonText?: string;
  solidButtonIcon?: ReactNode;
}) {
  return (
    <div className={cn(wrapperClassName)}>
      <div>
        <Button variant="outline" className={outlineButtonClassName}>
          <Link
            href="https://app.belvederepharmacy.net/#/auth/signin"
            className="font-semibold hover:text-foreground"
          >
            {outlineButtonText || "Order Prescriptions"}
          </Link>
        </Button>
      </div>

      <div>
        <Button className={solidButtonClassName}>
          <Link
            href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
            className="font-semibold flex items-center gap-x-2 hover:gap-x-4 transition-all duration-300 ease-in-out"
          >
            {solidButtonText || "Book Now"}
            {solidButtonIcon}
          </Link>
        </Button>
      </div>
    </div>
  );
}

// Pages with dark hero backgrounds (need white text initially)
const DARK_HERO_PAGES = ["/", "/pharmacy-first", "/about-us", "/contact-us"];

export default function Menu({ className }: { className?: string }) {
  const navMenu = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Determine if this page has a dark hero
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);
  // Use dark text if scrolled OR if page doesn't have dark hero
  const useDarkText = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "nav-wrapper transition-all duration-500 ease-out",
        isScrolled ? "nav-scrolled" : "",
        className
      )}
      ref={navMenu}
    >
      {/* Info Bar - Always visible */}
      <div
        className={cn(
          "info-bar py-2 transition-all duration-300",
          useDarkText ? "bg-gray-50/80 backdrop-blur-sm border-b border-gray-100" : "bg-white/10 backdrop-blur-sm"
        )}
      >
        <div className="flex items-center justify-center gap-4 md:gap-8 px-4 text-sm">
          {ABOUT_US_INFO_BANNER.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "flex items-center gap-2 transition-colors duration-300",
                  useDarkText ? "text-gray-700" : "text-white/90"
                )}
              >
                <Icon className="size-4 text-primary" />
                <span className={cn(
                  "hidden sm:inline font-medium text-xs",
                  useDarkText ? "text-gray-500" : "text-white/70"
                )}>
                  {item.title}:
                </span>
                <span className={cn(
                  "text-xs font-semibold",
                  useDarkText ? "text-gray-900" : "text-white"
                )}>
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "nav-menu",
          useDarkText ? "nav-menu-light" : ""
        )}
      >
        {/* Brand */}
        <div className="flex gap-x-3 items-center">
          <Link href="/" className="relative group">
            <div className="absolute -inset-2 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image
              src="/logo/belvedere-logo.png"
              alt="Belvedere"
              width={48}
              height={48}
              className="relative z-10"
            />
          </Link>
          <div className="hidden min-[450px]:block">
            <p className={cn(
              "font-bold text-lg leading-tight transition-colors duration-300",
              useDarkText ? "text-gray-900" : "text-white"
            )}>Belvedere</p>
            <p className={cn(
              "text-xs transition-colors duration-300",
              useDarkText ? "text-gray-500" : "text-white/70"
            )}>Pharmacy</p>
          </div>
        </div>

        {/* Navigation Links Desktop Only */}
        <div className="hidden lg:flex items-center gap-x-1">
          {MENU_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "nav-link group relative px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-primary"
                    : useDarkText
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-white/80 hover:text-white"
                )}
              >
                {/* Text */}
                <span className="relative z-10">{item.label}</span>

                {/* Active indicator - bottom line */}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ease-out",
                    isActive ? "w-6" : "w-0 group-hover:w-4"
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

        {/* Action Buttons Desktop Only */}
        <div className="hidden lg:flex items-center gap-x-3">
          <Link
            href="https://app.belvederepharmacy.net/#/auth/signin"
            className={cn(
              "group relative px-4 py-2 text-sm font-semibold transition-all duration-300 overflow-hidden rounded-lg",
              useDarkText
                ? "text-gray-700 hover:text-primary"
                : "text-white hover:text-primary"
            )}
          >
            {/* Sliding underline */}
            <span className="relative z-10">Order Prescriptions</span>
            <span className={cn(
              "absolute bottom-1 left-0 h-px bg-current transition-all duration-300 ease-out",
              "w-0 group-hover:w-full"
            )} />
          </Link>

          <Button
            asChild
            className="group relative bg-primary hover:bg-primary text-white font-semibold px-6 rounded-lg overflow-hidden transition-all duration-300"
          >
            <Link
              href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
              className="flex items-center gap-2"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <span className="relative z-10">Book Now</span>
              <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Mobile Only */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "p-2 rounded-xl transition-all duration-300",
                  useDarkText
                    ? "hover:bg-gray-100 text-gray-900"
                    : "hover:bg-white/10 text-white"
                )}
              >
                <MenuIcon className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[350px] p-0 border-0 bg-white [&>button]:hidden"
            >
              {/* Mobile Menu Header */}
              <div className="bg-[#002f4b] p-6 pb-8">
                <SheetHeader className="mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/logo/belvedere-logo.png"
                        alt="Belvedere"
                        width={44}
                        height={44}
                      />
                      <SheetTitle className="text-left text-white">
                        <span className="block font-bold text-lg">Belvedere</span>
                        <span className="text-xs text-white/70 font-normal">Pharmacy</span>
                      </SheetTitle>
                    </div>
                    <SheetClose className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <X className="size-5 text-white" />
                    </SheetClose>
                  </div>
                </SheetHeader>

                {/* Quick Contact - In Header */}
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="tel:+441234567890"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-3 transition-colors"
                  >
                    <div className="p-2 bg-primary rounded-lg">
                      <Phone className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Call Us</p>
                      <p className="text-sm font-semibold text-white">+44 (0) 123 456 7890</p>
                    </div>
                  </a>
                  <div className="flex gap-3">
                    <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-xl p-3">
                      <MapPin className="size-4 text-primary" />
                      <div>
                        <p className="text-xs text-white/60">Location</p>
                        <p className="text-xs font-semibold text-white">Belvedere, Kent</p>
                      </div>
                    </div>
                    <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-xl p-3">
                      <Clock className="size-4 text-primary" />
                      <div>
                        <p className="text-xs text-white/60">Hours</p>
                        <p className="text-xs font-semibold text-white">Mon-Fri 9-6</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6 space-y-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Menu</p>
                {MENU_LINKS.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all duration-300",
                          isActive
                            ? "bg-primary text-white"
                            : "hover:bg-gray-50 text-gray-900"
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={cn(
                          "size-4 transition-all duration-300 group-hover:translate-x-1",
                          isActive ? "text-white" : "text-gray-400 group-hover:text-primary"
                        )} />
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>

              {/* Mobile Action Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent pt-12">
                <div className="space-y-3">
                  <Button asChild className="group w-full bg-primary hover:bg-primary/90 py-6 rounded-xl overflow-hidden relative">
                    <Link
                      href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection"
                      className="flex items-center justify-center gap-2 font-semibold"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10">Book Appointment</span>
                      <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full py-6 rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  >
                    <Link
                      href="https://app.belvederepharmacy.net/#/auth/signin"
                      className="font-semibold"
                    >
                      Order Prescriptions
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
