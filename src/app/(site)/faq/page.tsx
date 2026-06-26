"use client";

import React, { useState } from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useSiteContent } from "@/lib/useSiteContent";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Page = () => {
  const { content } = useSiteContent();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faq = content?.faq || {
    mainTitle: "Frequently Asked Questions",
    subtitle: "Still Have Questions?",
    items: []
  };

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/faq", text: "FAQ" },
  ];

  return (
    <>
      <HeroSub
        title={faq.mainTitle}
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Main FAQ Section */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-1/2 w-full"
            >
              <Image
                src="/images/faq/faq-image-01.webp"
                alt="Flowvim FAQ"
                width={600}
                height={700}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>

            {/* FAQ List */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:w-1/2 w-full space-y-4"
            >
              {faq.items.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                    openIndex === index ? "bg-prim text-white border-prim" : "bg-white text-black border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left px-6 py-5"
                  >
                    <span className="font-medium pr-4">{item.question}</span>
                    <Icon
                      icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"}
                      className="text-xl flex-shrink-0"
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-5 text-white/90">
                      {item.answer}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <section className="bg-light py-16 lg:py-24">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={container}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.span variants={fadeUp} className="inline-block bg-prim text-white px-5 py-2 rounded-full text-sm font-chakrapetch">
              More Questions?
            </motion.span>

            <motion.h2 variants={fadeUp} className="mt-5 text-white font-chakrapetch text-3xl md:text-4xl lg:text-5xl font-bold">
              {faq.subtitle}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-white leading-7 max-w-2xl mx-auto">
              Can’t find what you’re looking for? Feel free to reach out to us directly.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faq.items.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index ? "bg-prim text-white border-prim" : "bg-white text-black border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <Icon icon={openIndex === index ? "akar-icons:minus" : "akar-icons:plus"} className="text-xl flex-shrink-0" />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 text-white/90">{item.answer}</div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/contact" className="inline-flex items-center gap-3 bg-dark text-white px-8 py-4 rounded-full font-chakrapetch font-semibold hover:bg-prim transition-colors">
              Still Have Questions? Contact Us
              <Icon icon="tabler:arrow-right" width={24} height={24} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;