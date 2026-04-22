

"use client";

import { motion } from "framer-motion";

export default function EventDetails() {

  // 🔥 container stagger control
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // 🔥 item animation
  const item = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          alt="event"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#aeaeae2b]/10 backdrop-blur-sm"></div>

      {/* Card */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto bg-[#f9ca557d]/20 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}   // 🔥 repeat on every scroll
      >

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750] mb-6"
        >
          Event Details
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-16 h-[1px] bg-[#ffddaa] mx-auto mb-8"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div variants={item} className="text-center">
            <p className="text-lg font-medium text-[#fcb750]">27-02-2026</p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Mandap Puja and Auspicious Haldi Ceremony
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <p className="text-lg font-medium text-[#fcb750]">28-04-2026</p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Departure of the Wedding Procession and the Nuptial Ceremony
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <p className="text-lg font-medium text-[#fcb750]">29-04-2026</p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Guest Reception and Blessing Ceremony
            </p>
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}