"use client";

import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import Image from "next/image";
import { companies } from "@/app/api/data";

const Companies: React.FC = () => {
  // container controls stagger
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // title animation
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // logo cards animation
  const logoItem: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 30,
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <motion.div
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-14"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* HEADER */}
        <motion.div className="company-content text-center w-full" variants={fadeUp}>
          <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
            Trusted By
          </span>

          <h2 className="w-full mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
            Growing Businesses Achieving{" "}
            <span className="bg-dark text-white px-2 rounded-sm">
              Sustainable Results
            </span>{" "}
            with Flowvim
          </h2>
        </motion.div>

        {/* SWIPER */}
        <motion.div variants={fadeUp}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="companies-swiper"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={logoItem}
                  className="companies-item flex h-[100px] w-full items-center justify-center rounded-xl bg-white px-8 shadow-xl"
                >
                  <Image
                    src={company.image}
                    alt={`client-${index + 1}`}
                    width={150}
                    height={80}
                    style={{
                      width: "auto",
                      height: "60px",
                    }}
                    className="object-contain"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Companies;