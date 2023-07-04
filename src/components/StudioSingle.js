import React, { useEffect, useRef } from "react";
// import { useFetch } from "./useFetch";
import { PageTransition } from "../animations/PageTransition";
import { motion } from "framer-motion";
import { VscArrowDown, VscArrowRight } from "react-icons/vsc";
import Slider from "react-slick";
import "../styles/css/_studioSingle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Socials } from "./Socials";
import { SlideImage } from "./SlideImage";
import { PhotoGridImage } from "./PhotoGridImage";
// import { StaticLoading } from "./StaticLoading";

var settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const motionContent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 1.8 },
  },
};

const motionTitle = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const motionParagraph = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};
const motionNumber = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 0.3,
    transition: {
      duration: 0.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const StudioSingle = ({
  /* content, */ transition,
  title,
  preamble,
  studio_number,
  slide_title,
  slide_text,
  slides,
  slide_items,
  gallery_title,
  gallery_text,
  gallery_image,
  floorplan_title,
  floorplan_image,
  floorplan_text,
  contact_title,
  contact_text,
  contact_cta_url,
  contact_cta_title,
}) => {
  /* Using custom hook to fetch content, passing in the endpoint */
  // const { loading, posts } = useFetch(content);

  const fadeInText = useRef([]);
  fadeInText.current = [];

  //A ref which all textcontent is stored in an array
  const addToFadeInTexts = (el) => {
    if (el && !fadeInText.current.includes(el)) {
      fadeInText.current.push(el);
    }
  };

  useEffect(
    () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

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

      // For texts animation
      //Looking through text items-array and adding the observer to them
      fadeInText.current.forEach((text) => {
        observer.observe(text);
      });
    },
    [
      /* loading */
    ]
  );

  return (
    <motion.main
      className="studio-sigle-main"
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {/* {loading ? <StaticLoading /> : <PageTransition />} */}

      <PageTransition />
      {/* {!loading && ( */}
      <div /* key={posts.id} */>
        <motion.section
          className="studio-single-hero-sec"
          initial="initial"
          animate="animate"
          variants={motionContent}
        >
          <header className="studio-single-hero-header">
            <motion.h1
              className="studio-single-hero-header-title"
              variants={motionTitle}
            >
              {title}
            </motion.h1>
            <motion.p variants={motionParagraph}>{preamble}</motion.p>
          </header>
          <motion.span variants={motionNumber} className="studio-number">
            {studio_number}
          </motion.span>
          <VscArrowDown className="studio-single-hero-arrow" />
        </motion.section>

        {slide_title && (
          <section className="studio-single-slider-sec">
            <div className="text-container">
              <div ref={addToFadeInTexts} className="text-wrapper">
                <h2 className="fade">{slide_title}</h2>
              </div>
              <div ref={addToFadeInTexts} className="text-wrapper">
                <p className="fade">{slide_text}</p>
              </div>
            </div>
            {slides && (
              <Slider {...settings}>
                <SlideImage
                  display_slide={slide_items[0]}
                  display_slide_webp={slide_items[8]}
                />
                <SlideImage
                  display_slide={slide_items[1]}
                  display_slide_webp={slide_items[9]}
                />
                <SlideImage
                  display_slide={slide_items[2]}
                  display_slide_webp={slide_items[10]}
                />
                <SlideImage
                  display_slide={slide_items[3]}
                  display_slide_webp={slide_items[11]}
                />
                <SlideImage
                  display_slide={slide_items[4]}
                  display_slide_webp={slide_items[12]}
                />
                <SlideImage
                  display_slide={slide_items[5]}
                  display_slide_webp={slide_items[13]}
                />
                <SlideImage
                  display_slide={slide_items[6]}
                  display_slide_webp={slide_items[13]}
                />
                <SlideImage
                  display_slide={slide_items[7]}
                  display_slide_webp={slide_items[14]}
                />
              </Slider>
            )}
          </section>
        )}

        {gallery_title && (
          <section className="studio-single-image-grid-sec">
            <div ref={addToFadeInTexts} className="text-wrapper">
              <h2 className="fade">{gallery_title}</h2>
            </div>

            <div ref={addToFadeInTexts} className="text-wrapper">
              <p className="fade">{gallery_text}</p>
            </div>

            <div className="studio-single-photo-grid-container">
              {gallery_image && (
                <div className="photo-grid-row">
                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_1.image.sizes} */
                    gallery_item={gallery_image[0]}
                    gallery_item_webp={gallery_image[9]}
                    /* metaData={gallery_row_1.image_1.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_2.image.sizes} */
                    gallery_item={gallery_image[1]}
                    gallery_item_webp={gallery_image[10]}
                    /* metaData={gallery_row_1.image_2.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_3.image.sizes} */
                    gallery_item={gallery_image[2]}
                    gallery_item_webp={gallery_image[11]}
                    /* metaData={gallery_row_1.image_3.meta_data} */
                  />
                </div>
              )}
              {gallery_image && (
                <div className="photo-grid-row">
                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_1.image.sizes} */
                    gallery_item={gallery_image[3]}
                    gallery_item_webp={gallery_image[12]}
                    /* metaData={gallery_row_2.image_1.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_2.image.sizes} */
                    gallery_item={gallery_image[4]}
                    gallery_item_webp={gallery_image[13]}
                    /* metaData={gallery_row_2.image_2.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_3.image.sizes} */
                    gallery_item={gallery_image[5]}
                    gallery_item_webp={gallery_image[14]}
                    /* metaData={gallery_row_2.image_3.meta_data} */
                  />
                </div>
              )}
              {gallery_image && (
                <div className="photo-grid-row">
                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_1.image.sizes} */
                    gallery_item={gallery_image[6]}
                    gallery_item_webp={gallery_image[15]}
                    /* metaData={gallery_row_3.image_1.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_2.image.sizes} */
                    gallery_item={gallery_image[7]}
                    gallery_item_webp={gallery_image[16]}
                    /* metaData={gallery_row_3.image_2.meta_data} */
                  />

                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_3.image.sizes} */
                    gallery_item={gallery_image[8]}
                    gallery_item_webp={gallery_image[17]}
                    /* metaData={gallery_row_3.image_3.meta_data} */
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {floorplan_title && (
          <section className="studio-single-floorplan-sec">
            <div className="floorplan-img-container">
              {floorplan_image && (
                <picture>
                  {/* <source
                    srcSet={`${posts.acf.floorplan_section.floorplan_image.sizes["1536x1536"]} 1200w , ${posts.acf.floorplan_section.floorplan_image.url} 2x`}
                  />
                  <source
                    srcSet={`${posts.acf.floorplan_section.floorplan_image.sizes["1536x1536"]} 1024w , ${posts.acf.floorplan_section.floorplan_image.sizes["2048x2048"]} 2x`}
                  />
                  <source
                    srcSet={`${posts.acf.floorplan_section.floorplan_image.sizes.large} 750w, ${posts.acf.floorplan_section.floorplan_image.sizes["1536x1536"]} 2x `}
                  />
                  <source
                    srcSet={`${posts.acf.floorplan_section.floorplan_image.sizes.medium} 375w , ${posts.acf.floorplan_section.floorplan_image.sizes.large} 2x`}
                  /> */}

                  <source
                    sizes="(max-width: 2048px) 100vw, 2048px"
                    srcSet={`${floorplan_image[1]} 730w, ${floorplan_image[1]} 1275w,${floorplan_image[1]} 1839w,${floorplan_image[1]} 2048w`}
                    type="image/webp"
                  />
                  <source
                    sizes="(max-width: 2048px) 100vw, 2048px"
                    srcSet={`${floorplan_image[0]} 730w, ${floorplan_image[0]} 1275w,${floorplan_image[0]} 1839w,${floorplan_image[0]} 2048w`}
                    type="image/jpg"
                  />
                  <img
                    src={floorplan_image}
                    alt="floorplan"
                    decoding="async"
                    loading="lazy"
                  />
                </picture>
              )}
            </div>
            <div className="text-container">
              <div ref={addToFadeInTexts} className="text-wrapper">
                <h2 className="fade">{floorplan_title}</h2>
              </div>
              <div ref={addToFadeInTexts} className="text-wrapper">
                <p className="fade">{floorplan_text}</p>
              </div>
            </div>
          </section>
        )}

        {contact_title && (
          <section className="studio-single-contact-section">
            <div ref={addToFadeInTexts} className="text-wrapper">
              <h2 className="fade">{contact_title}</h2>
            </div>
            <div ref={addToFadeInTexts} className="text-wrapper">
              <p className="fade">{contact_text}</p>
            </div>

            {contact_cta_url && (
              <div
                ref={addToFadeInTexts}
                className="text-wrapper button-wrapper"
              >
                <Link to={contact_cta_url} className="booking-link">
                  {contact_cta_title}{" "}
                  {/* <VscArrowRight className="booking-arrow" /> */}
                </Link>
              </div>
            )}
            <div
              ref={addToFadeInTexts}
              className="studio-single-socials-container"
            >
              <Socials />
            </div>
          </section>
        )}
      </div>
      {/* )} */}
    </motion.main>
  );
};
