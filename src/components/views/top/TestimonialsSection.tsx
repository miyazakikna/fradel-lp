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

export const TestimonialsSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      rating: "毎月届くたびにワクワクしています",
      text: "リードディフューザーは種類が多くて迷っていましたが、毎月違う香りが届くこのサービスに出会ってから選ぶ悩みがなくなりました。香りも上品で、部屋に置くだけで気分が上がります。",
      person: "会社員（30代男性）",
    },
    {
      id: 2,
      rating: "香りだけでなく、インテリアとしても楽しめる",
      text: "今までのディフューザーは部屋の片隅に追いやられていましたが、これは見た目もおしゃれで、しっかりインテリアに馴染みます。香りの変化も毎月の楽しみです。",
      person: "主婦（60代女性）",
    },
    {
      id: 3,
      rating: "お客様に褒められる空間がつくれる",
      text: "トイレに置いているのですが、来店されたお客様に「いつも良い香りですね」とよく言われます。香りのおかげで、清潔感のある印象を与えられている気がします。",
      person: "ジム経営者",
    },
  ];

  return (
    <section className="w-full max-w-1440 mx-auto bg-white py-20 md:py-24 relative">
      <motion.div
        className="flex flex-col items-center gap-4 pt-4 md:pt-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-gray-600 text-2xl md:text-3xl text-center">
          お客様の声
        </h2>
        <Separator className="w-10 h-1 bg-gray-600" />
      </motion.div>

      <motion.div
        className="px-6 grid grid-cols-1 md:grid-cols-3 gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={cardVariants}>
            <Card
              className="bg-neutral-100 rounded-xl h-72 shadow-lg transition-all duration-300"
            >
              <CardContent className="p-7 relative flex flex-col h-full">
                <div className="mb-2">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.93262 1.09131H10.1562C12.4947 1.09138 14.5898 3.58295 14.5898 6.93311V16.354C14.5898 18.682 14.1509 20.9722 13.3145 23.0269L9.12695 33.313C8.95536 33.7352 8.65886 33.9075 8.42578 33.9077H4.95703C4.77521 33.9077 4.55627 33.8057 4.38379 33.5542L4.31348 33.438C4.13361 33.1003 4.08891 32.6517 4.20898 32.2524V32.2515L7.15527 22.436C7.34834 21.7952 7.28466 21.0728 6.97559 20.4917V20.4907L6.84766 20.2808C6.52363 19.8103 6.02577 19.4917 5.44922 19.4917H4.93262C2.59429 19.4915 0.5 16.9995 0.5 13.6489V6.93408C0.5 3.58354 2.5943 1.09154 4.93262 1.09131Z" fill="white" stroke="black" />
                    <path d="M24.8437 1.09131H30.0673C32.4055 1.09138 34.4997 3.58277 34.4999 6.93311V16.354C34.4999 18.6821 34.0609 20.9722 33.2245 23.0269L29.038 33.312C28.8651 33.7354 28.568 33.9087 28.3349 33.9087H24.8681C24.659 33.9087 24.4031 33.7745 24.2245 33.439L24.2235 33.437C24.0433 33.0997 23.999 32.6516 24.119 32.2524V32.2515L27.0663 22.436V22.4351C27.2576 21.7956 27.1958 21.073 26.8847 20.4907C26.5737 19.9069 26.0171 19.4917 25.3593 19.4917H24.8437C22.5054 19.4916 20.411 16.9995 20.411 13.6489V6.93408C20.411 3.58346 22.5053 1.09145 24.8437 1.09131Z" fill="white" stroke="black" />
                  </svg>

                </div>

                <p className="font-bold text-black text-xl mb-3">
                  {testimonial.rating}
                </p>

                <p className="font-normal text-black text-xs mb-6">
                  {testimonial.text}
                </p>

                <p className="font-normal text-black text-xs mt-auto">
                  {testimonial.person}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};