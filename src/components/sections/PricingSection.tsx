'use client'

import { CheckIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
  // Pricing features data
  const pricingFeatures = [
    { text: "香りパウチ（1ヶ月分）" },
    { text: "リードスティック（4本）" },
    { text: "ガラス容器（初回のみ）" },
  ];

  return (
    <section className="relative w-full py-16 bg-[#eeeeee]">
      {/* Section Header */}
      <motion.div 
        className="flex flex-col items-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-black text-[28px] text-center leading-normal font-['Noto_Sans',Helvetica]">
          料金
        </h2>
        <div className="w-10 h-1 bg-black" />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          {/* Monthly Price Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="w-full max-w-[502px] shadow-[0px_4px_40px_#00000040] rounded-[10px] bg-white hover:shadow-[0px_8px_60px_#00000050] transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center pt-[53px] pb-[40px]">
                  <h3 className="font-bold text-black text-[25px] leading-normal font-['Noto_Sans',Helvetica] mb-6">
                    月額基本料金
                  </h3>

                  <div className="text-center mb-4">
                    <span className="font-bold text-black text-5xl leading-normal font-['Noto_Sans',Helvetica]">
                      2,000{" "}
                    </span>
                    <span className="font-bold text-black text-2xl leading-normal font-['Noto_Sans',Helvetica]">
                      円
                    </span>
                  </div>

                  <div className="font-bold text-[#666666] text-[11px] leading-normal font-['Noto_Sans',Helvetica] mb-6">
                    (税込 2,200円)
                  </div>

                  <Badge className="bg-neutral-100 text-black rounded-[50px] font-normal px-4 py-1.5 mb-8">
                    <span className="font-bold">初回のみ</span>
                    &nbsp;
                    <span className="font-bold">＋1500円</span>
                  </Badge>

                  <div className="flex flex-col items-start gap-4 w-full max-w-[300px] mb-8">
                    {pricingFeatures.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="w-5 h-5 bg-black rounded-[10px] flex items-center justify-center">
                          <CheckIcon className="w-[11px] h-[9px] text-white" />
                        </div>
                        <span className="font-bold text-[#666666] text-sm leading-normal font-['Noto_Sans',Helvetica]">
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="w-full max-w-[443px] bg-neutral-100 rounded-[10px] p-2.5">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <img
                          className="w-[13px] h-3.5"
                          alt="Shipping icon"
                          src="/group-3.png"
                        />
                        <span className="font-bold text-black text-xs text-center leading-normal font-['Noto_Sans',Helvetica]">
                          配送について
                        </span>
                      </div>
                      <span className="font-normal text-black text-xs text-center leading-normal font-['Noto_Sans',Helvetica]">
                        送料は地域・内容によって300〜600円前後かかります
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Discount Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="w-full max-w-[502px] shadow-[0px_4px_40px_#00000040] rounded-[10px] bg-gradient-to-r from-gray-800 to-black text-white hover:shadow-[0px_8px_60px_#00000050] transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="flex flex-col items-center pt-[26px] pb-[30px]">
                  <Badge className="bg-[#ffffff26] text-white rounded-[50px] font-bold px-6 py-2.5 mb-8">
                    お得な複数お申込み割引
                  </Badge>

                  <div className="text-center mb-6">
                    <span className="font-bold text-white text-[32px] leading-normal font-['Noto_Sans',Helvetica]">
                      2セット以上{" "}
                    </span>
                    <span className="text-2xl">お申込み</span>
                    <span className="text-xl">
                      で
                      <br />
                      1セットあたり{" "}
                    </span>
                    <span className="font-bold text-white text-[32px] leading-normal font-['Noto_Sans',Helvetica]">
                      200円OFF
                    </span>
                  </div>

                  <div className="text-center">
                    <p className="font-normal text-white text-xs leading-normal font-['Noto_Sans',Helvetica] mb-2">
                      ※香りは同じものをお届けします。
                    </p>
                    <p className="font-normal text-white text-xs leading-normal font-['Noto_Sans',Helvetica]">
                      ※異なる住所への配送はできません。
                    </p>
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