import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import GoogleMaps from './GoogleMaps'
import { Link } from 'react-router-dom'

export const MainPageContent = ({ id, title, content, acf }) => {
  const revealText = useRef([])
  revealText.current = []

  const addToRefTexts = (el) => {
    if (el && !revealText.current.includes(el)) {
      revealText.current.push(el)
    }
  }

  const fadeIn = (element) => {
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

    // Add observer old way couldn't make it work with array & react-use useIntersection
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.intersectionRatio > 0.9) {
          item.target.classList.add('fadeIn')
          fadeIn('.fadeIn')
        } else {
          item.target.classList.remove('fadeIn')
        }
      })
    }, config)

    // For texts animation
    revealText.current.forEach((text) => {
      observer.observe(text)
    })
  }, [])
  return (
    <>
      <div className='main-page-content-container'>
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
        <div className='main-page-text-container'>
          <div className='main-page-text-container-inner'>
            <header ref={addToRefTexts}>
              <h2>{title.rendered}</h2>
            </header>
            {content.rendered && (
              <article ref={addToRefTexts}>
                <div
                  className='main-page-text-container-paragraph'
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
              </article>
            )}
            {acf.cta && (
              <Link to={acf.cta.link} className='main-page-cta-btn-link'>
                <div ref={addToRefTexts} className='main-page-cta-btn'>
                  {acf.cta.title}
                </div>
              </Link>
            )}
          </div>
        </div>
        {acf.maps && (
          <div className='main-page-google-maps'>
            <GoogleMaps lat={acf.maps.lat} lng={acf.maps.lng} />
          </div>
        )}
      </div>
    </>
  )
}
