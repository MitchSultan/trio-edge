"use client";
import { useRef } from "react";
import { team } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
/* eslint-disable @next/next/no-img-element */

export default function Team() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  return (
    <section ref={root} id="team" className="bg-deep px-6 py-24 md:px-12 md:py-40">
      <h2 data-reveal className="display mb-14 text-[clamp(2.4rem,7vw,6.5rem)] md:mb-24">The team</h2>
      <Carousel opts={{ align: "start" }} aria-label="Team members">
        <CarouselContent className="md:-ml-6">
          {team.map((m) => (
            <CarouselItem key={m.name} className="basis-[82%] sm:basis-1/2 md:pl-6 lg:basis-1/3">
              <article>
                <div data-clip className="group aspect-[4/5] overflow-hidden bg-raised">
                  <img src={m.img} alt={m.name} loading="lazy" className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0" />
                </div>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
