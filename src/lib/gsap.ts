"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Flip } from "gsap/Flip";
import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  Flip,
  SplitText,
  DrawSVGPlugin,
  useGSAP,
);

export { gsap, ScrollTrigger, ScrollSmoother, Flip, SplitText, DrawSVGPlugin, useGSAP };
