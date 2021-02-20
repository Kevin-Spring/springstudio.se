import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { motion } from 'framer-motion'
import { useFetch } from './useFetch'
import { AsideNav } from './AsideNav'
import { endpoints } from '../endpoints/endpoints'
import { StudioPageContent } from './StudioPageContent'

const url = endpoints[1].url

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const Studio = () => {
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
        {posts
          .slice(0)
          .reverse()
          .map((post, i) => {
            const { id, title, content, acf } = post
            return (
              <section
                id={`section${i + 1} ${title.rendered}`}
                ref={addToRefs}
                className={`main-section section section${i + 1} studio${
                  i + 1
                }`}
                style={{
                  backgroundImage: `url(${acf.background.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
                key={id}
              >
                <StudioPageContent
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
