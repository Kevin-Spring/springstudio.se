import React from 'react'
import { Studio } from '../components/Studio'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'
import '../styles/scss/_studios.scss'

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component content */
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
