'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/elements/card";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Campaign = (): JSX.Element => {
  return (
    <div className="w-full py-12 px-4 bg-black text-white relative">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          className="rounded-full bg-white px-6 py-2.5 mb-8"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-bold text-black text-xs md:text-sm">
            初回限定キャンペーン
          </span>
        </motion.div>

        <motion.h2
          className="font-bold text-2xl md:text-3xl mb-4 mt-8"
          variants={textVariants}
          transition={{ delay: 0.3 }}
        >
          今だけ初回のみ発生する
        </motion.h2>

        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold text-5xl md:text-6xl mb-2"
          variants={textVariants}
          transition={{ delay: 0.4 }}
        >
          1,500円分
        </motion.div>

        <motion.div
          className="h-1 my-4 bg-gradient-to-r from-yellow-400 to-orange-400"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ maxWidth: 300 }}
        />

        <motion.div
          className="font-bold text-4xl md:text-5xl mb-16"
          variants={textVariants}
          transition={{ delay: 0.6 }}
        >
          無料
        </motion.div>

        <motion.a
          href="https://line.me/R/ti/p/あなたのLINE_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white text-sm md:text-base font-bold py-3 px-8 hover:scale-105 transition-transform duration-300"
          variants={textVariants}
          transition={{ delay: 0.8 }}
        >
          今すぐ始める
        </motion.a>

        <motion.div
          className="text-xs mt-6"
          variants={textVariants}
          transition={{ delay: 0.7 }}
        >
          ※ キャンペーンは予告なく終了する場合があります。
        </motion.div>
      </div>
    </div>
  );
};