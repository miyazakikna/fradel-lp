'use client'

import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/HeroSection'
import { IssuesSection } from '@/components/sections/IssuesSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { CampaignSection } from '@/components/sections/CampaignSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { FooterSection } from '@/components/sections/FooterSection'

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

export default function Home() {
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
          <CampaignSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <FaqSection />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <FooterSection />
        </motion.div>
      </div>
    </motion.div>
  )
}