import { MainPage } from '../pages/MainPage'
import { Studios } from '../pages/Studios'
import { BookingPage } from '../pages/BookingPage'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Studios3D } from '../pages/Studios3D'
import { Studio3 } from '../pages/Studio3'

const transtition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export const Header = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path='/studios'
            component={Studios}
            transtition={transtition}
          />
          <Route
            exact
            path='/booking'
            component={BookingPage}
            transtition={transtition}
          />
          <Route
            exact
            path='/'
            component={MainPage}
            transtition={transtition}
          />
          <Route
            exact
            path='/three'
            component={Studios3D}
            transtition={transtition}
          />
          <Route
            exact
            path='/studio-3'
            component={Studio3}
            transtition={transtition}
          />
        </Switch>
      </AnimatePresence>
    </>
  )
}
