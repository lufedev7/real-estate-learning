'use client'
import { type PropertiesData } from './Properties.types'
import { dataProperties } from './Properties.data'
import useProperties from '../../customsHooks/useProperties'
import InfiniteScroll from 'react-infinite-scroll-component'
import PropertiesGrid from './PropertiesGrid'
import { motion } from 'framer-motion'
import { Transition } from '../transitions/Transition'

export default function properties() {
  const { properties, handleLoadMore, last } = useProperties(dataProperties)
  return (
    <Transition className='px-4 my-8 md:py-20 md:px-40'>
      <InfiniteScroll
        dataLength={properties.length}
        next={handleLoadMore}
        key={'non-unique'}
        hasMore={last}
        loader={<h4>Loading.....</h4>}
        endMessage={
          <p
            className='text-green-800 font-bold text-2xl'
            style={{ textAlign: 'center' }}
          >
            <b>Super!!! Lo has visto todo </b>
          </p>
        }
      >
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
          {properties.map((property: PropertiesData) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <PropertiesGrid key={property.id} property={property} />
            </motion.div>
          ))}
        </div>
      </InfiniteScroll>
    </Transition>
  )
}
