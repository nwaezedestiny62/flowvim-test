"use client";

import Header from "@/components/Layout/Header";
import { useLayout } from "@/contexts/LayoutContext";

export default function HeaderWrapper() {
  const { hideNav } = useLayout();

  if (hideNav) return null;

  return <Header />;
}