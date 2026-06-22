"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useCart } from "@/contexts/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  const contactSeller = () => {
    const phone = "07010930763";
    const itemsList = cart.map(p => 
      `• ${p.title} (x${p.quantity}) - ₦${(p.price * p.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `Hello! I'm interested in these items from FlowVim Shop:\n\n${itemsList}\n\nTotal: ₦${total.toLocaleString()}\n\nPlease let me know availability.`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[300] flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"  // ← Increased width
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Icon icon="mdi:cart" width={28} className="text-dark" />
            <h2 className="text-2xl font-unbounded font-semibold">Your Cart</h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-4xl leading-none text-gray-400 hover:text-dark transition-colors"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-24">
              <div className="mx-auto w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Icon icon="mdi:cart-outline" width={48} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">Your cart is empty</h3>
              <p className="text-gray-500">Looks like you haven&apos;t added anything yet.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div 
                key={item.id} 
                className="flex gap-5 bg-gray-50 hover:bg-gray-100 rounded-3xl p-5 transition-all group"
              >
                {/* Image */}
                <div className="w-24 h-24 relative rounded-2xl overflow-hidden flex-shrink-0 shadow-sm">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col">
                  <h4 className="font-medium leading-tight mb-1.5 line-clamp-2 pr-6">
                    {item.title}
                  </h4>
                  
                  <p className="text-xl font-semibold text-dark mb-4">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="flex items-center border border-gray-200 rounded-2xl overflow-hidden bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition text-xl"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-semibold text-lg">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 active:bg-gray-200 transition text-xl"
                      >
                        +
                      </button>
                    </div>

                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="ml-auto text-red-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-xl transition-all"
                    >
                      <Icon icon="mdi:trash-can-outline" width={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Total & Checkout */}
        {cart.length > 0 && (
          <div className="border-t p-6 bg-gray-50 rounded-b-3xl">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-medium text-gray-600">Total</span>
              <span className="text-3xl font-bold font-unbounded">₦{total.toLocaleString()}</span>
            </div>

<button
  onClick={contactSeller}
  className="w-full bg-[#25D366] hover:bg-[#20b557] active:scale-[0.985] text-white py-4 px-6 rounded-2xl font-chakrapetch tracking-wider flex items-center justify-center gap-3 transition-all shadow-lg text-base sm:text-lg"
>
  <Icon 
    icon="mdi:whatsapp" 
    width={28} 
    className="flex-shrink-0 sm:w-8" 
  />
  <span className="leading-tight">Contact Flowvim Shop on WhatsApp</span>
</button>

            <p className="text-center text-xs text-gray-500 mt-4">
              You’ll be taken to WhatsApp to confirm your order, quantity, and delivery details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}