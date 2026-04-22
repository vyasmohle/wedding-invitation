

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Story() {

  const images = [
    "/images/story1.jpeg",
    "/images/story2.jpeg",
    "/images/story3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // 🔥 slow image change
 useEffect(() => {
  let timeout;

  const changeImage = () => {
    timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      changeImage(); // loop again
    }, 5000); // 🔥 8 SECONDS PAUSE
  };

  changeImage();

  return () => clearTimeout(timeout);
}, []);

  // 🔥 text (typewriter)
  const text =
    "We first met on a beautiful summer evening in the heart of the city. What started as a simple coffee date quickly blossomed into a lifetime of shared adventures, laughter and endless love.";

  const words = text.split(" ");

  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10 backdrop-blur-sm" />
      </div>

      <div className="relative z-10">

        {/* 🔥 Heading (top entry) */}
        <motion.h2
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750]"
        >
          Akash & Prerna
        </motion.h2>

        {/* 🔥 Paragraph (word-by-word animation) */}
        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-[#ffddaa] italic leading-relaxed">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: "easeOut"
              }}
              className="inline-block mr-[4px]"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* 🔥 IMAGE SLIDER */}
        <div className="mt-12 flex items-center justify-center">

          <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[420px]">

            <AnimatePresence mode="wait">

              <motion.img
                key={index}
                src={images[index]}
                className="absolute inset-0 w-full h-full object-cover rounded-[120px] shadow-xl"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{
                  duration: 1.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              />

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}