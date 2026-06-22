// src/components/Layout/Header/Navigation/menuData.tsx
import { HeaderItem } from "@/type/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "#",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { label: "Service List", href: "/services" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    submenu: [
      { label: "Blog List", href: "/blog" },
    ],
  },
  // ✅ NEW: Add Vacancies here
  { 
    label: "Careers", 
    href: "/careers" 
  },
  { label: "Contact Us", href: "/contact" },
  {
    label: "Shop",          // ← NEW
    href: "/shop",
  },
];
