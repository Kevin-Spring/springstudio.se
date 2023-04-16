import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  BsArrowUp,
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import "../styles/css/_pageTransition.css";

/* Page transition component created with npm package framer-motion */

//Setting up animation options for each element beforehand
const blackBox = {
  initial: {
    height: "100vh",
    width: "100vw",
  },
  animate: {
    width: 0,
    transition: {
      when: "afterChildren",
      duration: 0.8,
      ease: [1, -0.03, 0.71, 1.02],
    },
  },
};

/* const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
  },
}; */

/* const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 0],
    },
  },
}; */

const tip = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 0.8,
      ease: [1, -0.03, 0.71, 1.02],
    },
  },
};

export const PageTransition = () => {
  const backdrop = useRef(null);

  return (
    <>
      {/* Adding the black backdrop, the text-svg with fill effect and arrow keys to the page transition
    using onAnimationStart and onAnimationComplete to hide and show the component */}
      <motion.div
        ref={backdrop}
        className="page-transition-container"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() =>
          //document.body.classList.add('overflow-hidden')
          backdrop.current.classList.add("animate")
        }
        onAnimationComplete={() =>
          //document.body.classList.remove('overflow-hidden')
          backdrop.current.classList.remove("animate")
        }
      >
        <motion.svg
          /* variants={textContainer} */ className="page-transition-svg"
        >
          <pattern
            id="pattern"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <rect />

            <motion.rect
              // variants={text}
              className="page-transition-text-rect"
            />
          </pattern>
          <text
            className="page-transition-text"
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            Spring Studio
          </text>
        </motion.svg>
        <motion.div variants={tip} className="page-transition-arrow-keys">
          <div className="page-transition-arrow-keys-title">Tip:</div>
          <div className="page-transition-arrow-keys-row">
            <BsArrowUp className="page-transition-arrow-key-up" />
          </div>
          <div className="page-transition-arrow-keys-row">
            <BsArrowLeft className="page-transition-arrow-key" />
            <BsArrowDown className="page-transition-arrow-key" />
            <BsArrowRight className="page-transition-arrow-key" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
