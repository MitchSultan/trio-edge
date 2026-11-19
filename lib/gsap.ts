"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { Flip } from "gsap/Flip";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText, Flip, DrawSVGPlugin);

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, Flip, DrawSVGPlugin, useGSAP };
export const NO_MOTION = "(prefers-reduced-motion: no-preference)";
