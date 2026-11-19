"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const text = ref.current?.querySelector(".about-copy");
    if (!text) return;
    const split = new SplitText(text, { type: "words" });
    gsap.set(split.words, { color: "rgba(255,255,255,.2)" });
    gsap.to(split.words, { color: "#FFFFFF", stagger: 0.12, ease: "none", scrollTrigger: { trigger: text, start: "top 75%", end: "bottom 45%", scrub: 0.6 } });
  }, { scope: ref });
  return (
    <section ref={ref} id="about" className="section-pad bg-surface-alt">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow mb-10">ABOUT TRIO-EDGE</p>
        <p className="about-copy max-w-[1240px] text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.12] tracking-[-.025em]">
          Trio-Edge bridges East African ambition with global strategic execution. We turn complex markets into clear choices,
          <span className="text-primary"> decisive momentum</span>, and enduring advantage.
        </p>
      </div>
    </section>
  );
}
