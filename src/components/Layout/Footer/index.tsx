import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/app/api/data";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <>
      <footer className="pt-10 relative bg-white">
        <div className="container m-auto px-4 max-screen-xl">
          {/* Contact & Social */}
          <div className="flex-col flex lg:flex-row justify-between lg:items-center border-b pb-10 mb-10 gap-6">
            <div className="flex-wrap flex md:flex-nowrap gap-6">
              <div className="flex items-start text-foottext text-[15px]">
                <Icon icon="eui:location-outlined" className="w-6 h-6 mr-3 mt-1" />
                <div className="flex flex-col">
                  <span>33 Unity Crescent</span>
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-foottext">
                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6" />
                <span className="text-[15px]">0806 154 0345</span>
              </div>
              <div className="flex items-center gap-2 text-foottext">
                <Icon icon="clarity:email-line" className="w-6 h-6" />
                <span className="text-[15px]">samson.okorie@gmail.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="https://www.facebook.com/" className="text-muted hover:text-prim transition-colors">
                <Icon icon="fe:facebook" width="28" height="28" />
              </Link>
              <Link href="https://www.x.com/" className="text-muted hover:text-prim transition-colors">
                <Icon icon="fa6-brands:square-twitter" width="28" height="28" />
              </Link>
              <Link href="https://www.linkedin.com/" className="text-muted hover:text-prim transition-colors">
                <Icon icon="fa6-brands:linkedin" width="28" height="28" />
              </Link>
              <Link href="https://www.youtube.com/" className="text-muted hover:text-prim transition-colors">
                <Icon icon="cbi:youtube-cbi" width="30" height="30" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div className="text-black pb-5">
                <Logo />
              </div>
              <p className="leading-6 text-[14px] text-foottext">
                Aligning people, processes, and performance to unlock sustainable growth and operational excellence.
              </p>
              <div className="flex flex-wrap gap-3 items-center pt-5">
                <Image
                  src="/images/footer/award-logo-1.webp"
                  alt="award-logo-1"
                  width={70}
                  height={70}
                  className="p-2 cursor-pointer bg-black"
                />
                <Image
                  src="/images/footer/award-logo-2.webp"
                  alt="award-logo-2"
                  width={70}
                  height={70}
                  className="p-2 cursor-pointer bg-black"
                />
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Our Services</h4>
              <ul>
                {footerLinks.slice(0, 6).map((item, index) => (
                  <li key={index} className="pb-2 text-foottext text-[15px]">
                    {item.link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h4 className="text-[18px] text-black mb-3 font-chakrapetch font-bold">Resources</h4>
              <ul>
                {footerLinks.slice(6, 12).map((item, index) => (
                  <li key={index} className="pb-2 text-foottext text-[15px]">
                    {item.link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial Form */}
            <div className="lg:col-span-5">
              <p className="text-[18px] text-black font-bold font-chakrapetch mb-4">
                Share Your Experience
              </p>

              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="068b2951-bedc-46fb-87ee-500635a1379f" />
                <input type="hidden" name="subject" value="New Testimonial - Flowvim Website" />
                <input type="hidden" name="from_name" value="Flowvim Website" />
                
                {/* Redirect back to same page with success message */}
                <input type="hidden" name="redirect" value="https://flowvim.com?testimonial=success" />

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full bg-white placeholder:text-foottext text-black py-3 px-5 border border-border rounded-md focus:outline-none focus:border-prim"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="w-full bg-white placeholder:text-foottext text-black py-3 px-5 border border-border rounded-md focus:outline-none focus:border-prim"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your experience working with Flowvim..."
                    className="w-full bg-white placeholder:text-foottext text-black py-3 px-5 border border-border rounded-md resize-y focus:outline-none focus:border-prim"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-prim hover:bg-prim/90 text-white font-medium py-3 rounded-md transition-colors flex items-center justify-center gap-2"
                >
                  Submit Testimonial
                  <Icon icon="solar:plain-2-linear" className="text-xl" />
                </button>
              </form>
            </div>
          </div>

          {/* Success Message */}
          {typeof window !== "undefined" && new URLSearchParams(window.location.search).get("testimonial") === "success" && (
            <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-6 py-6 rounded-md text-center">
              <p className="text-xl font-medium">✅ Thank You!</p>
              <p>Your testimonial has been successfully received.</p>
              <p className="text-sm mt-2">We appreciate your feedback.</p>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-10 pt-6 text-center sm:text-center">
            <p className="text-[15px] text-foottext mb-3 sm:mb-0">
              © 2026. All rights reserved Flowvim Management Consulting
            </p>
            <div className="flex gap-4">
              {footerLinks.slice(12, 15).map((item, index) => (
                <span key={index} className="text-foottext text-[15px]">
                  {item.link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;