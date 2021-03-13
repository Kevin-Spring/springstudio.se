import React, { useEffect, useRef, useState } from 'react'
import '../styles/_envelope.scss'

export const Envelope = () => {
  const envelope = useRef(null)
  const [envelopeClass, setEnvelopeClass] = useState('envelope-open')

  var envelopeSentAnimation = function () {
    //var envelope.current = $('#envelope')
    //var envelope.currentModule = $('.envelope-code-module')

    /* envelope.currentModule.fadeIn(400)
    $('#envelope').append(
      '<div class="envelope-confirmed-checkmark draw-checkmark"></div>'
    )

    $('html, body').animate(
      {
        scrollTop: $('.behovsanalys-form-section').offset().top,
      },
      500
    ) */

    setTimeout(function () {
      setEnvelopeClass('envelope-close')
    }, 1000)

    // Aktivera om brevet ska öppnas igen
    setTimeout(function () {
      setEnvelopeClass('envelope-open')
    }, 3200)

    setTimeout(function () {
      setEnvelopeClass('envelope-close envelope-is-sent ')
    }, 1800)

    // Aktivera om brevet ska komma tillbaka
    setTimeout(function () {
      envelope.current.classList.remove('envelope-is-sent')
      setEnvelopeClass('envelope-close')
    }, 3000)

    /* setTimeout(function () {
      $('.envelope-confirmed-checkmark').fadeIn(400)
    }, 3200) */
  }

  useEffect(() => {
    envelopeSentAnimation()
    console.log(envelope.current)
  }, [])

  return (
    <div>
      <div class='envelope-wrapper'>
        <div id='envelope' ref={envelope} class={envelopeClass}>
          <div class='envelope-front envelope-front-flap'></div>
          <div class='envelope-front envelope-front-pocket'></div>
          <div class='envelope-letter'>
            <div class='envelope-letter-words envelope-letter-words-line1'></div>
            <div class='envelope-letter-words envelope-letter-words-line2'></div>
            <div class='envelope-letter-words envelope-letter-words-line3'></div>
            <div class='envelope-letter-words envelope-letter-words-line4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
