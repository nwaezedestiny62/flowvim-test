"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero relative overflow-hidden w-full h-screen bg-midnight_text pt-44 pb-20">

      {/* Desktop Video Background */}
      <video
        className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src="/videos/hero-bg.mp4"
        poster="/images/hero/hero-bg.jpg"   // fallback image while video loads
      />

      {/* Mobile Image Only */}
      <div
        className="md:hidden absolute inset-0 bg-[url('/images/hero/hero-bg-responsive.jpg')] bg-cover bg-no-repeat z-0"
      />

      {/* Shapes */}
      <div className="shape-1 absolute top-0 left-0 z-10 w-[300px] flex">
        <img src="/images/hero/pattern-2.svg" alt="element-image" />
      </div>

      <div className="shape-2 absolute top-0 right-0 bottom-0 z-10 w-[300px] flex">
        <img src="/images/hero/pattern-3.svg" alt="element-image" />
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) text-white px-4 h-full flex flex-col justify-center items-center">
        <div className="hero-content text-white">
          <h2 className="md:text-60 sm:text-40 text-28 text-white mb-9 lg:mb-3 w-full lg:w-3/4">
            Bridging Strategy and Execution
          </h2>

          <Link
            href="/contact"
            className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group"
          >
            Schedule a Consultation
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all"
            />
          </Link>
        </div>
      </div>

      {/* Blur Glow */}
      <div className="absolute z-10 w-[320px] rounded-full bg-dark opacity-80 blur-[80px] -left-[50px] -bottom-[50px]"></div>

      {/* Card */}
      <div className="solution-box absolute z-30 left-1/2 -translate-x-1/2 bottom-4 lg:left-auto lg:translate-x-0 lg:bottom-5 lg:right-5 w-[90%] sm:w-[80%] md:w-[420px] bg-white/10 backdrop-blur-sm rounded-md p-4 sm:p-6 lg:p-8">
        <Icon icon="tdesign:quote-filled" width="60" height="60" className="text-white" />
        <p className="text-white pb-5 pt-3 text-sm sm:text-base">
          We partner with Nigerian SMEs and growing enterprises to optimize operations, develop people, and deliver measurable performance improvements.
        </p>
        <div className="hero-counter font-medium text-white font-unbounded text-4xl sm:text-5xl lg:text-7xl">
          <span className="counter">10</span>
          <span className="count-plus">K</span>+
        </div>
      </div>
    </section>
  );
};

export default Hero;