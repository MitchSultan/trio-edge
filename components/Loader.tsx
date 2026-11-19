"use client";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Logo from "./Logo";

const KEY = "te-loaded";

/** Draw and fill the logo once per session, then wipe up. White panel because the logo is navy and gold. */
export default function Loader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const logo = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const el = root.current!;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || sessionStorage.getItem(KEY)) {
        gsap.set(el, { display: "none" });
        onDone();
        return;
      }
      const html = document.documentElement;
      html.classList.add("is-loading");
      const paths = gsap.utils.toArray<SVGPathElement>("path", el);
      gsap.set(paths, { fillOpacity: 0 });

      gsap
        .timeline({
          defaults: { ease: "power2.inOut" },
          onComplete: () => {
            sessionStorage.setItem(KEY, "1");
            html.classList.remove("is-loading");
            gsap.set(el, { display: "none" });
          },
        })
        .from(paths, { drawSVG: "0%", duration: 1.5, stagger: 0.03 })
        .to(paths, { fillOpacity: 1, duration: 0.7, ease: "power1.out" }, "-=0.6")
        .to(paths, { strokeOpacity: 0, duration: 0.4 }, "<0.2")
        .addLabel("wipe", "+=0.4")
        .call(onDone, [], "wipe")
        .to(el, { yPercent: -100, duration: 1.2, ease: "expo.inOut" }, "wipe")
        .to(logo.current, { yPercent: 40, duration: 1.2, ease: "expo.inOut" }, "wipe");

      return () => html.classList.remove("is-loading");
    },
    { scope: root }
  );

  return (
    <div ref={root} className="fixed inset-0 z-[100] grid place-items-center bg-white" aria-hidden>
      <Logo ref={logo} className="w-[min(72vw,540px)]" />
    </div>
  );
}
