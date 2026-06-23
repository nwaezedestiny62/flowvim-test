"use client";

import { products, type Product } from "@/app/api/shopData";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import HeroSub from "@/components/SharedComponents/HeroSub/index";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const { addToCart: addToGlobalCart, cart } = useCart();

  const product = products.find(p => p.slug === slug) as Product | undefined;
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-unbounded font-semibold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-prim hover:underline text-lg">← Back to Shop</Link>
        </div>
      </div>
    );
  }

  const galleryImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const currentImage = galleryImages[selectedImageIndex];

  const handleAddToCart = () => {
    addToGlobalCart(product, quantity);
  };

  const cartItem = cart.find((item: any) => item.id === product.id);
  const currentInCart = cartItem?.quantity || 0;
  const features = product.features ?? [];

  return (
    <>
      <HeroSub
        title={product.title}
        description=""
        breadcrumbLinks={[
          { href: "/", text: "Home" },
          { href: "/shop", text: "Shop" },
          { href: `/shop/${product.slug}`, text: product.title }
        ]}
      />

      <section className="relative overflow-hidden bg-[#faf8f1] py-12 md:py-16 lg:py-24">
        {/* Background Orbs - Mobile Optimized */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-32 md:-left-40 top-16 md:top-20 h-[400px] md:h-[500px] w-[400px] md:w-[500px] rounded-full bg-yellow-400/15 blur-[100px] md:blur-[140px]" />
          <div className="absolute -right-32 md:-right-40 bottom-0 h-[400px] md:h-[500px] w-[400px] md:w-[500px] rounded-full bg-amber-500/15 blur-[100px] md:blur-[140px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">

            {/* LEFT SIDE - Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-[28px] md:rounded-[40px] border border-white/50 bg-white/40 backdrop-blur-xl p-4 md:p-5 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                
                <div className="relative aspect-square overflow-hidden rounded-[24px] md:rounded-[30px]">
                  <Image
                    src={currentImage}
                    alt={product.title}
                    fill
                    priority
                    className="object-cover transition duration-700 hover:scale-110"
                  />

                  <div className="absolute top-4 right-4 md:top-5 md:right-5">
                    <span className="rounded-full bg-white/90 backdrop-blur-lg px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow">
                      {product.category}
                    </span>
                  </div>
                </div>

                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 md:gap-4 mt-6">
                    {galleryImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative aspect-square overflow-hidden rounded-2xl transition-all duration-300 ${
                          selectedImageIndex === index
                            ? "ring-4 ring-yellow-500 scale-105"
                            : "opacity-80 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="lg:sticky lg:top-24 space-y-8">

                <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-700">
                  Premium Product
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                  {product.title}
                </h1>

                <div className="flex items-end gap-4">
                  <span className="text-4xl md:text-5xl font-black text-gray-900">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>

                {currentInCart > 0 && (
                  <div className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 flex items-center gap-3">
                    <Icon icon="mdi:check-circle" className="text-green-600" width={24} />
                    <span className="font-medium text-green-700 text-sm md:text-base">
                      {currentInCart} item{currentInCart > 1 ? "s" : ""} already in cart
                    </span>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <div className="rounded-2xl bg-white/50 backdrop-blur-xl border border-white/50 p-4 text-center">
                    <Icon icon="mdi:shield-check" width={26} className="mx-auto mb-2" />
                    <p className="text-xs font-medium">Secure</p>
                  </div>
                  <div className="rounded-2xl bg-white/50 backdrop-blur-xl border border-white/50 p-4 text-center">
                    <Icon icon="mdi:truck-fast" width={26} className="mx-auto mb-2" />
                    <p className="text-xs font-medium">Fast Delivery</p>
                  </div>
                  <div className="rounded-2xl bg-white/50 backdrop-blur-xl border border-white/50 p-4 text-center">
                    <Icon icon="mdi:star-circle" width={26} className="mx-auto mb-2" />
                    <p className="text-xs font-medium">Premium</p>
                  </div>
                </div>

                {/* Description */}
                <div className="rounded-[28px] md:rounded-[32px] border border-white/50 bg-white/40 backdrop-blur-xl p-6 md:p-7">
                  <h3 className="text-xl text-prim font-bold mb-4">Product Overview</h3>
                  <div className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                    {product.longDescription}
                  </div>
                </div>

                {/* Features */}
                {features.length > 0 && (
                  <div>
                    <h3 className="mb-6 text-2xl text-prim font-bold">Key Features</h3>
                    <div className="grid gap-4">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex gap-4 rounded-3xl border border-white/50 bg-white/40 p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl"
                        >
                          <Icon
                            icon="mdi:check-circle"
                            className="flex-shrink-0 text-green-600 mt-0.5"
                            width={28}
                          />
                          <span className="text-[15px] md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Purchase Area */}
                <div className="rounded-[28px] md:rounded-[32px] border border-white/50 bg-white/50 backdrop-blur-xl p-6 md:p-7 shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                    <div className="flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white w-full sm:w-auto">
                      <button
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="px-6 py-4 text-2xl hover:bg-gray-100 active:bg-gray-200 transition-colors w-1/3 sm:w-auto"
                      >
                        −
                      </button>
                      <span className="px-8 py-4 font-bold text-xl flex-1 text-center border-x">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity((q) => q + 1)}
                        className="px-6 py-4 text-2xl hover:bg-gray-100 active:bg-gray-200 transition-colors w-1/3 sm:w-auto"
                      >
                        +
                      </button>
                    </div>

                    <div className="sm:ml-auto">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="font-black text-2xl md:text-3xl">
                        ₦{(product.price * quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full rounded-2xl bg-yellow-500 py-5 text-lg font-bold text-black transition-all hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_10px_40px_rgba(234,179,8,0.4)]"
                  >
                    Add {quantity} To Cart
                  </button>

                  <button
                    onClick={() => {
                      const message = `Hi, I'm interested in ${product.title} (Quantity: ${quantity}) - ₦${(
                        product.price * quantity
                      ).toLocaleString()}`;
                      window.open(
                        `https://wa.me/2347010930763?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                    className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] py-5 text-lg font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Icon icon="mdi:whatsapp" width={30} />
                    Chat On WhatsApp
                  </button>

                  <Link
                    href="/shop"
                    className="group mt-10 inline-flex items-center gap-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 mx-auto"
                  >
                    <Icon 
                      icon="mdi:arrow-left" 
                      width={24} 
                      className="transition-transform group-hover:-translate-x-1" 
                    />
                    Back to Shop
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}