"use client";

import { track } from "@/lib/analytics/tracker";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function UseTracker() {
  const pathname = usePathname();

  useEffect(() => {
    async function callTracker() {
      await track("page-view", pathname);
    }
    callTracker();
  }, [pathname]);
}
