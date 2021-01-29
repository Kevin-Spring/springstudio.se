import React, { useRef, useEffect } from "react";
import { gsap, Power3, TweenLite } from "gsap";
import { Dots } from "./Dots";

export const AsideNav = ({ posts, loading }) => {
  const refDots = useRef([]);
  refDots.current = [];

  const addToRefDots = (el) => {
    if (el && !refDots.current.includes(el)) {
      refDots.current.push(el);
    }
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

    //For dot fade-in animation
    TweenLite.staggerFrom(
      refDots.current,
      1.2,
      {
        opacity: 0,
        x: 40,
        delay: 1,
        ease: Power3.easeOut,
      },
      0.2
    );
  }, [loading]);

  return (
    <>
      <aside className="dots-container">
        <nav>
          <ul>
            {posts.map((post, i) => {
              return (
                <li key={post.id}>
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
    </>
  );
};
