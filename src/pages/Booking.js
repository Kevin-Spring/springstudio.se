import React from "react";
import { BookStudio } from "../components/BookStudio";
import { motion } from "framer-motion";
import { PageTransition } from "../animations/PageTransition";
import "../styles/_booking.scss";

export const Booking = () => {
  return (
    <>
      <main className="booking-page">
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
