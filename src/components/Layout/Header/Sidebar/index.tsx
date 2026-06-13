import React from 'react'
import { Icon } from "@iconify/react";
import Logo from '../Logo';
import Link from 'next/link';

interface SidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({isOpenSidebar, setIsOpenSidebar}) => {
  return (
    <div className={`hidden lg:block fixed top-0 right-0 h-screen lg:w-[35%] xxl:w-[40%] shadow-2xl bg-dark-blur backdrop-blur-lg p-10 rounded-tl-3xl rounded-bl-3xl z-50 transform transition-transform duration-500 ease-in-out overflow-y-scroll ${isOpenSidebar ? "translate-x-0" : "translate-x-full"}`}>
      {/* Header */}
      <div className="text-white flex justify-between items-center w-full">
        <Logo />
        <div className="close-btn group bg-white rounded-sm text-prim p-2 cursor-pointer" onClick={() => setIsOpenSidebar(false)}>
          <Icon 
          icon="material-symbols:close"
          width="30"
          height="30"
          className='group-hover:rotate-90 duration-500 transition'
          />
        </div>
      </div>

      {/* Content */}
      <p className="text-pera-light py-8">
        we are commited to delivering innovative solutions that drive growth and add value to our clients. With a team of experienced professionals and a passion for excellence.
      </p>

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
  )
}

export default Sidebar
