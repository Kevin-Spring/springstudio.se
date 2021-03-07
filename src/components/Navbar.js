import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { IoTriangleOutline } from 'react-icons/io5'
import { Logo } from './Logo'
import { useFetchNav } from './useFetchNav'
import { useNavbar } from './useNavbar'
import { Power3, TweenLite } from 'gsap'
import '../styles/_navbar.scss'
import { endpoints } from '../endpoints/endpoints'

const urlMenu = endpoints[3].url

export const Navbar = () => {
  const history = useHistory()
  const location = useLocation()
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu)
  const { navbarItems, navbarPaths } = useNavbar(
    fetchedNavbarItems,
    loadingNav,
    location
  )

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      history.push({
        pathname: navbarPaths.rightArrow,
      })
    }
    if (event.key === 'ArrowLeft') {
      history.push({
        pathname: navbarPaths.leftArrow,
      })
    }
  }

  const navbar = useRef(null)

  useEffect(() => {
    TweenLite.to(navbar.current, 0.8, {
      opacity: 1,
      delay: 2,
      ease: Power3.easeOut,
    })

    window.addEventListener('keydown', handleKeyDown)

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navbarPaths])

  return (
    <>
      <NavLink to='/'>
        <Logo />
      </NavLink>
      <nav ref={navbar} className='primary-nav-container'>
        <div className='primary-nav'>
          <ul>
            {navbarItems.leftItem && (
              <NavLink
                className='navbar-left-item navbar-item'
                to={{ pathname: navbarPaths.leftArrow }}
              >
                <li>
                  <IoTriangleOutline className='angle angle-left' />
                  <span>{navbarItems.leftItem}</span>
                </li>
              </NavLink>
            )}
            {navbarItems.rightItem && (
              <NavLink
                className='navbar-right-item navbar-item'
                to={{ pathname: navbarPaths.rightArrow }}
              >
                <li>
                  <span>{navbarItems.rightItem}</span>
                  <IoTriangleOutline className='angle angle-right' />
                </li>
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
