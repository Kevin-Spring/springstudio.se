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
  slideItems,
  gallery_title,
  gallery_text,
  gallery_image_1,
  gallery_image_2,
  gallery_image_3,
  gallery_image_4,
  gallery_image_5,
  gallery_image_6,
  gallery_image_7,
  gallery_image_8,
  gallery_image_9,
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
              <h2 ref={addToFadeInTexts} className="fade">
                {slide_title}
              </h2>
              <p ref={addToFadeInTexts} className="fade">
                {slide_text}
              </p>
            </div>
            {slides && (
              <Slider {...settings}>
                <SlideImage
                  displaySlide={slideItems[0]}
                  displaySlideWebp={slideItems[8]}
                />
                <SlideImage
                  displaySlide={slideItems[1]}
                  displaySlideWebp={slideItems[9]}
                />
                <SlideImage
                  displaySlide={slideItems[2]}
                  displaySlideWebp={slideItems[10]}
                />
                <SlideImage
                  displaySlide={slideItems[3]}
                  displaySlideWebp={slideItems[11]}
                />
                <SlideImage
                  displaySlide={slideItems[4]}
                  displaySlideWebp={slideItems[12]}
                />
                <SlideImage
                  displaySlide={slideItems[5]}
                  displaySlideWebp={slideItems[13]}
                />
                <SlideImage
                  displaySlide={slideItems[6]}
                  displaySlideWebp={slideItems[13]}
                />
                <SlideImage
                  displaySlide={slideItems[7]}
                  displaySlideWebp={slideItems[14]}
                />
              </Slider>
            )}
          </section>
        )}

        {gallery_title && (
          <section className="studio-single-image-grid-sec">
            <h2 ref={addToFadeInTexts} className="fade">
              {gallery_title}
            </h2>

            <p ref={addToFadeInTexts} className="fade">
              {gallery_text}
            </p>

            <div className="studio-single-photo-grid-container">
              <div className="photo-grid-row">
                {gallery_image_1 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_1.image.sizes} */
                    image={gallery_image_1}
                    /* metaData={gallery_row_1.image_1.meta_data} */
                  />
                )}

                {gallery_image_2 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_2.image.sizes} */
                    image={gallery_image_2}
                    /* metaData={gallery_row_1.image_2.meta_data} */
                  />
                )}

                {gallery_image_3 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_1.image_3.image.sizes} */
                    image={gallery_image_3}
                    /* metaData={gallery_row_1.image_3.meta_data} */
                  />
                )}
              </div>
              <div className="photo-grid-row">
                {gallery_image_4 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_1.image.sizes} */
                    image={gallery_image_4}
                    /* metaData={gallery_row_2.image_1.meta_data} */
                  />
                )}

                {gallery_image_5 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_2.image.sizes} */
                    image={gallery_image_5}
                    /* metaData={gallery_row_2.image_2.meta_data} */
                  />
                )}

                {gallery_image_6 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_2.image_3.image.sizes} */
                    image={gallery_image_6}
                    /* metaData={gallery_row_2.image_3.meta_data} */
                  />
                )}
              </div>
              <div className="photo-grid-row">
                {gallery_image_7 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_1.image.sizes} */
                    image={gallery_image_7}
                    /* metaData={gallery_row_3.image_1.meta_data} */
                  />
                )}

                {gallery_image_8 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_2.image.sizes} */
                    image={gallery_image_8}
                    /* metaData={gallery_row_3.image_2.meta_data} */
                  />
                )}

                {gallery_image_9 && (
                  <PhotoGridImage
                    /* imageSize={gallery_row_3.image_3.image.sizes} */
                    image={gallery_image_9}
                    /* metaData={gallery_row_3.image_3.meta_data} */
                  />
                )}
              </div>
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
                  <img src={floorplan_image} alt="floorplan" />
                </picture>
              )}
            </div>
            <div className="text-container">
              <h2 ref={addToFadeInTexts} className="fade">
                {floorplan_title}
              </h2>
              <p ref={addToFadeInTexts} className="fade">
                {floorplan_text}
              </p>
            </div>
          </section>
        )}

        {contact_title && (
          <section className="studio-single-contact-section">
            <h2 ref={addToFadeInTexts} className="fade">
              {contact_title}
            </h2>
            <p ref={addToFadeInTexts} className="fade">
              {contact_text}
            </p>

            {contact_cta_url && (
              <div ref={addToFadeInTexts} className="fade">
                <Link to={contact_cta_url} className="booking-link">
                  {contact_cta_title}{" "}
                  <VscArrowRight className="booking-arrow" />
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
