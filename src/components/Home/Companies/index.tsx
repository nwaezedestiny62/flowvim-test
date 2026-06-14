"use client"

import { Autoplay } from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import React from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import Image from "next/image"
import { companies } from "@/app/api/data"

const Companies: React.FC = ()=> (
    <>
        <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">

        <div className="company-content text-center w-full">

          <div>
            <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
              Our Partners
            </span>

            <h2 className="w-full mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
              Join Over <span className="bg-dark text-white px-2 rounded-sm">1000+</span> Companies with Axora Here
            </h2>
          </div>
          </div>
          <div className="relative mt-10">
            <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={5} loop={true} 
            speed={3000} autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            allowTouchMove={false}
            breakpoints={{
              320: {slidesPerView: 2},
              640: {slidesPerView: 3},
              768: {slidesPerView: 4},
              1024: {slidesPerView: 5}
            }}
            className="companies-swiper relative"
            >
              {companies.map((company, index) => (
                <SwiperSlide key={index}>
                  <div className="companies-item flex h-[100px] w-full items-center justify-center rounded-xl bg-white px-8 shadow-xl">
  <Image
    src={company.image}
    alt={`brand-${index + 1}`}
    width={150}
    height={80}
    style={{
      width: "auto",
      height: "60px",
    }}
    className="object-contain"
  />
</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </div>
          </section>
    </>
)

export default Companies;