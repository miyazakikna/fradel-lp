'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
    <section className="relative w-full h-[856px]">
      <div className="relative w-full h-full bg-[url(/chatgpt-image-2025-6-17--10-52-08-1.png)] bg-cover bg-center flex flex-col items-center justify-center">
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 max-w-[444px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-bold text-white text-[40px] text-center leading-[60px] font-['Noto_Sans',Helvetica] tracking-[0]"
            variants={fadeInUp}
          >
            ホテルのような香りを
            <br />
            暮らしのなかに
          </motion.h1>

          <motion.h2 
            className="font-bold text-white text-[32px] leading-[48px] font-['Noto_Sans',Helvetica] text-center tracking-[0]"
            variants={fadeInUp}
          >
            Fradel
          </motion.h2>

          <motion.p 
            className="font-bold text-white text-2xl text-center leading-9 font-['Noto_Sans',Helvetica] tracking-[0]"
            variants={fadeInUp}
          >
            上質な香りを毎月お届け
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button 
              className="mt-4 bg-black text-white rounded-[50px] font-bold text-sm font-['Noto_Sans',Helvetica] px-10 py-6 h-[42px] hover:bg-black/90 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              今すぐ始める
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};