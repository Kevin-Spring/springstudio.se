import React, { useEffect } from "react";
import { Booking } from "../components/Booking";
import { motion } from "framer-motion";

import "../styles/css/_bookingPage.css";

export const BookingPage = ({ transition }) => {
  return (
    <>
      <main className="booking-page">
        <motion.section exit={{ opacity: 0 }} transition={transition}>
          <Booking />
        </motion.section>
      </main>
    </>
  );
};
