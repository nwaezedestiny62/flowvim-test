"use client";

import HeroSub from "@/components/SharedComponents/HeroSub";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/data";

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];

  return (
    <>
      <HeroSub
        title="Services"
        description="Explore our range of professional business solutions"
        breadcrumbLinks={breadcrumbLinks}
      />

            <section className="bg-prim-light py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto max-w-7xl px-4">

          <div className="space-y-8">   {/* ← Changed from grid to vertical stack */}
            {services.map((service, index) => (
              <article
                key={service.slug || index}
                className="group relative flex flex-col md:flex-row gap-8 overflow-hidden rounded-3xl bg-white p-8 md:p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-prim hover:shadow-2xl border border-gray-100"
              >
                {/* Icon - Left side on large screens */}
                <div className="flex-shrink-0">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl prim-gradient transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
                    <Icon
                      icon={service.icon}
                      width={52}
                      height={52}
                      className="text-dark transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="mb-5 font-unbounded text-2xl md:text-3xl font-medium leading-tight text-dark transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mb-8 flex-1 leading-relaxed text-lg text-pera-dark transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-3 rounded-full font-chakrapetch text-sm font-semibold uppercase tracking-wider text-dark transition-all duration-500 group-hover:text-white focus:outline-none focus:ring-2 focus:ring-white mt-auto"
                  >
                    <span>Discuss this</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-prim transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white">
                      <Icon
                        icon="tabler:arrow-right"
                        width={22}
                        height={22}
                        className="text-white transition-colors duration-500 group-hover:text-dark"
                      />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Page;