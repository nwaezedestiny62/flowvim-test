import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react'

const Hero: React.FC = () => {
  return (
    <>
    <div className="hero w-full h-screen w-full bg-midnight_text relative overflow-hidden pt-44 pb-20">
        <div
  className="
    hero-image
    absolute top-0 left-0 w-full h-full
    bg-[url('/images/hero/hero-bg-responsive.jpg')]
    md:bg-[url('/images/hero/hero-bg.jpg')]
    bg-cover bg-no-repeat
  "
>
        <div className="shape-1 absolute z-30 top-0 left-0 justify-start items-start h-auto w-[300px] flex">
          <img src="/images/hero/pattern-2.svg" alt='element-image'/>
        </div>
        <div className="shape-2 absolute z-30 top-0 right-0 bottom-0 justify-center items-start h-auto w-[300px] flex">
          <img src="/images/hero/pattern-3.svg" alt='element-image'/>
        </div>

        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) z-20 relative text-white px-4 h-full flex flex-col justify-center items-center">
          <div className="hero-content text-white">
            <h2 className="md:text-60 sm:text-40 text-28 text-white mb-9 lg:mb-3 w-full lg:w-3/4">
            Transforming Ideas into Reality
            </h2>
            <Link
            href="/about"
            className='text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'
            >
              Get Started Now
              <Icon icon="tabler:arrow-right" width="24" height="24" className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-all'/>
            </Link>
          </div>
        </div>

        <div className="absolute w-[320px] rounded-full bg-dark opacity-80 blur-[80px] -left-[50px] -bottom-[50px]"></div>
<div
  className="
    solution-box absolute z-10
    left-1/2 -translate-x-1/2 bottom-4
    lg:left-auto lg:translate-x-0
    lg:bottom-5 lg:right-5

    w-[90%] sm:w-[80%] md:w-[420px]
    bg-white/10 backdrop-blur-sm
    rounded-md
    p-4 sm:p-6 lg:p-8
  "
>
  <Icon
    icon="tdesign:quote-filled"
    width="60"
    height="60"
    className="text-white"
  />

  <p className="text-white pb-5 pt-3 text-sm sm:text-base">
    Commited to delivering innovative solutiions that drive success. With a focus quality.
  </p>

  <div className="hero-counter font-medium text-white font-unbounded text-4xl sm:text-5xl lg:text-7xl">
    <span className="counter">10</span>
    <span className="count-plus">M</span>+
  </div>
</div>
        </div>
    </div>
    </>
  )
}

export default Hero; 
