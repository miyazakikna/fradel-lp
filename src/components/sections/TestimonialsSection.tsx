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
    <section className="w-full max-w-[1172px] mx-auto my-8">
      <motion.div 
        className="flex flex-col items-center gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-bold text-[28px] text-center font-['Noto_Sans',Helvetica]">
          お客様の声
        </h2>
        <Separator className="w-10 h-1 bg-black" />
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-[13px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={cardVariants}>
            <Card
              className="bg-neutral-100 rounded-[10px] h-[249px] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-7 relative">
                <div className="w-[35px] h-[45px] mb-6">
                  <img
                    className="w-[35px] h-[34px] mt-1.5"
                    alt="Group"
                    src={testimonial.imageSrc}
                  />
                </div>

                <div className="font-bold text-black text-xl font-['Noto_Sans',Helvetica] mb-3">
                  {testimonial.rating}
                </div>

                <div className="w-full mb-6">
                  <p className="font-normal text-black text-xs leading-normal font-['Noto_Sans',Helvetica]">
                    {testimonial.text}
                  </p>
                </div>

                <div className="w-28 h-4">
                  <p className="font-normal text-black text-xs font-['Noto_Sans',Helvetica]">
                    {testimonial.person}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};