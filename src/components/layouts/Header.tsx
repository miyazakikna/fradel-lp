'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonHref?: string;
}

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Header = ({
  showBackButton = false,
  backButtonText = "ホームに戻る",
  backButtonHref = "/"
}: HeaderProps): JSX.Element => {
  return (
    <motion.header
      className="bg-white border-b border-gray-200 py-4 px-4"
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {showBackButton && (
          <Link
            href={backButtonHref}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">{backButtonText}</span>
          </Link>
        )}

        <div className="text-xl font-bold text-gray-800">
          FRADEL
        </div>

        {!showBackButton && <div />}
      </div>
    </motion.header>
  );
};