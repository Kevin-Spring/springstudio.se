import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";
import { AsideNav } from "./AsideNav";
import { AngleDown } from "./AngleDown";
import { endpoints } from "../endpoints/endpoints";
import GoogleMaps from "./GoogleMaps";

const url = endpoints[0].url;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Post = () => {
  const { loading, posts } = useFetch(url);

  const revealRefs = useRef([]);
  revealRefs.current = [];
  const revealText = useRef([]);
  revealText.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  const addToRefTexts = (el) => {
    if (el && !revealText.current.includes(el)) {
      revealText.current.push(el);
    }
  };

  const goToSection = (i, anim) => {
    gsap.to(window, {
      //Sätt autKill till true för att dotnavigeringen ska fungera, och inte bara hoppa ett steg
      //Scrollen blir dock extremt känslig för input.
      scrollTo: { y: i * window.innerHeight, autoKill: false },
      duration: 0.8,
    });
  };

  const fadeIn = (element) => {
    gsap.to(element, {
      opacity: 1,
      y: -30,
      duration: 1.8,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  useEffect(() => {
    //For section scroll
    revealRefs.current.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        onEnter: () => goToSection(i),
      });
      ScrollTrigger.create({
        trigger: panel,
        start: "bottom bottom",
        onEnterBack: () => goToSection(i),
      });
    });

    const config = {
      root: null,
      rootMargin: "10px",
      threshold: 0.9,
    };

    // Add observer old way couldn't make it work with array & react-use useIntersection
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.intersectionRatio > 0.9) {
          item.target.classList.add("fadeIn");
          fadeIn(".fadeIn");
        } else {
          item.target.classList.remove("fadeIn");
        }
      });
    }, config);

    // For texts animation
    revealText.current.forEach((text) => {
      observer.observe(text);
    });
  }, [loading]);

  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        {posts.map((post, i) => {
          const { id, title, content, acf } = post;
          console.log(acf.google_map);
          return (
            <section
              id={`section${i + 1} ${title.rendered}`}
              ref={addToRefs}
              className={`panel main-section section section${i + 1}`}
              style={{
                backgroundImage: `url(${acf.background.url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              key={id}
            >
              <div className="content-container">
                <div className="text-container">
                  <header ref={addToRefTexts}>
                    <h2>{title.rendered}</h2>
                  </header>
                  <article ref={addToRefTexts}>
                    <div
                      className="text-container-paragraph"
                      dangerouslySetInnerHTML={{ __html: content.rendered }}
                    />
                  </article>
                  {!acf.cta_ ? (
                    ""
                  ) : (
                    <div ref={addToRefTexts} className="cta-btn">
                      {acf.cta_}
                    </div>
                  )}
                </div>
                {acf.google_map && (
                  <div className="google-maps">
                    <GoogleMaps
                      lat={acf.google_map.lat}
                      lng={acf.google_map.lng}
                    />
                  </div>
                )}
              </div>
              <AngleDown />
            </section>
          );
        })}
        <AsideNav posts={posts} loading={loading} />
      </motion.section>
    </>
  );
};
