"use client";
import { useRef } from "react";
import { gsap, SplitText, useGSAP, NO_MOTION } from "@/lib/gsap";

const DIM = "rgba(255,255,255,0.18)";
const PINK = "#ff2a6d";

/** Scroll-scrubbed word sweep: dim, then brand pink as the word is read, then white. */
export default function HighlightText({ children, className = "" }: { children: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        SplitText.create(ref.current!, {
          type: "words",
          autoSplit: true,
          onSplit: (self) => {
            gsap.set(self.words, { color: DIM });
            return gsap.to(self.words, {
              keyframes: [
                { color: PINK, duration: 0.5 },
                { color: "#fff", duration: 0.5 },
              ],
              stagger: 0.12,
              ease: "none",
              scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 45%", scrub: true },
            });
          },
        });
      });
    },
    { scope: ref }
  );

  return <p ref={ref} className={className}>{children}</p>;
}
