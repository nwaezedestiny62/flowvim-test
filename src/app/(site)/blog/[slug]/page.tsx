import { blogs } from "@/app/api/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";

import blog01 from "@/../public/images/blogdetails/blog-1.webp";
import blog02 from "@/../public/images/blogdetails/blog-2.webp";

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  
  return {
    title: blog ? `${blog.title} | Flowvim` : "Blog Not Found | Flowvim",
  };
};

type Props = { params: Promise<{ slug: string }> };

const BlogDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const currentBlog = blogs.find((b) => b.slug === slug);

  if (!currentBlog) return notFound();

  const recentPosts = blogs
    .filter((b) => b.slug !== currentBlog.slug)
    .slice(0, 4); // Show up to 4 recent posts

  const breadcrumbsLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog" },
    { href: `/blog/${currentBlog.slug}`, text: currentBlog.title },
  ];

  return (
    <>
      <HeroSub title={currentBlog.title} description="" breadcrumbLinks={breadcrumbsLinks} />

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Main Content */}
          <div className="lg:w-[65%] w-full">
            <div className="rounded-3xl bg-white p-5 md:p-8 shadow-sm">
              {/* Featured Image */}
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
                {/* Add more content as needed */}
              </div>

              {/* Quote Section */}
              <div className="border border-border rounded-2xl p-6 md:p-8 bg-dark/5 my-10">
                <Icon icon="tabler:quote" width="56" height="56" className="mb-4 text-prim" />
                <h5 className="font-chakrapetch text-xl md:text-2xl text-black font-semibold leading-tight">
                  We create modern, responsive, and high-performing websites designed for usability, speed, and business results.
                </h5>
                <span className="block text-end font-semibold mt-6 text-sm md:text-base">- Kevin Hooks</span>
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-4">
                <Image
                  src={blog01}
                  alt="blog visual"
                  width={600}
                  height={380}
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <Image
                  src={blog02}
                  alt="blog visual"
                  width={600}
                  height={380}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Comment Form */}
              <div className="pt-10">
                <h4 className="font-unbounded text-2xl mb-6">Leave a Comment</h4>
                <form className="space-y-6">
                  <textarea
                    placeholder="Enter Your Comments"
                    rows={6}
                    className="w-full border border-border p-5 rounded-2xl focus:outline-none focus:border-prim resize-y"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="border border-border px-5 h-14 rounded-2xl focus:outline-none focus:border-prim"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="border border-border px-5 h-14 rounded-2xl focus:outline-none focus:border-prim"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Enter Website (Optional)"
                      className="border border-border px-5 h-14 rounded-2xl focus:outline-none focus:border-prim"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-dark hover:bg-prim text-white px-8 h-14 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 group"
                  >
                    Post A Comment
                    <Icon
                      icon="tabler:arrow-right"
                      width={24}
                      height={24}
                      className="bg-prim text-white rounded-full p-1 group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[35%] w-full lg:self-start lg:sticky lg:top-24 space-y-8">
            {/* Recent Posts */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              <h3 className="font-unbounded text-xl font-semibold mb-6">Recent Posts</h3>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 hover:bg-gray-50 -mx-2 p-2 rounded-2xl transition-colors"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-base leading-tight line-clamp-2 group-hover:text-prim transition-colors">
                        {post.title}
                      </h4>
                      {post.date && (
                        <p className="text-xs text-gray-500 mt-1.5">{post.date}</p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* You can add Categories & Tags here later */}
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;