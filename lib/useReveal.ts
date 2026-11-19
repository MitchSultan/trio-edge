"use client";
import type { RefObject } from "react";
import { gsap, SplitText, useGSAP, NO_MOTION } from "@/lib/gsap";

/**
 * One scoped reveal system for a section:
 *  [data-reveal] masked line-by-line text rise · [data-clip] image wipe · [data-line] rule draw
 * SplitText autoSplit re-splits on resize/font load and rebuilds the returned tween.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 110,
                duration: 1.1,
                ease: "expo.out",
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: "top 88%" },
              }),
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) =>
          gsap.fromTo(
            el,
            { clipPath: "inset(0% 0% 100% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } }
          )
        );
        gsap.utils.toArray<HTMLElement>("[data-line]").forEach((el) =>
          gsap.from(el, { scaleX: 0, transformOrigin: "left center", duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%" } })
        );
      });
    },
    { scope }
  );
}
