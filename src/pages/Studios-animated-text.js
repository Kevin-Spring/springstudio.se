import React from "react";
import { motion } from "framer-motion";
import { PageTransition } from "../animations/PageTransition";

const content = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 2.8 },
  },
};

const title = {
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

const paragraph = {
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

const Studios = ({ isFirstMount }) => {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        {/* {isFirstMount && <InitialTransition />} */}
        <PageTransition />

        <motion.div
          initial="initial"
          animate="animate"
          variants={content}
          className="main-section"
        >
          <motion.h1 variants={title} className="content-container">
            Studios
            <motion.div variants={paragraph}>
              blablalblalbalbablablablab bra studios sov
            </motion.div>
          </motion.h1>
        </motion.div>
      </motion.section>
    </>
  );
};
