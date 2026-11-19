"use client";

import TrioEdgeLogo from "../TrioEdgeLogo";
export default function Footer() {
  return (
    <footer className="bg-surface-alt px-6 pt-20 md:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 border-t border-hairline pt-12 pb-16 md:grid-cols-[1.4fr_.6fr_1fr]">
        <TrioEdgeLogo />
        <div><p className="mb-5 text-[12px] uppercase tracking-[.1em] text-primary">Explore</p><div className="grid gap-3 text-sm"><a href="#about">About</a><a href="#work">Work</a><a href="#services">Services</a><a href="#team">Team</a></div></div>
        <div><p className="mb-5 text-[12px] uppercase tracking-[.1em] text-primary">Nairobi</p><p className="text-sm text-ink-muted">Westlands, Nairobi<br />Kenya</p><a className="mt-4 block text-sm" href="mailto:hello@trio-edge.com">hello@trio-edge.com</a></div>
      </div>
      <div className="mx-auto max-w-[1440px] overflow-hidden pb-2">
        <p className="whitespace-nowrap text-[clamp(4.5rem,17vw,18rem)] font-bold leading-[.85] tracking-[-.07em]">TRIO-EDGE</p>
      </div>
    </footer>
  );
}
