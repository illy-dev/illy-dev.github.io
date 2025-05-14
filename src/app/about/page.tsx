"use client";

import React, { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function AboutMe() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return(
    <div className='smooth-wrapper'>
      <div className='smooth-content'>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1>more here soon!</h1>
        </div>
      </div>
    </div>
  );
}