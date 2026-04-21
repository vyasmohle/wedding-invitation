

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

  return (
    <motion.section
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-screen w-full overflow-hidden"
    >
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero3.png"
          alt="wedding"
          className="w-full h-full object-cover"
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 1.4 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >

        {/* ✅ IMAGE FIXED */}
        <motion.img
          src="/images/couple-hero.jpeg"
          alt="Akash & Prerna"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 1.2 }}
          className="w-72 h-150 md:w-110 md:h-170 object-cover md:mt-4  rounded-2xl shadow-xl mb-2 md:mb-0"
        />

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="text-xl md:text-4xl font-serif text-[#fcb750] mb-2 mt-[-200] md:mt-[-250]"
        >
          Together with our families
        </motion.p>

        {/* ✅ TYPEWRITER (BIGGER + CURSIVE) */}
        <span
          ref={ref}
          className="block text-4xl md:text-6xl md:mb-8 md:shadow-2xl font-semibold text-[#ffddaa] mb-3"
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "2px",
            minHeight: "3rem",
          }}
        >
          {display}
          <span className="inline-block w-2 bg-[#fcb750] animate-pulse ml-1" style={{ height: "1.2em" }} />
        </span>

        {/* Invite Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="text-lg md:text-xl text-[#fcb750] mb-3 font-serif "
          
        >
          Invite you to join us in the celebration of our love
        </motion.p>

        {/* Date + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
          className="flex flex-col items-center gap-2 mt-4"
        >
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