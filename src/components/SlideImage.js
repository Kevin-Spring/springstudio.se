import React from 'react'

export const SlideImage = ({ imageSize, imageUrl }) => {
  return (
    <div className='slick-slide-inner'>
      <picture>
        <source srcSet={`${imageSize['1536x1536']} 1200w , ${imageUrl} 2x`} />
        <source srcSet={`${imageSize['1536x1536']} 1024w , ${imageSize['2048x2048']} 2x`} />
        <source srcSet={`${imageSize.large} 750w, ${imageSize['1536x1536']} 2x `} />
        <source srcSet={`${imageSize.medium} 375w , ${imageSize.large} 2x`} />
        <img data-src={imageSize.large} alt='slide' />
      </picture>
    </div>
  )
}
