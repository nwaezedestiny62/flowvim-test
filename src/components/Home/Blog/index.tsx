"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

import { blogs } from "@/app/api/data";

const Blog: React.FC = () => {

  // container stagger
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // section header
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // featured blog animation
  const featured: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // side blogs animation
  const side: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-prim-light overflow-hidden py-14 lg:py-18 xl:py-22">

      <motion.div
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >

        {/* HEADER */}
        <motion.div className="blog-content text-center mb-10" variants={fadeUp}>
          <span className="text-14 bg-prim text-white py-1 rounded-xl font-chakrapetch capitalize ps-5 pe-3">
            Our Blogs
          </span>

          <h2 className="mt-4 font-chakrapetch lg:text-35 font-semibold mb-5">
            Strategies and Insights.
          </h2>
        </motion.div>

        <div className="blog-wrapper grid lg:grid-cols-2 gap-5">

          {/* FEATURED BLOG */}
          {blogs.slice(0, 1).map((item) => (
            <motion.div
              key={item.id}
              variants={featured}
              className="blog-item w-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-5 rounded-2xl group"
            >
              <div className="blog-image h-[300px] md:h-[360px] w-full rounded-2xl overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <span className="absolute right-5 bottom-5 text-white font-chakrapetch bg-white/10 backdrop-blur-sm font-semibold rounded-sm text-lg md:text-2xl text-center p-2 md:p-3">
                  {item.date}
                </span>
              </div>

              <div className="blog-content px-2 py-5 space-y-5">
                <p className="text-sm text-pera-dark">
                  <span className="border border-border px-2 py-1 rounded-sm">
                    {item.category}
                  </span>{" "}
                  By {item.author}
                </p>

                <h4 className="font-unbounded text-xl md:text-2xl font-medium pb-2">
                  {item.title}
                </h4>

                <p className="leading-7 text-pera-dark">
                  {item.description}
                </p>

                <Link
                  href={`/blog/${item.slug}`}
                  className="text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 items-center tracking-wider group/link"
                >
                  Read More

                  <Icon
                    icon="tabler:arrow-right"
                    width="24"
                    height="24"
                    className="bg-prim text-white rounded-full w-[30px] h-[30px] p-1.5 group-hover/link:-rotate-45 transition duration-300"
                  />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* SIDE BLOGS */}
          <div className="grid grid-cols-1 gap-5">
            {blogs.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                variants={side}
                className="blog-item w-full flex flex-wrap md:flex-nowrap shadow-lg hover:shadow-xl transition-all duration-300 bg-white p-5 rounded-2xl group"
              >
                <div className="blog-image w-full md:w-[40%] h-[220px] md:h-auto rounded-2xl overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute right-4 bottom-4 text-white font-chakrapetch bg-white/10 backdrop-blur-sm font-semibold rounded-sm text-sm md:text-lg px-3 py-2">
                    {item.date}
                  </span>
                </div>

                <div className="blog-content w-full md:w-[60%] px-2 py-5 space-y-4">
                  <p className="text-sm text-pera-dark">
                    <span className="border border-border px-2 py-1 rounded-sm">
                      {item.category}
                    </span>{" "}
                    By {item.author}
                  </p>

                  <h4 className="font-unbounded font-medium text-lg md:text-xl">
                    {item.title}
                  </h4>

                  <p className="text-pera-dark leading-6 line-clamp-3">
                    {item.description}
                  </p>

                  <Link
                    href={`/blog/${item.slug}`}
                    className="text-sm lg:text-16 w-fit rounded-full font-chakrapetch font-semibold flex gap-2 items-center tracking-wider group/link"
                  >
                    Read More

                    <Icon
                      icon="tabler:arrow-right"
                      width="24"
                      height="24"
                      className="bg-prim text-white rounded-full w-[30px] h-[30px] p-1.5 group-hover/link:-rotate-45 transition duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Blog;