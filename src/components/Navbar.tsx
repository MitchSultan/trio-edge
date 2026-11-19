"use client";

import { useRef, useState } from "react";
import TrioEdgeLogo from "./TrioEdgeLogo";
import { useGSAP, gsap } from "@/lib/gsap";

const links = ["About", "Work", "Case Study", "Services", "Team"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(drawerRef.current, { autoAlpha: open ? 1 : 0, y: open ? 0 : -12 });
  }, { dependencies: [open] });

  const scrollTo = (label: string) => {
    setOpen(false);
    const id = label === "Case Study" ? "case-study" : label.toLowerCase() === "work" ? "work" : label.toLowerCase();
    const target = document.querySelector(`#${id}`);
    const smoother = (window as unknown as { ScrollSmoother?: { get: () => { scrollTo: (e: Element, b: boolean, p: string) => void } } }).ScrollSmoother?.get();
    smoother?.scrollTo(target as Element, true, "top top");
  };

  return (
    <>
      <header className="fixed left-1/2 top-5 z-[40] h-[60px] w-[calc(100%-32px)] max-w-[1360px] -translate-x-1/2 rounded-xl bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,.15)]">
        <nav className="flex h-full items-center justify-between px-5 md:px-7" aria-label="Main navigation">
          <button onClick={() => scrollTo("about")} className="text-left"><TrioEdgeLogo variant="light" /></button>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => <button key={link} onClick={() => scrollTo(link)} className="text-[12px] font-semibold uppercase tracking-[.08em] text-navy transition-colors hover:text-primary">{link}</button>)}
            <button onClick={() => scrollTo("contact")} className="rounded-full bg-primary px-5 py-3 text-[12px] font-semibold uppercase tracking-[.1em] text-ink shadow-[0_0_20px_rgba(186,150,77,.35)]">Book a Call</button>
          </div>
          <button className="grid h-10 w-10 place-items-center text-navy md:hidden" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Toggle navigation">
            <span className="text-xl">{open ? "×" : "☰"}</span>
          </button>
        </nav>
      </header>
      <div ref={drawerRef} className="fixed left-4 right-4 top-[92px] z-[39] rounded-xl bg-white p-5 text-navy md:hidden" style={{ visibility: open ? "visible" : "hidden" }}>
        {links.map((link) => <button key={link} onClick={() => scrollTo(link)} className="block w-full border-b border-[#e8e3d8] py-4 text-left text-sm font-semibold uppercase tracking-wider">{link}</button>)}
        <button onClick={() => scrollTo("contact")} className="mt-4 w-full rounded-full bg-primary py-4 text-sm font-semibold uppercase text-ink">Book a Call</button>
      </div>
    </>
  );
}
