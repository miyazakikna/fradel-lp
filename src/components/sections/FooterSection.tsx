'use client'

import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

// Define footer links data for better maintainability
const footerLinks = [
  {
    id: 1,
    text: "利用規約",
    position: { top: "183px", left: "344px" },
  },
  {
    id: 2,
    text: "プライバシーポリシー",
    position: { top: "183px", left: "674px" },
  },
  {
    id: 3,
    text: "特定商取引法に基づく表記",
    position: { top: "239px", left: "344px" },
  },
  {
    id: 4,
    text: "会社概要",
    position: { top: "239px", left: "674px" },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const linkVariants = {
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

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-transparent">
      <div className="relative w-full h-[365px] bg-black">
        <motion.div 
          className="flex flex-col items-center justify-between h-full py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.h2 
            className="text-2xl font-bold text-white font-['Noto_Sans',Helvetica] leading-9"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fradel
          </motion.h2>

          {/* Links container */}
          <motion.div 
            className="flex flex-wrap justify-center w-full gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {footerLinks.map((link) => (
              <motion.div
                key={link.id}
                className="flex items-center justify-between w-[306px] px-0 py-4 cursor-pointer hover:bg-white/10 rounded-lg transition-colors duration-200"
                style={{
                  position: "absolute",
                  top: link.position.top,
                  left: link.position.left,
                }}
                variants={linkVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-fit mt-[-1.00px] font-normal text-white text-base leading-6 whitespace-nowrap font-['Noto_Sans',Helvetica] tracking-[0]">
                  {link.text}
                </div>
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 font-['Noto_Sans',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            © 2025 Fradel. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};