"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap, ScrollSmoother, ScrollTrigger } from "@/lib/gsap";
import Navbar from "./Navbar";
import Preloader from "./Preloader";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import WorkSection from "./sections/WorkSection";
import CaseStudySection from "./sections/CaseStudySection";
import FounderSection from "./sections/FounderSection";
import TeamSection from "./sections/TeamSection";
import ServicesSection from "./sections/ServicesSection";
import PartnersSection from "./sections/PartnersSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FinalCtaSection from "./sections/FinalCtaSection";
import Footer from "./sections/Footer";

export default function HomePageClient() {
  const ref = useRef<HTMLDivElement>(null);
  const [, setLoaded] = useState(false);

  useGSAP(() => {
    const reduceMotion = gsap.matchMedia();
    reduceMotion.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.2, effects: true, smoothTouch: 0.1 });
    });
    return () => {
      reduceMotion.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: ref });

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      <Navbar />
      <div ref={ref} id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <AboutSection />
          <WorkSection />
          <CaseStudySection />
          <FounderSection />
          <TeamSection />
          <ServicesSection />
          <PartnersSection />
          <TestimonialsSection />
          <FinalCtaSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
