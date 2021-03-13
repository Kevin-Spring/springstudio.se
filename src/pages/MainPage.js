import React from 'react'
import { MainPageChapter } from '../components/MainPageChapter'
import { PageTransition } from '../animations/PageTransition'
import { motion } from 'framer-motion'
import '../styles/_mainPage.scss'

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
