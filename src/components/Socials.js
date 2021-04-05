import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { AiOutlineMinus } from 'react-icons/ai'

export const Socials = ({ facebook, instagram, fadeRef }) => {
  return (
    <>
      <div ref={fadeRef} className='studio-single-socials'>
        <p>Follow us on</p>
        <AiOutlineMinus className='line' />
        <div className='studio-single-socials-icons'>
          <a
            href={facebook ? facebook : 'https://facebook.com/SpringStudioSwe'}
            aria-label='Facebook'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebook />
          </a>
          <a
            href={
              instagram
                ? instagram
                : 'https://www.instagram.com/springstudiostockholm_/'
            }
            aria-label='Instagram'
            target='_blank'
            rel='noreferrer'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  )
}
