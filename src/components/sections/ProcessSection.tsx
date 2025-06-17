'use client'

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    <section className="w-full py-14 bg-neutral-50">
      <div className="container mx-auto max-w-[1280px]">
        {/* Section Title */}
        <motion.div 
          className="flex flex-col items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-[28px] text-black text-center font-['Noto_Sans',Helvetica]">
            ご利用の流れ
          </h2>
          <Separator className="w-10 h-1 bg-black" />
        </motion.div>

        {/* Process Timeline */}
        <div className="relative max-w-[604px] mx-auto">
          {/* Vertical Timeline Line */}
          <motion.div 
            className="absolute w-px h-[526px] top-0 left-8 bg-black"
            initial={{ height: 0 }}
            whileInView={{ height: "526px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Process Steps */}
          <motion.div 
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={stepVariants}>
                <Card
                  className="border-none shadow-none bg-transparent"
                >
                  <CardContent className="flex p-0">
                    {/* Step Number Circle */}
                    <motion.div 
                      className="relative w-16 h-16 bg-black rounded-[32px] flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute w-6 h-[54px] top-[5px] left-5 font-['Noto_Sans',Helvetica] font-bold text-white text-[32px] text-center leading-8">
                        {step.number}
                      </div>
                    </motion.div>

                    {/* Step Content */}
                    <div className="ml-4">
                      <h3 className="mt-4 font-bold text-black text-[25px] font-['Noto_Sans',Helvetica]">
                        {step.title}
                      </h3>
                      <p className="mt-[18px] font-normal text-black text-base leading-6 font-['Noto_Sans',Helvetica] max-w-[520px]">
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