import React from 'react'
import { StudioSingle } from '../components/StudioSingle'
import { endpoints } from '../endpoints/endpoints'

const url = endpoints[10].url

export const KitchenLoungePage = ({ transition }) => {
  return (
    <>
      <StudioSingle content={url} transition={transition} />
    </>
  )
}
