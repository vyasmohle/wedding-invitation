


// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Invitation() {

//   // 🎯 WEDDING DATE (change if needed)
//   const weddingDate = new Date("2026-04-29T20:00:00");

//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());

//   function getTimeLeft() {
//     const now = new Date();
//     const diff = weddingDate - now;

//     if (diff <= 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }

//     return {
//       days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((diff / (1000 * 60)) % 60),
//       seconds: Math.floor((diff / 1000) % 60),
//     };
//   }

//   // 🔁 Update every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft(getTimeLeft());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative py-20 px-4 overflow-hidden text-center">

//       {/* 🔥 Background */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/hero3.png"
//           className="w-full h-full object-cover blur-sm scale-110"
//         />
//         <div className="absolute inset-0 bg-[#aeaeae2b]/10" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl mx-auto">

//         {/* Divider */}
//         <motion.div
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="flex items-center justify-center mb-8"
//         >
//           <div className="h-[1px] w-16 bg-gray-400"></div>
//           <div className="mx-3 text-gray-500">◇</div>
//           <div className="h-[1px] w-16 bg-gray-400"></div>
//         </motion.div>

//         {/* Top Text */}
//         <motion.p
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1 }}
//           className="text-sm md:text-xl text-[#fcb750] italic"
//         >
//           Together with our families
//         </motion.p>

//         {/* Name 1 */}
//         <motion.h2
//           initial={{ opacity: 0, x: -140 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="mt-6 text-3xl md:text-5xl font-serif text-[#ffddaa] italic"
//         >
//           Akash
//         </motion.h2>

//         {/* & */}
//         <motion.p
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.9, duration: 1 }}
//           className="text-xl md:text-2xl my-2 text-[#fcb750]"
//         >
//           &
//         </motion.p>

//         {/* Name 2 */}
//         <motion.h2
//           initial={{ opacity: 0, x: -140 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.2, duration: 1 }}
//           className="text-3xl md:text-5xl font-serif text-[#ffddaa] italic"
//         >
//           Prerna
//         </motion.h2>

//         {/* Invite Text */}
//         <motion.p
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.5, duration: 1 }}
//           className="mt-6 text-[#fcb750] md:text-xl italic text-sm"
//         >
//           invite you to their wedding
//         </motion.p>

//         {/* Date Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -140 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.8, duration: 1 }}
//           className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
//         >
//           <motion.span
//             animate={{ y: [0, -4, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="tracking-widest text-[#fcb750] md:text-xl text-sm"
//           >
//             WEDNESDAY
//           </motion.span>

//           <motion.span
//             animate={{ scale: [1, 1.05, 1] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="text-5xl md:text-6xl font-serif text-[#ffddaa]"
//           >
//             29
//           </motion.span>

//           <motion.span
//             animate={{ y: [0, 4, 0] }}
//             transition={{ duration: 3, repeat: Infinity }}
//             className="tracking-widest text-[#fcb750] md:text-xl text-sm"
//           >
//             APRIL 2026
//           </motion.span>
//         </motion.div>

//         {/* Venue */}
//         <motion.div
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 2.1, duration: 1 }}
//           className="mt-8 text-sm text-[#fcb750] md:text-xl space-y-2"
//         >
//           <p>8:00pm Tulsi Mangalam</p>
//           <p>Kushalpur Chauk, Raipur (C.G.)</p>
//         </motion.div>

//         {/* ⏳ COUNTDOWN TIMER */}
//         <motion.div
//           initial={{ opacity: 0, x: -120 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 2.4, duration: 1 }}
//           className="mt-10 flex justify-center gap-6 text-[#ffddaa]"
//         >
//           {["Days", "Hours", "Min", "Sec"].map((label, i) => {
//             const value = Object.values(timeLeft)[i];
//             return (
//               <motion.div
//                 key={label}
//                 animate={{ y: [0, -5, 0] }}
//                 transition={{ duration: 2 + i, repeat: Infinity }}
//                 className="text-center"
//               >
//                 <p className="text-2xl md:text-3xl font-bold">{value}</p>
//                 <p className="text-xs text-[#fcb750]">{label}</p>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Bottom Icon */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 2.8 }}
//           className="mt-10 text-gray-400 text-xl"
//         >
//           ♡
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Invitation() {

  // 🔁 animation reset key
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey(prev => prev + 1); // every mount → new key
  }, []);

  // 🎯 WEDDING DATE
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

  return (
    <section
      key={animateKey} // 🔥 MAIN FIX
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

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="h-[1px] w-16 bg-gray-400"></div>
          <div className="mx-3 text-gray-500">◇</div>
          <div className="h-[1px] w-16 bg-gray-400"></div>
        </motion.div>

        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-xl text-[#fcb750] italic"
        >
          Together with our families
        </motion.p>

        {/* Name 1 */}
        <motion.h2
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-3xl md:text-5xl font-serif text-[#ffddaa] italic"
        >
          Akash
        </motion.h2>

        {/* & */}
        <motion.p
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-xl md:text-2xl my-2 text-[#fcb750]"
        >
          &
        </motion.p>

        {/* Name 2 */}
        <motion.h2
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-3xl md:text-5xl font-serif text-[#ffddaa] italic"
        >
          Prerna
        </motion.h2>

        {/* Invite */}
        <motion.p
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-6 text-[#fcb750] md:text-xl italic text-sm"
        >
          invite you to their wedding
        </motion.p>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, x: -140 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="tracking-widest text-[#fcb750] md:text-xl text-sm"
          >
            WEDNESDAY
          </motion.span>

          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-5xl md:text-6xl font-serif text-[#ffddaa]"
          >
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

        {/* Venue */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="mt-8 text-sm text-[#fcb750] md:text-xl space-y-2"
        >
          <p>8:00pm Tulsi Mangalam</p>
          <p>Kushalpur Chauk, Raipur (C.G.)</p>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="mt-10 flex justify-center gap-6 text-[#ffddaa]"
        >
          {["Days", "Hours", "Min", "Sec"].map((label, i) => {
            const value = Object.values(timeLeft)[i];
            return (
              <motion.div
                key={label}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2 + i, repeat: Infinity }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold">{value}</p>
                <p className="text-xs text-[#fcb750]">{label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.8 }}
          className="mt-10 text-gray-400 text-xl"
        >
          ♡
        </motion.div>

      </div>
    </section>
  );
}