"use client";
import { useRef } from "react";
import { gsap, Flip, ScrollTrigger, useGSAP, NO_MOTION } from "@/lib/gsap";
import { useReveal } from "@/lib/useReveal";
import { projects, caseStudy } from "@/lib/content";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
/* eslint-disable @next/next/no-img-element */

const featured = projects.find((p) => p.featured)!;

/** Our Work + Case Study. The featured image is one DOM node that Flip moves between the two sections. */
export default function WorkFlow() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  useGSAP(
    () => {
      const q = <T extends HTMLElement>(s: string) => root.current!.querySelector<T>(s)!;
      const origin = q("[data-flip-origin]");
      const target = q("[data-flip-target]");
      const img = q("[data-flip-img]");

      const mm = gsap.matchMedia();
      mm.add(NO_MOTION, () => {
        const flipTo = (dest: HTMLElement) => {
          if (img.parentElement === dest) return;
          Flip.killFlipsOf(img);
          const state = Flip.getState(img);
          dest.appendChild(img);
          Flip.from(state, {
            duration:3.2,
            ease: "expo.inOut",
            absolute: true,
            onStart: () => { gsap.set(img, { zIndex: 50 }); },
            onComplete: () => { gsap.set(img, { clearProps: "zIndex" }); },
          });
        };
        const triggerMm = gsap.matchMedia();
        const createTrigger = (trigger: HTMLElement, start: string) => {
          const st = ScrollTrigger.create({
            id: "workflow-flip",
            trigger,
            start,
            markers: false,
            onEnter: () => flipTo(target),
            onLeaveBack: () => flipTo(origin),
          });
          return () => st.kill();
        };
        triggerMm.add("(max-width: 767px)", () => createTrigger(origin, "top 50%"));
        triggerMm.add("(min-width: 768px)", () => createTrigger(origin, "top 72%"));

        return () => {
          triggerMm.revert();
          // React owns this node: put it back before unmount.
          if (img.parentElement !== origin) origin.appendChild(img);
        };
      });
    },
    { scope: root }
  );

  const media = (
    <div data-flip-img className="relative z-10 h-full w-full overflow-hidden">
      <img src={featured.img} alt={`${featured.title}, featured project`} className="h-full w-full object-cover" />
    </div>
  );

  return (
    <div ref={root}>
      <section id="work" className="bg-canvas px-6 py-24 md:px-12 md:py-40">
        <div className="mb-14 flex items-end justify-between md:mb-24">
          <h2 data-reveal className="display text-[clamp(2.4rem,7vw,6.5rem)]">Our work</h2>
          <a href="#contact" className="btn btn-outline hidden md:inline-flex">All projects</a>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-14 sm:grid-cols-2 md:grid-cols-2 md:gap-x-6">
          {projects.map((p, i) => (
            <article key={p.slug} className={i % 3 === 1 ? "md:mt-24" : i % 3 === 2 ? "md:mt-12" : ""}>
              {p.featured ? (
                <div data-flip-origin className="relative aspect-[4/5] border border-hairline/40 bg-raised">
                  <span className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-muted">Featured. Read the full case study below.</span>
                  {media}
                </div>
              ) : (
                <div data-clip className="group relative aspect-[4/5] overflow-hidden bg-raised">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
                </div>
              )}
              <h3 className="mt-4 text-xl font-medium tracking-tight">{p.title}</h3>
              <p className="text-sm text-muted">{p.category}, {p.year}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="case-study" className="bg-deep px-6 py-24 md:px-12 md:py-40">
        <h2 data-reveal className="display max-w-[14ch] text-[clamp(2.4rem,7vw,6.5rem)]">{caseStudy.title}</h2>
        <p data-reveal className="mt-6 max-w-xl text-lg text-muted md:text-xl">{caseStudy.intro}</p>
        <div data-flip-target className="relative mt-12 aspect-[16/10] w-full border border-hairline/40 bg-raised md:mt-20" />
        <Carousel className="mt-16" opts={{ align: "start" }} aria-label="Case study details">
          <CarouselContent className="md:-ml-8">
            {caseStudy.blocks.map((b) => (
              <CarouselItem key={b.h} className="basis-[90%] sm:basis-[80%] md:basis-1/3 md:pl-8">
                <div>
                  <div data-line className="mb-5 h-px bg-hairline" />
                  <h3 className="text-xl font-medium tracking-tight">{b.h}</h3>
                  <p data-reveal className="mt-3 max-w-sm text-base text-muted">{b.p}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <dl className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-32">
          {caseStudy.stats.map(([n, l]) => (
            <div className="flex flex-row justify-between items-center md:flex-col" key={l}>
              <dt className="display text-[clamp(2rem,6vw,5.5rem)] text-brand">{n}</dt>
              <dd className="mt-1 text-sm text-muted md:text-base">{l}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
