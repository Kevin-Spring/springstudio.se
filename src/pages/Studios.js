import React from 'react'
import { Studio } from '../components/Studio'
import { motion } from 'framer-motion'
import '../styles/css/_studios.css'

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component content */
export const Studios = ({ transition }) => {
  return (
    <>
      <motion.main exit={{ opacity: 0 }} transition={transition} className='studio-page'>
        <Studio transition={transition} />
      </motion.main>
    </>
  )
}
