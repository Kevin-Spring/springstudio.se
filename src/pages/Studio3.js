import React from 'react'
import { motion } from 'framer-motion'
import '../styles/_studio3.scss'

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.8 },
  },
}

const motionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const Studio3 = ({ transtition }) => {
  return (
    <motion.section exit={{ oapcity: 0 }} transtition={transtition}>
      <motion.div initial='initial' animate='animate' variants={motionContent}>
        <motion.h1 variants={motionTitle}>Studio 3</motion.h1>
      </motion.div>
    </motion.section>
  )
}
