"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">

      <img
        src="/images/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        alt="MJ"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="container relative z-10">

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

          className="gold uppercase tracking-[8px] mb-6"

        >
          Elite Fitness Coach
        </motion.p>

        <motion.h1

          initial={{ y: 100 }}
          animate={{ y: 0 }}

          transition={{ duration: 1 }}

          className="text-7xl lg:text-[120px] font-black leading-none"

        >
          MOHAMMAD
          <br />
          <span className="gold">
            JALALI
          </span>
        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{ delay: .5 }}

          className="subtitle mt-10 max-w-xl"

        >
          Engineer Your Body.
          <br />
          Master Your Mind.
          <br />
          Dominate Your Life.
        </motion.p>

        <div className="flex gap-5 mt-14">

          <a
            href="#contact"
            className="btn"
          >
            START NOW
          </a>

          <a

            href="https://instagram.com/mj.fit.ir"
            target="_blank"

            className="px-10 py-5 border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black duration-300"

          >
            INSTAGRAM
          </a>

        </div>

      </div>

    </section>
  );
}
