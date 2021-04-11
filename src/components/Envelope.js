import React, { useEffect, useRef, useState } from 'react'
import '../styles/_envelope.scss'

export const Envelope = () => {
  const envelope = useRef(null)
  const [envelopeClass, setEnvelopeClass] = useState('envelope-open')

  var envelopeSentAnimation = function () {
    //Envelope close class
    setTimeout(function () {
      setEnvelopeClass('envelope-close')
    }, 1000)

    // Activate if you would like envelope to open after being sent
    setTimeout(function () {
      setEnvelopeClass('envelope-open')
    }, 3200)

    //Send animation triggered
    setTimeout(function () {
      setEnvelopeClass('envelope-close envelope-is-sent ')
    }, 1800)

    //Activate if you would like the envelope to return on screen after being sent
    setTimeout(function () {
      envelope.current.classList.remove('envelope-is-sent')
      setEnvelopeClass('envelope-close')
    }, 3000)
  }

  useEffect(() => {
    envelopeSentAnimation()
  }, [])

  return (
    <div>
      <div className='envelope-wrapper'>
        <div id='envelope' ref={envelope} className={envelopeClass}>
          <div className='envelope-front envelope-front-flap'></div>
          <div className='envelope-front envelope-front-pocket'></div>
          <div className='envelope-letter'>
            <div className='envelope-letter-words envelope-letter-words-line1'></div>
            <div className='envelope-letter-words envelope-letter-words-line2'></div>
            <div className='envelope-letter-words envelope-letter-words-line3'></div>
            <div className='envelope-letter-words envelope-letter-words-line4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
