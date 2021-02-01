import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { AsideNav } from "./AsideNav";
import { AngleDown } from "./AngleDown";
import { endpoints } from "../endpoints/endpoints";

const url = endpoints[1].url;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Studio = () => {
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
      duration: 1.3,
      ease: "power4.out",
      stagger: {
        amount: 0.2,
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
        {posts
          .slice(0)
          .reverse()
          .map((post, i) => {
            const { id, title, content, acf } = post;
            return (
              <section
                id={`section${i + 1} ${title.rendered}`}
                ref={addToRefs}
                className={`main-section section section${i + 1} studio${
                  i + 1
                }`}
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
                      <h3>{title.rendered}</h3>
                    </header>
                    <article ref={addToRefTexts}>
                      <div
                        className="studio-info"
                        dangerouslySetInnerHTML={{ __html: content.rendered }}
                      />
                    </article>
                    <div ref={addToRefTexts} className="btn-container">
                      <div className="studio-btn">{acf.button}</div>
                      <Link to="/three">
                        <div className="studio-btn">{acf.button_3d} (demo)</div>
                      </Link>
                    </div>
                  </div>
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
