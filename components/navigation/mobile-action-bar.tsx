"use client";

import Link from "next/link";
import { Phone, Calendar, Pill, ShieldCheck } from "lucide-react";
import { useTenantContext } from "@/components/providers/tenant-provider";
import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/general";
import { externalLinkProps } from "@/lib/utils/external-link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";

export default function MobileActionBar() {
  const { tenant, isTenantReady } = useTenantContext();
  const pathname = usePathname();

  // Don't render until tenant is ready
  if (!isTenantReady || !tenant) return null;

  const phoneHref = `tel:${tenant.phone.replace(/\D/g, "")}`;
  const bookHref = tenant.bookAppointmentUrl || "/book";
  const prescriptionsHref = tenant.orderPrescriptionsUrl || "/services";

  return (
    <aside
      aria-label="Mobile quick actions"
      className="lg:hidden fixed inset-x-0 bottom-0 z-[60] bg-background/95 dark:bg-[#001d33]/95 backdrop-blur-xl border-t border-border/80 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] px-3 py-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="grid grid-cols-4 items-center gap-2 max-w-md mx-auto">
        {/* 1. Call Us */}
        <a
          href={phoneHref}
          onClick={() => track(TRACKING_EVENTS.phoneContactClick, phoneHref)}
          className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl text-foreground/80 hover:text-primary active:scale-95 transition-all"
        >
          <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
            <Phone className="size-4" />
            <span className="absolute top-0 right-0 size-2 rounded-full bg-emerald-500 ring-2 ring-background animate-pulse" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Call</span>
        </a>

        {/* 2. Pharmacy First (NHS) */}
        <Link
          href="/pharmacy-first"
          className={cn(
            "flex flex-col items-center justify-center gap-1 py-1 rounded-xl active:scale-95 transition-all",
            pathname === "/pharmacy-first"
              ? "text-primary font-bold"
              : "text-foreground/80 hover:text-primary"
          )}
        >
          <div className="size-8 rounded-full bg-[#005EB8]/10 flex items-center justify-center text-[#005EB8] dark:text-sky-400">
            <ShieldCheck className="size-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">NHS Care</span>
        </Link>

        {/* 3. Order Prescriptions */}
        <Link
          href={prescriptionsHref}
          {...externalLinkProps(prescriptionsHref)}
          onClick={() =>
            track(TRACKING_EVENTS.orderPrescriptionButton, prescriptionsHref)
          }
          className="flex flex-col items-center justify-center gap-1 py-1 rounded-xl text-foreground/80 hover:text-primary active:scale-95 transition-all"
        >
          <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Pill className="size-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Prescriptions</span>
        </Link>

        {/* 4. Book Appointment - Primary Action */}
        <Link
          href={bookHref}
          {...externalLinkProps(bookHref)}
          onClick={() =>
            track(TRACKING_EVENTS.bookAppointmentButton, bookHref)
          }
          className="flex flex-col items-center justify-center gap-1 py-1.5 rounded-xl bg-primary text-white shadow-sm hover:bg-primary/95 active:scale-95 transition-all"
        >
          <Calendar className="size-4" />
          <span className="text-[11px] font-bold tracking-tight">Book Now</span>
        </Link>
      </div>
    </aside>
  );
}
