import React from "react";
import { BookStudio } from "../components/BookStudio";
import { motion } from "framer-motion";
import { PageTransition } from "../animations/PageTransition";

export const Booking = () => {
  return (
    <>
      <main className="studio-page">
        <main>
          <motion.section exit={{ opacity: 0 }}>
            <PageTransition />
            <BookStudio />
          </motion.section>
        </main>
      </main>
    </>
  );
};
