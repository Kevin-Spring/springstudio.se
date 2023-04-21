import React from "react";

export const PhotoGridImage = ({
  /* imageSize, imageUrl, metaData */ gallery_item,
  gallery_item_webp,
}) => {
  return (
    <div className="photo-grid-img-container">
      <div className="photo-grid-img-inner-container">
        <picture>
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${gallery_item_webp} 730w, ${gallery_item_webp} 1275w,${gallery_item_webp} 1839w,${gallery_item_webp} 2048w`}
            type="image/webp"
          />
          <source
            sizes="(max-width: 2048px) 100vw, 2048px"
            srcSet={`${gallery_item} 730w, ${gallery_item} 1275w,${gallery_item} 1839w,${gallery_item} 2048w`}
            type="image/jpg"
          />
          <img
            src={gallery_item}
            alt="gallery of different parts of the studio"
            decoding="async"
            loading="lazy"
          />
        </picture>
        {/* <div className='photo-meta'>
          <p>{metaData.production_company}</p>
          <p>{metaData.job_title}</p>
          <p>{metaData.photographer}</p>
          <p>{metaData.make_up}</p>
          <p>{metaData.set_design}</p>
          <p>{metaData.studio}</p>
        </div> */}
      </div>
    </div>
  );
};
