"use client";

import { useRef } from "react";
import { projects } from "@/data/homepage";
import { gsap, useGSAP } from "@/lib/gsap";

export default function WorkSection() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".work-card", { y: 50, opacity: 0, stagger: 0.08, duration: 0.8, scrollTrigger: { trigger: ref.current, start: "top 72%" } });
  }, { scope: ref });
  return (
    <section ref={ref} id="work" className="section-pad bg-canvas">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex items-end justify-between">
          <div><p className="eyebrow mb-5">SELECTED WORK</p><h2 className="display-lg">Built to move<br />markets.</h2></div>
          <p className="hidden max-w-[300px] text-body text-ink-muted md:block">Strategy is only powerful when it creates visible, measurable change.</p>
        </div>
        <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-2">
          {projects.map((project, i) => (
            <article key={project.title} className="work-card group bg-canvas">
              <div data-flip-origin={i === 0 ? "true" : undefined} className="relative aspect-[16/10] overflow-hidden">
                {i === 0 ? <div data-flip-id="featured-case-study" className="absolute inset-0"><img src={project.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div> : <img src={project.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(10,10,10,.8))]" />
              </div>
              <div className="flex items-start justify-between border-t border-hairline p-6 md:p-8">
                <div><p className="mb-2 text-[11px] uppercase tracking-[.12em] text-primary">{project.category} · {project.year}</p><h3 className="text-[28px] font-medium tracking-[-.025em]">{project.title}</h3><p className="mt-2 text-sm text-ink-muted">{project.detail}</p></div>
                <span className="text-sm text-primary">{project.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
