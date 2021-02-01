import React from "react";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";
import { Contact } from "./Contact";
import { endpoints } from "../endpoints/endpoints";

const url = endpoints[2].url;

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.2 },
  },
};

const motionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const motionParagraph = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const BookStudio = () => {
  const { posts } = useFetch(url);
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
              <motion.div className="content-container">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={motionContent}
                  className="text-container"
                >
                  <motion.h2 variants={motionTitle}>{title.rendered}</motion.h2>
                  <motion.div
                    variants={motionParagraph}
                    dangerouslySetInnerHTML={{ __html: content.rendered }}
                  />
                  <Contact motionParagraph={motionParagraph} />
                </motion.div>
              </motion.div>
            </section>
          );
        })}
      </motion.section>
    </>
  );
};
