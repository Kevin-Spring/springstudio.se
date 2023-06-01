import React, { useRef, useEffect } from "react";
import GoogleMaps from "./GoogleMaps";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";

export const MainPageContent = ({
  title,
  background,
  content,
  email_1,
  email_2,
  phone,
  address,
  heading,
  heading_2,
  heading_3,
  cta,
  facebook,
  instagram,
  ctaLink,
  ctaLinkTarget,
  titleH1,
  mapsLat,
  mapsLong,
}) => {
  const revealText = useRef([]);
  revealText.current = [];

  // A ref which all textcontent is stored in an array
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

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((item) => {
        if (item.intersectionRatio > 0.9) {
          item.target.classList.add("fadeIn");
        }
      });
    }, config);

    revealText.current.forEach((text) => {
      observer.observe(text);
    });
  }, []);
  return (
    <>
      <div className="main-page-content-container">
        <picture>
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${background[1]} 730w, ${background[3]} 1275w,${background[5]} 1839w,${background[7]} 2048w`}
            type="image/webp"
          />
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${background[0]} 730w, ${background[2]} 1275w,${background[4]} 1839w,${background[6]} 2048w`}
            type="image/jpg"
          />
          <img
            src={background[6]}
            alt="studio environment"
            decoding="async"
            loading="lazy"
          />
        </picture>

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
                  {content && <p>{content}</p>}
                </div>
              </article>
            )}

            {email_1 && (
              <article ref={addToRefTexts}>
                <div className="main-page-text-container-paragraph">
                  {heading && <h3 className="p-h4">{heading}</h3>}
                  {email_1 && <a href={"mailto:" + { email_1 }}>{email_1}</a>}
                  {phone && <a href={"tel:" + { phone }}>{phone}</a>}
                  {heading_2 && <h3 className="p-h4">{heading_2}</h3>}
                  {email_2 && <a href={"mailto:" + { email_2 }}>{email_2}</a>}
                  {heading_3 && <h3 className="p-h4">{heading_3}</h3>}
                  {address && (
                    <a href="https://goo.gl/maps/oALdgUpjJZAPVK1Z8">
                      {address}
                    </a>
                  )}
                </div>
              </article>
            )}

            {cta && (
              <a
                ref={addToRefTexts}
                href={ctaLink}
                className="main-page-cta-btn-link"
                target={ctaLinkTarget}
              >
                <div className="main-page-cta-btn">{cta}</div>
              </a>
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
