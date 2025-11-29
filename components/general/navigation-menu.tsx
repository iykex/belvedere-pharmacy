"use client";
import { MENU_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import useMenuScroll from "@/hooks/use-menu-scroll";

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
      <Button variant={"outline"} className={outlineButtonClassName}>
        <Link
          href="https://app.belvederepharmacy.net/#/auth/signin"
          className="font-semibold"
        >
          {outlineButtonText || "Order Prescriptions"}
        </Link>
      </Button>
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
  );
}

export default function Menu() {
  const navMenu = useRef<HTMLDivElement>(null);
  useMenuScroll(navMenu);

  return (
    <div className="nav-menu" ref={navMenu}>
      {/* Brand */}
      <div className="flex gap-x-2 items-center">
        <Link href="/">
          <Image
            src="/logo/belvedere-logo.png"
            alt="Belvedere"
            width={50}
            height={50}
          />
        </Link>
        <p className="hidden min-[450px]:block">Belvedere Pharmacy</p>
      </div>

      {/* Navigation Links Desktop Only */}
      <div className="hidden lg:flex gap-x-6">
        {MENU_LINKS.map((item) => (
          <Link key={item.href} href={item.href} className="text-center">
            {item.label}
          </Link>
        ))}
      </div>

      {/* Action Buttons Desktop Only */}
      <MenuButtons
        wrapperClassName="hidden lg:flex gap-x-2"
        outlineButtonClassName="hover:text-[#002f4b] bg-transparent font-black"
      />

      {/* Mobile Only */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="rounded-xl">
            <SheetHeader className="border-b pb-4">
              <SheetTitle>Belvedere Pharmacy</SheetTitle>
            </SheetHeader>
            <div className="pl-4 space-y-5">
              {MENU_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="block">
                  {item.label}
                </Link>
              ))}
              <Link href="https://app.belvederepharmacy.net/#/auth/signin">
                Order Prescriptions
              </Link>
            </div>
            <SheetFooter className="border-t">
              <Button>
                <Link href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection">
                  Book Now
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
