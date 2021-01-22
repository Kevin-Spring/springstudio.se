import React from "react";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";
import { useFetchNav } from "./useFetchNav";
import { useNavbar } from "./useNavbar";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

const urlMenu =
  "http://localhost:8080/developement/wp_headless_react-test/wp-json/wp/v2/menu";

const url =
  "http://localhost:8080/developement/wp_headless_react-test/index.php/wp-json/wp/v2/bookings";

export const BookStudio = () => {
  const location = useLocation();
  const { loading, posts } = useFetch(url);
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu);
  const { navbarItems, navbarPaths } = useNavbar(
    fetchedNavbarItems,
    loadingNav,
    location
  );
  return (
    <>
      <Navbar
        navbarItems={navbarItems}
        navbarPaths={navbarPaths}
        loading={loading}
      />
      <motion.section exit={{ opacity: 0 }}>
        {posts.map((post) => {
          const { id, title, content, acf } = post;
          return (
            <section
              className={"book-studio-section"}
              style={{
                backgroundImage: `url(${acf.background.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              key={id}
            >
              <div className="content-container">
                <div className="text-container">
                  <h2>{title.rendered}</h2>
                  <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
                </div>
              </div>
            </section>
          );
        })}
      </motion.section>
    </>
  );
};
