import React, { useEffect } from "react";
import { Booking } from "../components/Booking";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "../styles/css/_bookingPage.css";

export const BookingPage = ({ transition }) => {
  return (
    <>
      <Helmet>
        <title>
          Studios prepped for all creative needs in Stockholm - Booking
        </title>
        <meta
          name="description"
          content="Contact us or book your studio here - whether it would be for green screen productions, music rehearsals or fashion shoots. Let us know!"
        />
        <meta
          property="og:title"
          content="Studios prepped for all creative needs in Stockholm - Booking"
        />
        <meta
          property="og:description"
          content="Contact us or book your studio here - whether it would be for green screen productions, music rehearsals or fashion shoots. Let us know!"
        />
        <link rel="canonical" href="https://springstudio.se/booking" />
      </Helmet>
      <main className="booking-page">
        <motion.section exit={{ opacity: 0 }} transition={transition}>
          <Booking />
        </motion.section>
      </main>
    </>
  );
};
