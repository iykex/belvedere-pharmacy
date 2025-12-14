"use client";
import UseTracker from "@/hooks/analytics/use-tracker";
import { ReactNode } from "react";

export default function PageTracker({ children }: { children: ReactNode }) {
  UseTracker();
  return <div>{children}</div>;
}
