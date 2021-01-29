import React from "react";
import { Studio } from "../components/Studio";
import { motion } from "framer-motion";
import { PageTransition } from "../animations/PageTransition";
import "../styles/_studios.scss";

export const Studios = () => {
  return (
    <>
      <main className="studio-page">
        <main>
          <motion.section exit={{ opacity: 0 }}>
            <PageTransition />
            <Studio />
          </motion.section>
        </main>
      </main>
    </>
  );
};
