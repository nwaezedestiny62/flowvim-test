"use client";

import React, { useState } from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useSiteContent } from "@/lib/useSiteContent";

const Page = () => {
  const { content } = useSiteContent();
  const [searchTerm, setSearchTerm] = useState("");

  const blogsData = content?.blogs || { items: [] };

  const filteredBlogs = blogsData.items.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
  ];

  return (
    <>
      <HeroSub
        title="blog"
        description={blogsData.description || "Explore our latest articles"}
        breadcrumbLinks={breadcrumbLinks}
      />

      <div className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">

            {/* MAIN BLOGS */}
            <div className="space-y-6">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((item: any) => (
                  <div key={item.id} className="border border-border bg-white rounded-2xl overflow-hidden group">
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

                    <div className="p-4 sm:p-6 space-y-4">
                      <p className="text-sm flex flex-wrap gap-2 items-center">
                        <span className="border border-border px-2 py-0.5 rounded-sm">{item.category}</span>
                        <span>By {item.author}</span>
                      </p>

                      <h4 className="font-medium text-lg sm:text-xl">{item.title}</h4>

                      <p className="text-sm sm:text-base text-pera-dark leading-6">
                        {item.description}
                      </p>

                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold mt-2"
                      >
                        Read More
                        <Icon icon="tabler:arrow-right" width="20" height="20" className="bg-prim text-white rounded-full p-1 group-hover:-rotate-45 transition" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-10">No blogs found matching "{searchTerm}"</p>
              )}
            </div>

            {/* SIDEBAR - Static for now */}
            <aside className="space-y-6 lg:sticky lg:top-20 self-start">
              {/* Search, Recent Posts, Categories, Tags remain static for simplicity */}
              <div className="shadow-md border border-gray-100 bg-white rounded-xl p-4">
                <h4 className="mb-3 font-semibold">Search Here</h4>
                <input
                  type="text"
                  placeholder="Search here"
                  className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-prim"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;