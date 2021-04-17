import React from 'react'
import { BsArrowDown, BsArrowLeft, BsArrowRight, BsArrowUp } from 'react-icons/bs'
import '../styles/css/_staticloading.css'
import { motion } from 'framer-motion'

export const StaticLoading = () => {
  return (
    <>
      <motion.div exit={{ oapcity: 0 }} className='loading-container'>
        <svg className='loading-svg'>
          <pattern id='pattern' width='100%' height='100%' patternUnits='userSpaceOnUse'>
            <rect />
            <rect className='loading-text-rect' />
          </pattern>
          <text className='loading-text' textAnchor='middle' x='50%' y='50%'>
            Spring Studio
          </text>
        </svg>
        <div className='loading-arrow-keys'>
          <div className='loading-arrow-keys-title'>Tip:</div>
          <div className='loading-arrow-keys-row'>
            <BsArrowUp className='loading-arrow-key-up' />
          </div>
          <div className='loading-arrow-keys-row'>
            <BsArrowLeft className='loading-arrow-key' />
            <BsArrowDown className='loading-arrow-key' />
            <BsArrowRight className='loading-arrow-key' />
          </div>
        </div>
      </motion.div>
    </>
  )
}
