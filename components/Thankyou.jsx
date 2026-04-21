// "use client";

// export default function ThankYou() {
//   return (
//     <section className="bg-[#e9e4dc] py-20 px-4 flex justify-center">

//       {/* Card */}
//       <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 md:p-12 text-center">

//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-serif italic text-green-900">
//           Thank You
//         </h2>

//         {/* Divider */}
//         <div className="w-16 h-[1px] bg-gray-400 mx-auto my-6"></div>

//         {/* Message */}
//         <p className="text-sm md:text-base text-gray-600 italic leading-relaxed">
//           Thank you for being a part of our special day. Your presence means the
//           world to us and we are grateful to celebrate this beautiful journey
//           together.
//         </p>

//         {/* Closing */}
//         <p className="mt-6 text-green-900 font-serif italic text-lg">
//           With Love,
//         </p>

//         <p className="text-gray-700 mt-1">
//           Michelle & Thomas
//         </p>

//       </div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="relative py-20 px-4 flex justify-center overflow-hidden">

      {/* 🔥 Background + Blur */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png" // 👉 apni bg image
          className="w-full h-full object-cover blur-md scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10  backdrop-blur-sm" /> 
      </div>

      {/* 🔥 Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl w-full bg-[#f9ca557d]/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 text-center "
      >

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750]"
        >
          Thank You
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-16 h-[1px] bg-[#fcb750] mx-auto my-6"
        />

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-sm md:text-base text-[#ffddaa] italic leading-relaxed"
        >
          Thank you for being a part of our special day. Your presence means the
          world to us and we are grateful to celebrate this beautiful journey
          together.
        </motion.p>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[#fcb750] font-serif italic text-lg"
        >
          With Love,
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="text-[#ffddaa] mt-1"
        >
          Akash & Prerna
        </motion.p>

      </motion.div>
    </section>
  );
}