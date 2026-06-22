"use client";

import { Icon } from "@iconify/react";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { cartCount, total } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  // Nice pop animation when cart count changes
  useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 600);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-3 bg-dark hover:bg-prim text-white px-6 py-3.5 rounded-2xl transition-all duration-300 font-chakrapetch tracking-wider active:scale-95 shadow-lg hover:shadow-xl overflow-hidden"
    >
      {/* Cart Icon with Badge */}
      <div className="relative">
        <Icon 
          icon="mdi:cart-outline" 
          width={28} 
          className="transition-transform group-hover:scale-110" 
        />
        
        {cartCount > 0 && (
          <div 
            className={`absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-dark transition-all duration-300 ${
              isAnimating ? 'scale-125' : 'scale-100'
            }`}
          >
            {cartCount > 99 ? '99+' : cartCount}
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start text-sm leading-tight">
        <span className="font-medium">My Cart</span>
        <span className="text-prim/90 text-xs font-mono">
          ₦{total.toLocaleString()}
        </span>
      </div>

      {/* Subtle Arrow Indicator */}
      <Icon 
        icon="mdi:chevron-right" 
        width={20} 
        className="ml-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" 
      />
    </button>
  );
}