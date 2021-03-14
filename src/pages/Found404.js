import React from 'react'
import Lottie from 'lottie-react'
import notFound from '../animations/41393-monkey-see.json'
import '../styles/_found404.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PageTransition } from '../animations/PageTransition'

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.8 },
  },
}

const motionTitle = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const motionParagraph = {
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

export const Found404 = ({ transition }) => {
  return (
    <motion.main exit={{ opacity: 0 }}>
      <PageTransition />
      <motion.section
        className='not-found-container'
        variants={motionContent}
        transition={transition}
      >
        <motion.h1 className='not-found-header' variants={motionTitle}>
          404 Page not found
        </motion.h1>
        <Lottie animationData={notFound} className='not-found-animation' />
        <motion.p className='not-found-link-home' variants={motionParagraph}>
          <Link to='/'> Back to Spring Studio</Link>
        </motion.p>
      </motion.section>
    </motion.main>
  )
}
