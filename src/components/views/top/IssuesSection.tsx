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
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const IssuesSection = (): JSX.Element => {
  const issueCards = [
    {
      id: 1,
      title: "気づいたら香りが消え、容器だけ部屋の隅に",
      description: "インテリアの一部のようで、実はもう使っていない",
      imageSrc: "/24024991-3.png",
    },
    {
      id: 2,
      title: "ホテルライクな空間にあと一歩届かない",
      description: "インテリアは整えても、なんだか生活感が残る",
      imageSrc: "/24024991-2.png",
    },
    {
      id: 3,
      title: "色々な香りを体験してみたい",
      description: "出先で偶然見つけたような巡り合いの香りを楽しみたい",
      imageSrc: "/24024991-1.png",
    },
  ];

  return (
    <section className="w-full max-w-960 mx-auto py-20 md:py-24">
      <motion.div
        className="flex flex-col items-center gap-4 pt-4 md:pt-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-gray-600 text-2xl md:text-3xl text-center">
          こんなお悩みありませんか？
        </h2>
        <Separator className="w-10 h-1 bg-gray-600" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {issueCards.map((card) => (
          <motion.div key={card.id} variants={cardVariants}>
            <Card className="w-full max-w-350 mx-auto h-auto bg-white rounded-2xl border hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <img
                  className="w-[34px] h-[79px]"
                  alt="Element"
                  src={card.imageSrc}
                />
                <div className="text-gray-800 font-bold text-xl">
                  {card.title}
                </div>
              </div>
              <p className="text-gray-600 text-base">
                {card.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};