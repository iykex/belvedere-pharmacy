"use client";

import { useEffect, useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -15% 0px",
  threshold: 0.1,
};

export function useIntersectionObserver(selector: string) {
  useEffect(() => {
    // Determine if we are on the client
    if (typeof window === "undefined") return;

    // Immediately show all elements matching the selector
    // This effectively disables the scroll fade-in animation
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      if (el instanceof HTMLElement) {
        // Force visibility and disable transitions
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.transition = "none";
        el.style.animation = "none";
        el.classList.add("in-view");
      }
    });
  }, [selector]);
}
