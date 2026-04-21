// "use client";

// export default function Story() {
//   return (
//     <section className="bg-[#e9e4dc] py-20 px-4 text-center">

        

//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-serif italic text-green-900">
//         He & She
//       </h2>

//       {/* Story Text */}
//       <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-600 italic leading-relaxed">
//         We first met on a beautiful summer evening in the heart of the city.
//         What started as a simple coffee date quickly blossomed into a lifetime
//         of shared adventures, laughter, and endless love.
//       </p>

//       {/* Images */}
//       <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">

//         {/* Image 1 */}
//         <div className="w-40 h-56 md:w-48 md:h-64 overflow-hidden rounded-full md:rounded-[100px] shadow-md">
//           <img
//             src="/images/story1.jpg"
//             alt="story1"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Image 2 (Center Highlight) */}
//         <div className="w-48 h-64 md:w-56 md:h-72 overflow-hidden rounded-full md:rounded-[120px] shadow-lg">
//           <img
//             src="/images/story2.jpg"
//             alt="story2"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Image 3 */}
//         <div className="w-40 h-56 md:w-48 md:h-64 overflow-hidden rounded-full md:rounded-[100px] shadow-md">
//           <img
//             src="/images/story3.jpg"
//             alt="story3"
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Story() {
  const images = [
    "/images/story1.jpeg",
    "/images/story2.jpeg",
    "/images/story3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">

      {/* 🔥 Background + Blur */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png" // 👉 apni bg image
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10  backdrop-blur-sm " />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif italict text-[#fcb750]"
        >
          Akash & Prerna
        </motion.h2>

        {/* Story Text */}
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-[#ffddaa] italic leading-relaxed"
        >
          We first met on a beautiful summer evening in the heart of the city.
          What started as a simple coffee date quickly blossomed into a lifetime
          of shared adventures, laughter and endless love.
        </motion.p>

        {/* 🔥 AUTO SLIDER IMAGES */}
        <div className="mt-12 flex items-center justify-center">

          <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[420px]">

            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="story"
                className="absolute inset-0 w-full h-full object-cover rounded-[120px] shadow-xl"
                
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.8 }}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}