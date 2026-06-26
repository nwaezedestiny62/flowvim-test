"use client";

import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import Team from "@/components/Home/Team";
import { motion, Variants } from "framer-motion";
import { useSiteContent } from "@/lib/useSiteContent";

const fadeUp: Variants = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.96 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

export default function AboutPage() {
  const { content } = useSiteContent();

  const about = content?.about || {
    storyTitle: "Empowering Nigerian Businesses...",
    valueCards: [],
    mission: "",
    vision: ""
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
  ];

  return (
    <>
      <HeroSub title="About Us" description="" breadcrumbLinks={breadcrumbLinks} />

      {/* Story Block */}
      <section className="bg-white py-20 lg:py-28 overflow-hidden">
        <motion.div className="container mx-auto px-4 lg:max-w-6xl" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.4 }} variants={stagger}>
          <motion.span variants={fadeUp} className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch">
            Choose Excellence
          </motion.span>

          <motion.h2 variants={fadeUp} className="mt-6 text-3xl lg:text-5xl font-chakrapetch font-semibold leading-tight max-w-4xl">
            {about.storyTitle}
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-10">
            <Link href="/contact" className="group text-white bg-dark h-[52px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-5 pe-3">
              Request a Consultation
              <Icon icon="tabler:arrow-right" width="24" height="24" className="bg-prim text-white rounded-full w-8 h-8 p-1.5 flex items-center justify-center transition-all group-hover:-rotate-45" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Cards */}
      <section className="bg-prim-light py-20 lg:py-28">
        <motion.div className="container mx-auto px-4 lg:max-w-6xl grid md:grid-cols-2 xl:grid-cols-3 gap-8" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} variants={stagger}>
          {about.valueCards.map((item: any, i: number) => (
            <motion.div key={i} variants={scaleIn} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-prim/10 mb-6">
                <Icon icon={["mdi:target", "mdi:account-tie-outline", "mdi:timeline-check"][i]} width="28" height="28" />
              </div>
              <h3 className="text-xl font-unbounded font-medium mb-3">{item.title}</h3>
              <p className="text-pera-dark leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
            <h2 className="text-3xl lg:text-4xl font-semibold font-chakrapetch mb-6">Get to Know Us</h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Our Mission</h4>
                <p className="text-pera-dark text-sm">{about.mission}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Our Vision</h4>
                <p className="text-pera-dark text-sm">{about.vision}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="rounded-2xl overflow-hidden">
            <Image src="/images/about/about-01.webp" alt="About Flowvim" width={800} height={700} className="w-full h-full object-cover scale-105" />
          </motion.div>
        </div>
      </section>

      <Team limit={4} />
    </>
  );
}