"use client";

import { services } from "@/data/homepage";
export default function ServicesSection() {
  return (
    <section id="services" className="relative section-pad overflow-hidden bg-canvas">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(186,150,77,.16),transparent_70%)] blur-3xl" />
      <div className="relative mx-auto max-w-[1440px]">
        <p className="eyebrow mb-5">OUR SERVICES</p><h2 className="display-lg mb-14">Where strategy<br />meets execution.</h2>
        <div className="border-t border-hairline">
          {services.map(([title, detail], i) => (
            <article key={title} className="group grid gap-4 border-b border-hairline py-7 transition-colors duration-300 hover:border-primary md:grid-cols-[100px_1fr_1fr] md:items-center">
              <span className="text-sm text-primary">0{i + 1}</span><h3 className="text-[clamp(1.5rem,3vw,2.25rem)]">{title}</h3><p className="max-w-md text-body text-ink-muted md:justify-self-end">{detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
