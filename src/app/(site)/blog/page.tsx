"use client";

import React, { useState } from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/api/data";
import { Icon } from "@iconify/react";

import blog1 from "@/../public/images/blog/service-1.webp";
import blog2 from "@/../public/images/blog/service-2.webp";
import blog3 from "@/../public/images/blog/service-3.webp";

const recentPosts = [
  {
    image: blog1,
    title: "Entrepreneur Mindset: Habits That Drive Success",
    date: "01 Jun, 2025",
  },
  {
    image: blog2,
    title: "Innovative Strategies for Business Growth",
    date: "01 Jun, 2025",
  },
  {
    image: blog3,
    title: "Leadership Lessons for Modern Enterprises",
    date: "01 Jun, 2025",
  },
];

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeroSub
        title="blog"
        description="Explore our latest articles"
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:max-w-6xl">
          
          {/* GRID WRAPPER (FIXED RESPONSIVE BEHAVIOR) */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">

            {/* LEFT CONTENT */}
            <div className="space-y-6">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border bg-white rounded-2xl overflow-hidden group"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full h-[200px] sm:h-[280px] lg:h-[320px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />

                      <span className="absolute right-4 bottom-4 text-white text-sm sm:text-base font-semibold bg-black/30 backdrop-blur-sm px-3 py-2 rounded-md">
                        {item.date}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 sm:p-6 space-y-4">
                      <p className="text-sm flex flex-wrap gap-2 items-center">
                        <span className="border border-border px-2 py-0.5 rounded-sm">
                          {item.category}
                        </span>
                        <span>By {item.author}</span>
                      </p>

                      <h4 className="font-medium text-lg sm:text-xl">
                        {item.title}
                      </h4>

                      <p className="text-sm sm:text-base text-pera-dark leading-6">
                        {item.description}
                      </p>

                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold mt-2"
                      >
                        Read More
                        <Icon
                          icon="tabler:arrow-right"
                          width="20"
                          height="20"
                          className="bg-prim text-white rounded-full p-1 group-hover:-rotate-45 transition"
                        />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-10">
                  No blogs found matching "{searchTerm}"
                </p>
              )}
            </div>

            {/* SIDEBAR */}
            <aside className="space-y-6 lg:sticky lg:top-20 self-start">

              {/* SEARCH */}
              <div className="shadow-md border border-gray-100 bg-white rounded-xl p-4">
                <h4 className="mb-3 font-semibold">Search Here</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Search here"
                    className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-prim"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>

              {/* RECENT POSTS */}
              <div className="border border-gray-100 shadow-md bg-white p-4 rounded-xl">
                <h4 className="mb-4 font-semibold">Recent Posts</h4>

                <div className="flex flex-col gap-4">
                  {recentPosts.map((post, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[70px] flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 uppercase">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CATEGORIES */}
              <div className="border border-gray-100 shadow-md bg-white p-4 rounded-xl">
                <h4 className="mb-4 font-semibold">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Business</span>(3)
                  </li>
                  <li className="flex justify-between">
                    <span>Corporate</span>(4)
                  </li>
                  <li className="flex justify-between">
                    <span>Designing</span>(2)
                  </li>
                  <li className="flex justify-between">
                    <span>Innovation</span>(2)
                  </li>
                </ul>
              </div>

              {/* TAGS */}
              <div className="border border-gray-100 shadow-md bg-white p-4 rounded-xl">
                <h4 className="mb-4 font-semibold">Tags</h4>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Business",
                    "Branding",
                    "Consulting",
                    "Design",
                    "Innovate",
                    "Lead",
                    "Marketing",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs border border-border px-2 py-1 rounded-sm hover:bg-pera-dark hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;