"use client";

import { DARK_HERO_PAGES } from "@/lib/constants/general";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useNavigationMenu() {
  const navMenu = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const hasDarkHero = DARK_HERO_PAGES.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { navMenu, isScrolled, pathname, hasDarkHero };
}
