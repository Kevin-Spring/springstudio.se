import { MainPage } from "../pages/MainPage";
import { Studios } from "../pages/Studios";
import { BookingPage } from "../pages/BookingPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Found404 } from "../pages/Found404";
import { Studio1 } from "../pages/Studio1";
import { Studio1_old } from "../pages/Studio1_old";
import { CookiePolicy } from "../pages/CookiePolicy";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Studio2 } from "../pages/Studio2";
import { Studio2_old } from "../pages/Studio2_old";
import { Studio3 } from "../pages/Studio3";
import { Studio3_old } from "../pages/Studio3_old";
import { KitchenLoungePage } from "../pages/KitchenLoungePage";

//Transition settings for the pages on page transition and load
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const Header = () => {
  const location = useLocation();

  return (
    <>
      {/* exitBeforeEnter prop allows components to dismantle and play their animations before new componenet loads. 
    All exit-props called on different motion-elements (e.g motion.div ) is used to make this possible in majority of components*/}

      <AnimatePresence exitBeforeEnter>
        {/* Navbar causes the framer-motion warning in console about animating multiple children, needs to be placed inside switch or outside the animateprescene.
        But any of those ways wont animate the navbar on exit.  */}
        <Navbar />
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path="/studios"
            component={Studios}
            transition={transition}
          />
          <Route
            exact
            path="/contact"
            component={BookingPage}
            transition={transition}
          />
          <Route exact path="/" component={MainPage} transition={transition} />
          <Route
            exact
            path="/studios/studio-1"
            component={Studio1}
            transition={transition}
          />
          <Route
            exact
            path="/studios/studio-2"
            component={Studio2}
            transition={transition}
          />
          <Route
            exact
            path="/studios/studio-3"
            component={Studio3}
            transition={transition}
          />
          {/* Silly SEO Reasons */}
          <Route
            exact
            path="/studio/1"
            component={Studio1_old}
            transition={transition}
          />
          <Route
            exact
            path="/studio/2"
            component={Studio2_old}
            transition={transition}
          />
          <Route
            exact
            path="/studio/3"
            component={Studio3_old}
            transition={transition}
          />
          {/* End of silly SEO reasons */}
          <Route
            exact
            path="/lounge"
            component={KitchenLoungePage}
            transition={transition}
          />
          <Route
            exact
            path="/cookies"
            component={CookiePolicy}
            transition={transition}
          />
          <Route
            exact
            path="/privacy"
            component={PrivacyPolicy}
            transition={transition}
          />
          <Route component={Found404} transition={transition} />
        </Switch>
      </AnimatePresence>
    </>
  );
};
