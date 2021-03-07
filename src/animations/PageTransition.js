import React from 'react'
import { motion } from 'framer-motion'
import {
  BsArrowUp,
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
} from 'react-icons/bs'
import '../styles/_pageTransition.scss'

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: 'afterChildren',
    },
  },
}

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const tip = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 0.7,
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

export const PageTransition = () => {
  return (
    <>
      <motion.div
        className='page-transition-container'
        initial='initial'
        animate='animate'
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
        onAnimationComplete={() =>
          document.body.classList.remove('overflow-hidden')
        }
      >
        <motion.svg variants={textContainer} className='page-transition-svg'>
          <pattern
            id='pattern'
            width='100%'
            height='100%'
            patternUnits='userSpaceOnUse'
          >
            <rect />

            <motion.rect
              variants={text}
              className='page-transition-text-rect'
            />
          </pattern>
          <text
            className='page-transition-text'
            textAnchor='middle'
            x='50%'
            y='50%'
          >
            Spring Studio
          </text>
        </motion.svg>
        <motion.div variants={tip} className='page-transition-arrow-keys'>
          <div className='page-transition-arrow-keys-title'>Tip:</div>
          <div className='page-transition-arrow-keys-row'>
            <BsArrowUp className='page-transition-arrow-key-up' />
          </div>
          <div className='page-transition-arrow-keys-row'>
            <BsArrowLeft className='page-transition-arrow-key' />
            <BsArrowDown className='page-transition-arrow-key' />
            <BsArrowRight className='page-transition-arrow-key' />
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
