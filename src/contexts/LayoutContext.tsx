"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type LayoutContextType = {
  hideNav: boolean;
  setHideNav: (hide: boolean) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [hideNav, setHideNav] = useState(false);

  return (
    <LayoutContext.Provider value={{ hideNav, setHideNav }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error(
      "useLayout must be used within a LayoutProvider"
    );
  }

  return context;
}