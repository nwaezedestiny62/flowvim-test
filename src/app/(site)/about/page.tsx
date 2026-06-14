"use client"
import React from 'react'
import HeroSub from '@/components/SharedComponents/HeroSub'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function page() {
  const breadcrumbLinks = [
    {href: "/", text: "Home"},
    {href: "/about", text: "About"}
  ];

  return (
    <>
      <HeroSub 
        title='About' 
        description='' 
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="bg-light overflow-hidden lg:py-18 py-14 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-4">
            <div className="about-content text-center mb-10">
                <span className="sub-title text-14 bg-prim text-white py-1 rounded-xl relative font-chakrapetch capitalize ps-5 pe-3">
                    Choose the Best
                </span>
                <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
                    Empowering Businesses with Expertise.
                </h2>
                
                <Link
                  href="/contact"
                  className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group mt-6"
                >
                  Explore More
                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 transition-all duration-300 group-hover:-rotate-45"
                  />
                </Link>
            </div>
        </div>
      </section>
    </>
  )
}