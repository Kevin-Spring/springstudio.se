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
import { SlideImage } from '../components/SlideImage'
import { PhotoGridImage } from '../components/PhotoGridImage'

const url = endpoints[6].url

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })

    ScrollTrigger.getAll().forEach(ST => ST.disable())

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
  }, [loading])

  return (
    <motion.main className='studio-sigle-main' exit={{ opacity: 0 }} transition={transition}>
      <PageTransition />

      {posts.map((post, i) => {
        const { id, acf } = post

        return (
          <div key={id}>
            <motion.section className='studio-single-hero-sec' initial='initial' animate='animate' variants={motionContent}>
              <header className='studio-single-hero-header'>
                <motion.h1 className='studio-single-hero-header-title' variants={motionTitle}>
                  {acf.title}
                </motion.h1>
                <motion.p variants={motionParagraph}>{acf.preamble}</motion.p>
              </header>
              <motion.span variants={motionNumber} className='studio-number'>
                {acf.studio_number}
              </motion.span>
              <VscArrowDown className='studio-single-hero-arrow' />
            </motion.section>

            <section className='studio-single-slider-sec'>
              <div className='text-container'>
                <h2 ref={addToFadeInTexts} className='fade'>
                  {acf.slides_section.slide_title}
                </h2>
                <p ref={addToFadeInTexts} className='fade'>
                  {acf.slides_section.slide_text}
                </p>
              </div>

              <Slider {...settings}>
                <SlideImage imageSize={acf.slides_section.slides.slide_1.sizes} imageUrl={acf.slides_section.slides.slide_1.url} />
                <SlideImage imageSize={acf.slides_section.slides.slide_2.sizes} imageUrl={acf.slides_section.slides.slide_2.url} />
                <SlideImage imageSize={acf.slides_section.slides.slide_3.sizes} imageUrl={acf.slides_section.slides.slide_3.url} />
                <SlideImage imageSize={acf.slides_section.slides.slide_4.sizes} imageUrl={acf.slides_section.slides.slide_4.url} />
              </Slider>
            </section>

            <section className='studio-single-image-grid-sec'>
              <h2 ref={addToFadeInTexts} className='fade'>
                {acf.photo_gallery.gallery_title}
              </h2>

              <p ref={addToFadeInTexts} className='fade'>
                {acf.photo_gallery.gallery_text}
              </p>

              <div className='studio-single-photo-grid-container'>
                <div className='photo-grid-row'>
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_1.gallery_row_1_image_1.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_1.gallery_row_1_image_1.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_1.gallery_row_1_image_2.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_1.gallery_row_1_image_2.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_1.gallery_row_1_image_3.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_1.gallery_row_1_image_3.url}
                  />
                </div>
                <div className='photo-grid-row'>
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_2.gallery_row_2_image_1.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_2.gallery_row_2_image_1.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_2.gallery_row_2_image_2.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_2.gallery_row_2_image_2.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_2.gallery_row_2_image_3.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_2.gallery_row_2_image_3.url}
                  />
                </div>

                <div className='photo-grid-row'>
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_3.gallery_row_3_image_1.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_3.gallery_row_3_image_1.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_3.gallery_row_3_image_2.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_3.gallery_row_3_image_2.url}
                  />
                  <PhotoGridImage
                    imageSize={acf.photo_gallery.gallery_row_3.gallery_row_3_image_3.sizes}
                    imageUrl={acf.photo_gallery.gallery_row_3.gallery_row_3_image_3.url}
                  />
                </div>
              </div>
            </section>

            <section className='studio-single-floorplan-sec'>
              <div className='floorplan-img-container'>
                <picture>
                  <source
                    srcSet={`${acf.floorplan_section.floorplan_image.sizes['1536x1536']} 1200w , ${acf.floorplan_section.floorplan_image.url} 2x`}
                  />
                  <source
                    srcSet={`${acf.floorplan_section.floorplan_image.sizes['1536x1536']} 1024w , ${acf.floorplan_section.floorplan_image.sizes['2048x2048']} 2x`}
                  />
                  <source
                    srcSet={`${acf.floorplan_section.floorplan_image.sizes.large} 750w, ${acf.floorplan_section.floorplan_image.sizes['1536x1536']} 2x `}
                  />
                  <source
                    srcSet={`${acf.floorplan_section.floorplan_image.sizes.medium} 375w , ${acf.floorplan_section.floorplan_image.sizes.large} 2x`}
                  />
                  <img src={acf.floorplan_section.floorplan_image.sizes.large} alt='floorplan' />
                </picture>
              </div>
              <div className='text-container'>
                <h2 ref={addToFadeInTexts} className='fade'>
                  {acf.floorplan_section.floorplan_title}
                </h2>
                <p ref={addToFadeInTexts} className='fade'>
                  {acf.floorplan_section.floorplan_text}
                </p>
              </div>
            </section>

            <section className='studio-single-contact-section'>
              <h2 ref={addToFadeInTexts} className='fade'>
                {acf.contact_section.contact_title}
              </h2>
              <p ref={addToFadeInTexts} className='fade'>
                {acf.contact_section.contact_text}
              </p>
              <div ref={addToFadeInTexts} className='fade'>
                <Link to={acf.contact_section.contact_cta.url} className='booking-link'>
                  {acf.contact_section.contact_cta.title} <VscArrowRight className='booking-arrow' />
                </Link>
              </div>
              <Socials />
            </section>
          </div>
        )
      })}
    </motion.main>
  )
}
