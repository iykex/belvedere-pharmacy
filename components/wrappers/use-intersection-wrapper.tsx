"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ReactNode } from "react";

export default function IntersectionWrapper({
  children,
  selector,
}: {
  children: ReactNode;
  selector: string;
}) {
  useIntersectionObserver(selector);
  return <>{children}</>;
}
