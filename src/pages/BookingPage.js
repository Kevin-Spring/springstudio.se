import React from 'react'
import { Booking } from '../components/Booking'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'
import '../styles/_bookingPage.scss'

export const BookingPage = () => {
  return (
    <>
      <main className='booking-page'>
        <main>
          <motion.section exit={{ opacity: 0 }}>
            <PageTransition />
            <Booking />
          </motion.section>
        </main>
      </main>
    </>
  )
}
