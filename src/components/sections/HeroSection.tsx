"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

const videos = [
  "https://cdn.coverr.co/videos/coverr-an-office-building-at-night-1575/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-aerial-view-of-a-city-1576/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-people-working-in-an-office-1578/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-a-modern-building-1577/1080p.mp4",
];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const reduce = gsap.matchMedia();
    reduce.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".hero-column-stack").forEach((column, i) => {
        const distance = i % 2 === 0 ? "-50%" : "0%";
        const start = i % 2 === 0 ? "0%" : "-50%";
        gsap.set(column, { yPercent: parseFloat(start) });
        const tween = gsap.to(column, { yPercent: parseFloat(distance), duration: 18 + i * 2, repeat: -1, ease: "none", modifiers: { yPercent: gs => String((parseFloat(gs) + 50) % 50 - (i % 2 === 0 ? 50 : 0)) } });
        ScrollTrigger.create({ trigger: ref.current, start: "top top", end: "bottom top", onUpdate: self => gsap.to(tween, { timeScale: 1 + Math.abs(self.getVelocity()) / 900, duration: 0.25, overwrite: true }) });
      });
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.8, pin: false } });
      tl.to(".headline-one", { y: -80, opacity: 0, letterSpacing: "-.09em", duration: 1 })
        .fromTo(".headline-two", { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=.15");
    });
  }, { scope: ref });

  return (
    <section ref={ref} id="hero" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-[#0A1B30]" aria-label="Trio-Edge introduction">
      <div className="absolute inset-0 grid grid-cols-3 gap-2 px-2 md:grid-cols-4 lg:grid-cols-6" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, col) => (
          <div key={col} className="h-full overflow-hidden">
            <div className="hero-column-stack flex h-[200%] flex-col gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((tile) => (
                <div key={tile} className="relative h-[calc(25%-6px)] min-h-[22vh] overflow-hidden border border-[rgba(186,150,77,.15)] bg-navy">
                  <video className="h-full w-full object-cover opacity-70" autoPlay muted loop playsInline preload="metadata" poster={videos[tile % 4].replace(".mp4", ".jpg")} src={videos[tile % 4]} />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,.35),rgba(10,10,10,.92))]" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hero-content absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-6 pb-12 md:px-20 md:pb-16">
        <div className="absolute left-6 top-[-90px] flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[.18em] text-white/70 md:left-20">
          <span className="h-px w-12 bg-primary" /> Scroll to discover
        </div>
        <h1 className="headline-one max-w-[1120px] text-[clamp(3.25rem,8.8vw,8rem)] font-normal leading-[.9] tracking-[-.05em] text-white">
          Made in Nairobi.<br />Built for the World
        </h1>
        <h1 className="headline-two absolute bottom-12 left-6 max-w-[1120px] opacity-0 text-[clamp(3.25rem,8.8vw,8rem)] font-normal leading-[.9] tracking-[-.05em] text-white md:bottom-16 md:left-20">
          Strategy. Clarity. <span className="text-primary">Edge.</span>
        </h1>
        {/* <a href="#about" className="mt-8 inline-flex h-12 items-center rounded-full bg-primary px-6 text-[12px] font-semibold uppercase tracking-[.1em] text-ink shadow-[0_0_20px_rgba(186,150,77,.35)]">Explore Trio-Edge</a> */}
      </div>
    </section>
  );
}
