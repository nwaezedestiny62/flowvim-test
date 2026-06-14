"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Commitment: React.FC = () => {
  const tags = [
    "Growth",
    "Success",
    "Innovate",
    "Lead",
    "Impact",
    "Focus",
    "Tech",
  ];

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8">
        {/* Top Content */}
        <div className="commitment-content bg-white p-8 rounded-2xl">
          <div>
            <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
              Choose the Best
            </span>

            <h2 className="mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
              Commited Delivering Measurable Results and Building from the
              Lasting Relationships through out trust and innovation corporate
              shared.
            </h2>
          </div>

          <Link
            href="/services"
            className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group justify-center mt-5"
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="w-full bg-white p-8 rounded-2xl">
            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
              Rebranding Strategy for a Growing
            </h2>

            <div className="w-full flex items-center pt-8 pb-10 overflow-hidden">
              <Image
                src="/images/commitment/user1.jpg"
                alt="avatar-image"
                width={200}
                height={200}
                className="object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3"
              />

              <Image
                src="/images/commitment/user2.jpg"
                alt="avatar-image"
                width={200}
                height={200}
                className="object-cover w-[120px] h-[120px] rounded-full scale-110 z-10 border-4 border-white shadow-xl translate-x-3"
              />

              <Image
                src="/images/commitment/user3.jpg"
                alt="avatar-image"
                width={200}
                height={200}
                className="object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl -translate-x-3"
              />
            </div>

            <div className="flex gap-5 items-center">
              <span className="text-5xl font-semibold">200</span>

              <p className="text-pera-dark">
                Satisfied Customers work with our axora.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-white p-8 rounded-2xl">
            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
              Rebranding Strategy for a Growing
            </h2>

            <div className="w-full h-[230px]">
              <Image
                src="/images/commitment/strategy-chart.webp"
                width={350}
                height={350}
                className="h-full w-full object-contain mx-auto"
                alt="strategy-chart-image"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full bg-white p-8 rounded-2xl flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="font-chakrapetch lg:text-24 font-semibold pb-1">
                Rebranding Strategy for a Growing
              </h2>

              <p className="text-pera-dark">
                Our teams are always available to address our concerns,
                providing quick solutions.
              </p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <li key={index}>
                  <span className="bg-black/10 backdrop-blur-sm px-3 py-1 inline-block text-sm font-medium rounded-md">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;