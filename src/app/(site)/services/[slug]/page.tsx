"use client";

import { notFound } from "next/navigation";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/data";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

type FAQItem = {
  question: string;
  answer: string;
};

const ServiceDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: `/services/${slug}`, text: service.title },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: `What is ${service.title}?`,
      answer: service.details.content,
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. We maintain clear communication and milestone-based delivery throughout the process.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance, security updates, performance optimization, and technical support after project completion.",
    },
  ];

  return (
    <>
      <HeroSub
        title="Service Details"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      <section className="bg-[#fafafa] py-12 sm:py-16 lg:py-24">
  <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">

      {/* Main Content */}
      <div className="xl:col-span-8">

        <div className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-gray-100 shadow-sm">

          {service.image && (
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={700}
              priority
              className="
                w-full
                h-[240px]
                sm:h-[320px]
                md:h-[400px]
                lg:h-[500px]
                object-cover
              "
            />
          )}

          <div className="p-5 sm:p-7 md:p-8 lg:p-10">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-prim/10 text-prim px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5">
              <Icon icon="mdi:briefcase-outline" width="18" />
              Professional Service
            </div>

            {/* Title */}
            <h1 className="
              font-unbounded
              font-medium
              leading-tight
              mb-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
            ">
              {service.title}
            </h1>

            {/* Intro */}
            <p className="
              text-pera-dark
              leading-relaxed
              mb-8
              text-base
              sm:text-lg
            ">
              {service.details.intro}
            </p>

            {/* Service Overview */}
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-7 mb-10">
              <h2 className="
                font-unbounded
                mb-4
                text-xl
                sm:text-2xl
              ">
                Service Overview
              </h2>

              <p className="text-pera-dark leading-relaxed">
                {service.details.content}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="
                font-unbounded
                mb-6
                text-xl
                sm:text-2xl
              ">
                Key Benefits
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="
                      border border-gray-100
                      rounded-2xl
                      p-5
                      hover:border-prim/30
                      hover:shadow-md
                      transition-all
                    "
                  >
                    <div className="flex gap-4 items-start">

                      <div className="
                        w-10 h-10
                        rounded-xl
                        bg-prim/10
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      ">
                        <Icon
                          icon="material-symbols:check-rounded"
                          width="22"
                          className="text-prim"
                        />
                      </div>

                      <p className="text-pera-dark leading-relaxed">
                        {feature}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="
              mt-12
              bg-black
              text-white
              rounded-3xl
              p-6
              sm:p-8
            ">
              <h2 className="
                font-unbounded
                mb-4
                text-xl
                sm:text-2xl
              ">
                Why Choose Our Team
              </h2>

              <p className="leading-relaxed text-white/80">
                We combine strategy, innovation, and industry expertise
                to deliver measurable results while building long-term
                partnerships with our clients.
              </p>
            </div>

          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 lg:mt-16">

          <h2 className="
            font-unbounded
            mb-6 sm:mb-8
            text-2xl
            sm:text-3xl
          ">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`
                  rounded-2xl
                  border
                  overflow-hidden
                  transition-all
                  ${
                    openIndex === index
                      ? "border-prim shadow-md"
                      : "border-gray-100"
                  }
                `}
              >
                <button
                  onClick={() => toggle(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-left
                    p-5
                    sm:p-6
                  "
                >
                  <span className="
                    font-semibold
                    text-base
                    sm:text-lg
                  ">
                    {item.question}
                  </span>

                  <div className="
                    w-8 h-8
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  ">
                    <Icon
                      icon={
                        openIndex === index
                          ? "akar-icons:minus"
                          : "akar-icons:plus"
                      }
                    />
                  </div>
                </button>

                {openIndex === index && (
                  <div className="
                    px-5
                    sm:px-6
                    pb-5
                    sm:pb-6
                    text-pera-dark
                    leading-relaxed
                  ">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="
          mt-12
          lg:mt-16
          bg-prim
          rounded-3xl
          p-6
          sm:p-8
          lg:p-10
          text-center
          text-white
        ">
          <h2 className="
            font-unbounded
            mb-4
            text-2xl
            sm:text-3xl
          ">
            Ready to Get Started?
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            text-white/90
            mb-8
          ">
            Let's discuss your goals and create a tailored solution
            designed to help your business grow.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              bg-white
              text-black
              px-6
              py-3
              sm:px-7
              sm:py-4
              rounded-xl
              font-medium
              transition-all
              hover:scale-105
            "
          >
            Contact Us
            <Icon icon="weui:arrow-outlined" />
          </Link>
        </div>

      </div>

      {/* Sidebar */}
      <aside className="xl:col-span-4">

        <div className="xl:sticky xl:top-28 space-y-6">

          <div className="
            bg-white
            border
            border-gray-100
            rounded-3xl
            p-5
            sm:p-7
            shadow-sm
          ">
            <h3 className="
              font-unbounded
              mb-6
              text-xl
              sm:text-2xl
            ">
              Other Services
            </h3>

            <div className="space-y-3">
              {services
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      gap-3
                      p-4
                      rounded-2xl
                      border
                      border-gray-100
                      hover:border-prim
                      hover:bg-prim
                      hover:text-white
                      transition-all
                    "
                  >
                    <span className="font-medium text-sm sm:text-base">
                      {s.title}
                    </span>

                    <Icon
                      icon="weui:arrow-outlined"
                      width="20"
                      className="group-hover:translate-x-1 transition-all flex-shrink-0"
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="
            bg-black
            text-white
            rounded-3xl
            p-5
            sm:p-7
          ">
            <h3 className="
              font-unbounded
              mb-4
              text-xl
              sm:text-2xl
            ">
              Need Assistance?
            </h3>

            <p className="
              text-white/80
              leading-relaxed
              mb-6
            ">
              Speak with our experts and discover how we can help your business achieve its goals.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                bg-white
                text-black
                px-5
                py-3
                rounded-xl
                font-medium
              "
            >
              Schedule Consultation
              <Icon icon="weui:arrow-outlined" />
            </Link>
          </div>

        </div>

      </aside>

    </div>
  </div>
</section>
    </>
  );
};

export default ServiceDetails;