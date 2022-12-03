import React, { useRef, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";

//Writing out the html content and adding animations to the content
export const MainPageContent = ({
  title,
  background,
  content,
  content2,
  content3,
  heading,
  heading2,
  heading3,
  cta,
  facebook,
  instagram,
  ctaLink,
  titleH1,
  mapsLat,
  mapsLong,
}) => {
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
        <img src={background} alt="background" />
        <div className="main-page-text-container">
          <div className="main-page-text-container-inner">
            {title && (
              <header ref={addToRefTexts}>
                {titleH1 ? <h1>{title}</h1> : <h2>{title}</h2>}
              </header>
            )}

            {content && (
              <article ref={addToRefTexts}>
                <div className="main-page-text-container-paragraph">
                  {heading && <h3 className="p-h4">{heading}</h3>}
                  {content && <p>{content}</p>}
                  {heading2 && <h5 className="p-h4">{heading2}</h5>}
                  {content2 && <p>{content2}</p>}
                  {heading3 && <h6 className="p-h4">{heading3}</h6>}
                  {content3 && <p>{content3}</p>}
                </div>
              </article>
            )}

            {cta && (
              <Link to={ctaLink} className="main-page-cta-btn-link">
                <div ref={addToRefTexts} className="main-page-cta-btn">
                  {cta}
                </div>
              </Link>
            )}

            {facebook || instagram ? (
              <Socials
                fadeRef={addToRefTexts}
                facebook={facebook}
                instagram={instagram}
              />
            ) : (
              ""
            )}

            {/* Following is conditional rendering depending on which content made it out from wordpress */}
            {/* {content.rendered && (
              <article ref={addToRefTexts}>
                <div
                  className="main-page-text-container-paragraph"
                  dangerouslySetInnerHTML={{ __html: content.rendered }}
                />
              </article>
            )} */}
            {/* {acf.cta && (
              <Link to={acf.cta.link} className="main-page-cta-btn-link">
                <div ref={addToRefTexts} className="main-page-cta-btn">
                  {acf.cta.title}
                </div>
              </Link>
            )} */}
          </div>

          {/* {acf.facebook || acf.instagram ? (
            <Socials
              fadeRef={addToRefTexts}
              facebook={acf.facebook.url}
              instagram={acf.instagram.url}
            />
          ) : (
            ""
          )} */}
        </div>

        {/* {acf.maps && (
          <div className="main-page-google-maps">
            <GoogleMaps lat={acf.maps.lat} lng={acf.maps.lng} />
          </div>
        )} */}

        {mapsLat && mapsLong ? (
          <div className="main-page-google-maps">
            <GoogleMaps lat={mapsLat} lng={mapsLong} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
