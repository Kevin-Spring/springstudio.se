import React from 'react'
import { Studio } from '../components/Studio'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'
import '../styles/_studios.scss'

export const Studios = ({ transition }) => {
  return (
    <>
      <main className='studio-page'>
        <motion.div exit={{ opacity: 0 }} transition={transition}>
          <PageTransition />
          <Studio />
        </motion.div>
      </main>
    </>
  )
}
