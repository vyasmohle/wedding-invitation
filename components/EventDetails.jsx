// "use client";

// export default function EventDetails() {
//   return (
//     <section className="relative py-20 px-4">

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="/images/hero3.png"
//           alt="event"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#aeaeae2b]/10  backdrop-blur-sm"></div>

//       {/* Card */}
//       <div className="relative z-10 max-w-3xl mx-auto bg-[#f9ca557d]/20 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-10 text-center">

//         {/* Title */}
//         <h2 className="text-2xl md:text-3xl font-serif italic text-[#fcb750] mb-6">
//           Event Details
//         </h2>

//         {/* Divider */}
//         <div className="w-16 h-[1px] text-[#ffddaa] mx-auto mb-8"></div>

//         {/* Timings */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          
//           <div>
//             <p className="text-lg font-medium text-[#fcb750] ">27-02-2026</p>
//             <p className="text-sm  mt-1 text-[#ffddaa]">Mandap Puja and Auspicious Haldi Ceremony</p>
//           </div>

//           <div>
//             <p className="text-lg font-medium text-[#fcb750]">28-04-2026</p>
//             <p className="text-sm  mt-1 text-[#ffddaa]">Departure of the Wedding Procession and the Nuptial Ceremony</p>
//           </div>

//           <div>
//             <p className="text-lg font-medium text-[#fcb750]">29-04-2026</p>
//             <p className="text-sm text-[#ffddaa] mt-1">Guest Reception and Blessing Ceremony</p>
//           </div>

//         </div>

       

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function EventDetails() {

  // 🔥 common animation
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
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
      <div className="relative z-10 max-w-3xl mx-auto bg-[#f9ca557d]/20 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 text-center">

        {/* Title */}
        <motion.h2
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750] mb-6"
        >
          Event Details
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="w-16 h-[1px] bg-[#ffddaa] mx-auto mb-8"
        />

        {/* Timings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            animate={{ y: [0, -6, 0] }}
            className="text-center"
          >
            <p className="text-lg font-medium text-[#fcb750]">
              27-02-2026
            </p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Mandap Puja and Auspicious Haldi Ceremony
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 0.9 }}
            animate={{ y: [0, 6, 0] }}
          >
            <p className="text-lg font-medium text-[#fcb750]">
              28-04-2026
            </p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Departure of the Wedding Procession and the Nuptial Ceremony
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            transition={{ delay: 1.2 }}
            animate={{ y: [0, -6, 0] }}
          >
            <p className="text-lg font-medium text-[#fcb750]">
              29-04-2026
            </p>
            <p className="text-sm mt-1 text-[#ffddaa]">
              Guest Reception and Blessing Ceremony
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}