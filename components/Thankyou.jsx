"use client";

import { motion } from "framer-motion";

export default function ThankYou() {

  // 🔥 STAGGER SYSTEM (only for card content)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section className="relative pt-20 pb-10 px-4 flex flex-col items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10 backdrop-blur-sm" />
      </div>

      {/* CARD */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 max-w-2xl w-full bg-[#f9ca557d]/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center"
      >

        {/* Title */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750]"
        >
          Thank You
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-16 h-2 bg-[#fcb750] mx-auto my-6"
        />

        {/* Message */}
        <motion.p
          variants={item}
          className="text-sm md:text-base text-[#ffddaa] italic leading-relaxed"
        >
          Thank you for being a part of our special day. Your presence means the
          world to us and we are grateful to celebrate this beautiful journey
          together.
        </motion.p>

        {/* Closing */}
        <motion.p
          variants={item}
          className="mt-6 text-[#fcb750] font-serif italic text-lg"
        >
          With Love,
        </motion.p>

        <motion.p
          variants={item}
          className="text-[#ffddaa] mt-1"
        >
          Aakash & Prerna
        </motion.p>

      </motion.div>

      {/* 🔥 OUTSIDE CARD (FIXED POSITION) */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.3
        }}
        viewport={{ once: false, amount: 0.4 }}
        className="relative z-10 mt-6 md:mt-10 text-xs md:text-sm font-serif italic text-[#ffddaa]/20"
      >
        -- Created by Vyas --
      </motion.p>

    </section>
  );
}