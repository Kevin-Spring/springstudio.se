import React, { useRef, useEffect } from 'react'
import { VscCircleFilled } from 'react-icons/vsc'

/* Component which puts dots in the bottom navigation of the scroll-sections */
/* Deconstructs different props regarding the posts to setup dots dynamically and correct */
export const Dots = ({ title, id, sections }) => {
  const dots = useRef([])
  dots.current = []

  //Same method as before with scroll sections
  //Adding a ref on each dot and storing them in an array to make different animations and actions possible
  const addToDots = (el) => {
    if (el && !dots.current.includes(el)) {
      dots.current.push(el)
    }
  }

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: '10px',
      threshold: 0.9,
    }

    // Add observer old way couldn't make it work with array & react-use useIntersection
    // observing which dot is in viewport and adds css-class accordingly
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((section) => {
        if (section.intersectionRatio > 0.9) {
          dots.current.forEach((dot) => {
            if (dot.id === section.target.id) {
              dot.classList.add('dot-active')
            } else {
              dot.classList.remove('dot-active')
            }
          })
        }
      })
    }, config)

    // For dots animation
    // observing which dot is in viewport and adds css-class accordingly
    sections.forEach((section) => {
      observer.observe(section)
    })
  }, [dots])

  return (
    <div className='dot-container'>
      <span>{title}</span>
      <div id={id} ref={addToDots}>
        <VscCircleFilled />
      </div>
    </div>
  )
}
