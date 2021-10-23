import React from 'react'
import { useFetch } from '../components/useFetch'
import { endpoints } from '../endpoints/endpoints'
import {Slide} from '../components/Slide'
import { motion } from 'framer-motion'
import { StaticLoading } from '../components/StaticLoading'
import { PageTransition } from '../animations/PageTransition';

//Pointing get request at correct endpoint
const url = endpoints[0].url

//The black flicker on backgrounds might depend on strange transition behaviour

export const FullPageTest = ({transition}) => {
  const { loading, posts } = useFetch(url)

  return (
    <>
    <main className='main-page'>
        <motion.div exit={{ opacity: 0 }} transition={transition}>
            {loading ? <StaticLoading /> : <PageTransition />}
            {!loading && <Slide posts={posts} loading={loading} />}
        </motion.div>
    </main>
    </>
  )
};