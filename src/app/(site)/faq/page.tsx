"use client";

import React, { useState } from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ------------------ ANIMATION ------------------ */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ------------------ DATA ------------------ */
type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Why do businesses choose Flowvim for management consulting?",
    answer:
      "Businesses choose Flowvim because we focus on practical, results-driven solutions that bridge strategy and execution. We specialize in helping Nigerian SMEs and growing enterprises improve performance through people, processes, and performance management — delivering measurable ROI, not just theory.",
  },
  {
    question: "What services does Flowvim offer?",
    answer:
      "We provide comprehensive management consulting services including HR Management Solutions, Process Optimization, Organizational Strategy, Performance Management, Capacity Building & Training, Leadership Development, and Change Management. Our solutions are tailored to help businesses operate more efficiently and scale sustainably.",
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer:
      "Project duration varies based on scope and complexity. Short-term projects like process audits or training programs can take 4–8 weeks, while comprehensive engagements (strategy development, full HR systems, or change management initiatives) typically range from 3 to 9 months. We work with milestone-based delivery and maintain regular communication throughout.",
  },
  {
    question: "Do you work with small and medium-sized businesses?",
    answer:
      "Yes. We specialize in supporting SMEs and growing enterprises in Nigeria. Our solutions are designed to be practical, cost-effective, and scalable — helping businesses improve efficiency, develop their people, and build strong foundations for sustainable growth.",
  },
  {
    question: "How do you measure success in your consulting projects?",
    answer:
      "We define clear, measurable KPIs at the beginning of every engagement. Success is measured through improvements in operational efficiency, employee engagement scores, productivity metrics, revenue growth, staff retention rates, and overall business performance. We provide regular progress reports and post-engagement reviews.",
  },
  {
    question: "Do you provide training and capacity building programs?",
    answer:
      "Absolutely. We offer customized training programs, leadership development workshops, team effectiveness sessions, and skills development initiatives. All programs are tailored to your industry, company culture, and specific business objectives.",
  },
  {
    question: "How do you handle change management during transformation projects?",
    answer:
      "We use a structured, people-centered approach to change management. This includes stakeholder analysis, clear communication strategies, resistance management, training, and continuous support to ensure smooth transitions with minimal disruption to operations and high employee buy-in.",
  },
  {
    question: "Do you offer ongoing support after the initial project?",
    answer:
      "Yes. We offer flexible retainer packages and follow-up support to ensure sustained results. This includes periodic performance reviews, additional training, strategy refresh sessions, and ongoing advisory support as your business continues to grow.",
  },
];

const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
        title="Frequently Asked Questions"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* ---------------- HERO FAQ ---------------- */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-10 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="lg:w-1/2 w-full"
            >
              <Image
                src="/images/faq/faq-image-01.webp"
                alt="Flowvim Management Consulting FAQ"
                width={600}
                height={700}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>

            {/* FAQ */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:w-1/2 w-full space-y-4"
            >
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                    openIndex === index
                      ? "bg-prim text-white border-prim"
                      : "bg-white text-black border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex justify-between items-center text-left px-6 py-5"
                  >
                    <span className="font-medium pr-4">
                      {item.question}
                    </span>

                    <Icon
                      icon={
                        openIndex === index
                          ? "akar-icons:minus"
                          : "akar-icons:plus"
                      }
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

      {/* ---------------- SECOND SECTION (UNCHANGED STRUCTURE) ---------------- */}
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

            <motion.h2 variants={fadeUp} className="mt-5 font-chakrapetch text-3xl md:text-4xl lg:text-5xl font-bold">
              Still Have Questions?
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
              Can’t find what you’re looking for? Feel free to reach out to us directly.
              We’re happy to provide personalized answers.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? "bg-prim text-white border-prim"
                    : "bg-white text-black border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5"
                >
                  <span className="font-medium pr-4">
                    {item.question}
                  </span>

                  <Icon
                    icon={
                      openIndex === index
                        ? "akar-icons:minus"
                        : "akar-icons:plus"
                    }
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
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-dark text-white px-8 py-4 rounded-full font-chakrapetch font-semibold hover:bg-prim transition-colors"
            >
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