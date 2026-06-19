"use client";

import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Team from "@/components/Home/Team";
import { motion, Variants } from "framer-motion";

/* -----------------------------
   GLOBAL APPLE-LIKE MOTIONS
------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* -----------------------------
   PAGE
------------------------------ */

export default function AboutPage() {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <HeroSub
        title="About Us"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* ================= HERO STORY BLOCK ================= */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <motion.div
          className="container mx-auto px-4 lg:max-w-6xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch"
          >
            Choose Excellence
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl lg:text-5xl font-chakrapetch font-semibold leading-tight max-w-4xl"
          >
            Empowering Nigerian Businesses Through People, Processes, and Performance.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10">
         <Link
  href="/contact"
  className="group text-white bg-dark h-[52px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-5 pe-3"
>
  Request a Consultation

  <Icon
    icon="tabler:arrow-right"
    width="24"
    height="24"
    className="bg-prim text-white rounded-full w-8 h-8 p-1.5 flex items-center justify-center transition-all group-hover:-rotate-45"
  />
</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VALUE CARDS (APPLE GRID FEEL) ================= */}
      <section className="bg-prim-light py-20 lg:py-28">
        <motion.div
          className="container mx-auto px-4 lg:max-w-6xl grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          variants={stagger}
        >
          {[
            {
              icon: "mdi:target",
              title: "Strategic Clarity",
              desc: "Turning vision into execution with practical, measurable strategies.",
            },
            {
              icon: "mdi:account-tie-outline",
              title: "People-Centered Growth",
              desc: "Unlocking human potential through leadership and HR systems.",
            },
            {
              icon: "mdi:timeline-check",
              title: "Operational Excellence",
              desc: "Building scalable systems that remove friction and boost output.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-prim/10 mb-6">
                <Icon icon={item.icon} width="28" height="28" />
              </div>

              <h3 className="text-xl font-unbounded font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-pera-dark leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= MISSION / VISION SPLIT (APPLE SPLIT VIEW) ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-semibold font-chakrapetch mb-6">
              Get to Know Us
            </h2>

            <p className="text-pera-dark leading-relaxed mb-8">
              We help organizations move from ideas to execution with clarity and structure.
            </p>

            <div className="space-y-6">

              <motion.div variants={fadeUp}>
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-pera-dark text-sm">
                  Empower SMEs with practical systems that deliver measurable growth.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h4 className="font-semibold mb-2">Our Vision</h4>
                <p className="text-pera-dark text-sm">
                  Become Nigeria’s most trusted transformation consulting firm.
                </p>
              </motion.div>

            </div>

            <motion.div variants={fadeUp} className="mt-10">
              <Link
                href="/contact"
                className="bg-dark text-white px-6 h-[52px] rounded-xl flex items-center gap-2 w-fit"
              >
                Partner With Us
                <Icon
                  icon="tabler:arrow-right"
                  width="22"
                  height="22"
                  className="bg-prim rounded-full p-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE REVEAL (APPLE HERO STYLE) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/about-01.webp"
              alt="About Flowvim"
              width={800}
              height={700}
              className="w-full h-full object-cover scale-105"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= TEAM (FINAL CHAPTER FEEL) ================= */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
      >
        <Team limit={4} />
      </motion.section>
    </>
  );
}