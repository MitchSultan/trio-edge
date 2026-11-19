"use client";

import { useRef } from "react";
import { useGSAP, gsap, Flip, ScrollTrigger } from "@/lib/gsap";
import TrioEdgeLogo from "../TrioEdgeLogo";

export default function CaseStudySection() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const origin = document.querySelector("[data-flip-origin] [data-flip-id]");
    const destination = ref.current?.querySelector("[data-flip-destination]");
    if (!origin || !destination) return;
    const state = Flip.getState(origin);
    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      end: "bottom 55%",
      onEnter: () => {
        destination.appendChild(origin);
        Flip.from(state, { duration: 0.9, ease: "power2.inOut", absolute: true });
      },
      onEnterBack: () => {
        document.querySelector("[data-flip-origin]")?.appendChild(origin);
        Flip.from(state, { duration: 0.9, ease: "power2.inOut", absolute: true });
      },
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="case-study" className="section-pad border-y border-hairline bg-surface-alt">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow mb-10">FEATURED CASE STUDY</p>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div data-flip-destination className="aspect-[16/10] border border-hairline bg-surface-raised" />
          <div>
            <TrioEdgeLogo showWordmark={false} className="mb-8" />
            <p className="text-[12px] uppercase tracking-[.1em] text-primary">Savanna Pay</p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.02] tracking-[-.025em]">One platform.<br />Three markets.</h2>
            <dl className="mt-10 grid grid-cols-2 gap-px bg-hairline">
              <div className="bg-surface-alt p-5"><dt className="text-[12px] uppercase tracking-wider text-ink-muted">Challenge</dt><dd className="mt-2 text-sm">Fragmented market entry</dd></div>
              <div className="bg-surface-alt p-5"><dt className="text-[12px] uppercase tracking-wider text-ink-muted">Outcome</dt><dd className="mt-2 text-sm text-primary">+140% market reach</dd></div>
              <div className="bg-surface-alt p-5"><dt className="text-[12px] uppercase tracking-wider text-ink-muted">Launches</dt><dd className="mt-2 text-sm">3 markets in 14 months</dd></div>
              <div className="bg-surface-alt p-5"><dt className="text-[12px] uppercase tracking-wider text-ink-muted">Approach</dt><dd className="mt-2 text-sm">Regulation-led growth</dd></div>
            </dl>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-[12px] font-semibold uppercase tracking-[.1em] text-ink">View Case Study</a>
          </div>
        </div>
      </div>
    </section>
  );
}
