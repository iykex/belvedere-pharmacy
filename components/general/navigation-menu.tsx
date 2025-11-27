import { MENU_LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export function MenuButtons({
  outlineButtonClassName,
  solidButtonClassName,
  wrapperClassName,
}: {
  wrapperClassName?: string;
  outlineButtonClassName?: string;
  solidButtonClassName?: string;
}) {
  return (
    <div className={wrapperClassName}>
      <Button variant={"outline"} className={outlineButtonClassName}>
        <Link href="https://app.belvederepharmacy.net/#/auth/signin">
          Order Prescriptions
        </Link>
      </Button>
      <Button className={solidButtonClassName}>
        <Link href="https://shop.belvederepharmacy.net/appointments/viewallservices/all?pharmacy=378&type=redirection">
          Book an Appointment
        </Link>
      </Button>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="flex justify-between px-5">
      {/* Brand */}
      <div className="flex gap-x-2">
        <Image
          src="/logo/belvedere-logo.png"
          alt="Belvedere"
          width={100}
          height={100}
        />
        <p className="hidden sm:block">Belvedere Pharmacy</p>
      </div>

      {/* Navigation Links Desktop Only */}
      <div className="hidden sm:flex gap-x-6">
        {MENU_LINKS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Action Buttons Desktop Only */}
      <MenuButtons wrapperClassName="hidden sm:flex" />

      {/* Mobile Only */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Belvedere Pharmacy</SheetTitle>
            </SheetHeader>
            <div>
              {MENU_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="block">
                  {item.label}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <MenuButtons />
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
