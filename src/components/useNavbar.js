import { useState, useEffect } from "react";

export const useNavbar = (posts, loading, location) => {
  const menuItems = posts;
  const [navbarItems, setNavbarItems] = useState({});
  const [navbarPaths, setNavbarPaths] = useState({});
  const [studio, setStudio] = useState("");
  const [booking, setBooking] = useState("");
  const [home, setHome] = useState("");

  const storedMenuItems = [];

  const mapMenuItems = (menuItems) => {
    menuItems.map((item) => {
      return storedMenuItems.push(item.title);
    });
  };

  const findMenuItem = () => {
    let studios = storedMenuItems.find((studios) => studios === "Studios");
    let book = storedMenuItems.find((book) => book === "Book");
    let home = storedMenuItems.find((home) => home === "Home");
    setStudio(studios);
    setBooking(book);
    setHome(home);
  };

  const renderNavbar = () => {
    if (location.pathname === "/studios") {
      if (home) {
        setNavbarItems({
          leftItem: "",
          rightItem: home,
        });
      } else {
        setNavbarItems({
          leftItem: "",
          rightItem: "Home",
        });
      }

      setNavbarPaths({
        leftArrow: "",
        rightArrow: "/",
      });
    } else if (location.pathname === "/book") {
      if (home) {
        setNavbarItems({
          leftItem: home,
          rightItem: "",
        });
      } else {
        setNavbarItems({
          leftItem: "Home",
          rightItem: "",
        });
      }

      setNavbarPaths({
        leftArrow: "/",
        rightArrow: "",
      });
    } else if (location.pathname === "/") {
      if (studio && booking) {
        setNavbarItems({
          leftItem: studio,
          rightItem: booking,
        });
      } else {
        setNavbarItems({
          leftItem: "Studios",
          rightItem: "Books",
        });
      }

      setNavbarPaths({
        leftArrow: "/studios",
        rightArrow: "/book",
      });
    }
  };

  useEffect(() => {
    renderNavbar();
    mapMenuItems(menuItems);
    findMenuItem();
  }, [location, menuItems, studio, booking, home]);

  return { navbarItems, navbarPaths };
};
