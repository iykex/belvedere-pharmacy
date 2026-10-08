"use client";

import { cn } from "@/lib/utils/utils";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import InfoBar from "../navigation/info-bar";
import Brand from "../navigation/brand";
import { DesktopMenuButtons, DesktopMenu } from "../navigation/desktop-menu";
import MobileMenu from "../navigation/mobile-menu";
import WidthConstraint from "../shared/width-constraint";

export default function NavigationMenu({ className }: { className?: string }) {
  const { hasDarkHero, isScrolled, navMenu, pathname } = useNavigationMenu();
  const isHomePage = pathname === "/";
  return (
    <div
      className={cn(
        "w-full z-50 transition-all duration-300 ease-out",
        isHomePage && !isScrolled && "bg-transparent",
        isScrolled && "bg-[#061a2a]/95 text-foreground shadow-[0_8px_24px_rgba(0,16,32,0.18)] backdrop-blur-md",
        className
      )}
      ref={navMenu}
    >
      <div className="hidden lg:block">
        <InfoBar />
      </div>
      <WidthConstraint className="mx-0 w-full max-w-none px-4 sm:px-6 xl:px-8">
        <nav
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className={cn(
            "w-full flex items-center justify-between gap-x-6 py-3.5 font-medium transition-all duration-300",
            hasDarkHero
              ? "text-background dark:text-foreground"
              : "text-foreground dark:text-background",
            isScrolled && "text-white"
          )}
          >
          <Brand />
          <div className="hidden lg:flex items-center gap-x-1 rounded-full border border-slate-200/90 bg-white py-1.5 pl-3 pr-2 shadow-[0_12px_32px_rgba(4,31,49,0.16)] backdrop-blur-md">
            <DesktopMenu />
            <DesktopMenuButtons />
          </div>
          <MobileMenu />
        </nav>
      </WidthConstraint>
      {!isHomePage && (
        <div className="lg:hidden">
          <InfoBar />
        </div>
      )}
    </div>
  );
}
