import { useState, useEffect } from 'react'

/* Custom hook to set the title of the navbar somewhat dynamic depending on which page is currently visited */
/* Hook gets fetched menu items from wordpress ('posts'), loading status from useFetchNav-hook and 
location from react-router-dom which keeps an eye on which page is active */

export const useNavbar = (posts, loading, location) => {
  const menuItems = posts
  const [navbarItems, setNavbarItems] = useState({})
  const [navbarPaths, setNavbarPaths] = useState({})
  const [studio, setStudio] = useState('')
  const [bookStudio, setbookStudio] = useState('')
  const [home, setHome] = useState('')

  const storedMenuItems = []

  //Maping throguh all menu items from wp and pushing them to new array
  const mapMenuItems = (menuItems) => {
    menuItems.map((item) => {
      return storedMenuItems.push(item.title)
    })
  }

  //Looking through new array of menu items and assigning the items to different states
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

  //Function which sets the different menu items of the somewhat dynamic navbar
  //New menu items depening on page
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

  //Calling all the different functions with dependencies looking at each states activity 
  //and page location
  useEffect(() => {
    renderNavbar()
    mapMenuItems(menuItems)
    findMenuItem()
  }, [location, menuItems, studio, bookStudio, home])

  return { navbarItems, navbarPaths }
}
