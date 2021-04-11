import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

//Writing out the html content and adding animations to the content
export const StudioPageContent = ({ id, title, content, acf }) => {
  const revealText = useRef([])
  revealText.current = []

  //Fadein animation using gsap for textelements
  const fadeIn = element => {
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

  //A ref which all textcontent is stored in an array
  const addToRefTexts = el => {
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
    //Observing which items are in viewport and adding animation class accordingly
    //takes in config settings to determine when content is in viewpage and leaves
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
    revealText.current.forEach(text => {
      observer.observe(text)
    })
  }, [])

  return (
    <>
      <div className='studio-page-content-container'>
        <picture>
          <source srcSet={`${acf.background.sizes['1536x1536']} 1200w , ${acf.background.url} 2x`} />
          <source srcSet={`${acf.background.sizes['1536x1536']} 1024w , ${acf.background.sizes['2048x2048']} 2x`} />
          <source srcSet={`${acf.background.sizes.large} 750w, ${acf.background.sizes['1536x1536']} 2x `} />
          <source srcSet={`${acf.background.sizes.medium} 375w , ${acf.background.sizes.large} 2x`} />
          <img src={acf.background.sizes.large} alt='background' />
        </picture>
        <div className='studio-page-text-container'>
          <header ref={addToRefTexts}>
            <h3>{acf.title && acf.title}</h3>
          </header>
          <article ref={addToRefTexts}>
            {/* When rendering acf text editors html markup follows the content, hence why wordpress content is rendered instead */}
            <div className='studio-info' dangerouslySetInnerHTML={{ __html: content.rendered }} />
          </article>
          <div className='btn-container'>
            <Link to={acf.link_studio.url && acf.link_studio.url}>
              <div ref={addToRefTexts} className='studio-btn'>
                {acf.link_studio.title && acf.link_studio.title}
              </div>
            </Link>
            <Link to={acf.link_3d.url && acf.link_3d.url}>
              <div ref={addToRefTexts} className='studio-btn'>
                {acf.link_3d.title && acf.link_3d.title} (demo)
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
