"use client";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import SmoothScroll from "./SmoothScroll";
import Loader from "./Loader";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import WorkFlow from "./WorkFlow";
import Founder from "./Founder";
import Team from "./Team";
import Services from "./Services";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import FinalCta from "./FinalCta";
import Footer from "./Footer";

export default function HomeClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <SmoothScroll />
      <Loader onDone={() => setReady(true)} />
      <Header />
      <main>
        <Hero ready={ready} />
        <About />
        <WorkFlow />
        <Founder />
        <Team />
        <Services />
        <Partners />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
