import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation, useHistory, Link } from "react-router-dom";
import { IoTriangleOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import { useFetchNav } from "./useFetchNav";
import { useNavbar } from "./useNavbar";
import "../styles/css/_navbar.css";
// import { endpoints } from "../endpoints/endpoints";
import { Socials } from "./Socials";

//Pointing get request at correct endpoint
// const urlMenu = endpoints[3].url;

//Using custom hooks useFetchNav & UseNavbar to get menu items and set correct title to each nav-arrow depending on page location
export const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const navbar = useRef(null);
  const [overlay, setOverlay] = useState(false);
  // const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu);
  const { navbarItems, navbarPaths } = useNavbar(
    //fetchedNavbarItems,
    //loadingNav,
    location
  );

  //Function makes navigation with arrowkeys possible & block usage if an input or textarea would be in focus
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (navbarPaths.rightArrow) {
        history.push({
          pathname: navbarPaths.rightArrow,
        });
      }
    }
    if (event.key === "ArrowLeft") {
      if (
        document.activeElement.tagName === "INPUT" ||
        document.activeElement.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (navbarPaths.leftArrow) {
        history.push({
          pathname: navbarPaths.leftArrow,
        });
      }
    }
  };

  const navbarOpen = () => {
    setOverlay(!overlay);
    !overlay
      ? document.body.classList.add("fixed")
      : document.body.classList.remove("fixed");
  };

  // Eventlistener for arrowkey-events
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup to remove eventlistener, perventing eventlistener to be called upon several pages and instances
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navbarPaths]);

  useEffect(() => {
    //remove body fixed when switching page
    overlay
      ? document.body.classList.add("fixed")
      : document.body.classList.remove("fixed");
  }, [location.pathname]);

  return (
    <>
      {/* {!location.pathname.includes('/studio/') ? ( */}
      <nav
        className={
          location.pathname === "/"
            ? "primary-nav-container light"
            : "primary-nav-container dark"
        }
      >
        <div className={"primary-nav"}>
          <ul>
            {/* Conditionally rendering navbar and setting correct menu items depending on page location using custom hooks */}
            {navbarItems.leftItem && (
              <li>
                <NavLink
                  className={
                    overlay
                      ? "navbar-left-item navbar-item dark"
                      : "navbar-left-item navbar-item"
                  }
                  to={{ pathname: navbarPaths.leftArrow }}
                >
                  <IoTriangleOutline className="angle angle-left" />
                  <span>{navbarItems.leftItem}</span>
                </NavLink>
              </li>
            )}
            {navbarItems.rightItem && (
              <li>
                <NavLink
                  className={
                    overlay
                      ? "navbar-right-item navbar-item dark"
                      : "navbar-right-item navbar-item"
                  }
                  to={{ pathname: navbarPaths.rightArrow }}
                >
                  <span>{navbarItems.rightItem}</span>
                  <IoTriangleOutline className="angle angle-right" />
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
      {/* ) : ( */}
      <nav
        ref={navbar}
        className={
          location.pathname === "/"
            ? "primary-nav-container-curtain light"
            : "primary-nav-container-curtain dark"
        }
      >
        <div
          className={overlay ? "hamburger-icon open" : "hamburger-icon"}
          onClick={navbarOpen /* () => setOverlay(!overlay) */}
        >
          <div className="hamburger"></div>
        </div>
        <div className={overlay ? "overlay open" : "overlay"}>
          <div className="overlay-content">
            <div className="link-wrapper">
              <Link
                className={
                  location.pathname === "/" ? "menu-item active" : "menu-item"
                }
                to="/"
              >
                Main
              </Link>
            </div>
            <div className="link-wrapper">
              <Link
                className={
                  location.pathname === "/booking"
                    ? "menu-item active"
                    : "menu-item"
                }
                to="/booking"
              >
                Contact
              </Link>
            </div>
            <div className="link-wrapper">
              <Link
                className={
                  location.pathname === "/studios"
                    ? "menu-item active"
                    : "menu-item"
                }
                to="/studios"
              >
                Studios
              </Link>
            </div>
            <div className="link-wrapper">
              <Link
                className={
                  location.pathname === "/lounge"
                    ? "menu-item active"
                    : "menu-item"
                }
                to="/lounge"
              >
                Lounge
              </Link>
            </div>
            <div className="submenu-items">
              <div className="link-wrapper">
                <Link
                  className={
                    location.pathname === "/studio/1"
                      ? "submenu-item active"
                      : "submenu-item"
                  }
                  to="/studio/1"
                >
                  Studio 1
                </Link>
              </div>
              <div className="link-wrapper">
                <Link
                  className={
                    location.pathname === "/studio/2"
                      ? "submenu-item active"
                      : "submenu-item"
                  }
                  to="/studio/2"
                >
                  Studio 2
                </Link>
              </div>
              <div className="link-wrapper">
                <Link
                  className={
                    location.pathname === "/studio/3"
                      ? "submenu-item active"
                      : "submenu-item"
                  }
                  to="/studio/3"
                >
                  Studio 3
                </Link>
              </div>
            </div>
            <div className="nav-contacts-container">
              <div className="nav-contact">
                <a href="tel:0046707467233">
                  {" "}
                  <FaPhoneAlt /> 0707467233
                </a>
              </div>
              <div className="nav-contact">
                <a href="mailto:janne@springstudio.se">
                  <IoIosMail /> janne@springstudio.se
                </a>
              </div>
            </div>
            <div className="nav-socials-container">
              <Socials />
            </div>
          </div>
        </div>
      </nav>
      {/* )} */}
    </>
  );
};
