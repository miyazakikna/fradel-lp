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
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      rating: "★★★★★",
      text: "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
      person: "会社員（30代男性）",
      imageSrc: "/group.png",
    },
    {
      id: 2,
      rating: "★★★★★",
      text: "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
      person: "会社員（30代男性）",
      imageSrc: "/group-1.png",
    },
    {
      id: 3,
      rating: "★★★★★",
      text: "説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。説明が入ります。",
      person: "会社員（30代男性）",
      imageSrc: "/group-2.png",
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
              className="bg-neutral-100 rounded-xl h-72 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-7 relative flex flex-col h-full">
                <div className="w-[35px] h-[45px] mb-2">
                  <img
                    className="w-[35px] h-[34px] mt-1"
                    alt="Group"
                    src={testimonial.imageSrc}
                  />
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