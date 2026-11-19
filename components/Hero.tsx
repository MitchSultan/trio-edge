"use client";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, NO_MOTION } from "@/lib/gsap";
import { heroVideos } from "@/lib/content";

const COLS = 6;
const ROWS = 4;

export default function Hero({ ready }: { ready: boolean }) {
  const root = useRef<HTMLElement>(null);
  const intro = useRef<gsap.core.Timeline | null>(null);
  const readyRef = useRef(ready);
  readyRef.current = ready;

  // Build once fonts are ready so SplitText measures the real glyphs.
  useGSAP(
    () => {
      let ctx: gsap.Context | undefined;
      let dead = false;

      document.fonts.ready.then(() => {
        if (dead || !root.current) return;
        ctx = gsap.context(() => {
          const cols = gsap.utils.toArray<HTMLElement>("[data-col]");
          const a = SplitText.create("[data-h1-a]", { type: "chars", mask: "chars" });
          const b = SplitText.create("[data-h1-b]", { type: "chars", mask: "chars" });
          gsap.set(b.chars, { yPercent: 110 });

          // Page-load moment: plays when the loader starts its wipe.
          const tl = gsap.timeline({ paused: true, defaults: { ease: "expo.out" } });
          tl.from("[data-grid]", { scale: 1.25, duration: 2.2, ease: "power3.out" }, 0)
            .from(a.chars, { yPercent: 110, duration: 1.2, stagger: 0.03 }, 0.35)
            .from("[data-sub]", { opacity: 0, y: 16, duration: 1 }, 1);
          intro.current = tl;
          if (readyRef.current) tl.play();

          const mm = gsap.matchMedia();
          mm.add(NO_MOTION, () => {
            const scroll = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: root.current,
                start: "top top",
                end: "+=300%",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });
            // Alternating columns: even rise, odd fall, across the whole pin.
            cols.forEach((c, i) =>
              scroll.fromTo(c, { yPercent: i % 2 ? 12 : -12 }, { yPercent: i % 2 ? -12 : 12, duration: 1 }, 0)
            );
            scroll
              .to(a.chars, { yPercent: -110, stagger: 0.02, duration: 0.3, ease: "power2.in" }, 0.3)
              .to("[data-sub]", { opacity: 0, duration: 0.15 }, 0.3)
              .to(b.chars, { yPercent: 0, stagger: 0.02, duration: 0.3, ease: "power2.out" }, 0.5)
              .to("[data-shade]", { opacity: 0.92, duration: 0.25 }, 0.75);
          });
        }, root);
      });

      return () => {
        dead = true;
        ctx?.revert();
      };
    },
    { scope: root }
  );

  // Hand-off from the loader.
  useGSAP(
    () => {
      if (ready) intro.current?.play();
    },
    { dependencies: [ready] }
  );

  return (
    <section ref={root} id="top" className="relative h-svh w-full overflow-hidden bg-deep">
      <div data-grid className="absolute inset-x-0 -top-[20svh] grid h-[140svh] grid-cols-3 gap-1 will-change-transform md:grid-cols-6 md:gap-2">
        {Array.from({ length: COLS }, (_, c) => (
          <div key={c} data-col className={`${c < 3 ? "grid" : "hidden md:grid"} grid-rows-4 gap-1 will-change-transform md:gap-2`}>
            {Array.from({ length: ROWS }, (_, r) => {
              const k = (c * 2 + r) % heroVideos.length;
              return (
                <div key={r} className="relative overflow-hidden bg-raised">
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(${135 + k * 9}deg, hsl(${338 + (k % 6) * 7} 78% ${13 + (k % 4) * 4}%), #0a0a0a)` }}
                  />
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={heroVideos[k]}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/95 via-canvas/25 to-canvas/30" />
      <div data-shade className="pointer-events-none absolute inset-0 bg-canvas opacity-0" />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-10 md:px-12 md:pb-14">
        <p data-sub className="mb-5 max-w-md text-base text-white/80 md:text-lg">
          Strategy. Clarity. Edge
        </p>
        <h1 className="display grid text-[clamp(2.6rem,8.2vw,8rem)]">
          <span data-h1-a className="col-start-1 row-start-1">We tell Stories,</span>
          <span data-h1-b className="col-start-1 row-start-1">We sell Authenticity.</span>
        </h1>
      </div>
    </section>
  );
}
