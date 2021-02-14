import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { AngleDown } from './AngleDown'
import GoogleMaps from './GoogleMaps'

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
      <div className='content-container'>
        <div className='text-container'>
          <header ref={addToRefTexts}>
            <h2>{title.rendered}</h2>
          </header>
          <article ref={addToRefTexts}>
            <div
              className='text-container-paragraph'
              dangerouslySetInnerHTML={{ __html: content.rendered }}
            />
          </article>
          {!acf.cta_ ? (
            ''
          ) : (
            <div ref={addToRefTexts} className='cta-btn'>
              {acf.cta_}
            </div>
          )}
        </div>
        {acf.maps && (
          <div className='google-maps'>
            <GoogleMaps lat={acf.maps.lat} lng={acf.maps.lng} />
          </div>
        )}
      </div>
      <AngleDown />
    </>
  )
}
