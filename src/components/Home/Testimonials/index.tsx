"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { testimonial } from "@/app/api/data";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          
          <div className="testimonials-item flex flex-col lg:flex-row w-full gap-5 lg:gap-8">
            
            {/* Image Side */}
            <div className="testimonials-image relative w-full lg:w-1/2 rounded-2xl overflow-hidden h-[320px] sm:h-[380px] lg:h-[520px]">
              <Image
                src="/images/testimonials/testimonial-img.jpg"
                alt="testimonial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="rating-box absolute right-4 bottom-4 sm:right-5 sm:bottom-5 bg-dark text-white h-[140px] w-[180px] sm:h-[150px] sm:w-[200px] flex flex-col justify-between items-start p-4 rounded-2xl z-10">
                <div className="text-4xl sm:text-5xl font-unbounded">4.9</div>
                <div>
                  <div className="star flex">
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

              <h4 className="absolute left-6 sm:left-8 bottom-6 sm:bottom-8 z-10 text-white text-2xl sm:text-3xl md:text-4xl font-unbounded max-w-[260px] sm:max-w-sm">
                Hear From Our Customers
              </h4>
            </div>

            {/* Swiper Side */}
            <div className="w-full lg:w-1/2">
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
                {testimonial.map((item) => (
                  <SwiperSlide key={item.id} className="h-full">
                    <div className="testimonial-content h-full bg-white shadow-lg p-6 sm:p-8 rounded-2xl flex flex-col justify-center">
                      <Icon
                        icon="iconoir:quote-solid"
                        width={70}
                        height={70}
                        className="text-dark mb-5"
                      />

                      <p className="text-pera-dark leading-7 text-[17px] sm:text-16 md:text-[20px] md:leading-8 border-b border-dashed border-border pb-6 flex-1">
                        {item.text}
                      </p>

                      <div className="user flex items-center gap-4 pt-8">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={70}
                          height={70}
                          className="rounded-full object-cover flex-shrink-0"
                        />

                        <div className="user-info">
                          <h4 className="text-lg font-semibold">{item.name}</h4>
                          <span className="text-pera-light text-sm">
                            {item.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;