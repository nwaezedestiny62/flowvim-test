"use client"
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo';
import { headerData } from './Navigation/menuData';
import HeaderLink from './Navigation/headerLinks';
import Link from 'next/link';
import Sidebar from './Sidebar';

import { Icon } from "@iconify/react"
import MobileHeaderLink from './Navigation/mobileheaderLinks';

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <>
    <header
  className={`fixed top-5 left-1/2 -translate-x-1/2 h-24 px-6 py-1 z-50 w-[95%] max-w-[1500px] 
    flex items-center transition-all duration-500 rounded-3xl 
    ${sticky 
      ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]" 
      : "bg-white/10 backdrop-blur-sm"
    }`}
>
  <div className="container mx-auto flex items-center justify-between w-full px-4 lg:px-8">
    <div className="text-white">
      <Logo />
    </div>
    <nav className='hidden lg:flex grow items-center justify-center space-x-10 text-base'>
      {headerData.map((item, index) => (
        <HeaderLink key={index} item={item} />
      ))}
    </nav>

<div className="flex items-center gap-4">

  {/* Desktop Button */}
  <div className="hidden lg:flex items-center gap-4">
    <Link
      href="/contact"
      className="bg-dark text-white h-[50px] rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 items-center tracking-wider group"
    >
      Let's Talk
      <Icon
        icon="tabler:arrow-right"
        width="24"
        height="24"
        className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300"
      />
    </Link>

    <button
      onClick={() => setIsOpenSidebar(true)}
      className="p-2 cursor-pointer group"
    >
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-4 h-0.5 bg-white mt-1.5 group-hover:w-6 transition-all"></span>
      <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setNavbarOpen(!navbarOpen)}
    className="lg:hidden block p-2 cursor-pointer group"
    aria-label="Toggle mobile menu"
  >
    <span className="block w-6 h-0.5 bg-white"></span>
    <span className="block w-4 h-0.5 bg-white mt-1.5 group-hover:w-6 transition-all"></span>
    <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
  </button>

</div>
    </div>
    </header>

   <div
  ref={mobileMenuRef}
  className={`lg:hidden fixed top-0 right-0 h-screen
  w-full sm:w-[50%]
  bg-dark-blur backdrop-blur-lg shadow-2xl
  p-10 z-[999]
  transform transition-transform duration-500 ease-in-out
  ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}
>
      <div className="flex items-center justify-between w-full text-white">
  <div className="shrink-0">
    <Logo />
  </div>

  <button
    onClick={() => setNavbarOpen(false)}
    aria-label="Close mobile menu"
    className="ml-auto p-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="text-white"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>
<nav className='flex-col flex items-start py-4 '>
  {headerData.map((item, index) => (
        <MobileHeaderLink key={index} item={item} />
      ))}
</nav>

{/* Search */}
      <h3 className="font-chakrapetch pb-3">Search Now!</h3>
      <form className="search-box relative flex ">
        <input type="text" placeholder='Search Here...' className='ps-3 bg-white h-[45px]' required/>
        <button type='submit' className='absolute h-full right-0 border-border cursor-pointer'>
          <Icon icon="ei:search" width="50" height="30"/>
        </button>
      </form>

      {/* Contact Info */}
      <h3 className="font-chakrapetch pb-3 pt-8">Contact Info</h3>
      <div className="space-y-3">
        <span className="text-pera-light font-chakrapetch">phone</span> <br/>
        <Link
        href="/contact"
        className='font-unbounded text-white font-normal'
        >
        (+234) 701 093 0763
        </Link>
      </div>
      <div className="space-y-3">
        <span className="text-pera-light font-chakrapetch">Email</span> <br/>
        <Link
        href="/contact"
        className='font-unbounded text-white font-normal'
        >
        info@axora.com
        </Link>
      </div>
      <div className="space-y-3">
        <span className="text-pera-light font-chakrapetch">phone</span> {""}
        <br />
        <Link
        href="/contact"
        className='font-unbounded text-white font-normal'
        >
        FF - 42, Produce Complex Vadorara
        </Link>
      </div>
      {/* Social */}
      <h3 className="font-chakrapetch pb-3 pt-8">Follow Us</h3>
      <div className="social-icons flex gap-3">
        <Link href="/https://www.facebook.com/">
        <Icon icon='gg:facebook' width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-blue-600 hover:-translate-y-1 transition duration-500' />
        </Link>
        <Link href="/https://www.instagram.com/">
        <Icon icon='mdi:instagram' width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-pink-500 hover:-translate-y-1 transition duration-500' />
        </Link>
        <Link href="/https://www.youtube.com/">
        <Icon icon='mdi:youtube' width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-red-600 hover:-translate-y-1 transition duration-500' />
        </Link>
        <Link href="/https://www.linkedin.com/">
        <Icon icon='basil:linkedin-solid' width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-blue-400 hover:-translate-y-1 transition duration-500' />
        </Link>
      </div>
    </div>

    <Sidebar
    isOpenSidebar={isOpenSidebar}
    setIsOpenSidebar={setIsOpenSidebar}
    />
    </>
  )
}

export default Header;