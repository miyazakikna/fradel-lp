'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/views/top/HeroSection'
import { IssuesSection } from '@/components/views/top/IssuesSection'
import { FeaturesSection } from '@/components/views/top/FeaturesSection'
import { PricingSection } from '@/components/views/top/PricingSection'
import { TestimonialsSection } from '@/components/views/top/TestimonialsSection'
import { ProcessSection } from '@/components/views/top/ProcessSection'
import { Campaign } from '@/components/layouts/Campaign'
import { FaqSection } from '@/components/views/top/FaqSection'
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

export default function TopPage() {
  return (
    <motion.div
      className="bg-white flex flex-row justify-center w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white w-full max-w-1440 overflow-hidden">
        <motion.div variants={sectionVariants}>
          <HeroSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <IssuesSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <FeaturesSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <PricingSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <TestimonialsSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <ProcessSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Campaign />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <FaqSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  )
}