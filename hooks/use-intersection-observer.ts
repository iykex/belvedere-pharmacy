"use client";

import { useEffect, useRef } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -15% 0px",
  threshold: 0.1,
};

export function useIntersectionObserver(selector: string) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const elements = document.querySelectorAll(selector);
          const index = Array.from(elements).indexOf(
            entry.target as HTMLElement
          );
          entry.target.style.transitionDelay = `${index * 80}ms`;
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    function observeAll() {
      if (!observerRef.current) return;
      const targets = document.querySelectorAll(selector);
      targets.forEach((target) => {
        if (!target.classList.contains("in-view")) {
          observerRef.current!.observe(target);
        }
      });
    }

    return () => {
      observerRef.current?.disconnect();
      mutationObserver.disconnect();
    };
  }, [selector]);
}
