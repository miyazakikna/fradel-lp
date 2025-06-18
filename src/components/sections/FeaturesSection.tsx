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
        "季節やトレンドに合わせて仕立てた、FRADELオリジナルの香り。市販にはない特別感と深みをお楽しみいただけます。",
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
    <section className="w-full max-w-1440 mx-auto bg-neutral-50 pb-20 md:pb-24 relative">
      <div className="relative w-full aspect-[960/105] overflow-hidden">
        <div
          className="absolute inset-0 bg-white"
          style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
        ></div>
      </div>

      <motion.div
        className="w-full mx-auto mt-16 mb-24 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-gray-600">
          <span className="text-3xl md:text-4xl">FRADEL</span>
          <span className="text-lg md:text-xl">
            は<br />
            あなたにぴったりの香り体験を届けます！
          </span>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-4 pt-4 md:pt-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-gray-600 text-2xl md:text-3xl text-center">
          特徴
        </h2>
        <Separator className="w-10 h-1 bg-gray-600" />
      </motion.div>


      <motion.div
        className="w-full max-w-1120 mx-auto px-4 flex flex-col gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className={`flex flex-col ${feature.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10`}
            variants={feature.imagePosition === "left" ? featureVariants : featureVariantsRight} >
            <motion.div
              className="w-full flex-1"
              transition={{ duration: 0.3 }} >
              <img
                className="w-full h-auto object-cover rounded-lg max-h-[320px]"
                alt={feature.title}
                src={feature.image}
              />
            </motion.div>

            <Card className="w-full flex-1 border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <h4 className="font-bold text-gray-800 text-xl md:text-2xl mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-base">
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