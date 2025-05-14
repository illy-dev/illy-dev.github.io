"use client";

import React, { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"

import { ScrollToTop } from './utils/ScrollToTop';
import Button1 from './components/button';
gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function Home() {
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

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className='text-white'>
        <ScrollToTop />
        <div className="flex flex-col items-center justify-center min-h-screen pt-[16rem]">
          <h2 className="font-[Switzer-Bold] text-[13rem] ">illy</h2>
          <p className="font-[Switzer-Medium] pt-[13rem]">BERLIN BASED DEVELOPER</p>
          <p className="font-[Switzer-Medium]">SINCE 2021</p>

        </div>
        <div className="flex flex-col min-h-screen pl-22">
          <h3 className="font-[Switzer-Medium] text-[5rem] pt-24">Selected projects</h3>
          <Button1></Button1>
        </div>

        <div className="flex flex-col h-[80vh] pl-22">
          <h3 className="font-[Switzer-Medium] text-[5rem] pt-24 leading-6">Yo,</h3>
          <h3 className="font-[Switzer-Medium] text-[5rem] pb-8">I&rsquo;m illy</h3>
          <p className="font-[Switzer-Semibold] text-[#727272] break-normal text-pretty max-w-[42%] uppercase text-[0.9rem] leading-4">
          I&apos;m still in school, but in my free time I focus on frontend development. I&apos;ve picked up experience with Python, JavaScript, and Haskell.
           I&apos;m motivated and eager to create good-looking UI/UX, and I&apos;m constantly learning how to do it better. </p>
        </div>
        <div className='h-[30vh] pl-22 flex flex-col justify-end pb-16'>
        <a href='https://discord.com/invite/WRhTW6D5' className="font-[Switzer-Medium] uppercase text-[0.9rem] transition-all duration-300 hover:text-[#727272] max-w-[5%] cursor-pointer">Discord</a>
        <a href='https://github.com/illy-dev' className="font-[Switzer-Medium] uppercase text-[0.9rem] transition-all duration-300 hover:text-[#727272] max-w-[5%] cursor-pointer">Github</a>
        </div>
        
      </div>
    </div>
  );
}
