import React, { useEffect, useRef } from 'react'
import { useFetch } from '../components/useFetch'
import { endpoints } from '../endpoints/endpoints'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PageTransition } from '../animations/PageTransition'
import { motion } from 'framer-motion'
import { VscArrowDown, VscArrowRight } from 'react-icons/vsc'
import Slider from 'react-slick'
import '../styles/_studioSingle.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import { Socials } from '../components/Socials'
import gsap from 'gsap'

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
const motionNumber = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 0.3,
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    ScrollTrigger.getAll().forEach(ST => ST.disable())
  }, [])

  const fadeInText = useRef([])
  fadeInText.current = []

  //A ref which all textcontent is stored in an array
  const addToFadeInTexts = el => {
    if (el && !fadeInText.current.includes(el)) {
      fadeInText.current.push(el)
    }
  }

  //Fadein animation using gsap for textelements
  const fadeIn = element => {
    gsap.to(element, {
      opacity: 1,
      y: -30,
      duration: 1.8,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    })
  }

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: '10px',
      threshold: 0.9,
    }

    let observer = new IntersectionObserver(entries => {
      entries.forEach(item => {
        if (item.intersectionRatio > 0.9) {
          item.target.classList.add('fadeIn')
          fadeIn('.fadeIn')
        } else {
          item.target.classList.remove('fadeIn')
        }
      })
    }, config)

    // For texts animation
    //Looking through text items-array and adding the observer to them
    fadeInText.current.forEach(text => {
      observer.observe(text)
    })
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
        {/* Put dynamic studionumber here instead of hardcoded */}
        <motion.span variants={motionNumber} className='studio-number'>
          1
        </motion.span>
        <VscArrowDown className='studio-single-hero-arrow' />
      </motion.section>

      <section className='studio-single-slider-sec'>
        <div className='text-container'>
          <h2 ref={addToFadeInTexts} className='fade'>
            Art
          </h2>
          <p ref={addToFadeInTexts} className='fade'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
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
      <section className='studio-single-image-grid-sec'>
        <h2 ref={addToFadeInTexts} className='fade'>
          Photo
        </h2>
        <p ref={addToFadeInTexts} className='fade'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Photo grid med tidigare produktioner från studion - Bilder ska hämtas från wp när content är satt och posttyp fixad */}
        <div className='studio-single-photo-grid-container'>
          <div className='photo-grid-row'>
            {posts.map((post, i) => {
              const { id, acf } = post
              return (
                <div key={id} className='photo-grid-img-inner-container'>
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
          </div>
          <div className='photo-grid-row'>
            {posts.map((post, i) => {
              const { id, acf } = post
              return (
                <div key={id} className='photo-grid-img-inner-container'>
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
          </div>
          <div className='photo-grid-row'>
            {posts.map((post, i) => {
              const { id, acf } = post
              return (
                <div key={id} className='photo-grid-img-inner-container'>
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
          </div>
        </div>
      </section>
      <section className='studio-single-floorplan-sec'>
        <div className='floorplan-img-container'>
          <img src='' alt='' />
        </div>
        <div className='text-container'>
          <h2 ref={addToFadeInTexts} className='fade'>
            Floorplan
          </h2>
          <p ref={addToFadeInTexts} className='fade'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>

      <section className='studio-single-contact-section'>
        <h2 ref={addToFadeInTexts} className='fade'>
          Looks cool?
        </h2>
        <p ref={addToFadeInTexts} className='fade'>
          Contact us or book studio right here
        </p>
        <div ref={addToFadeInTexts} className='fade'>
          <Link to='/booking' className='booking-link'>
            Book Studio 1 <VscArrowRight className='booking-arrow' />
          </Link>
          <Socials />
        </div>
      </section>
    </motion.main>
  )
}
