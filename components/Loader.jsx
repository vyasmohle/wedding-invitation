"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }) {
  const [open, setOpen] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 20 + 12,
      type: Math.random() > 0.5 ? "❤️" : "✨",
    }));
    setParticles(arr);
  }, []);

  //   const handleClick = () => {
  //     setOpen(true);

  //     const burst = Array.from({ length: 40 }).map((_, i) => ({
  //       id: "b" + i,
  //       left: Math.random() * 100,
  //       delay: Math.random() * 1,
  //       size: Math.random() * 25 + 12,
  //       type: ["❤️", "✨", "🎉"][Math.floor(Math.random() * 3)],
  //     }));

  //     setParticles((prev) => [...prev, ...burst]);
  //   };

  const handleClick = () => {
    // 🎵 PLAY MUSIC
    const audio = document.getElementById("bg-music");

    if (audio) {
      audio.volume = 0;
      audio.play();

      // 🔊 smooth fade in
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 0.4) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }

    // 💥 animation open
    setOpen(true);

    // 🎉 burst particles
    const burst = Array.from({ length: 40 }).map((_, i) => ({
      id: "b" + i,
      left: Math.random() * 100,
      delay: Math.random() * 1,
      size: Math.random() * 25 + 12,
      type: ["❤️", "✨", "🎉"][Math.floor(Math.random() * 3)],
    }));

    setParticles((prev) => [...prev, ...burst]);
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#5A3E14] via-[#7A5A21] to-[#4A3210] flex items-center justify-center z-50 overflow-hidden">
      {/* 💖 Falling Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10vh", opacity: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute pointer-events-none"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
          }}
        >
          {p.type}
        </motion.div>
      ))}

      {/* 🎴 Card Container */}
      <motion.div
        className="relative w-80 h-[440px] perspective"
        animate={{
          rotate: [0, 3, -3, 0],
          y: [0, -15, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* 🔥 TOP HEADING */}
        {!open && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 w-full text-center text-white text-5xl italic tracking-wide"
            style={{
              fontFamily: "'Great Vibes', cursive",
              letterSpacing: "2px",
              minHeight: "3rem",
            }}
          >
            Open Invitation
          </motion.p>
        )}

        {/* FRONT CARD */}
        {!open && (
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl z-20">
            <img src="/images/p1.jpg" className="w-full h-full object-cover" />

            {/* CENTER BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.button
                onClick={handleClick}
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 10px rgba(255,255,255,0.3)",
                    "0 0 25px rgba(255,255,255,0.7)",
                    "0 0 10px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-28 h-28 rounded-full border-2 border-white text-white flex items-center justify-center text-lg font-semibold backdrop-blur-md bg-white/10 hover:bg-white hover:text-black transition"
              >
                Press
              </motion.button>
            </div>
          </div>
        )}

        {/* LEFT FLAP */}
        <motion.div
          animate={open ? { rotateY: -120 } : { rotateY: 0 }}
          transition={{ duration: 2 }}
          className="absolute w-full h-full origin-left rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src="/images/p2.jpg" className="w-full h-full object-cover" />
        </motion.div>

        {/* RIGHT FLAP */}
        <motion.div
          animate={open ? { rotateY: 120 } : { rotateY: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute w-full h-full origin-right rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src="/images/p3.jpg" className="w-full h-full object-cover" />
        </motion.div>

        {/* INNER CARD */}
        {open && (
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 2.2, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setTimeout(() => {
                onComplete();
              }, 300);
            }}
            className="absolute inset-0 rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="/images/story1.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-[#ffddaa] font-serif text-xl italic"
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  letterSpacing: "2px",
                  minHeight: "3rem",
                }}
              >
                Akash & Prerna
              </motion.p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
