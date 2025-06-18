'use client'

import React from "react";
import { motion } from "framer-motion";
import { MotionButton } from "@/components/elements/button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-screen">
      <div className="relative w-full h-full bg-[url(/chatgpt-image-2025-6-17--10-52-08-1.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-white font-bold text-3xl md:text-4xl"
            variants={fadeInUp}
          >
            ホテルのような香りを
            <br />
            暮らしのなかに
          </motion.h1>

          <motion.h2
            className="text-white mt-4 font-semibold text-xl md:text-2xl"
            variants={fadeInUp}
          >
            FRADEL \ フラデル
          </motion.h2>

          <motion.p
            className="text-white font-medium text-sm md:text-lg"
            variants={fadeInUp}
          >
            上質な香りを毎月お届け
          </motion.p>

          <motion.div variants={fadeInUp}>
            <MotionButton
              className="mt-4 bg-black text-white rounded-full font-semibold text-sm px-6 py-3 hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              今すぐ始める
            </MotionButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};