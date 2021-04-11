import React, { useRef, useEffect } from 'react'
import { useFetch } from './useFetch'
import { Power3, TweenLite } from 'gsap'
import '../styles/scss/_logo.scss'
import { endpoints } from '../endpoints/endpoints'

//Pointing get request at correct endpoint
const url = endpoints[5].url

export const Logo = () => {
  /* Using custom hook to fetch content, passing in the endpoint */
  const { loading, posts } = useFetch(url)
  const logo = useRef(null)

  /* Animation using gsap to fade in logo */
  useEffect(() => {
    TweenLite.to(logo.current, 0.8, {
      opacity: 1,
      x: 10,
      delay: 1.5,
      ease: Power3.easeOut,
    })
  }, [loading])

  return (
    <>
      <div className='logo'>{loading ? '' : <img ref={logo} src={posts.guid.rendered} alt='logo' style={{ opacity: 0 }} />}</div>
    </>
  )
}
