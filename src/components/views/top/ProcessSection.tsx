'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/elements/card";
import { Separator } from "@/components/elements/separator";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const ProcessSection = (): JSX.Element => {
  const processSteps = [
    {
      number: 1,
      title: "公式LINEを登録",
      description:
        "まずは公式LINEに登録。ご案内やキャンペーン情報をお届けします。",
    },
    {
      number: 2,
      title: "お申込み",
      description:
        "LINEの案内に従って入力するだけで完了。香りはすべておまかせ。",
    },
    {
      number: 3,
      title: "毎月初旬にお届け",
      description:
        "季節やテーマに合った香りを、毎月初めにご自宅へお届けします。",
    },
    {
      number: 4,
      title: "香りのある生活の始まり",
      description:
        "玄関や寝室に置くだけで、空間が上質に。香りと心地よい毎日を。",
    },
  ];

  return (
    <section className="w-full bg-neutral-50 py-20 md:py-24 relative">
      <motion.div
        className="flex flex-col items-center gap-4 pt-4 md:pt-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-gray-600 text-2xl md:text-3xl text-center">
          ご利用の流れ
        </h2>
        <Separator className="w-10 h-1 bg-gray-600" />
      </motion.div>

      <div className="mx-auto w-full max-w-1440 px-4">
        <div className="relative max-w-500 mx-auto">
          {/* <motion.div
            className="absolute w-px top-0 left-8 bg-black"
            initial={{ height: 0 }}
            whileInView={{ height: "460px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          /> */}
          {/* <motion.div
            className="absolute top-8 left-8 w-px bg-black z-0 translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: `${processSteps.length * 120}px` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          /> */}
          {/* {index !== processSteps.length - 1 && (
            <div className="absolute top-8 left-8 z-0 h-full w-px bg-black translate-x-1/2" />
          )} */}

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={stepVariants}>
                <div className="flex p-0 relative">
                  <div className="relative w-16 h-16 bg-black rounded-full flex-shrink-0 z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-2xl">
                      {step.number}
                    </div>

                    {index !== processSteps.length - 1 && (
                      <div className="absolute top-full left-1/2 w-px h-[calc(100%+40px)] bg-black -translate-x-1/2" />
                    )}
                  </div>

                  <div className="ml-4">
                    <h3 className="mt-4 font-bold text-black text-xl md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 font-normal text-black text-sm md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};