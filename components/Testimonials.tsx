"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { testimonials } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const idx = useRef(0);
  const busy = useRef<gsap.core.Timeline | null>(null);
  useReveal(root);

  const { contextSafe } = useGSAP({ scope: root });

  // Responds to a click: current quote leaves, next one arrives from the same direction.
  const go = contextSafe((dir: 1 | -1) => {
    if (busy.current?.isActive()) return;
    const items = gsap.utils.toArray<HTMLElement>("[data-quote]");
    const cur = items[idx.current];
    idx.current = gsap.utils.wrap(0, items.length, idx.current + dir);
    const next = items[idx.current];
    busy.current = gsap
      .timeline()
      .to(cur, { autoAlpha: 0, y: -32 * dir, duration: 0.5, ease: "power2.in" })
      .fromTo(next, { autoAlpha: 0, y: 32 * dir }, { autoAlpha: 1, y: 0, duration: 0.9, ease: "expo.out" });
  });

  return (
    <section ref={root} id="testimonials" className="bg-canvas px-6 py-24 md:px-12 md:py-40">
      <h2 data-reveal className="display mb-14 text-[clamp(2.4rem,7vw,6.5rem)] md:mb-24">Kind words</h2>
      <div className="grid" aria-live="polite">
        {testimonials.map((t, i) => (
          <figure key={t.a} data-quote className={`col-start-1 row-start-1 ${i ? "invisible opacity-0" : ""}`}>
            <blockquote className="max-w-[28ch] text-[clamp(1.8rem,4.4vw,4.2rem)] font-normal leading-[1.12] tracking-[-0.035em]">{t.q}</blockquote>
            <figcaption className="mt-8 text-lg">{t.a}<span className="block text-muted">{t.r}</span></figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-12 flex gap-3">
        <button type="button" onClick={() => go(-1)} className="btn btn-outline" aria-label="Previous testimonial">Previous</button>
        <button type="button" onClick={() => go(1)} className="btn btn-outline" aria-label="Next testimonial">Next</button>
      </div>
    </section>
  );
}
