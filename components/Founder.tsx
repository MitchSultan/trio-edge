"use client";
import { useRef } from "react";
import { founder } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import HighlightText from "./HighlightText";
/* eslint-disable @next/next/no-img-element */

export default function Founder() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  return (
    <section ref={root} id="founder" className="grid gap-12 bg-canvas px-6 py-24 md:grid-cols-12 md:gap-8 md:px-12 md:py-44">
      <div data-clip className="aspect-[4/5] bg-raised md:col-span-4">
        <img src={founder.img} alt={founder.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col justify-between md:col-span-7 md:col-start-6">
        <h2 data-reveal className="text-2xl font-medium tracking-tight md:text-3xl">Our founder</h2>
        <HighlightText className="my-12 text-[clamp(1.6rem,3.6vw,3.4rem)] font-normal leading-[1.15] tracking-[-0.03em]">
          {founder.quote}
        </HighlightText>
        <div>
          <p className="text-xl font-medium">{founder.name}</p>
          <p className="text-muted">{founder.role}</p>
        </div>
      </div>
    </section>
  );
}
