import React, { useRef, useEffect } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'
import { IoTriangleOutline } from 'react-icons/io5'
//import { Logo } from './Logo'
import { useFetchNav } from './useFetchNav'
import { useNavbar } from './useNavbar'
import { Power3, TweenLite } from 'gsap'
import '../styles/_navbar.scss'
import { endpoints } from '../endpoints/endpoints'

//Pointing get request at correct endpoint
const urlMenu = endpoints[3].url

//Using custom hooks useFetchNav & UseNavbar to get menu items and set correct title to each nav-arrow depending on page location
export const Navbar = () => {
  const history = useHistory()
  const location = useLocation()
  const navbar = useRef(null)
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu)
  const { navbarItems, navbarPaths } = useNavbar(
    fetchedNavbarItems,
    loadingNav,
    location
  )

  //Function makes navigation with arrowkeys possible
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

  //Tiny animations for the navbar & eventlistener for arrowkey-events
  useEffect(() => {
    TweenLite.to(navbar.current, 0.8, {
      opacity: 1,
      delay: 2,
      ease: Power3.easeOut,
    })

    window.addEventListener('keydown', handleKeyDown)

    // cleanup to remove eventlistener, perventing eventlistener to be called upon several pages and instances
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navbarPaths])

  return (
    <>
      {/* Customer wants to change logo, old commented out
      <NavLink to='/'>
        <Logo />
      </NavLink> */}
      <nav
        //exit={{ opacity: 0 }}
        ref={navbar}
        className={
          location.pathname === '/'
            ? 'primary-nav-container light'
            : 'primary-nav-container dark'
        }
      >
        <div className='primary-nav'>
          <ul>
            {/* Conditionally rendering navbar and setting correct menu items depending on page location using custom hooks */}
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
