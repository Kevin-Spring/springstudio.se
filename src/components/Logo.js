import React, { useRef, useEffect } from "react";
import { useFetch } from "./useFetch";
import { Power3, TweenLite } from "gsap";

const url =
  "http://localhost:8080/developement/wp_headless_react-test/wp-json/wp/v2/media/21";

export const Logo = () => {
  const { loading, posts } = useFetch(url);
  const logo = useRef(null);

  useEffect(() => {
    TweenLite.to(logo.current, 0.8, {
      opacity: 1,
      x: 10,
      delay: 1.5,
      ease: Power3.easeOut,
    });
  }, [loading]);

  return (
    <>
      <div className="logo">
        {loading ? (
          ""
        ) : (
          <img
            ref={logo}
            src={posts.guid.rendered}
            alt="logo"
            style={{ opacity: 0 }}
          />
        )}
        {/* <img src={posts.guid.rendered} alt="logo" /> */}
      </div>
    </>
  );
};
