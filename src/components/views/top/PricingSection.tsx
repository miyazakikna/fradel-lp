'use client'

import { CheckIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/elements/badge";
import { Card, CardContent } from "@/components/elements/card";
import { Separator } from "@radix-ui/react-separator";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const PricingSection = (): JSX.Element => {
  const pricingFeatures = [
    { text: "香りパウチ（1ヶ月分）" },
    { text: "リードスティック（4本）" },
    { text: "ガラス容器（初回のみ）" },
  ];

  return (
    <section className="w-full max-w-1440 mx-auto bg-neutral-200 py-20 md:py-24 relative">
      <motion.div
        className="flex flex-col items-center gap-4 pt-4 md:pt-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-gray-600 text-2xl md:text-3xl text-center">
          料金
        </h2>
        <Separator className="w-10 h-1 bg-gray-600" />
      </motion.div>

      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="w-full max-w-xl mx-auto rounded-xl bg-white shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center px-6 py-12">
                  <h3 className="font-bold text-black text-2xl mb-6">
                    月額基本料金
                  </h3>

                  <div className="text-center mb-4">
                    <span className="font-bold text-black text-5xl">
                      2,000
                    </span>
                    <span className="font-bold text-black text-2xl">
                      円
                    </span>
                  </div>

                  <div className="font-bold text-gray-600 text-xs mb-6">
                    (税込 2,200円)
                  </div>

                  <Badge className="bg-neutral-100 text-black rounded-full font-normal px-4 mb-8">
                    <span className="font-bold">初回のみ</span>&nbsp;
                    <span className="font-bold">＋1500円</span>
                  </Badge>

                  <div className="flex flex-col items-start gap-4 w-full max-w-xs mb-8">
                    {pricingFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center">
                          <CheckIcon className="w-3 h-2.5 text-white" />
                        </div>
                        <span className="font-bold text-gray-600 text-sm">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="w-full bg-neutral-100 rounded-lg p-3">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-2 mb-1">
                        <img
                          className="w-4 h-4"
                          alt="Shipping icon"
                          src="/group-3.png"
                        />
                        <span className="font-bold text-black text-xs text-center">
                          配送について
                        </span>
                      </div>
                      <span className="font-normal text-black text-xs text-center">
                        送料は地域・内容によって300〜600円前後かかります
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            <Card className="w-full max-w-xl mx-auto rounded-xl bg-gradient-to-r from-gray-800 to-black text-white shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center px-6 py-12">
                  <Badge className="bg-white/15 text-white rounded-full font-bold px-6 py-2 mb-8">
                    お得な複数お申込み割引
                  </Badge>

                  <div className="text-center mb-6">
                    <p className="font-bold text-white text-3xl">2セット以上</p>
                    <p className="text-base mt-4">お申込みで</p>
                    <p className="text-base mb-8">1セットあたり</p>
                    <p className="font-bold text-white text-4xl">200円OFF</p>
                  </div>

                  <div className="text-center text-xs text-white space-y-1 mt-4">
                    <p className="font-normal">※香りは同じものをお届けします。</p>
                    <p className="font-normal">※異なる住所への配送はできません。</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};