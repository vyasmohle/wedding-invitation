

"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {

  const [display, setDisplay] = useState("");
  const [erasing, setErasing] = useState(false);
  const fullText = "Akash & Prerna";
  const speed = 120;
  const eraseSpeed = 60;
  const pause = 900;
  const ref = useRef(null);

  // 🔥 typewriter logic (unchanged)
  useEffect(() => {
    let timeout;
    if (!erasing && display.length < fullText.length) {
      timeout = setTimeout(() => setDisplay(fullText.slice(0, display.length + 1)), speed);
    } else if (!erasing && display.length === fullText.length) {
      timeout = setTimeout(() => setErasing(true), pause);
    } else if (erasing && display.length > 0) {
      timeout = setTimeout(() => setDisplay(fullText.slice(0, display.length - 1)), eraseSpeed);
    } else if (erasing && display.length === 0) {
      timeout = setTimeout(() => setErasing(false), 400);
    }
    return () => clearTimeout(timeout);
  }, [display, erasing]);

  // 🔥 STAGGER ANIMATION (MAIN FIX)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
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
    <motion.section
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full"
    >

      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero3.png"
          className="w-full h-full object-cover"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5 }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/30" />

      {/* CONTENT (STAGGER WRAPPER) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}  // 🔥 repeat every time
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
      >

        {/* Image */}
        <motion.img
          variants={item}
          src="/images/couple-hero.jpeg"
          alt="Akash & Prerna"
          className="w-72 h-150 md:w-110 md:h-170 object-cover rounded-2xl shadow-xl mb-2"
        />

        {/* Top Text */}
        <motion.p
          variants={item}
          className="text-xl md:text-4xl font-serif text-[#fcb750] mb-2 mt-[-200] md:mt-[-250]"
        >
          Together with our families
        </motion.p>

        {/* Typewriter */}
        <motion.div variants={item}>
          <span
            ref={ref}
            className="block text-4xl md:text-6xl font-semibold text-[#ffddaa] mb-3"
            style={{
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: "2px",
              minHeight: "3rem",
            }}
          >
            {display}
            <span className="inline-block w-2 bg-[#fcb750] animate-pulse ml-1" />
          </span>
        </motion.div>

        {/* Invite */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-[#fcb750] mb-3 font-serif"
        >
          Invite you to join us in the celebration of our love
        </motion.p>

        {/* Date + Location */}
        <motion.div variants={item} className="flex flex-col items-center gap-2 mt-4">

          <p className="text-xl md:text-2xl font-semibold text-[#ffddaa] font-serif tracking-wide">
            April 28, 2026
          </p>

          <p className="text-lg md:text-xl font-serif text-[#fcb750]">
            Raipur
          </p>

        </motion.div>

      </motion.div>
    </motion.section>
  );
}