"use client";

import HeroSub from "@/components/SharedComponents/HeroSub";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Icon } from "@iconify/react";
import { useSiteContent } from "@/lib/useSiteContent";
import CartButton from "@/components/Cart/CartButton";
import CartModal from "@/components/Cart/CartModal";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const { content } = useSiteContent();
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState<"all" | "physical" | "digital">("all");

  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  const { addToCart } = useCart();

  const products = content?.products || [];

  const filteredProducts = filter === "all"
    ? products
    : products.filter((product: any) => product.category === filter);

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);

    setToast({ message: `${product.title} has been added to your cart`, visible: true });
    setTimeout(() => setToast((prev) => ({ ...prev, visible: false })), 3000);
  };

  return (
    <>
      <HeroSub
        title="Shop"
        description="Premium products for modern businesses"
        breadcrumbLinks={[{ href: "/", text: "Home" }, { href: "/shop", text: "Shop" }]}
      />

      <section className="relative overflow-hidden bg-[#faf8f1] py-12 md:py-16 lg:py-24">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          
          {/* Header with Cart Button */}
          <div className="flex justify-end mb-8">
            <CartButton onClick={() => setShowCart(true)} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-12 md:mb-16">
            {(["all", "physical", "digital"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                  filter === item ? "bg-yellow-500 text-black shadow-xl shadow-yellow-500/30" : "bg-white/50 backdrop-blur-lg border border-white/50 hover:bg-white hover:shadow-md"
                }`}
              >
                {item === "all" ? "All Products" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product: any) => (
              <Link key={product.id} href={`/shop/${product.slug}`} className="group block h-full">
                <div className="h-full overflow-hidden rounded-[28px] md:rounded-[32px] border border-white/50 bg-white/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="rounded-full bg-white/90 backdrop-blur-lg px-3 md:px-4 py-1 text-xs font-bold uppercase tracking-widest shadow">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 md:p-7 flex flex-col h-full">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 line-clamp-2 mb-4">
                      {product.title}
                    </h3>

                    <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3 flex-1 mb-6">
                      {product.description}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-4">
                      <span className="text-2xl md:text-3xl font-black text-gray-900">
                        ₦{product.price.toLocaleString()}
                      </span>

                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="flex items-center gap-2 rounded-2xl bg-yellow-500 px-5 md:px-6 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-yellow-600 hover:scale-105 active:scale-95 shadow-md text-sm md:text-base whitespace-nowrap"
                      >
                        <Icon icon="mdi:cart-plus" width={20} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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