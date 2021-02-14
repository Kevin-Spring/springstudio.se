import { useState, useEffect } from 'react'

export const useNavbar = (posts, loading, location) => {
  const menuItems = posts
  const [navbarItems, setNavbarItems] = useState({})
  const [navbarPaths, setNavbarPaths] = useState({})
  const [studio, setStudio] = useState('')
  const [contact, setContact] = useState('')
  const [home, setHome] = useState('')

  const storedMenuItems = []

  const mapMenuItems = (menuItems) => {
    menuItems.map((item) => {
      return storedMenuItems.push(item.title)
    })
  }

  const findMenuItem = () => {
    let studios = storedMenuItems.find((studios) => studios === 'Studios')
    let contact = storedMenuItems.find((contact) => contact === 'Contact')
    let home = storedMenuItems.find((home) => home === 'Home')
    setStudio(studios)
    setContact(contact)
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
    } else if (location.pathname === '/contact') {
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
      if (studio && contact) {
        setNavbarItems({
          leftItem: studio,
          rightItem: contact,
        })
      } else {
        setNavbarItems({
          leftItem: 'Studios',
          rightItem: 'Contact',
        })
      }

      setNavbarPaths({
        leftArrow: '/studios',
        rightArrow: '/contact',
      })
    }
  }

  useEffect(() => {
    renderNavbar()
    mapMenuItems(menuItems)
    findMenuItem()
  }, [location, menuItems, studio, contact, home])

  return { navbarItems, navbarPaths }
}
