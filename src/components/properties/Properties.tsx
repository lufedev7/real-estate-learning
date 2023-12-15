'use client'
import React from 'react'
import Image from 'next/image'
import { type PropertiesData } from './Properties.types'
import { dataProperties } from './Properties.data'
import { FormatPrice } from '../../utils/FormatPrice'
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from 'react-icons/lia'
import useProperties from '../../customsHooks/useProperties'
import InfiniteScroll from 'react-infinite-scroll-component'
import Link from 'next/link'
export default function properties() {
  const { properties, handleLoadMore, last } = useProperties(dataProperties)
  console.log(last)
  return (
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
      <div>
        {properties.map((property: PropertiesData) => (
          <div key={property.id}>
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className=' shadow-ligth hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer'
            >
              <div className='relative -z-[1]' key={property.id}>
                <div className='relative'>
                  <div className='absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secundary'>
                    <LiaStarSolid />
                    <span className='ml-1 font-semibold'>{property.star}</span>
                  </div>
                  <Image
                    src={`/assets/properties/${property.image}`}
                    alt={'Las imagenes de las casas '}
                    width={150}
                    height={150}
                    className='object-cover w-full h-[200px] rounded-t-2xl'
                  />
                  <div className='px-3 py-5'>
                    <p className='text-secundary'>{property.location}</p>
                    <p className='font-semibold'>
                      {FormatPrice(property.price)}
                    </p>
                    <div className='gap-4 mt-2 lg:flex'>
                      <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                        <LiaBedSolid />
                        <span className='ml-2'>{property.bedrooms}</span>
                      </div>
                      <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                        <LiaBathSolid />
                        <span className='ml-2'>{property.bathroom}</span>
                      </div>
                      <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                        <LiaRulerCombinedSolid />
                        <span className='ml-2'>{property.meters}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {property.location}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  )
}
