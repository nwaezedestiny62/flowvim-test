"use client";

import HeroSub from "@/components/SharedComponents/HeroSub";
import { products, type Product } from "@/app/api/shopData";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import CartButton from "@/components/Cart/CartButton";
import CartModal from "@/components/Cart/CartModal";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const Shop = () => {
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState<"all" | "physical" | "digital">("all");

  const { addToCart } = useCart();

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  const stats = [
    { value: `${products.length}+`, label: "Premium Products" },
    { value: "100%", label: "Quality Guaranteed" },
    { value: "24/7", label: "Customer Support" },
    { value: "Fast", label: "Nationwide Delivery" },
  ];

  return (
    <>
      <HeroSub
        title="Shop"
        description="Premium physical products and high-value digital solutions designed for ambitious businesses."
        breadcrumbLinks={[
          { href: "/", text: "Home" },
          { href: "/shop", text: "Shop" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#faf8f1] py-16 lg:py-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-200px] top-20 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-[120px]" />
          <div className="absolute right-[-200px] bottom-0 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-[40px] border border-white/40 bg-white/40 backdrop-blur-xl p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col lg:flex-row gap-10 lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/15 px-5 py-2 text-sm font-semibold text-yellow-700">
                    Premium Marketplace
                  </span>
                  <h2 className="mt-5 text-4xl lg:text-6xl font-black leading-tight text-gray-900">
                    Exceptional Products
                    <br />
                    For Modern Businesses
                  </h2>
                  <p className="mt-5 text-gray-600 text-lg">
                    Explore expertly crafted physical products and digital solutions that help businesses scale, operate smarter, and stand out.
                  </p>
                </div>
                <div className="lg:self-start">
                  <CartButton onClick={() => setShowCart(true)} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-6 text-center"
              >
                <div className="text-3xl font-black text-yellow-600">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {(["all", "physical", "digital"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`relative overflow-hidden rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
                  filter === item
                    ? "bg-yellow-500 text-black shadow-xl shadow-yellow-500/30"
                    : "bg-white/50 backdrop-blur-lg border border-white/50 hover:bg-white hover:shadow-md"
                }`}
              >
                {item === "all" ? "All Products" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid - Now 2 Cards Per Row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"   // ← Changed to 2 columns
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/shop/${product.slug}`} className="group block h-full">
                    <div className="h-full overflow-hidden rounded-[32px] border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_90px_rgba(255,193,7,0.22)]">
                      {/* Image */}
                      <div className="relative h-80 overflow-hidden">   {/* Slightly taller image */}
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        <div className="absolute top-5 right-5">
                          <span className="rounded-full bg-white/90 backdrop-blur-lg px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-7 flex flex-col">
                        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-4">
                          {product.title}
                        </h3>

                        <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 flex-1 mb-6">
                          {product.description}
                        </p>

                        <div className="mt-auto flex items-end justify-between">
                          <div>
                            <span className="text-3xl font-black text-gray-900">
                              ₦{product.price.toLocaleString()}
                            </span>
                          </div>

                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-yellow-600 hover:scale-105 active:scale-95 shadow-md"
                          >
                            <Icon icon="mdi:cart-plus" width={22} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CartModal isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
};

export default Shop;