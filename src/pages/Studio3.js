import React from 'react'
import { StudioSingle } from '../components/StudioSingle'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[9].url

export const Studio3 = ({ transition }) => {
  return (
    <>
      <StudioSingle content={url} transition={transition} />
    </>
  )
}
