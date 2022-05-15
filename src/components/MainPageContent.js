import React, { useRef, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";

//Writing out the html content and adding animations to the content
export const MainPageContent = ({ id, title, content, acf, index }) => {
  const revealText = useRef([]);
  revealText.current = [];

  //A ref which all textcontent is stored in an array
  const addToRefTexts = (el) => {
    if (el && !revealText.current.includes(el)) {
      revealText.current.push(el);
    }
  };

  useEffect(() => {
    const config = {
      root: null,
      rootMargin: "10px",
      threshold: 0.9,
    };

    // Add observer old way couldn't make it work with array & react-use useIntersection
    //Observing which items are in viewport and adding animation class accordingly
    //takes in config settings to determine when content is in viewpage and leaves
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.intersectionRatio > 0.9) {
          item.target.classList.add("fadeIn");
        }
      });
    }, config);

    // For texts animation
    //Looking through text items-array and adding the observer to them
    revealText.current.forEach((text) => {
      observer.observe(text);
    });
  }, []);
  return (
    <>
      <div className="main-page-content-container">
        {/* If image is missing render background, site crashes now lol :) */}
        <picture>
          <source
            srcSet={`${acf.background.sizes["1536x1536"]} 1200w , ${acf.background.url} 2x`}
          />
          <source
            srcSet={`${acf.background.sizes["1536x1536"]} 1024w , ${acf.background.sizes["2048x2048"]} 2x`}
          />
          <source
            srcSet={`${acf.background.sizes.large} 750w, ${acf.background.sizes["1536x1536"]} 2x `}
          />
          <source
            srcSet={`${acf.background.sizes.medium} 375w , ${acf.background.sizes.large} 2x`}
          />
          <img data-src={acf.background.sizes.large} alt="background" />
        </picture>
        <div className="main-page-text-container">
          <div className="main-page-text-container-inner">
            <header ref={addToRefTexts}>
              {index === 0 ? (
                <h1>{title.rendered}</h1>
              ) : (
                <h2>{title.rendered}</h2>
              )}
            </header>
            {/* Following is conditional rendering depending on which content made it out from wordpress */}
            {content.rendered && (
              <article ref={addToRefTexts}>
                <div
                  className="main-page-text-container-paragraph"
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
              </article>
            )}
            {acf.cta && (
              <Link to={acf.cta.link} className="main-page-cta-btn-link">
                <div ref={addToRefTexts} className="main-page-cta-btn">
                  {acf.cta.title}
                </div>
              </Link>
            )}
          </div>
          {acf.facebook || acf.instagram ? (
            <Socials
              fadeRef={addToRefTexts}
              facebook={acf.facebook.url}
              instagram={acf.instagram.url}
            />
          ) : (
            ""
          )}
        </div>
        {acf.maps && (
          <div className="main-page-google-maps">
            <GoogleMaps lat={acf.maps.lat} lng={acf.maps.lng} />
          </div>
        )}
      </div>
    </>
  );
};
