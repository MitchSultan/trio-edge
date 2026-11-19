"use client";
import { useRef } from "react";
import { services } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export default function Services() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  return (
    <section ref={root} id="services" className="bg-canvas px-6 py-24 md:px-12 md:py-40">
      <h2 data-reveal className="display mb-14 text-[clamp(2.4rem,7vw,6.5rem)] md:mb-24">Our services</h2>
      <ul>
        {services.map((s) => (
          <li key={s.title} className="group">
            <div data-line className="h-px bg-hairline/60" />
            <div className="grid gap-3 py-8 transition-colors duration-500 group-hover:text-brand md:grid-cols-12 md:gap-8 md:py-12">
              <h3 className="text-[clamp(1.6rem,3.6vw,3.4rem)] font-medium leading-none tracking-[-0.035em] md:col-span-7">{s.title}</h3>
              <p className="max-w-md text-base text-muted md:col-span-5 md:self-end">{s.text}</p>
            </div>
          </li>
        ))}
        <li><div data-line className="h-px bg-hairline/60" /></li>
      </ul>
    </section>
  );
}
