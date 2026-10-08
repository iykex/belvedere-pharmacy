"use client";
import useNavigationMenu from "@/hooks/use-navigation-menu";
import { INTERNAL_LINKS } from "@/lib/constants/general";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { TENANT_DISPLAY_NAMES } from "@/lib/config/tenant";

export default function Brand() {
  const { hasDarkHero, isScrolled } = useNavigationMenu();
  const { tenant, slug } = useTenantContext();
  const displayName = tenant?.displayName ?? TENANT_DISPLAY_NAMES[slug];
  const words = displayName.split(" ");
  const primaryName = words[0] ?? "Pharmacy";
  const secondaryName = words.slice(1).join(" ") || "Pharmacy";
  const logoSrc = `/logo/${slug}-logo.png`;

  return (
    <div className="flex items-center gap-x-2">
      <Link
        href={INTERNAL_LINKS.homePage}
        className="relative group flex items-center gap-2.5 sm:gap-3"
      >
        {/* Natural unrounded pharmacy logo per user instruction */}
        <Image
          src={logoSrc}
          alt={`${displayName} logo`}
          width={44}
          height={44}
          className="relative z-10 h-9 sm:h-10 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          priority
        />

        {/* Brand name typography: Deep charcoal #1E293B & muted grey #64748B */}
        <div className="flex items-baseline gap-1.5">
          <span
            className={cn(
              "text-xl sm:text-2xl font-black tracking-tight transition-colors duration-300",
              hasDarkHero
                ? "text-white"
                : "text-[#1E293B] dark:text-white",
              isScrolled && "text-[#1E293B] dark:text-white"
            )}
          >
            {primaryName}
          </span>
          <span
            className={cn(
              "text-xl sm:text-2xl font-light tracking-tight transition-colors duration-300",
              hasDarkHero
                ? "text-white/80"
                : "text-[#64748B] dark:text-slate-300",
              isScrolled && "text-[#64748B] dark:text-slate-300"
            )}
          >
            {secondaryName}
          </span>
        </div>
      </Link>
    </div>
  );
}
