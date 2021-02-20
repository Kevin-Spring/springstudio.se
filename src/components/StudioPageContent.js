import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { AngleDown } from './AngleDown'
import { Link } from 'react-router-dom'

export const StudioPageContent = ({ id, title, content, acf }) => {
  const revealText = useRef([])
  revealText.current = []

  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      y: -30,
      duration: 1.3,
      ease: 'power4.out',
      stagger: {
        amount: 0.2,
      },
    })
  }

  const addToRefTexts = (el) => {
    if (el && !revealText.current.includes(el)) {
      revealText.current.push(el)
    }
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
            <h3>{title.rendered}</h3>
          </header>
          <article ref={addToRefTexts}>
            <div
              className='studio-info'
              dangerouslySetInnerHTML={{ __html: content.rendered }}
            />
          </article>
          <div ref={addToRefTexts} className='btn-container'>
            <div className='studio-btn'>{acf.button}</div>
            <Link to='/three'>
              <div className='studio-btn'>{acf.button_3d} (demo)</div>
            </Link>
          </div>
        </div>
      </div>
      <AngleDown />
    </>
  )
}
