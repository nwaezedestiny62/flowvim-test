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
          <div className="testimonials-item flex w-full h-auto lg:h-[550px] gap-5 flex-wrap lg:flex-nowrap">
            
            <div className="testimonials-image w-full lg:w-1/2 h-[350px] lg:h-full rounded-2xl overflow-hidden relative">
              <Image
  src="/images/testimonials/testimonial-img.jpg"
  alt="testimonial"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover"
/>

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="rating-box absolute right-5 bottom-5 bg-dark text-white h-[150px] w-[200px] flex flex-col justify-between items-start p-4 rounded-2xl z-10">
                <div className="text-5xl font-unbounded">4.9</div>

                <div>
                  <div className="star flex">
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                    <Icon
                      icon="material-symbols:star-rounded"
                      width="24"
                      height="24"
                      className="text-yellow-400"
                    />
                  </div>

                  <p className="text-sm">(50+ Client Reviews)</p>
                </div>
              </div>

              <h4 className="absolute left-8 bottom-8 z-10 text-white text-3xl md:text-4xl font-unbounded max-w-sm">
                Hear From Our Customers
              </h4>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full lg:w-1/2 h-full"
            >
              {testimonial.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testimonial-content w-full h-full bg-white shadow-lg p-8 rounded-2xl flex flex-col justify-center">
                    <Icon
                      icon="iconoir:quote-solid"
                      width={80}
                      height={80}
                      className="text-dark mb-5"
                    />

                    <p className="text-pera-dark leading-7 text-16 md:text-[20px] md:leading-8 border-b border-dashed border-border pb-6">
                      {item.text}
                    </p>

                    <div className="user flex items-center gap-4 pt-8">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={70}
                        height={70}
                        className="rounded-full object-cover"
                      />

                      <div className="user-info">
                        <h4 className="text-lg font-semibold">
                          {item.name}
                        </h4>

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
      </section>
    </>
  );
};

export default Testimonials;