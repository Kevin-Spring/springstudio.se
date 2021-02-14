import React from 'react'
import { Contact } from '../components/Contact'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'
import '../styles/_contactPage.scss'

export const ContactPage = () => {
  return (
    <>
      <main className='booking-page'>
        <main>
          <motion.section exit={{ opacity: 0 }}>
            <PageTransition />
            <Contact />
          </motion.section>
        </main>
      </main>
    </>
  )
}
