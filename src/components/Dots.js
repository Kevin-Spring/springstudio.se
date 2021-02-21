import React, { useRef, useEffect } from 'react'
import { VscCircleFilled } from 'react-icons/vsc'

export const Dots = ({ title, id, sections }) => {
  const dots = useRef([])
  dots.current = []

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
