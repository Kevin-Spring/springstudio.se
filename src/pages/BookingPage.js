import React, { useEffect } from 'react'
import { Booking } from '../components/Booking'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { PageTransition } from '../animations/PageTransition'

import '../styles/_bookingPage.scss'

export const BookingPage = ({ transition }) => {
  //Disable scrolltrigger on bookingpage allowing normal scroll
  useEffect(() => {
    ScrollTrigger.getAll().forEach(ST => ST.disable())
  }, [])

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
