// "use client";

// const people = [
//   {
//     name: "Sarah Jenkins",
//     role: "Maid of Honor",
//     img: "/images/p1.jpg",
//   },
//   {
//     name: "Mike Wallace",
//     role: "Best Man",
//     img: "/images/p2.jpg",
//   },
//   {
//     name: "Elena Rodriguez",
//     role: "Bridesmaid",
//     img: "/images/p3.jpg",
//   },
//   {
//     name: "Marcus Johnson",
//     role: "Groomsman",
//     img: "/images/p4.jpg",
//   },
// ];

// export default function People() {
//   return (
//     <section className="bg-[#e9e4dc] py-20 px-4 text-center">

//       {/* Divider */}
//       <div className="flex items-center justify-center mb-6">
//         <div className="h-[1px] w-12 bg-gray-400"></div>
//         <div className="mx-3 text-gray-500">◇</div>
//         <div className="h-[1px] w-12 bg-gray-400"></div>
//       </div>

//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-serif italic text-green-900">
//         Friends & Family
//       </h2>

//       {/* Description */}
//       <p className="mt-4 max-w-xl mx-auto text-sm text-gray-600 italic">
//         We are so lucky to have such amazing people by our side to celebrate
//         this joyous moment.
//       </p>

//       {/* Grid */}
//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

//         {people.map((person, index) => (
//           <div key={index} className="flex flex-col items-center">

//             {/* Avatar */}
//             <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-md">
//               <img
//                 src={person.img}
//                 alt={person.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="mt-4 text-lg font-medium text-green-900">
//               {person.name}
//             </h3>

//             {/* Role */}
//             <p className="text-sm text-gray-500 italic">
//               {person.role}
//             </p>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "Mr. Rajesh Sonkar",
    role: "Groom’s Father",
    img: "/images/ppl.png",
  },
  {
    name: "Mrs. Bindu Sonkar",
    role: "Groom’s Mother",
    img: "/images/ppl.png",
  },
  {
    name: "Mr. Vijendra Purabiya",
    role: "Bride’s Father",
    img: "/images/ppl.png",
  },
  {
    name: "Mrs. .....",
    role: "Bride’s Mother",
    img: "/images/ppl.png",
  },
  
]
export default function People() {
  return (
    <section className="relative py-20 px-4 text-center overflow-hidden">

      {/* 🔥 Background + Blur */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png" // 👉 apni image
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10  backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-6"
        >
          <div className="h-[1px] w-12 text-[#fcb750]"></div>
          <div className="mx-3 text-[#fcb750]">◇</div>
          <div className="h-[1px] w-12 text-[#fcb750]"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750]"
        >
          Our Beloved Families
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 max-w-xl mx-auto text-sm text-[#ffddaa] italic"
        >
          We are so lucky to have such amazing people by our side to celebrate
          this joyous moment.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

          {people.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >

              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-medium text-[#fcb750] group-hover:scale-105 transition">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-[#ffddaa] italic">
                {person.role}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}