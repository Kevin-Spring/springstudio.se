import React, { useRef, useEffect } from "react";
import { Dots } from "./Dots";
import { IoTriangleOutline } from "react-icons/io5";
import { gsap, Power3, TweenLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { motion } from "framer-motion";
import { useFetch } from "./useFetch";
import { useFetchNav } from "./useFetchNav";
import { useNavbar } from "./useNavbar";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";

const urlMenu =
  "http://localhost:8080/developement/wp_headless_react-test/wp-json/wp/v2/menu";

const url =
  "http://localhost:8080/developement/wp_headless_react-test/index.php/wp-json/wp/v2/chapters";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Post = () => {
  const location = useLocation();
  const { loading, posts } = useFetch(url);
  const { loadingNav, fetchedNavbarItems } = useFetchNav(urlMenu);
  const { navbarItems, navbarPaths } = useNavbar(
    fetchedNavbarItems,
    loadingNav,
    location
  );
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const refDots = useRef([]);
  refDots.current = [];
  const revealText = useRef([]);
  revealText.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const addToRefDots = (el) => {
    if (el && !refDots.current.includes(el)) {
      refDots.current.push(el);
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
    console.log(element);
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
    //For Dots scroll
    refDots.current.forEach((dot, index) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: ".section" + (index + 1), autoKill: false },
        });
      });
    });
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

    //For dot fade-in animation
    TweenLite.staggerFrom(
      refDots.current,
      0.8,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
      },
      0.2
    );

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
      <Navbar
        navbarItems={navbarItems}
        navbarPaths={navbarPaths}
        loading={loading}
      />

      <motion.section exit={{ opacity: 0 }}>
        {posts.map((post, i) => {
          const { id, title, content, acf } = post;
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
                      dangerouslySetInnerHTML={{ __html: content.rendered }}
                    />
                  </article>
                </div>
              </div>
              <div className="angle angle-down">
                <IoTriangleOutline />
              </div>
            </section>
          );
        })}
        <aside className="dots-container">
          <nav>
            <ul>
              {posts.map((post, i) => {
                return (
                  <li key={post.id} className="dot-li">
                    <a ref={addToRefDots} href={`#section${i + 1}`}>
                      <Dots
                        key={post.id}
                        id={post.id}
                        title={post.title.rendered}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </motion.section>
    </>
  );
};
