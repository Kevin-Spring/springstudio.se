import { MainPage } from '../pages/MainPage'
import { Studios } from '../pages/Studios'
import { ContactPage } from '../pages/ContactPage'
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
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/' component={MainPage} />
          <Route exact path='/three' component={Studios3D} />
        </Switch>
      </AnimatePresence>
    </>
  )
}
