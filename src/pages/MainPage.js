import React from 'react'
import { MainPageChapter } from '../components/MainPageChapter'
import { motion } from 'framer-motion'
import '../styles/css/_mainPage.css'

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component with content */

export const MainPage = ({ transition }) => {
  return (
    <>
      <main className='main-page'>
        <motion.div exit={{ opacity: 0 }} transition={transition}>
          <MainPageChapter />
        </motion.div>
      </main>
    </>
  )
}
