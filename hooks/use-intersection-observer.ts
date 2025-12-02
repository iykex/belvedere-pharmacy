"use client";
import { useEffect } from "react";

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -20% 0px",
  threshold: 0.15,
};

export function useIntersectionObserver(selector: string) {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    const io = new IntersectionObserver((targets) => {
      targets.forEach((element, index) => {
        if (element.isIntersecting && element.target instanceof HTMLElement) {
          element.target.style.transitionDelay = `${index * 80}ms`;
          element.target.classList.add("in-view");
        } else {
          element.target.classList.remove("in-view");
        }
      });
    }, observerOptions);
    targets.forEach((target) => io.observe(target));

    return () =>
      targets.forEach((target) => {
        io.unobserve(target);
        io.disconnect();
      });
  }, [observerOptions]);
}
