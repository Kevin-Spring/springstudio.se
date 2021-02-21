import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { motion } from 'framer-motion'
import { useFetch } from './useFetch'
import { AsideNav } from './AsideNav'
import { endpoints } from '../endpoints/endpoints'
import { MainPageContent } from './MainPageContent'

const url = endpoints[0].url

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const MainPageChapter = () => {
  const { loading, posts } = useFetch(url)

  const revealRefs = useRef([])
  revealRefs.current = []

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  const goToSection = (i, anim) => {
    gsap.to(window, {
      //Sätt autKill till true för att dotnavigeringen ska fungera, och inte bara hoppa ett steg
      //Scrollen blir dock extremt känslig för input.
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 0.8,
    })
  }

  useEffect(() => {
    //For section scroll
    revealRefs.current.forEach((panel, i) => {
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
  }, [loading])

  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        {posts.map((post, i) => {
          const { id, title, content, acf } = post
          console.log(acf.background)
          return (
            <section
              id={`section${i + 1} ${title.rendered}`}
              ref={addToRefs}
              className={`panel main-section section section${i + 1}`}
              key={id}
            >
              <MainPageContent
                id={id}
                title={title}
                content={content}
                acf={acf}
              />
            </section>
          )
        })}
        <AsideNav posts={posts} loading={loading} />
      </motion.section>
    </>
  )
}
