"use client";

import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/contact", text: "Contact" },
];

const contactItems = [
  {
    icon: "mdi:map-marker",
    title: "Our Office",
    text: "33 Unity Crescent, Lagos, Nigeria",
  },
  {
    icon: "mdi:phone",
    title: "Phone",
    text: "+234 806 154 0345",
  },
  {
    icon: "mdi:email",
    title: "Email",
    text: "samson.okorie@flowvim.com",
  },
  {
    icon: "mdi:clock-time-eight-outline",
    title: "Working Hours",
    text: "Monday - Friday: 9:00 AM - 6:00 PM",
  },
];

const container: Variants = { /* your variants */ };
const item: Variants = { /* your variants */ };

export default function ContactPage() {
  // Simple success check from URL
  const isSuccess = typeof window !== "undefined" && 
    new URLSearchParams(window.location.search).get("success") === "true";

  return (
    <>
      <HeroSub
        title="Get In Touch"
        description="Let’s discuss how we can drive transformation for your business"
        breadcrumbLinks={breadcrumbLinks}
      />

      <motion.section
        className="bg-white min-h-screen"   
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        variants={container}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          
          {/* CONTACT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactItems.map((itemData, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-gray-100 hover:border-prim/30 p-8 transition-all duration-300 flex flex-col items-start"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-prim/10 text-prim group-hover:bg-prim group-hover:text-white transition-all duration-300">
                  <Icon icon={itemData.icon} width="32" height="32" />
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-semibold text-gray-900 font-unbounded">
                    {itemData.title}
                  </h4>
                  <p className="text-gray-600 mt-3 leading-relaxed text-[15px]">
                    {itemData.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM + MAP */}
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* FORM */}
            <motion.div
              className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-10 lg:p-14"
              variants={item}
            >
              <div className="max-w-lg">
                <h2 className="text-4xl font-chakrapetch font-semibold text-prim leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="mt-12 bg-green-100 border border-green-400 text-green-700 px-8 py-12 rounded-2xl text-center">
                  <p className="text-3xl mb-2">✅ Thank You!</p>
                  <p className="text-lg">Your message has been received successfully.</p>
                  <p className="text-sm mt-3">We will get back to you shortly.</p>
                </div>
              ) : (
                <form 
                  action="https://api.web3forms.com/submit" 
                  method="POST"
                  className="mt-12 space-y-8"
                >
                  <input type="hidden" name="access_key" value="068b2951-bedc-46fb-87ee-500635a1379f" />
                  <input type="hidden" name="subject" value="New Contact Message - Flowvim Website" />
                  <input type="hidden" name="from_name" value="Flowvim Contact Form" />
                  
                  {/* Redirect back with success flag */}
                  <input type="hidden" name="redirect" value="https://flowvim.com/contact?success=true" />

                  <div className="grid md:grid-cols-2 gap-8">
                    <Input label="Full Name" placeholder="John Doe" name="name" />
                    <Input label="Company Name" placeholder="Your Company" name="company" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Input label="Email Address" placeholder="you@company.com" type="email" name="email" />
                    <Input label="Phone Number" placeholder="+234 801 234 5678" name="phone" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select name="service" className="w-full border-b-2 border-gray-300 focus:border-prim py-3 focus:outline-none bg-transparent">
                      <option value="">Select a service</option>
                      <option>HR Management Solutions</option>
                      <option>Process Optimization</option>
                      <option>Organizational Strategy</option>
                      <option>Performance Management</option>
                      <option>Capacity Building</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Tell us about your business goals..."
                      className="w-full border-b-2 border-gray-300 focus:border-prim py-3 focus:outline-none resize-y min-h-[140px]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-dark hover:bg-prim h-[58px] w-full md:w-fit rounded-full font-chakrapetch font-semibold flex items-center justify-center gap-3 px-8 tracking-wider transition-all duration-200 active:scale-95"
                  >
                    Send Message
                    <Icon icon="tabler:arrow-right" width="22" height="22" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* MAP */}
            <motion.div className="lg:col-span-2" variants={item}>
              <div className="sticky top-8">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[460px] lg:h-[620px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63647990563!2d3.1191455991624966!3d6.548028244295543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1781639407283!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="rounded-3xl"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

function Input({ label, placeholder, type = "text", name }: { 
  label: string; 
  placeholder: string; 
  type?: string;
  name?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full border-b-2 border-gray-300 focus:border-prim py-3 focus:outline-none"
        required
      />
    </div>
  );
}