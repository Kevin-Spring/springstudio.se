import React from "react";
import { motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
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
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

export const PageTransition = () => {
  return (
    <motion.div
      style={{
        backgroundColor: "#000",
        zIndex: 50,
        position: "absolute",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg
        variants={textContainer}
        style={{
          position: "fixed",
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          style={{ color: "white" }}
        >
          <rect
            style={{ width: "100%", height: "100%", fill: "currentColor" }}
          />
          <motion.rect
            variants={text}
            style={{
              width: "100%",
              height: "100%",
              color: "#A29C9B",
              fill: "currentColor",
            }}
          />
        </pattern>
        <text
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{
            fill: "url(#pattern)",
            position: "absolute",
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
            fontWeight: "bold",
            top: "50%",
            left: "50%",
          }}
        >
          Spring Studio
        </text>
      </motion.svg>
    </motion.div>
  );
};
