import React, { useEffect } from 'react'
import { Booking } from '../components/Booking'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import '../styles/css/_bookingPage.css'

export const BookingPage = ({ transition }) => {
  //Disable scrolltrigger on bookingpage allowing normal scroll
  useEffect(() => {
    ScrollTrigger.getAll().forEach(ST => ST.disable())
  }, [])

  return (
    <>
      <main className='booking-page'>
        <motion.section exit={{ opacity: 0 }} transition={transition}>
          <Booking />
        </motion.section>
      </main>
    </>
  )
}
