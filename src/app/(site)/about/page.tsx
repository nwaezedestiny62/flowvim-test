"use client";

import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import Link from "next/link";

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

export default function AboutPage() {
  return (
    <>
      <HeroSub
        title="About"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />

      {/* Main Content */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
          <div className="about-content flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
            <div>
              <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
                Choose the Best
              </span>

              <h2 className="max-w-[700px] mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
                Empowering Businesses with Expertise.
              </h2>
            </div>

            <Link
              href="/contact"
              className="text-white bg-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
            >
              Request a Call

              <Icon
                icon="tabler:arrow-right"
                width="24"
                height="24"
                className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 transition-all duration-300 group-hover:-rotate-45"
              />
            </Link>
          </div>

          <div className="about-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12 justify-items-center">
            {/* Card 1 */}
            <div className="w-full max-w-[300px] about-item bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500 flex flex-col justify-between space-y-6">
              <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12">
                <Icon
                  icon="famicons:bulb-outline"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>

              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                Innovative Solutions
              </h4>

              <p className="text-pera-dark font-normal group-hover:text-white transition-all duration-500">
                We stay ahead of the curve, leveraging cutting-edge technologies
                and strategies to keep you competitive in the marketplace.
              </p>

              <Link
                href="/about"
                className="text-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
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

            {/* Card 2 */}
            <div className="w-full max-w-[300px] about-item bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500 flex flex-col justify-between space-y-6">
              <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12">
                <Icon
                  icon="streamline-plump:customer-support-3"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>

              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                Award Winning Enterprise
              </h4>

              <p className="text-pera-dark font-normal group-hover:text-white transition-all duration-500">
                Recognized by industry leaders, our award-winning team has a
                proven record of delivering excellence across projects.
              </p>

              <Link
                href="/about"
                className="text-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
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

            {/* Card 3 */}
            <div className="w-full max-w-[300px] about-item bg-white shadow-xl p-5 rounded-xl border group hover:bg-prim transition-all duration-500 flex flex-col justify-between space-y-6">
              <div className="about-icon border border-dark w-[70px] h-[70px] rounded-full flex justify-center items-center prim-gradient transition-transform duration-500 group-hover:rotate-y-360 mb-12">
                <Icon
                  icon="la:award"
                  width="40"
                  height="40"
                  className="group-hover:text-white transition-colors duration-500"
                />
              </div>

              <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                Trusted Excellence
              </h4>

              <p className="text-pera-dark font-normal group-hover:text-white transition-all duration-500">
                Delivering high-quality results with a commitment to innovation,
                integrity, and long-term business success.
              </p>

              <Link
                href="/about"
                className="text-dark h-[50px] w-fit rounded-full font-chakrapetch font-semibold flex items-center gap-2 ps-4 pe-2 py-2 tracking-wider group"
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
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-light overflow-hidden py-14 lg:py-18 xl:py-22">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex lg:flex-row flex-col items-start gap-5">
          <div className="content w-full lg:w-[55%]">
            <span className="inline-block text-14 bg-prim text-white py-1 ps-5 pe-3 rounded-xl font-chakrapetch capitalize">
              Get to Know Us
            </span>

            <h2 className="max-w-[700px] mt-4 font-chakrapetch text-3xl lg:text-[35px] font-semibold">
              Driving Innovation and Excellence for Sustainable Corporate
              Success Worldwide.
            </h2>

            <div className="mt-8">
              <div className="bg-white p-5 rounded-xl">
                <h4 className="font-unbounded text-xl pb-3">Our Mission</h4>

                <p className="capitalize pb-5">
                  Our mission is to empower businesses through innovative
                  solutions and exceptional service.
                </p>

                <ul className="space-y-2.5">
                  <li className="flex gap-1">
                    <Icon
                      icon="weui:arrow-outlined"
                      width="12"
                      height="24"
                    />
                    Innovation & Excellence
                  </li>

                  <li className="flex gap-1">
                    <Icon
                      icon="weui:arrow-outlined"
                      width="12"
                      height="24"
                    />
                    Exceptional Customer Service
                  </li>

                  <li className="flex gap-1">
                    <Icon
                      icon="weui:arrow-outlined"
                      width="12"
                      height="24"
                    />
                    Business Growth
                  </li>

                  <li className="flex gap-1">
                    <Icon
                      icon="weui:arrow-outlined"
                      width="12"
                      height="24"
                    />
                    Global Leadership
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}