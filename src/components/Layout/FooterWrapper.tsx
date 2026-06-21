"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide footer on all careers pages
  const isCareersPage = pathname?.startsWith("/careers");

  if (isCareersPage) {
    return null;
  }

  return <Footer />;
}