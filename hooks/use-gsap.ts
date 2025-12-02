"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { RefObject } from "react";

gsap.registerPlugin(SplitText);

export function useBannerAnimation(scope: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      const titleSplit = new SplitText("#title", {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
      });

      const descSplit = new SplitText("#description", {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
      });

      gsap.set(["#title", "#description"], {
        opacity: 1,
        visibility: "visible",
      });

      gsap.set(titleSplit.words, {
        opacity: 0,
        y: 600,
        x: 250,
      });

      gsap.set(descSplit.chars, {
        opacity: 0,
        x: 5000,
        y: -500,
      });

      gsap.set(
        ["#menu-solid-btn", "#menu-outline-btn", "#info-badges", "#NHS-badge"],
        {
          visibility: "visible",
          opacity: 0,
        }
      );

      gsap.set("#menu-solid-btn", { y: -1000 });
      gsap.set("#menu-outline-btn", { y: -1000 });
      gsap.set("#info-badges", { scale: 0 });
      gsap.set("#NHS-badge", { x: -5000 });

      const tl = gsap.timeline();

      tl.to(titleSplit.words, {
        opacity: 1,
        y: 0,
        x: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
      });

      tl.to(
        descSplit.chars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.01,
          duration: 0.1,
          ease: "power3.out",
        },
        "-=0.7"
      );

      tl.to(
        "#menu-solid-btn",
        {
          opacity: 1,
          y: 0,
          ease: "elastic.out(1,0.3)",
        },
        "-=0.4"
      );

      tl.to(
        "#menu-outline-btn",
        {
          opacity: 1,
          y: 0,
          ease: "bounce.out",
        },
        "-=0.3"
      );

      tl.to(
        "#info-badges",
        {
          opacity: 1,
          scale: 1,
          ease: "back.out(1.7)",
          transformOrigin: "center center",
          duration: 0.5,
        },
        "-=0.2"
      );

      tl.to(
        "#NHS-badge",
        {
          opacity: 1,
          x: 0,
          ease: "back.out(1.1)",
          duration: 0.7,
        },
        "-=0.3"
      );

      return () => {
        titleSplit.revert();
        descSplit.revert();
      };
    },
    {
      scope,
      dependencies: [],
      revertOnUpdate: true,
    }
  );
}
