import React from 'react'
import { Studio } from '../components/Studio'
import { motion } from 'framer-motion'
import '../styles/css/_studios.css'
import { useFetch } from '../components/useFetch'
import { endpoints } from '../endpoints/endpoints'
import { StaticLoading } from '../components/StaticLoading'
import { PageTransition } from '../animations/PageTransition'

/* Setting up component with page transition and exit-prop from npm package framer motion to make page transitions smooth
then loads component with content */

//Pointing get request at correct endpoint
const url = endpoints[1].url

export const Studios = ({ transition }) => {
  const { loading, posts } = useFetch(url)

  return (
        <motion.main exit={{ opacity: 0 }} transition={transition} className='studio-page'>
            {loading ? <StaticLoading /> : <PageTransition />}
            {!loading && <Studio posts={posts} loading={loading} />}
        </motion.main>
  )
};

