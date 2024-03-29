import React from "react";
import "../styles/css/_mainPage.css";
import { useFetch } from "../components/useFetch";
import { endpoints } from "../endpoints/endpoints";
import { MainPageChapter } from "../components/MainPageChapter";
import { motion } from "framer-motion";
import { StaticLoading } from "../components/StaticLoading";
import { PageTransition } from "../animations/PageTransition";
import { Helmet } from "react-helmet";

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component with content */

//Pointing get request at correct endpoint
// const url = endpoints[0].url

export const MainPage = ({ transition }) => {
  //const { loading, posts } = useFetch(url)

  return (
    <main className="main-page">
      <motion.div exit={{ opacity: 0 }} transition={transition}>
        {/* {loading ? <StaticLoading /> : <PageTransition />} */}
        <PageTransition />
        {/* {!loading && <MainPageChapter posts={posts} loading={loading} />} */}
        <Helmet>
          <title>
            Studios prepped for all creative needs in Stockholm - Spring Studio
          </title>
          <meta
            name="description"
            content="Spring Studio - provides rental studios for commercials, television, music rehearsals, film and photography productions located in Stockholm."
          />
          <meta
            property="og:title"
            content="Studios prepped for all creative needs in Stockholm - Spring Studio"
          />
          <meta
            property="og:description"
            content="Spring Studio - provides rental studios for commercials, television, music rehearsals, film and photography productions located in Stockholm."
          />
          <link rel="canonical" href="https://springstudio.se" />
        </Helmet>
        <MainPageChapter />
      </motion.div>
    </main>
  );
};
