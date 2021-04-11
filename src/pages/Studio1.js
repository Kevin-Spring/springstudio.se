import React from 'react'
import { StudioSingle } from '../components/StudioSingle'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[7].url

export const Studio1 = ({ transition }) => {
  return (
    <>
      <StudioSingle content={url} transition={transition} />
    </>
  )
}
