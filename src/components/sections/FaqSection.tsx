'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const FaqSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "香りはどのくらい持続しますか？",
      answer: "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "item-2",
      question: "香りを指定できますか？",
      answer: "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "item-3",
      question: "過去の香りが気になります。",
      answer: "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "item-4",
      question: "香りの種類が知りたいです。",
      answer: "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "item-5",
      question: "最低契約期限はありますか？",
      answer: "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
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
          よくあるご質問
        </h2>
        <div className="w-10 h-1 bg-gray-600" />
      </motion.div>

      <div className="mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full max-w-[964px] mx-auto"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {faqItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem
                  value={item.id}
                  className="mb-4 bg-white rounded border border-solid border-gray-200"
                >
                  <AccordionTrigger className="py-6 px-6 hover:no-underline">
                    <div className="text-left flex items-center">
                      <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center mr-4">
                        <span className="text-white text-xl">
                          Q
                        </span>
                      </div>
                      <span className="font-bold text-black text-base md:text-lg">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 pt-2 border-t border-gray-300">
                      <p className="text-black text-sm">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};