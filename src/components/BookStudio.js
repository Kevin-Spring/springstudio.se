import React from "react";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";

const url =
  "http://localhost:8080/developement/wp_headless_react-test/index.php/wp-json/wp/v2/bookings";

export const BookStudio = () => {
  const { loading, posts } = useFetch(url);
  return (
    <>
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
