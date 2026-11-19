"use client";
import { useRef } from "react";
import { useReveal } from "@/lib/useReveal";

export default function FinalCta() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  return (
    <section ref={root} id="contact" className="relative overflow-hidden bg-deep px-6 py-32 md:px-12 md:py-52">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/2 left-1/2 aspect-square w-[80vw] -translate-x-1/2 rounded-full opacity-40 blur-[64px]"
        style={{ background: "radial-gradient(circle, #ff2a6d 0%, rgba(0,0,0,0) 70%)" }}
      />
      <div className="relative">
        <h2 data-reveal className="display max-w-[14ch] text-[clamp(2.8rem,9vw,9rem)]">Have a story that should travel?</h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a href="mailto:hello@trioedge.co.ke" className="btn btn-light">Start a project</a>
          <a href="mailto:hello@trioedge.co.ke" className="btn btn-outline">hello@trioedge.co.ke</a>
        </div>
      </div>
    </section>
  );
}
