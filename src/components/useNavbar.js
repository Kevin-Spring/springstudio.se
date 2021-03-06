import { useState, useEffect } from 'react'

export const useNavbar = (posts, loading, location) => {
  const menuItems = posts
  const [navbarItems, setNavbarItems] = useState({})
  const [navbarPaths, setNavbarPaths] = useState({})
  const [studio, setStudio] = useState('')
  const [bookStudio, setbookStudio] = useState('')
  const [home, setHome] = useState('')

  const storedMenuItems = []

  const mapMenuItems = (menuItems) => {
    menuItems.map((item) => {
      return storedMenuItems.push(item.title)
    })
  }

  const findMenuItem = () => {
    let studios = storedMenuItems.find((studios) => studios === 'Studios')
    let bookStudio = storedMenuItems.find(
      (bookStudio) => bookStudio === 'Booking'
    )
    let home = storedMenuItems.find((home) => home === 'Home')
    setStudio(studios)
    setbookStudio(bookStudio)
    setHome(home)
  }

  const renderNavbar = () => {
    if (location.pathname === '/studios') {
      if (home) {
        setNavbarItems({
          leftItem: '',
          rightItem: home,
        })
      } else {
        setNavbarItems({
          leftItem: '',
          rightItem: 'Home',
        })
      }

      setNavbarPaths({
        leftArrow: '',
        rightArrow: '/',
      })
    } else if (location.pathname === '/booking') {
      if (home) {
        setNavbarItems({
          leftItem: home,
          rightItem: '',
        })
      } else {
        setNavbarItems({
          leftItem: 'Home',
          rightItem: '',
        })
      }

      setNavbarPaths({
        leftArrow: '/',
        rightArrow: '',
      })
    } else if (location.pathname === '/') {
      if (studio && bookStudio) {
        setNavbarItems({
          leftItem: studio,
          rightItem: bookStudio,
        })
      } else {
        setNavbarItems({
          leftItem: 'Studios',
          rightItem: 'Booking',
        })
      }

      setNavbarPaths({
        leftArrow: '/studios',
        rightArrow: '/booking',
      })
    }
  }

  useEffect(() => {
    renderNavbar()
    mapMenuItems(menuItems)
    findMenuItem()
  }, [location, menuItems, studio, bookStudio, home])

  return { navbarItems, navbarPaths }
}
