import React, { useEffect } from 'react'
import { useFetch } from '../components/useFetch'
import { endpoints } from '../endpoints/endpoints'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PageTransition } from '../animations/PageTransition'
import { motion } from 'framer-motion'
import { VscArrowDown } from 'react-icons/vsc'
import Slider from 'react-slick'
import '../styles/_studioSingle.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const url = endpoints[1].url

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.8 },
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

export const StudioSingle = ({ transition }) => {
  /* Using custom hook to fetch content, passing in the endpoint */
  const { loading, posts } = useFetch(url)

  useEffect(() => {
    ScrollTrigger.getAll().forEach(ST => ST.disable())
  }, [])

  return (
    <motion.main
      className='studio-sigle-main'
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <PageTransition />
      <motion.section
        className='studio-single-hero-sec'
        initial='initial'
        animate='animate'
        variants={motionContent}
      >
        <header className='studio-single-hero-header'>
          <motion.h1
            className='studio-single-hero-header-title'
            variants={motionTitle}
          >
            Studio
          </motion.h1>
          <motion.p variants={motionParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
        </header>
        <VscArrowDown className='studio-single-hero-arrow' />
      </motion.section>
      <section className='studio-single-slider-sec'>
        <div className='text-container'>
          <h2>Art</h2>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <Slider {...settings}>
          {posts.map((post, i) => {
            const { id, acf } = post
            return (
              <div key={id} className={`slick-slide-inner`}>
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
              </div>
            )
          })}
        </Slider>
      </section>
      <section className='studio-single-text-image-sec'>
        <h2>Photo</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </section>
    </motion.main>
  )
}
