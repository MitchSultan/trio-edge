"use client";

import { useRef } from "react";
import { team } from "@/data/homepage";
import { gsap, useGSAP } from "@/lib/gsap";

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(".team-card", { y: 45, opacity: 0, stagger: 0.1, duration: 0.8, scrollTrigger: { trigger: ref.current, start: "top 72%" } });
  }, { scope: ref });
  return (
    <section ref={ref} id="team" className="section-pad bg-surface-alt">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow mb-5">THE TEAM</p><h2 className="display-lg mb-14">Many perspectives.<br />One standard.</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(person => (
            <article key={person.name} className="team-card group border border-hairline transition-[border-color,box-shadow] duration-300 hover:border-primary hover:shadow-[0_0_24px_rgba(186,150,77,.08)]">
              <div className="overflow-hidden"><img src={person.image} alt={person.name} className="aspect-[3/4] w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]" /></div>
              <div className="p-5"><h3 className="text-[20px] font-medium">{person.name}</h3><p className="mt-1 text-xs uppercase tracking-[.1em] text-primary">{person.role}</p><p className="mt-5 text-sm text-ink-muted">{person.specialty}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
