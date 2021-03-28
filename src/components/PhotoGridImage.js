import React from 'react'

export const PhotoGridImage = ({ imageSize, imageUrl }) => {
  return (
    <div className='photo-grid-img-inner-container'>
      <picture>
        <source srcSet={`${imageSize['1536x1536']} 1200w , ${imageUrl} 2x`} />
        <source srcSet={`${imageSize['1536x1536']} 1024w , ${imageSize['2048x2048']} 2x`} />
        <source srcSet={`${imageSize.large} 750w, ${imageSize['1536x1536']} 2x `} />
        <source srcSet={`${imageSize.medium} 375w , ${imageSize.large} 2x`} />
        <img src={imageSize.large} alt='gallery' />
      </picture>
    </div>
  )
}
