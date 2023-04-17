import React from "react";

export const SlideImage = ({
  /* imageSize ,*/ display_slide,
  display_slide_webp,
}) => {
  return (
    display_slide && (
      <div className="slick-slide-inner">
        <picture>
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${display_slide_webp} 730w, ${display_slide_webp} 1275w,${display_slide_webp} 1839w,${display_slide_webp} 2048w`}
            type="image/webp"
          />
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${display_slide} 730w, ${display_slide} 1275w,${display_slide} 1839w,${display_slide} 2048w`}
            type="image/jpg"
          />
          <img
            src={display_slide}
            alt="slide image"
            decoding="async"
            loading="lazy"
          />
        </picture>
      </div>
    )
  );
};
