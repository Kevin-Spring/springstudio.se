import React from 'react'
import { StudioSingle } from '../components/StudioSingle'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[8].url

export const Studio2 = ({ transition }) => {
  return (
    <>
      <StudioSingle content={url} transition={transition} />
    </>
  )
}
