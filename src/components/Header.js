import { MainPage } from '../pages/MainPage'
import { Studios } from '../pages/Studios'
import { BookingPage } from '../pages/BookingPage'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Studios3D } from '../pages/Studios3D'
import { Navbar } from './Navbar'
import { envelopetest } from '../pages/envelopetest'
import { Found404 } from '../pages/Found404'

const transtition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export const Header = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Navbar />
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
            path='/envelope'
            component={envelopetest}
            transtition={transtition}
          />
          <Route component={Found404} />
        </Switch>
      </AnimatePresence>
    </>
  )
}
