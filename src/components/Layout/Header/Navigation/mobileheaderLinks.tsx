"use client";

import React, { useState } from "react";
import { HeaderItem } from "@/type/menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileHeaderLinkProps {
  item: HeaderItem;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    if (item.submenu) {
      setSubMenuOpen((prev) => !prev);
    }
  };

  return (
    <div className="w-full border-b border-white/10 py-2">
      {/* Main Menu Item */}
      <div
        onClick={handleToggle}
        className="flex items-center justify-between text-white cursor-pointer py-2"
      >
        {item.submenu ? (
  <span className="flex-1">{item.label}</span>
) : (
  <Link href={item.href || "#"} className="flex-1">
    {item.label}
  </Link>
)}

        {item.submenu && (
          <Icon
            icon="iconamoon:arrow-down-2-duotone"
            width="22"
            height="22"
            className={`transition-transform duration-300 ${
              subMenuOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Submenu */}
      {item.submenu && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            subMenuOpen
              ? "max-h-[500px] opacity-100 mt-2"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="pl-4 space-y-1">
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                href={subItem.href}
                className={`block rounded-lg px-4 py-3 transition-all duration-200 ${
                  pathname === subItem.href
                    ? "bg-dark text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;