'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

export const CampaignSection = (): JSX.Element => {
  return (
    <div className="w-full py-12">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Card className="w-full max-w-[1280px] mx-auto shadow-[0px_4px_40px_#00000040] bg-black text-white relative hover:shadow-[0px_8px_60px_#00000050] transition-shadow duration-300">
          <CardContent className="flex flex-col items-center justify-center py-16 px-4">
            <motion.div 
              className="rounded-[50px] bg-white px-6 py-2.5 mb-10"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-bold text-black text-[10px] font-['Noto_Sans',Helvetica]">
                初回限定キャンペーン
              </span>
            </motion.div>

            <motion.h2 
              className="font-bold text-[32px] text-center mb-6 font-['Noto_Sans',Helvetica]"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              今だけ初回のみ発生する
            </motion.h2>

            <motion.div 
              className="[background:linear-gradient(90deg,rgba(255,215,0,1)_0%,rgba(255,165,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-bold text-[64px] text-center font-['Noto_Sans',Helvetica]"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              1,500円分
            </motion.div>

            <motion.div 
              className="w-[300px] h-1 my-4 [background:linear-gradient(90deg,rgba(255,215,0,1)_0%,rgba(255,165,0,1)_100%)]"
              initial={{ width: 0 }}
              whileInView={{ width: "300px" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.div 
              className="font-bold text-5xl text-center mb-16 font-['Noto_Sans',Helvetica]"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              無料
            </motion.div>

            <motion.div 
              className="text-xs font-normal font-['Noto_Sans',Helvetica]"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              ※ キャンペーンは予告なく終了する場合があります。
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};