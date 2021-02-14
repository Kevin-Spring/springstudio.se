import { Posts } from '../pages/Posts'
import { Studios } from '../pages/Studios'
import { Booking } from '../pages/Booking'
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Studios3D } from '../pages/Studios3D'

export const Header = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/studios' component={Studios} />
          <Route exact path='/contact' component={Booking} />
          <Route exact path='/' component={Posts} />
          <Route exact path='/three' component={Studios3D} />
        </Switch>
      </AnimatePresence>
    </>
  )
}
