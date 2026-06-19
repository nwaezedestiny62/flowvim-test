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

      <section className="bg-light py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.slug || index}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:bg-prim hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full prim-gradient transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
                    <Icon
                      icon={service.icon}
                      width={42}
                      height={42}
                      className="text-dark transition-colors duration-500 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 font-unbounded text-xl font-medium leading-snug text-dark transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mb-8 flex-1 leading-relaxed text-pera-dark transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex w-fit items-center gap-3 rounded-full font-chakrapetch text-sm font-semibold uppercase tracking-wider text-dark transition-all duration-500 group-hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span>Learn More</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-prim transition-all duration-500 group-hover:-rotate-45 group-hover:bg-white">
                      <Icon
                        icon="tabler:arrow-right"
                        width={20}
                        height={20}
                        className="text-white transition-colors duration-500 group-hover:text-dark"
                      />
                    </span>
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-white/20" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;