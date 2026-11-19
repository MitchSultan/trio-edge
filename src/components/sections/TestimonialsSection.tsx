"use client";

import { useState } from "react";
import { testimonials } from "@/data/homepage";
export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const item = testimonials[active];
  return (
    <section className="section-pad bg-canvas">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow mb-10">CLIENT PERSPECTIVES</p>
        <div className="grid gap-10 border-t border-hairline pt-10 md:grid-cols-[1fr_220px]">
          <blockquote className="text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.12] tracking-[-.025em]">“{item.quote}”</blockquote>
          <div className="md:self-end">
            <p className="text-primary">{item.company}</p><p className="mt-1 text-sm text-ink-muted">{item.role}</p>
            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => <button key={i} onClick={() => setActive(i)} aria-label={`View testimonial ${i + 1}`} className={`h-1 transition-all ${i === active ? "w-10 bg-primary" : "w-5 bg-hairline"}`} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
