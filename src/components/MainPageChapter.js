import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useFetch } from './useFetch'
import { PageTransition } from '../animations/PageTransition'
import { StaticLoading } from './StaticLoading'
import { AsideNav } from './AsideNav'
import { endpoints } from '../endpoints/endpoints'
import { AngleDown } from './AngleDown'
import { MainPageContent } from './MainPageContent'

//Pointing get request at correct endpoint
const url = endpoints[0].url

//Used to avoid bugs
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const MainPageChapter = () => {
  /* Using custom hook to fetch content, passing in the endpoint */
  const { loading, posts } = useFetch(url)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const checkSize = () => {
    setWindowSize(window.innerWidth)
  }

  //Setting up useRef on each section to make scrolltrigger-animation possible
  let revealRefs = useRef([])
  revealRefs.current = []

  //Functions which adds all the sections in an array to be stored and used for scrollTrigger
  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  //Function which makes page scroll to next section on input
  const goToSection = (i, anim) => {
    gsap.to(window, {
      //Sätt autKill till false för att scrollen inte ska kunna avbrytas
      //Mouse pad scroll blir extremt känslig för input med autokill: true.
      //Därremot funkar inte dot-navigationen mellan sektionerna med autokill: false
      scrollTo: { y: i * window.innerHeight, autoKill: true },
      duration: 0.8,
    })
  }

  //Functions which creates scrolltrigger elements of the sections stored in the revealRefs-array
  //Listening to the loading status of the get-request before setting up the scroll-sections (gsap doesn't recognize the sections otherwise)

  useEffect(() => {
    if (!loading) {
      //For section scroll & calling the goToSection function
      revealRefs.current.forEach((panel, i) => {
        if (windowSize > 981) {
          ScrollTrigger.create({
            trigger: panel,
            onEnter: () => goToSection(i),
          })
          ScrollTrigger.create({
            trigger: panel,
            start: 'bottom bottom',
            onEnterBack: () => goToSection(i),
          })
        }
      })
    }
  }, [loading])

  //Function to disable scrolltrigger on mobile devices, too buggy - swith to slider.js
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    //Clean up callback to prevent several eventlisteners at the same time
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  return (
    <>
      {loading ? <StaticLoading /> : <PageTransition />}
      {/* Mapping through posts and writes the html and structure with MainPageContent-component */}
      {posts.map((post, i) => {
        const { id, title, content, acf } = post
        return (
          <section id={`${post.id}`} ref={addToRefs} className={`panel main-section main-page-section section section${i + 1}`} key={id}>
            <MainPageContent id={id} title={title} content={content} acf={acf} index={i} />
            <AngleDown />
          </section>
        )
      })}
      {/* Navigations dots located at the bottom of the page */}
      <AsideNav posts={posts} loading={loading} sections={revealRefs.current} />
    </>
  )
}
