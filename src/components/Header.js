import { MainPage } from '../pages/MainPage'
import { Studios } from '../pages/Studios'
import { BookingPage } from '../pages/BookingPage'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Studios3D } from '../pages/Studios3D'
import { Navbar } from './Navbar'
import { envelopetest } from '../pages/envelopetest'
import { Found404 } from '../pages/Found404'

//Transition settings for the pages on page transition and load
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

export const Header = () => {
  const location = useLocation()

  return (
    <>
    {/* exitBeforeEnter prop allows components to dismantle and play their animations before new componenet loads. 
    All exit-props called on different motion-elements (e.g motion.div ) is used to make this possible in majority of components*/}
      <AnimatePresence exitBeforeEnter>
        <Navbar />
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path='/studios'
            component={Studios}
            transition={transition}
          />
          <Route
            exact
            path='/booking'
            component={BookingPage}
            transition={transition}
          />
          <Route exact path='/' component={MainPage} transition={transition} />
          <Route
            exact
            path='/three'
            component={Studios3D}
            transition={transition}
          />
          <Route
            exact
            path='/envelope'
            component={envelopetest}
            transition={transition}
          />
          <Route component={Found404} transition={transition} />
        </Switch>
      </AnimatePresence>
    </>
  )
}
