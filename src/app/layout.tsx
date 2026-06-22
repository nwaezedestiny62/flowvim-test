import type { Metadata } from "next";
import { Chakra_Petch, Mona_Sans, Poppins, Unbounded } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import FooterWrapper from "@/components/Layout/FooterWrapper";
import { CartProvider } from "@/contexts/CartContext";

const chakraPetch = Chakra_Petch({ variable: "--font-chakrapetch", weight: ["300","400","500","600","700"], subsets: ["latin"] });
const mona = Mona_Sans({ variable: "--font-mona", weight: ["300","400","500","600"], subsets: ["latin"] });
const poppins = Poppins({ variable: "--font-poppins", weight: ["300","400","500","600","700","800","900"], subsets: ["latin"] });
const unbounded = Unbounded({ variable: "--font-unbounded", weight: ["300","400","500","600","700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowVim",
  description: "Premium Products & Services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chakraPetch.variable} ${mona.variable} ${poppins.variable} ${unbounded.variable} antialiased`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          {children}
          <FooterWrapper />
        </CartProvider>
      </body>
    </html>
  );
}