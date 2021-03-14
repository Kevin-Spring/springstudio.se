import React from 'react'
import { Envelope } from '../components/Envelope'

/* Test page for animation on validation success on booking form */

export const envelopetest = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        background: 'var(--off-white)',
      }}
    >
      <Envelope />
    </div>
  )
}
