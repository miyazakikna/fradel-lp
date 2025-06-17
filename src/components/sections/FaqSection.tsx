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
  // FAQ data for mapping
  const faqItems = [
    {
      id: "item-1",
      question: "香りはどのくらい持続しますか？",
      answer:
        "回答が入ります。回答が入ります。回答が入ります。回答が入ります。",
    },
    {
      id: "item-2",
      question: "香りを指定できますか？",
      answer: "",
    },
    {
      id: "item-3",
      question: "過去の香りが気になります。",
      answer: "",
    },
    {
      id: "item-4",
      question: "香りの種類が知りたいです。",
      answer: "",
    },
    {
      id: "item-5",
      question: "最低契約期限はありますか？",
      answer: "",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#eeeeee]">
      <div className="max-w-[1280px] mx-auto px-10">
        <motion.div 
          className="flex flex-col items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-black text-[28px] text-center leading-normal font-['Noto_Sans',Helvetica]">
            よくあるご質問
          </h2>
          <div className="w-10 h-1 bg-black"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-[964px] mx-auto"
            defaultValue="item-1"
          >
            {faqItems.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AccordionItem
                  value={item.id}
                  className="mb-4 bg-white rounded border border-solid border-[#eeeeee] shadow-[0px_4px_0px_#e6ebef] overflow-hidden hover:shadow-[0px_6px_0px_#e6ebef] transition-shadow duration-200"
                >
                  <AccordionTrigger className="py-6 px-10 hover:no-underline">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center mr-6">
                        <span className="font-bold text-white text-2xl font-['Noto_Sans',Helvetica]">
                          Q
                        </span>
                      </div>
                      <span className="font-bold text-black text-xl leading-[30px] font-['Noto_Sans',Helvetica]">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-10 pb-6 pt-2 border-t border-[#dddddd]">
                      <p className="font-['Noto_Sans',Helvetica] font-normal text-black text-base leading-[28.8px]">
                        {item.answer || "回答が入ります。"}
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