'use client';

import React from "react";
import Image from "next/image";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { useSiteContent } from "@/lib/useSiteContent";

const BlogDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { content } = useSiteContent();
  const [slug, setSlug] = React.useState<string>("");

  React.useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  const blogsData = content?.blogs?.items || [];
  const currentBlog = blogsData.find((b: any) => b.slug === slug);

  if (!currentBlog) {
    return <div className="min-h-screen flex items-center justify-center text-2xl">Blog not found</div>;
  }

  const breadcrumbsLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: `/blog/${currentBlog.slug}`, text: currentBlog.title },
  ];

  return (
    <>
      <HeroSub title={currentBlog.title} description="" breadcrumbLinks={breadcrumbsLinks} />

      <section className="pb-12 md:pb-20 bg-prim-light">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* ================= MAIN CONTENT ================= */}
          <div className="lg:w-[65%] mt-10 w-full">
            <div className="rounded-3xl bg-white p-5 md:p-8 shadow-sm">
              <div className="relative w-full aspect-[16/9] md:aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={currentBlog.image}
                  alt={currentBlog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="font-unbounded font-medium text-2xl md:text-3xl lg:text-4xl mt-8 mb-6 leading-tight">
                {currentBlog.title}
              </h1>

              <div className="prose prose-lg md:prose-xl text-pera-dark leading-relaxed max-w-none space-y-6">
                <p>{currentBlog.description}</p>
                {currentBlog.fullContent && (
                  <div dangerouslySetInnerHTML={{ __html: currentBlog.fullContent }} />
                )}
              </div>

              {/* Quote Section */}
              {currentBlog.quote && (
                <div className="border border-border rounded-2xl p-6 md:p-8 bg-dark/5 my-10">
                  <Icon icon="tabler:quote" width="56" height="56" className="mb-4 text-prim" />
                  <h5 className="font-chakrapetch text-xl md:text-2xl text-black font-semibold leading-tight">
                    {currentBlog.quote}
                  </h5>
                  <span className="block text-end font-semibold mt-6 text-sm md:text-base">
                    - {currentBlog.quoteAuthor || "Flowvim Team"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ================= NEW SIDEBAR - FLOWVIM PROMO CARD ================= */}
          <aside className="lg:w-[35%] w-full mt-14 lg:self-start lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-prim/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-prim rounded-2xl flex items-center justify-center">
                  <Icon icon="mdi:lightning-bolt" className="text-white text-3xl" />
                </div>
                <h3 className="font-unbounded text-2xl font-semibold">Why This Matters at FlowVim</h3>
              </div>

              <p className="text-pera-dark leading-relaxed text-[17px]">
                At FlowVim, we don’t just write about business growth — we live it. 
                Every article you read here is rooted in real consulting experience helping Nigerian SMEs optimize operations, develop people, and achieve measurable results.
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium text-sm mb-3">Ready to apply these insights to your business?</p>
                <a 
                  href="/contact"
                  className="block w-full text-center bg-dark hover:bg-prim text-white py-4 rounded-2xl font-semibold transition-all"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;