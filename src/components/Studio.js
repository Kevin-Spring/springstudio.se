import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useFetch } from './useFetch'
import { AsideNav } from './AsideNav'
import { endpoints } from '../endpoints/endpoints'
import { AngleDown } from './AngleDown'
import { StudioPageContent } from './StudioPageContent'

const url = endpoints[1].url

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const Studio = () => {
  const { loading, posts } = useFetch(url)

  const revealRefsStudio = useRef([])
  revealRefsStudio.current = []

  const addToRefs = (el) => {
    if (el && !revealRefsStudio.current.includes(el)) {
      revealRefsStudio.current.push(el)
    }
  }

  const goToSection = (i, anim) => {
    gsap.to(window, {
      //Sätt autKill till false för att dscrollen inte ska kunna avbrytas
      //Mouse pad scroll blir extremt känslig för input med autokill: true.
      scrollTo: { y: i * window.innerHeight, autoKill: true },
      duration: 0.8,
    })
  }

  useEffect(() => {
    //For section scroll
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
  }, [loading])

  return (
    <>
      <h1 style={{ position: 'absolute' }}>Studios</h1>
      {posts.map((post, i) => {
        const { id, title, content, acf } = post
        return (
          <section
            id={`${post.id}`}
            ref={addToRefs}
            className={`main-section studio-page-section section${
              i + 1
            } studio${i + 1}`}
            key={id}
          >
            <StudioPageContent
              id={id}
              title={title}
              content={content}
              acf={acf}
            />
            <AngleDown />
          </section>
        )
      })}
      <AsideNav
        posts={posts}
        loading={loading}
        sections={revealRefsStudio.current}
      />
    </>
  )
}
