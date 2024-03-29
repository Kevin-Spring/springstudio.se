import React from "react";
import Lottie from "lottie-react";
import notFound from "../animations/41393-monkey-see.json";
import "../styles/css/_found404.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageTransition } from "../animations/PageTransition";
import { IoTriangleOutline } from "react-icons/io5";
import { Helmet } from "react-helmet";

/* Setting up some animation properties for the page content, 
such as headder and text fading in using npm package framer motion */

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.8 },
  },
};

const motionTitle = {
  initial: { y: 20, opacity: 0 },
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

export const Found404 = ({ transition }) => {
  return (
    <motion.main exit={{ opacity: 0 }}>
      <PageTransition />
      <Helmet>
        <title>Studios prepped for all creative needs in Stockholm - 404</title>
        <meta
          name="description"
          content="Spring Studio provides rental studios for commercials, television, music rehearsals, film and photography productions."
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - 404"
        />
        <meta
          property="og:description"
          content="Spring Studio provides rental studios for commercials, television, music rehearsals, film and photography productions."
        />
        <link rel="canonical" href="https://springstudio.se/404" />
      </Helmet>
      <motion.section
        className="not-found-container"
        variants={motionContent}
        transition={transition}
      >
        <motion.h1 className="not-found-header" variants={motionTitle}>
          404 Page not found
        </motion.h1>
        {/* Lottie is the animation playing and importet from lottie.com & implemented by npm package lottie-react */}
        <Lottie animationData={notFound} className="not-found-animation" />
        <motion.p className="not-found-link-home" variants={motionParagraph}>
          <Link to="/">
            <IoTriangleOutline className="angle angle-left" /> Back to Spring
            Studio
          </Link>
        </motion.p>
      </motion.section>
    </motion.main>
  );
};
