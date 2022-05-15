import React, { useEffect, useRef } from "react";
import { useFetch } from "./useFetch";
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
import { StaticLoading } from "./StaticLoading";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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

export const StudioSingle = ({ content, transition }) => {
  /* Using custom hook to fetch content, passing in the endpoint */
  const { loading, posts } = useFetch(content);

  const fadeInText = useRef([]);
  fadeInText.current = [];

  //A ref which all textcontent is stored in an array
  const addToFadeInTexts = (el) => {
    if (el && !fadeInText.current.includes(el)) {
      fadeInText.current.push(el);
    }
  };

  useEffect(() => {
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
  }, [loading]);

  return (
    <motion.main
      className="studio-sigle-main"
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {loading ? <StaticLoading /> : <PageTransition />}
      {!loading && (
        <div key={posts.id}>
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
                {posts.acf.title}
              </motion.h1>
              <motion.p variants={motionParagraph}>
                {posts.acf.preamble}
              </motion.p>
            </header>
            <motion.span variants={motionNumber} className="studio-number">
              {posts.acf.studio_number}
            </motion.span>
            <VscArrowDown className="studio-single-hero-arrow" />
          </motion.section>

          <section className="studio-single-slider-sec">
            <div className="text-container">
              <h2 ref={addToFadeInTexts} className="fade">
                {posts.acf.slides_section.slide_title}
              </h2>
              <p ref={addToFadeInTexts} className="fade">
                {posts.acf.slides_section.slide_text}
              </p>
            </div>

            <Slider {...settings}>
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_1.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_1.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_2.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_2.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_3.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_3.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_4.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_4.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_5.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_5.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_6.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_6.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_7.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_7.url}
              />
              <SlideImage
                imageSize={posts.acf.slides_section.slides.slide_8.sizes}
                imageUrl={posts.acf.slides_section.slides.slide_8.url}
              />
            </Slider>
          </section>

          <section className="studio-single-image-grid-sec">
            <h2 ref={addToFadeInTexts} className="fade">
              {posts.acf.photo_gallery.gallery_title}
            </h2>

            <p ref={addToFadeInTexts} className="fade">
              {posts.acf.photo_gallery.gallery_text}
            </p>

            <div className="studio-single-photo-grid-container">
              <div className="photo-grid-row">
                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_1.image_1.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_1.image_1.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_1.image_1.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_1.image_2.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_1.image_2.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_1.image_2.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_1.image_3.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_1.image_3.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_1.image_3.meta_data
                  }
                />
              </div>
              <div className="photo-grid-row">
                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_2.image_1.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_2.image_1.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_2.image_1.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_2.image_2.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_2.image_2.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_2.image_2.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_2.image_3.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_2.image_3.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_2.image_3.meta_data
                  }
                />
              </div>

              <div className="photo-grid-row">
                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_3.image_1.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_3.image_1.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_3.image_1.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_3.image_2.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_3.image_2.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_3.image_2.meta_data
                  }
                />

                <PhotoGridImage
                  imageSize={
                    posts.acf.photo_gallery.gallery_row_3.image_3.image.sizes
                  }
                  imageUrl={
                    posts.acf.photo_gallery.gallery_row_3.image_3.image.url
                  }
                  metaData={
                    posts.acf.photo_gallery.gallery_row_3.image_3.meta_data
                  }
                />
              </div>
            </div>
          </section>

          <section className="studio-single-floorplan-sec">
            <div className="floorplan-img-container">
              <picture>
                <source
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
                />
                <img
                  data-src={
                    posts.acf.floorplan_section.floorplan_image.sizes.large
                  }
                  alt="floorplan"
                />
              </picture>
            </div>
            <div className="text-container">
              <h2 ref={addToFadeInTexts} className="fade">
                {posts.acf.floorplan_section.floorplan_title}
              </h2>
              <p ref={addToFadeInTexts} className="fade">
                {posts.acf.floorplan_section.floorplan_text}
              </p>
            </div>
          </section>

          <section className="studio-single-contact-section">
            <h2 ref={addToFadeInTexts} className="fade">
              {posts.acf.contact_section.contact_title}
            </h2>
            <p ref={addToFadeInTexts} className="fade">
              {posts.acf.contact_section.contact_text}
            </p>
            <div ref={addToFadeInTexts} className="fade">
              <Link
                to={posts.acf.contact_section.contact_cta.url}
                className="booking-link"
              >
                {posts.acf.contact_section.contact_cta.title}{" "}
                <VscArrowRight className="booking-arrow" />
              </Link>
            </div>

            <div
              ref={addToFadeInTexts}
              className="studio-single-socials-container"
            >
              <Socials />
            </div>
          </section>
        </div>
      )}
    </motion.main>
  );
};
