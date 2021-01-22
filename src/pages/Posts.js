import React from "react";
import { Post } from "../components/Post";
import { PageTransition } from "../animations/PageTransition";
import { motion } from "framer-motion";

export const Posts = () => {
  return (
    <>
      <main>
        <motion.section exit={{ opacity: 0 }}>
          <PageTransition />
          <Post />
        </motion.section>
      </main>
    </>
  );
};
