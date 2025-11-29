"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { SplitText } from "gsap/SplitText";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { RefObject } from "react";
gsap.registerPlugin(useGSAP, GSDevTools, SplitText, CustomBounce, CustomEase);

export function useBannerAnimation(
  animationScope: RefObject<HTMLDivElement | null>
) {
  useGSAP(
    () => {
      const splitTitle = SplitText.create("#title", {
        type: "words, chars",
      });
      const splitDescription = SplitText.create("#description", {
        type: "words, chars",
      });

      gsap.set("#title", { autoAlpha: 1 });
      gsap.set("#description", { autoAlpha: 1 });
      gsap.set("#info-badges", { autoAlpha: 1 });
      gsap.set(".solid-button", { autoAlpha: 1, scale: 1 });
      gsap
        .timeline({ defaults: { autoAlpha: 0, duration: 1 } })
        .from(splitTitle.words, { y: 200, stagger: 0.08 })
        .from(
          splitDescription.chars,
          { x: 5000, stagger: 0.01, duration: 0.7 },
          "<0.3"
        )
        .from(
          ".solid-button",
          {
            y: -400,
            duration: 0.5,
          },
          "<0.1"
        )
        .from(
          ".outline-button",
          { y: -500, ease: "bounce.out()", duration: 0.5 },
          "<0.2"
        )
        .from("#info-badges", {
          scale: 0,
          ease: "back.out(1.7)",
          transformOrigin: "center center",
        })
        .from("#NHS-badge", { x: -5000, ease: "back.out(1)" });
    },
    { scope: animationScope }
  );
}
