

"use client";

import { motion } from "framer-motion";

const people = [
  {
    name: "Mr. Rajesh Sonkar",
    role: "Groom’s Father",
    img: "/images/papa.png",
  },
  {
    name: "Mrs. Bindu Sonkar",
    role: "Groom’s Mother",
    img: "/images/maa.png",
  },
  {
    name: "Mr. Suresh Sonkar",
    role: "Groom’s Elder Uncle",
    img: "/images/suresh.jpeg",
  },
  {
    name: "Mrs. Dharna Sonkar",
    role: "Groom’s Elder Aunt",
    img: "/images/dharna.jpeg",
  },

  {
    name: "Mr. Manoj Sonkar",
    role: "Groom’s Uncle",
    img: "/images/manoj.jpeg",
  },
  {
    name: "Mrs. Bharti Sonkar",
    role: "Groom’s Aunt",
    img: "/images/bharti1.png",
  },
  
];

export default function People() {

  // 🔥 STAGGER SYSTEM
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
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
    <section className="relative py-20 px-4 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero3.png"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-[#aeaeae2b]/10 backdrop-blur-sm" />
      </div>

      {/* CONTENT WRAPPER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }} // 🔥 repeat animation
        className="relative z-10"
      >

        {/* Divider */}
        <motion.div
          variants={item}
          className="flex items-center justify-center mb-6"
        >
          <div className="h-[1px] w-12 bg-[#fcb750]"></div>
          <div className="mx-3 text-[#fcb750]">◇</div>
          <div className="h-[1px] w-12 bg-[#fcb750]"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-2xl md:text-3xl font-serif italic text-[#fcb750]"
        >
          Our Beloved Families
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-4 max-w-xl mx-auto text-sm text-[#ffddaa] italic"
        >
          We are so lucky to have such amazing people by our side to celebrate
          this joyous moment.
        </motion.p>

        {/* Grid */}

        
       <div className="mt-12 flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
  {people.map((person, index) => (
    <motion.div
      key={index}
      variants={item}
      /* Yahan width set karni hogi taki ek row mein 4 items ka structure bane */
      className="flex flex-col items-center group w-full sm:w-[calc(50%-2.5rem)] md:w-[calc(25%-2.5rem)]"
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



      </motion.div>
    </section>
  );
}