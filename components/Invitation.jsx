

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Invitation() {

  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey(prev => prev + 1);
  }, []);

  const weddingDate = new Date("2026-04-29T20:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔥 VARIANTS (MAIN MAGIC)
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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section
      key={animateKey}
      className="relative py-20 px-4 overflow-hidden text-center"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}   // 🔥 every time on enter
      >

        {/* Divider */}
        <motion.div variants={item} className="flex items-center justify-center mb-8">
          <div className="h-[1px] w-16 bg-gray-400"></div>
          <div className="mx-3 text-gray-500">◇</div>
          <div className="h-[1px] w-16 bg-gray-400"></div>
        </motion.div>

        <motion.p variants={item} className="text-sm md:text-xl text-[#fcb750] italic">
          Together with our families
        </motion.p>

        <motion.h2 variants={item} className="mt-6 text-3xl md:text-5xl font-serif text-[#ffddaa] italic">
          Aakash
        </motion.h2>

        <motion.p variants={item} className="text-xl md:text-2xl my-2 text-[#fcb750]">
          &
        </motion.p>

        <motion.h2 variants={item} className="text-3xl md:text-5xl font-serif text-[#ffddaa] italic">
          Prerna
        </motion.h2>

        <motion.p variants={item} className="mt-6 text-[#fcb750] md:text-xl italic text-sm">
          invite you to their wedding
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="tracking-widest text-[#fcb750] md:text-xl text-sm"
          >
            WEDNESDAY
          </motion.span>

          <motion.span className="text-5xl md:text-6xl font-serif text-[#ffddaa]">
            29
          </motion.span>

          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="tracking-widest text-[#fcb750] md:text-xl text-sm"
          >
            APRIL 2026
          </motion.span>

        </motion.div>

        <motion.div variants={item} className="mt-8 text-sm text-[#fcb750] md:text-xl space-y-2">
          <p>8:00pm Tulsi Mangalam</p>
          <p>Kushalpur Chauk, Raipur (C.G.)</p>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex justify-center gap-6 text-[#ffddaa]">
          {["Days", "Hours", "Min", "Sec"].map((label, i) => {
            const value = Object.values(timeLeft)[i];
            return (
              <div key={label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold">{value}</p>
                <p className="text-xs text-[#fcb750]">{label}</p>
              </div>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="mt-10 text-gray-400 text-xl">
          ♡
        </motion.div>

      </motion.div>
    </section>
  );
}