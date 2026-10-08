"use client";

import { MENU_LINKS, TRACKING_EVENTS } from "@/lib/constants/general";
import { useTenantContext } from "@/components/providers/tenant-provider";
import ModeToggle from "../shared/theme-mode-toggle";
import { cn } from "@/lib/utils/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { track } from "@/lib/analytics/tracker";

export function DesktopMenu() {
  const { pathname } = useNavigationMenu();
  const { tenant } = useTenantContext();

  const contactHref = "/contact-us";

  return (
    <div className="hidden lg:flex items-center">
      {/* Floating White Pill Navbar container matching exact reference aesthetic */}
      <nav
        aria-label="Main Navigation"
        className="flex items-center bg-white/95 dark:bg-[#002238]/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_22px_rgba(0,0,0,0.06)] rounded-full pl-6 pr-2 py-1.5 gap-x-5 xl:gap-x-7"
      >
        {/* Menu Links with muted grey (#64748B) text */}
        <div className="flex items-center gap-x-4 xl:gap-x-6">
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
                  "relative text-sm xl:text-[14.5px] font-medium transition-colors duration-200 py-1",
                  isActive
                    ? "text-[#259b8b] dark:text-[#50D3C5] font-bold"
                    : "text-[#64748B] dark:text-slate-200 hover:text-[#259b8b] dark:hover:text-[#50D3C5]"
                )}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-[#50D3C5]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Contact Button with teal background #50D3C5 */}
        <Button
          asChild
          className="rounded-full bg-[#50D3C5] hover:bg-[#45C5B6] text-white px-6 py-2.5 text-sm font-bold shadow-xs transition-all border-0 cursor-pointer"
        >
          <Link
            href={contactHref}
            onClick={() => {
              track(TRACKING_EVENTS.bookAppointmentButton, contactHref);
            }}
          >
            Contact
          </Link>
        </Button>

        <ModeToggle />
      </nav>
    </div>
  );
}

export function DesktopMenuButtons() {
  return null;
}
