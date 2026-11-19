"use client";
import { useRef, useSyncExternalStore } from "react";
import { gsap, SplitText, useGSAP, NO_MOTION } from "@/lib/gsap";

const links = ["About", "Work", "Services", "Team", "Contact"];
const subscribeToYear = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => undefined;

export default function Footer() {
  const root = useRef<HTMLElement>(null);
  const year = useSyncExternalStore(subscribeToYear, getYear, getServerYear);

  // The oversized name rises into place, scrubbed to the final stretch of scroll.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        SplitText.create("[data-name]", {
          type: "chars",
          mask: "chars",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, {
              yPercent: 105,
              stagger: 0.05,
              ease: "none",
              scrollTrigger: { trigger: root.current, start: "top 85%", end: "bottom bottom", scrub: true },
            }),
        });
      });
    },
    { scope: root }
  );

  return (
    <footer ref={root} className="bg-deep pt-20">
      <div className="grid gap-12 px-6 md:grid-cols-12 md:px-12">
        <p className="max-w-xs text-muted md:col-span-5">Brand, web and film from Nairobi, for the world.</p>
        <nav aria-label="Footer" className="md:col-span-4 md:col-start-7">
          <ul className="space-y-2 text-lg">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand">{l}</a></li>
            ))}
          </ul>
        </nav>
        <p className="text-muted md:col-span-2">Nairobi, Kenya<br />hello@trioedge.co.ke</p>
      </div>
      <p data-name aria-label="Trio Edge" className="mt-16 select-none whitespace-nowrap px-4 text-center text-[20.5vw] font-semibold leading-[0.95] tracking-[-0.06em] md:mt-28">
        Trio Edge
      </p>
      <p className="px-6 pb-6 text-sm text-muted md:px-12">&copy; {year} Trio Edge. All rights reserved.</p>
    </footer>
  );
}
