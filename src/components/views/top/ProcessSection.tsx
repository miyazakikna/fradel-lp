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
  // Process steps data
  const processSteps = [
    {
      number: 1,
      title: "公式LINEを登録",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      number: 2,
      title: "お申込み",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      number: 3,
      title: "毎月初旬にお届け",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
    },
    {
      number: 4,
      title: "香りのある生活の始まり",
      description:
        "説明文が入ります。説明文が入ります。説明文が入ります。説明文が入ります。",
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
          <motion.div
            className="absolute w-px top-0 left-8 bg-black"
            initial={{ height: 0 }}
            whileInView={{ height: "500px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={stepVariants}>
                <Card className="border-none shadow-none bg-transparent">
                  <CardContent className="flex p-0">
                    <motion.div
                      className="relative w-16 h-16 bg-black rounded-full flex-shrink-0"
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-2xl">
                        {step.number}
                      </div>
                    </motion.div>

                    <div className="ml-4">
                      <h3 className="mt-4 font-bold text-black text-xl md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 font-normal text-black text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};