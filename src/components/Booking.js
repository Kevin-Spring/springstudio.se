import React from 'react'
import { motion } from 'framer-motion'
import { useFetch } from './useFetch'
//import { ContactForm } from './ContactForm'
import { endpoints } from '../endpoints/endpoints'
import { BookingForm } from './BookingForm'

const url = endpoints[2].url

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.2 },
  },
}

const motionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const motionParagraph = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const motionForm = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const Booking = () => {
  const { posts } = useFetch(url)
  return (
    <>
      <div>
        {posts.map((post) => {
          const { id, title, content, acf } = post
          return (
            <article className={'book-studio-section'} key={id}>
              <div className='content-container'>
                {acf.background && (
                  <picture>
                    <source
                      srcSet={`${acf.background.sizes['1536x1536']} 1200w , ${acf.background.url} 2x`}
                    />
                    <source
                      srcSet={`${acf.background.sizes['1536x1536']} 1024w , ${acf.background.sizes['2048x2048']} 2x`}
                    />
                    <source
                      srcSet={`${acf.background.sizes.large} 750w, ${acf.background.sizes['1536x1536']} 2x `}
                    />
                    <source
                      srcSet={`${acf.background.sizes.medium} 375w , ${acf.background.sizes.large} 2x`}
                    />
                    <img src={acf.background.sizes.large} alt='background' />
                  </picture>
                )}
                <motion.div
                  initial='initial'
                  animate='animate'
                  variants={motionContent}
                  className='text-container'
                >
                  <motion.h2 variants={motionTitle}>{title.rendered}</motion.h2>
                  <motion.div
                    variants={motionParagraph}
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                  />
                  <BookingForm motionForm={motionForm} />
                </motion.div>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}
