'use client'

import { motion } from 'framer-motion'
import { Terms } from '@/components/views/terms/Terms'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function TermsPage() {
  return (
    <motion.div
      className="bg-white flex flex-row justify-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white w-full max-w-1440 overflow-hidden">
        <motion.div variants={sectionVariants}>
          <Header
            showBackButton={true}
            backButtonText="ホームに戻る"
            backButtonHref="/"
          />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Terms />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  )
}