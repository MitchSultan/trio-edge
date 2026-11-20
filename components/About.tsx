"use client";
import { useRef } from "react";
import { about } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import { gsap, SplitText, useGSAP, NO_MOTION } from "@/lib/gsap";

export default function About() {
  const root = useRef<HTMLElement>(null);
  const copy = useRef<HTMLParagraphElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const el = copy.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        const split = SplitText.create(el, { type: "words" });

        gsap.fromTo(
          split.words,
          { color: "rgba(255,255,255,.2)" },
          {
            color: "#BA964D",
            stagger: 0.12,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // starts as soon as the copy enters the viewport
              end: "bottom 45%", // finishes before the paragraph leaves
              scrub: true,
              invalidateOnRefresh: true, // recalc after the hero's pin-spacer is added
              // markers: true,
            },
          }
        );

        return () => split.revert();
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="about" className="relative bg-canvas px-6 py-32 md:px-12 md:py-48">
      <h2 data-reveal className="mb-12 text-2xl font-medium tracking-tight md:mb-20 md:text-3xl">
        About us
      </h2>
      <p
        ref={copy}
        data-about-copy
        className="max-w-[26ch] text-[clamp(1.9rem,4.6vw,4.4rem)] font-normal leading-[1.12] tracking-[-0.035em] md:max-w-[30ch]"
      >
        {about.lead}
      </p>
      <p data-reveal className="mt-14 ml-auto max-w-md text-lg text-muted md:mt-24">
        {about.second}
      </p>
    </section>
  );
}