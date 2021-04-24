import React, { useRef, useEffect, useState } from 'react'
import { NavLink, useLocation, useHistory, Link } from 'react-router-dom'
import { IoTriangleOutline } from 'react-icons/io5'
//import { Logo } from './Logo'
import { useFetchNav } from './useFetchNav'
import { useNavbar } from './useNavbar'
import { Power3, TweenLite } from 'gsap'
import '../styles/css/_navbar.css'
import { endpoints } from '../endpoints/endpoints'

//Pointing get request at correct endpoint
const urlMenu = endpoints[3].url

//Using custom hooks useFetchNav & UseNavbar to get menu items and set correct title to each nav-arrow depending on page location
export const Navbar = () => {
  const history = useHistory()
  const location = useLocation()
  const navbar = useRef(null)
  const fadeIn = useRef([])
  fadeIn.current = []
  const [overlay, setOverlay] = useState(false)
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu)
  const { navbarItems, navbarPaths } = useNavbar(fetchedNavbarItems, loadingNav, location)

  const addToFadeInNav = el => {
    if (el && !fadeIn.current.includes(el)) {
      fadeIn.current.push(el)
    }
  }

  //Function makes navigation with arrowkeys possible
  const handleKeyDown = event => {
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

  const navbarOpen = () => {
    setOverlay(!overlay)
    !overlay ? document.body.classList.add('fixed') : document.body.classList.remove('fixed')
  }

  //Tiny animations for the navbar & eventlistener for arrowkey-events
  useEffect(() => {
    fadeIn.current.forEach(item => {
      TweenLite.to(item, 0.1, {
        opacity: 1,
        delay: 5,
        ease: Power3.easeOut,
      })
    })
    window.addEventListener('keydown', handleKeyDown)

    // cleanup to remove eventlistener, perventing eventlistener to be called upon several pages and instances
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [navbarPaths])

  useEffect(() => {
    // if (location.pathname.includes('/studio/')) {
    TweenLite.to(navbar.current, 1.2, {
      opacity: 1,
      delay: 4.8,
      ease: Power3.easeOut,
    })
    //}

    /*
    if (location.pathname === '/studios') {
      navbar.current.classList.add('left')
    } else if (location.pathname === '/booking') {
      navbar.current.classList.add('right')
    } else if (location.pathname.includes('/studio/')) {
      navbar.current.classList.add('left')
    } */

    //remove body fixed when switching page
    overlay ? document.body.classList.add('fixed') : document.body.classList.remove('fixed')
  }, [location.pathname])

  return (
    <>
      {/* Customer wants to change logo, old commented out
      <NavLink to='/'>
        <Logo />
      </NavLink> */}

      {/* {!location.pathname.includes('/studio/') ? ( */}
      <nav className={location.pathname === '/' ? 'primary-nav-container light' : 'primary-nav-container dark'}>
        <div className={'primary-nav'}>
          <ul>
            {/* Conditionally rendering navbar and setting correct menu items depending on page location using custom hooks */}
            {navbarItems.leftItem && (
              <NavLink
                ref={addToFadeInNav}
                className={overlay ? 'navbar-left-item navbar-item dark' : 'navbar-left-item navbar-item'}
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
                ref={addToFadeInNav}
                className={overlay ? 'navbar-right-item navbar-item dark' : 'navbar-right-item navbar-item'}
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
      {/* ) : ( */}
      <nav ref={navbar} className={location.pathname === '/' ? 'primary-nav-container-curtain light' : 'primary-nav-container-curtain dark'}>
        <div className={overlay ? 'hamburger-icon open' : 'hamburger-icon'} onClick={navbarOpen /* () => setOverlay(!overlay) */}>
          <div className='hamburger'></div>
        </div>
        <div className={overlay ? 'overlay open' : 'overlay'}>
          <div className='overlay-content'>
            <Link className={location.pathname === '/' ? 'active' : ''} to='/'>
              Home
            </Link>
            <Link className={location.pathname === '/booking' ? 'active' : ''} to='/booking'>
              Booking
            </Link>
            <Link className={location.pathname === '/studios' ? 'active' : ''} to='/studios'>
              Studios
            </Link>
            <Link className={location.pathname === '/studio/1' ? 'submenu-item active' : 'submenu-item'} to='/studio/1'>
              Studio 1
            </Link>
            <Link className={location.pathname === '/studio/2' ? 'submenu-item active' : 'submenu-item'} to='/studio/2'>
              Studio 2
            </Link>
            <Link className={location.pathname === '/studio/3' ? 'submenu-item active' : 'submenu-item'} to='/studio/3'>
              Studio 3
            </Link>
          </div>
        </div>
      </nav>
      {/* )} */}
    </>
  )
}
