"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { solutionData } from "@/app/api/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Solution: React.FC = () => {
  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14">

        <div className="solution-content flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">

          <div>
            <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
              Our Solution
            </span>

            <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
              Tailor-Made Business Solutions for Modern Corporates
            </h2>
          </div>

          <Link
            href="/services"
            className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
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

        <div className="relative mt-10">
<Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={8}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: true }}
      className="solution-wrapper"
    >
      {solutionData?.map((solution, index) => (
        <SwiperSlide key={index} className="!w-auto">
          <div className="w-[300px] solution-item bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500 h-[400px] flex flex-col justify-between">
            <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">{solution.title}</h4>

            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360">
              <Icon icon={solution.icon} width="32" height="32" className="group-hover:text-white transition-colors duration-500" />
            </div>

            <p className="text-pera-dark font-normal group-hover:text-white transition-500 duration-500">{solution.description}</p>

            <Link
            href="/about"
            className="text-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
          >
            Learn More 
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 transition-all duration-300 group-hover:-rotate-45"
            />
          </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Solution;