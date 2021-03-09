import React from 'react'
import { Booking } from '../components/Booking'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'
import '../styles/_bookingPage.scss'

export const BookingPage = ({ transition }) => {
  return (
    <>
      <main className='booking-page'>
        <motion.section exit={{ opacity: 0 }} transition={transition}>
          <PageTransition />
          <Booking />
        </motion.section>
      </main>
    </>
  )
}
