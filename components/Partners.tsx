"use client";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, NO_MOTION } from "@/lib/gsap";
import { partners } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function Partners() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useReveal(root);

  // Endless marquee that speeds up with scroll velocity, then settles.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        const loop = gsap.to(track.current, { xPercent: -50, duration: 40, ease: "none", repeat: -1 });
        ScrollTrigger.create({
          trigger: root.current,
          onUpdate: (self) => {
            const boost = Math.min(Math.abs(self.getVelocity()) / 250, 5);
            gsap.killTweensOf(loop);
            gsap.timeline().to(loop, { timeScale: 1 + boost, duration: 0.2 }).to(loop, { timeScale: 1, duration: 1.2 });
          },
        });
      });
    },
    { scope: root }
  );

  const row = (
    <ul className="flex shrink-0 items-center gap-16 pr-16 md:gap-28 md:pr-28">
      {partners.map((p) => (
        <li key={p} className="whitespace-nowrap text-[clamp(2.2rem,6vw,5.5rem)] font-semibold tracking-[-0.05em] text-white/85">{p}</li>
      ))}
    </ul>
  );

  return (
    <section ref={root} id="partners" className="overflow-hidden bg-deep py-24 md:py-40">
      <h2 data-reveal className="display mb-14 px-6 text-[clamp(2.4rem,7vw,6.5rem)] md:mb-24 md:px-12">Our partners</h2>
      <div ref={track} className="flex w-max" aria-label="Partners">
        {row}
        <div aria-hidden>{row}</div>
      </div>
    </section>
  );
}
