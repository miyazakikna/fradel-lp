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

const featureVariants = {
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

const featureVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      image: "/image-5.png",
      title: "ホテルのような上質な香り",
      description:
        "季節やトレンドに合わせて仕立てた、Fradelオリジナルの香り。市販にはない特別感と深みをお楽しみいただけます。",
      imagePosition: "left",
    },
    {
      id: 2,
      image: "/image-6.png",
      title: "毎月届く香りの旅",
      description:
        "毎月違う香りが届き、新鮮な空間を演出。好みを選べないからこそ、香りとの偶然の出会いとワクワク感を大切にしています。",
      imagePosition: "right",
    },
    {
      id: 3,
      image: "/image-7.png",
      title: "無理なく続けられる香りの定期便",
      description:
        "続けやすい価格帯とサービス設計。買いに行く手間なく、毎月自宅に届く便利さが魅力です。",
      imagePosition: "left",
    },
    {
      id: 4,
      image: "/nma108-1.png",
      title: "ホテルライクなインテリアにマッチ",
      description:
        "容器やリードスティックは、ホテルライクな空間に自然と馴染むデザインにこだわりました。",
      imagePosition: "right",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto bg-neutral-50 py-12 relative">
      {/* Top polygon decoration */}
      <img className="w-full h-[105px]" alt="Polygon" src="/polygon-1.svg" />

      {/* Main heading */}
      <motion.div 
        className="w-full max-w-[960px] mx-auto mt-16 mb-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl leading-[72px] font-bold font-['Noto_Sans',Helvetica] tracking-normal">
          <span className="text-[#333333]">Fradel </span>
          <span className="text-[#333333] text-[28px] leading-[42px]">
            は<br />
            あなたにぴったりの香り体験を届けます！
          </span>
        </h2>
      </motion.div>

      {/* Features heading with separator */}
      <motion.div 
        className="flex flex-col items-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-bold text-[#666666] text-[32px] text-center font-['Noto_Sans',Helvetica] tracking-normal">
          特徴
        </h3>
        <Separator className="w-10 h-1 bg-[#666666]" />
      </motion.div>

      {/* Features content */}
      <motion.div 
        className="flex flex-col gap-16 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={`flex flex-col ${feature.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}
            variants={feature.imagePosition === "left" ? featureVariants : featureVariantsRight}
          >
            <motion.div 
              className="w-full md:w-[448px] h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                className="w-full h-auto object-cover max-h-[273px] rounded-lg"
                alt={feature.title}
                src={feature.image}
              />
            </motion.div>
            <Card className="w-full md:w-[446px] border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <h4 className="font-bold text-[#333333] text-xl leading-[30px] font-['Noto_Sans',Helvetica] tracking-normal mb-2">
                  {feature.title}
                </h4>
                <p className="font-normal text-[#333333] text-base leading-6 font-['Noto_Sans',Helvetica] tracking-normal">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};