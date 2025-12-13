"use client";

import { track } from "@/lib/analytics/tracker";
import { TRACKING_EVENTS } from "@/lib/constants/analytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function UseTracker() {
  const pathname = usePathname();

  useEffect(() => {
    async function callTracker() {
      await track(TRACKING_EVENTS.pageView, pathname);
    }
    callTracker();
  }, [pathname]);
}
