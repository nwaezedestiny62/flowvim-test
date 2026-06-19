"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { team } from "@/app/api/data";

interface TeamProps {
  limit?: number;
}

const Team: React.FC<TeamProps> = ({ limit }) => {
  const displayTeam = limit ? team.slice(0, limit) : team;

  return (
    <section className="py-16 lg:py-24 bg-prim-light overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center rounded-full bg-prim text-white px-5 py-2 text-sm font-medium">
            Meet Our Team
          </span>

          <h2 className="mt-5 font-chakrapetch text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            The Experts Behind Your Business Transformation
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A passionate team of seasoned consultants, strategists, and industry experts dedicated to helping Nigerian businesses achieve operational excellence and sustainable growth.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayTeam.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Social Icons */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Link href="https://linkedin.com" target="_blank">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-prim hover:text-white transition-all duration-300">
                      <Icon icon="ri:linkedin-fill" width={20} />
                    </div>
                  </Link>

                  <Link href="https://twitter.com" target="_blank">
                    <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center hover:bg-prim hover:text-white transition-all duration-300">
                      <Icon icon="mdi:twitter" width={20} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-unbounded text-xl font-semibold">
                      {member.name}
                    </h4>

                    <p className="text-gray-500 mt-1 font-medium">
                      {member.post}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-prim/10 flex items-center justify-center text-prim">
                    <Icon
                      icon="mdi:account-tie"
                      width={22}
                      height={22}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;