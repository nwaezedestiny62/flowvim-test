"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Commitment: React.FC = () => {
  const tags = [
    "Operational Excellence",
    "People Alignment",
    "Process Optimization",
    "Performance Management",
    "Sustainable Growth",
    "Change Leadership",
    "Capacity Building",
  ];

  // ✅ FIXED: Proper Framer Motion typing (this removes red variants in TS)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light">
      <motion.div
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* TOP CONTENT */}
        <motion.div
          variants={itemVariants}
          className="commitment-content bg-white p-8 rounded-2xl"
        >
          <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
            Our Commitment
          </span>

          <h2 className="mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
            Delivering Measurable Results Through Practical Strategy,
            People Alignment, and Lasting Partnerships
          </h2>

          <Link
            href="/services"
            className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group justify-center mt-5"
          >
            Partner With Us
            <Icon
              icon="tabler:arrow-right"
              width="24"
              height="24"
              className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 transition-all duration-300 group-hover:-rotate-45"
            />
          </Link>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* CARD 1 */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-white p-8 rounded-2xl"
          >
            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
              Trusted by Growing Nigerian Businesses
            </h2>

            <div className="flex items-center pt-8 pb-10 overflow-hidden">
              <Image
                src="/images/commitment/user1.jpg"
                alt="client-avatar"
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white shadow-xl translate-x-3"
              />

              <Image
                src="/images/commitment/user2.jpg"
                alt="client-avatar"
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-cover rounded-full border-4 border-white shadow-xl z-10 translate-x-3"
              />

              <Image
                src="/images/commitment/user3.jpg"
                alt="client-avatar"
                width={100}
                height={100}
                className="w-[100px] h-[100px] object-cover rounded-full border-4 border-white shadow-xl -translate-x-3"
              />
            </div>

            <div className="flex gap-5 items-center">
              <span className="text-5xl font-semibold">200+</span>
              <p className="text-pera-dark">
                SMEs and organizations transformed through our practical consulting approach.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-white p-8 rounded-2xl"
          >
            <h2 className="font-chakrapetch lg:text-24 font-semibold mb-5">
              From Strategy to Execution
            </h2>

            <div className="w-full h-[230px]">
              <Image
                src="/images/commitment/strategy-chart.webp"
                width={350}
                height={350}
                alt="strategy chart"
                className="w-full h-full object-contain"
              />
            </div>

            <p className="text-pera-dark mt-6">
              We don’t just advise — we work with you to implement systems that drive real performance and sustainable growth.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-white p-8 rounded-2xl flex flex-col justify-between"
          >
            <div className="mb-8">
              <h2 className="font-chakrapetch lg:text-24 font-semibold pb-1">
                Our Approach
              </h2>

              <p className="text-pera-dark">
                We align people, optimize processes, and build high-performance cultures that deliver lasting results.
              </p>
            </div>

            <ul className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <li key={i}>
                  <span className="bg-black/10 px-3 py-1 text-sm font-medium rounded-md">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Commitment;