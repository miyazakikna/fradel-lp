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
  // Data for the issue cards
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
    <section className="w-full max-w-[1129px] mx-auto my-8">
      <motion.div 
        className="flex flex-col items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-[#666666] text-[32px] text-center leading-normal font-['Noto_Sans',Helvetica] tracking-[0]">
          こんなお悩みありませんか？
        </h2>
        <Separator className="w-10 h-1 bg-[#666666]" />
      </motion.div>

      <motion.div 
        className="flex flex-wrap justify-between gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {issueCards.map((card) => (
          <motion.div key={card.id} variants={cardVariants}>
            <Card
              className="w-[350px] h-[220px] bg-white rounded-[20px] border border-solid border-[#d0d0d0] relative hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-0">
                <img
                  className="absolute w-[34px] h-[79px] top-[35px] left-[25px]"
                  alt="Element"
                  src={card.imageSrc}
                />
                <div className="absolute w-[227px] h-[78px] top-[35px] left-[95px] font-bold text-[#333333] text-xl leading-[30px] font-['Noto_Sans',Helvetica] tracking-[0]">
                  {card.title}
                </div>
                <div className="absolute w-[293px] top-[140px] left-6 font-normal text-[#666666] text-base leading-6 font-['Noto_Sans',Helvetica] tracking-[0]">
                  {card.description}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};