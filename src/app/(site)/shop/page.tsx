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

  // Toast State
  const [toast, setToast] = useState<{ 
    message: string; 
    visible: boolean 
  }>({ message: "", visible: false });

  const { addToCart } = useCart();

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);

    setToast({
      message: `${product.title} has been added to your cart`,
      visible: true,
    });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
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
        description=""
        breadcrumbLinks={[
          { href: "/", text: "Home" },
          { href: "/shop", text: "Shop" },
        ]}
      />

      <section className="relative overflow-hidden bg-[#faf8f1] py-12 md:py-16 lg:py-24">
        {/* Background Effects - Adjusted for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-[-150px] md:left-[-200px] top-12 md:top-20 h-[400px] md:h-[500px] w-[400px] md:w-[500px] rounded-full bg-yellow-400/20 blur-[100px] md:blur-[120px]" />
          <div className="absolute right-[-150px] md:right-[-200px] bottom-0 h-[400px] md:h-[500px] w-[400px] md:w-[500px] rounded-full bg-amber-500/20 blur-[100px] md:blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="rounded-[28px] md:rounded-[40px] border border-white/40 bg-white/40 backdrop-blur-xl p-6 md:p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center rounded-full border border-yellow-400/30 bg-yellow-400/15 px-4 py-2 text-xs md:text-sm font-semibold text-yellow-700">
                    Premium Marketplace
                  </span>
                  <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                    Exceptional Products
                    <br />
                    For Modern Businesses
                  </h2>
                  <p className="mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
                    Explore expertly crafted physical products and digital solutions that help businesses scale, operate smarter, and stand out.
                  </p>
                </div>
                <div className="lg:self-start flex-shrink-0">
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
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-12 md:mb-14"
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-5 md:p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-yellow-600">
                  {item.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12 md:mb-16">
            {(["all", "physical", "digital"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  filter === item
                    ? "bg-yellow-500 text-black shadow-xl shadow-yellow-500/30"
                    : "bg-white/50 backdrop-blur-lg border border-white/50 hover:bg-white hover:shadow-md"
                }`}
              >
                {item === "all" ? "All Products" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/shop/${product.slug}`} className="group block h-full">
                    <div className="h-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/50 bg-white/40 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-[0_25px_90px_rgba(255,193,7,0.22)]">
                      {/* Image */}
                      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        <div className="absolute top-4 right-4">
                          <span className="rounded-full bg-white/90 backdrop-blur-lg px-3 md:px-4 py-1 text-xs font-bold uppercase tracking-widest shadow">
                            {product.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 md:p-7 flex flex-col h-full">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 mb-4">
                          {product.title}
                        </h3>

                        <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 flex-1 mb-6">
                          {product.description}
                        </p>

                        <div className="mt-auto flex items-end justify-between gap-4">
                          <div>
                            <span className="text-2xl md:text-3xl font-black text-gray-900">
                              ₦{product.price.toLocaleString()}
                            </span>
                          </div>

                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-5 md:px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-yellow-600 hover:scale-105 active:scale-95 shadow-md text-sm md:text-base whitespace-nowrap"
                          >
                            <Icon icon="mdi:cart-plus" width={20} className="md:w-[22px]" />
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

      {/* Toast Notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 bg-yellow-600 text-white px-5 md:px-6 py-4 rounded-2xl shadow-2xl shadow-yellow-500/50 max-w-[90%] sm:max-w-md"
          >
            <div className="bg-white/20 p-2 rounded-xl flex-shrink-0">
              <Icon icon="mdi:check-circle" width={26} />
            </div>
            <span className="font-medium text-sm md:text-base">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Shop;