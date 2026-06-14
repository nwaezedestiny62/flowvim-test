import Blog from "@/components/Home/Blog";
import Commitment from "@/components/Home/Commitment";
import Companies from "@/components/Home/Companies";
import Hero from "@/components/Home/Hero";
import Solution from "@/components/Home/Solution";
import Testimonials from "@/components/Home/Testimonials";
import Videocard from "@/components/Home/Videocard";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main>
      <Hero />
      <Solution />
      <Companies />
      <Commitment />
      <Videocard />
      <Testimonials/>
      <Blog/>
      <Footer />
    </main>
    </>
  );
}
