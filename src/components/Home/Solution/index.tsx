"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import { useSiteContent } from "@/lib/useSiteContent";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Solution: React.FC = () => {
  const { content } = useSiteContent();

  // Use cards from admin, fallback to old data if needed
  const cards = content?.solutionCards || [];

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <motion.div
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* HEADER - unchanged */}
        <motion.div
          variants={itemVariants}
          className="solution-content flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4"
        >
          <div>
            <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
              Our Solutions
            </span>

            <h2 className="w-full lg:w-3/4 mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
              Practical Solutions for Sustainable Business Growth
            </h2>
          </div>

          <Link
            href="/services"
            className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
          >
            Explore Our Services

            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 transition-all duration-300 group-hover:-rotate-45"
            />
          </Link>
        </motion.div>

        {/* SWIPER - Cards only editable */}
        <motion.div variants={itemVariants} className="relative mt-10">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView="auto"
            navigation
            pagination={{ clickable: true }}
            className="solution-wrapper"
          >
            {cards.map((solution: any, index: number) => (
              <SwiperSlide key={index} className="!w-auto">
                <motion.div
                  variants={itemVariants}
                  className="w-[300px] solution-item bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500 h-[400px] flex flex-col justify-between"
                >
                  <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                    {solution.title}
                  </h4>

                  <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-12">
                    <Icon
                      icon="mdi:briefcase"
                      width="32"
                      height="32"
                      className="group-hover:text-white transition-colors duration-500"
                    />
                  </div>

                  <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-300">
                    {solution.description}
                  </p>

                  <Link
                    href="/services"
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
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Solution;