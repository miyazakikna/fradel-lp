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

                  <div className="flex flex-col items-start gap-4 w-full max-w-60 mb-8">
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
                          <CheckIcon size={15} strokeWidth={3} className="text-white" />
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
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.4558 3.53388L7.36583 0.0958125C7.13947 -0.0319375 6.86276 -0.0319375 6.63643 0.0958125L0.919318 3.32314C0.686158 3.45475 0.542029 3.70171 0.542084 3.96938L0.544025 10.0291C0.544135 10.2965 0.688099 10.5432 0.920931 10.6748L6.63616 13.904C6.86265 14.032 7.13956 14.032 7.36604 13.904L13.081 10.6749C13.3139 10.5433 13.458 10.2964 13.4579 10.0288L13.4558 3.53388ZM12.347 4.80845V9.81304L9.07924 11.6588L7.44512 12.578V7.57356L9.20054 6.58254V8.36328L9.19728 9.24842L9.20054 9.24656V9.25433L11.2458 8.09927V5.42656L11.9965 5.00273L12.347 4.80845ZM11.7636 3.85807L10.6827 4.46942L7.55841 2.7049L5.9192 1.77499L7.00109 1.16534L10.128 2.93062L11.7636 3.85807ZM6.55637 10.9432L6.55311 12.5795L1.65517 9.81304V4.80482L6.55637 7.57315V10.9432ZM2.23857 3.8541L3.87545 2.9292L7.01462 4.70211L8.64015 5.6242L7.00106 6.54905L3.84783 4.76733L2.23857 3.8541Z" fill="#4B4B4B" />
                        </svg>
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