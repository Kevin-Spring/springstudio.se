import React, { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoTriangleOutline } from "react-icons/io5";
import { Logo } from "./Logo";
import { useFetchNav } from "./useFetchNav";
import { useNavbar } from "./useNavbar";
import { Power3, TweenLite } from "gsap";

const urlMenu =
  "http://localhost:8080/developement/wp_headless_react-test/wp-json/wp/v2/menu";

export const Navbar = ({ loading }) => {
  const location = useLocation();
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu);
  const { navbarItems, navbarPaths } = useNavbar(
    fetchedNavbarItems,
    loadingNav,
    location
  );
  const rightNavItem = navbarItems.rightItem;
  const leftNavItem = navbarItems.leftItem;

  const navbar = useRef(null);

  useEffect(() => {
    TweenLite.to(navbar.current, 0.8, {
      opacity: 1,
      delay: 2,
      ease: Power3.easeOut,
    });
  }, [loading]);

  return (
    <div>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <div ref={navbar} className="primary-nav-container">
        <nav className="primary-nav">
          <ul
            className={rightNavItem && !leftNavItem ? "only-left-nav-item" : ""}
          >
            {navbarItems.leftItem && (
              <NavLink to={{ pathname: navbarPaths.leftArrow }}>
                <li>
                  <IoTriangleOutline className="angle angle-left" />
                  <span>{navbarItems.leftItem}</span>
                </li>
              </NavLink>
            )}
            {navbarItems.rightItem && (
              <NavLink to={{ pathname: navbarPaths.rightArrow }}>
                <li>
                  <span>{navbarItems.rightItem}</span>
                  <IoTriangleOutline className="angle angle-right" />
                </li>
              </NavLink>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
