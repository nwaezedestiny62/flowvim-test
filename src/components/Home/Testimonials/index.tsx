"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import { testimonial } from "@/app/api/data";

const Testimonials: React.FC = () => {
  // 🔥 container stagger
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // 🔥 renamed (IMPORTANT FIX)
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.97,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatInRight: Variants = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatInLeft: Variants = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">

      <motion.div
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >

        <div className="flex flex-col lg:flex-row w-full gap-5 lg:gap-8">

          {/* IMAGE SIDE */}
          <motion.div
            variants={floatInLeft}
            className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden h-[320px] sm:h-[420px] lg:h-[520px]"
          >
            <Image
              src="/images/testimonials/testimonial-img.jpg"
              alt="Flowvim client testimonials"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="hidden md:flex absolute right-5 bottom-5 bg-dark text-white h-[150px] w-[200px] flex-col justify-between p-4 rounded-2xl z-10">
              <div className="text-5xl font-unbounded">4.9</div>

              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon="material-symbols:star-rounded"
                      width="22"
                      height="22"
                      className="text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-sm">(50+ Client Reviews)</p>
              </div>
            </div>

            <div className="absolute left-5 md:left-8 bottom-5 md:bottom-8 z-10">
              <h4 className="text-white text-2xl sm:text-3xl md:text-4xl font-unbounded max-w-sm leading-tight">
                Real Results from Real Businesses
              </h4>
            </div>
          </motion.div>

          {/* SWIPER SIDE */}
          <motion.div
            variants={floatInRight}
            className="w-full lg:w-1/2"
          >
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="h-[380px] sm:h-[420px] lg:h-full rounded-2xl"
            >
              {testimonial.map((t, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    variants={cardVariants}
                    className="testimonial-content h-full bg-white shadow-lg p-6 sm:p-8 rounded-2xl flex flex-col justify-center"
                  >
                    <Icon
                      icon="iconoir:quote-solid"
                      width={70}
                      height={70}
                      className="text-dark mb-5"
                    />

                    <p className="text-pera-dark leading-7 text-[17px] sm:text-16 md:text-[20px] md:leading-8 border-b border-dashed border-border pb-6 flex-1">
                      {t.text}
                    </p>

                    <div className="user flex items-center gap-4 pt-8">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={70}
                        height={70}
                        className="rounded-full object-cover flex-shrink-0"
                      />

                      <div>
                        <h4 className="text-lg font-semibold">{t.name}</h4>
                        <span className="text-pera-light text-sm">
                          {t.position}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;