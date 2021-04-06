import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useFetch } from './useFetch'
import { AsideNav } from './AsideNav'
import { endpoints } from '../endpoints/endpoints'
import { AngleDown } from './AngleDown'
import { StudioPageContent } from './StudioPageContent'

//Pointing get request at correct endpoint
const url = endpoints[1].url

//Used to avoid bugs with scrolltrigger
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const Studio = () => {
  /* Using custom hook to fetch content, passing in the endpoint */
  const { loading, posts } = useFetch(url)

  //Setting up useRef on each section to make scrolltrigger-animation possible
  const revealRefsStudio = useRef([])
  revealRefsStudio.current = []

  //Functions which adds all the sections in an arraye to be stored and used for scrollTrigger
  const addToRefs = el => {
    if (el && !revealRefsStudio.current.includes(el)) {
      revealRefsStudio.current.push(el)
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
    //For section scroll & calling the goToSection function

    if (!loading) {
      revealRefsStudio.current.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          onEnter: () => goToSection(i),
        })
        ScrollTrigger.create({
          trigger: panel,
          start: 'bottom bottom',
          onEnterBack: () => goToSection(i),
        })
      })
    }
  }, [loading])

  return (
    <>
      <h1 style={{ position: 'absolute' }}>Studios</h1>
      {/* Mapping through posts and writes the html and structure with StudioPageContent-component */}
      {posts.map((post, i) => {
        const { id, title, content, acf } = post
        return (
          <section id={`${post.id}`} ref={addToRefs} className={`main-section studio-page-section section${i + 1} studio${i + 1}`} key={id}>
            <StudioPageContent id={id} title={title} content={content} acf={acf} />
            <AngleDown />
          </section>
        )
      })}
      {/* Navigations dots located at the bottom of the page */}
      <AsideNav posts={posts} loading={loading} sections={revealRefsStudio.current} />
    </>
  )
}
