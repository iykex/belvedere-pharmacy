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
import { ChevronRight, MenuIcon, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  ACTION_BUTTONS_MOBILE_MENU,
  BUSINESS_PROFILE,
  CONTACT_INFO_MOBILE_MENU,
  EXTERNAL_LINKS,
  MENU_LINKS,
} from "@/lib/constants/general";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { cn } from "@/lib/utils";
import { ButtonVariants } from "@/lib/types/general";
import CookieConsentDialogue from "../general/cookie-consent";
import { track } from "@/lib/analytics/tracker";

export default function MobileMenu() {
  const { hasDarkHero, isScrolled, pathname } = useNavigationMenu();
  return (
    <div className="lg:hidden flex items-center gap-3 relative">
      <ModeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "transition-all duration-300 h-10 w-10 rounded-lg",
              hasDarkHero && !isScrolled
                ? "text-white hover:bg-white/10"
                : "text-foreground hover:bg-foreground/10"
            )}
          >
            <MenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full h-full sm:w-[350px] p-0 border-0 bg-background [&>button]:hidden"
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
                    <span className="block font-bold leading-3">Belvedere</span>
                    <span className="text-xs text-white/70 font-normal">
                      Pharmacy
                    </span>
                  </SheetTitle>
                </div>
                <SheetClose className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <X className="size-5 text-white" />
                </SheetClose>
              </div>
            </SheetHeader>

            {/* Quick Contact - In Header */}
            <div className="grid grid-cols-1 gap-3">
              <div className="w-full bg-white/10 hover:bg-white/20 rounded-xl relative">
                <Link
                  href={EXTERNAL_LINKS.socials.phone}
                  className="flex items-center gap-3 p-3 transition-colors w-fit"
                >
                  <div className="p-2 bg-primary rounded-lg">
                    <Phone className="size-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Call Us</p>
                    <p className="text-sm font-semibold text-white">
                      {BUSINESS_PROFILE.phone}
                    </p>
                  </div>
                </Link>
                <CookieConsentDialogue bubbleStateClassName="lg:hidden absolute left-[85%] bottom-2" />
              </div>

              <div className="flex gap-3">
                {CONTACT_INFO_MOBILE_MENU.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex-1 flex items-center gap-2 bg-white/10 rounded-xl p-3"
                    >
                      <Icon className="size-4 text-primary" />
                      <div>
                        <p className="text-xs text-white/60">{info.label}</p>
                        <p className="text-xs font-semibold text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons - Below location/hours */}
              <div className="flex gap-2 mt-4">
                {ACTION_BUTTONS_MOBILE_MENU.map((button) => (
                  <Button
                    key={button.label}
                    asChild
                    variant={button.variant as ButtonVariants}
                    className={button.className}
                  >
                    <Link
                      href={button.href}
                      onClick={() => {
                        track(button.tracking, button.href);
                      }}
                      className="flex items-center justify-center"
                    >
                      {button.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="p-6 space-y-2 flex-1 overflow-y-auto">
            <p className="text-sm mb-4 font-semibold text-gray-400 uppercase tracking-wider">
              Menu
            </p>
            {MENU_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all duration-300",
                      isActive
                        ? " text-primary font-bold animate-pulse py-2"
                        : "hover:bg-gray-50 text-gray-900 dark:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-all duration-300 group-hover:translate-x-1",
                        isActive
                          ? "text-primary stroke-3"
                          : "text-gray-400 group-hover:text-primary"
                      )}
                    />
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
