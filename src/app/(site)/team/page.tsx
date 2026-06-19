"use client";

import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import Team from "@/components/Home/Team";

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/team", text: "Team" },
];

export default function Page() {
  return (
    <>
      <HeroSub
        title="Team"
        description=""
        breadcrumbLinks={breadcrumbLinks}
      />
      <Team />

   
    </>
  );
}