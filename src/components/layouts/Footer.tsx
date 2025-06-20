'use client';

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { id: 1, text: "お問い合わせ", href: '/contact' },
  { id: 2, text: "運営会社", href: 'https://amelio-tech.com' },
  // { id: 4, text: "利用規約", href: '/terms' },
  { id: 3, text: "プライバシーポリシー", href: '/privacy-policy' },
  { id: 4, text: "特定商取引法に基づく表記", href: '/tokushoho' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-black py-10 px-6 md:px-10 text-white">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-xl font-bold text-white">
          <p>FRADEL</p>
          <p className={"text-xs font-normal"}>上質な香りを毎月お届け</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-auto">
          {footerLinks.map((link) => (
            <motion.div key={link.id} variants={linkVariants}>
              <Link
                href={link.href}
                className="text-sm flex flex-row items-center justify-between"
              >
                {link.text}
                <ChevronRight className="w-4 h-4 text-white ml-8" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 text-center text-xs text-white">
        © FRADEL. All rights reserved.
      </div>
    </footer>
  );
};