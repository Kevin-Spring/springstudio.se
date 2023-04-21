import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

//Writing out the html content and adding animations to the content
export const StudioPageContent = ({
  title,
  content,
  content2,
  content3,
  content4,
  content5,
  button,
  background,
  btn,
  btnUrl,
  btnTitle,
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
      <div className="studio-page-content-container">
        {/* {acf.background && 
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
        } */}
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
        <div className="studio-page-text-container">
          {title && (
            <header ref={addToRefTexts}>
              <h3>{title}</h3>
            </header>
          )}
          {content && (
            <article ref={addToRefTexts}>
              <div className="studio-info">
                {content && <p>{content}</p>}
                {content2 && <p>{content2}</p>}
                {content3 && <p>{content3}</p>}
                {content4 && <p>{content4}</p>}
              </div>
            </article>
          )}
          {btn && (
            <div ref={addToRefTexts} className="btn-container">
              <Link to={btnUrl}>
                <div className="studio-btn">{btn}</div>
              </Link>

              {/* <Link to={acf.link_studio.url && acf.link_studio.url}>
              <div ref={addToRefTexts} className="studio-btn">
                {acf.link_studio.title && acf.link_studio.title}
              </div>
            </Link> */}
            </div>
          )}
          {/* <header ref={addToRefTexts}>
            <h3>{acf.title && acf.title}</h3>
          </header> */}
          {/* <article ref={addToRefTexts}>
            // When rendering acf text editors html markup follows the content, hence why wordpress content is rendered instead
            <div
              className="studio-info"
              dangerouslySetInnerHTML={{ __html: content.rendered }}
            />
          </article> */}
        </div>
      </div>
    </>
  );
};
