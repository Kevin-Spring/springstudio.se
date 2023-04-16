import React from "react";

export const SlideImage = ({
  /* imageSize ,*/ displaySlide,
  displaySlideWebp,
}) => {
  return (
    displaySlide && (
      <div className="slick-slide-inner">
        {console.log(displaySlide, displaySlideWebp)}
        <picture>
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${displaySlideWebp} 730w, ${displaySlideWebp} 1275w,${displaySlideWebp} 1839w,${displaySlideWebp} 2048w`}
            type="image/webp"
          />
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${displaySlide} 730w, ${displaySlide} 1275w,${displaySlide} 1839w,${displaySlide} 2048w`}
            type="image/jpg"
          />
          <img
            src={displaySlide}
            alt="slide image"
            decoding="async"
            loading="lazy"
          />
        </picture>
      </div>
    )
  );
};
