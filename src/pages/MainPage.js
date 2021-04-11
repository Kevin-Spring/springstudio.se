import React from 'react'
import { MainPageChapter } from '../components/MainPageChapter'
import { PageTransition } from '../animations/PageTransition'
import { motion } from 'framer-motion'
import '../styles/scss/_mainPage.scss'

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component with content */

export const MainPage = ({ transition }) => {
  return (
    <>
      <main className='main-page'>
        <motion.div exit={{ opacity: 0 }} transition={transition}>
          <PageTransition />
          <MainPageChapter />
        </motion.div>
      </main>
    </>
  )
}
