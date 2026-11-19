"use client";

import { useEffect, useRef } from "react";
import TrioEdgeLogo from "./TrioEdgeLogo";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("trio_edge_preloader_done")) {
      ref.current?.remove();
      onComplete();
    }
  }, [onComplete]);

  useGSAP(() => {
    if (sessionStorage.getItem("trio_edge_preloader_done")) return;
    document.documentElement.style.overflow = "hidden";
    const paths = ref.current?.querySelectorAll("[data-draw-path]");
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("trio_edge_preloader_done", "1");
        document.documentElement.style.overflow = "";
        ref.current?.remove();
        onComplete();
      },
    });
    tl.fromTo(paths || [], { drawSVG: "0%" }, { drawSVG: "100%", duration: 1.1, stagger: 0.18, ease: "power2.inOut" })
      .to(paths || [], { fillOpacity: 1, duration: 0.5, stagger: 0.08 }, "-=0.25")
      .to(paths || [], { strokeOpacity: 0, duration: 0.25 }, "<")
      .to({}, { duration: 0.2 })
      .to(ref.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" })
      .fromTo(".hero-content", { scale: 1.06 }, { scale: 1, duration: 0.9, ease: "power3.out" }, "<");
  }, { scope: ref });

  return <div ref={ref} id="preloader" className="fixed inset-0 z-[100] grid place-items-center bg-[#030303]"><TrioEdgeLogo /></div>;
}
