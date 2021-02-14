import React from 'react'
import { MainPageChapter } from '../components/MainPageChapter'
import { PageTransition } from '../animations/PageTransition'
import { motion } from 'framer-motion'
import '../styles/_mainPage.scss'

export const MainPage = () => {
  return (
    <>
      <main className='main-page'>
        <motion.section exit={{ opacity: 0 }}>
          <PageTransition />
          <MainPageChapter />
        </motion.section>
      </main>
    </>
  )
}
