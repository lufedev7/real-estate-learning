'use client'
import { useMap, Popup, Marker } from 'react-leaflet'
import { type MarkerHouseProps } from './MarkerHouse.type'
import { icon } from 'leaflet'
import { housesData } from './MarkerHouse.data'
import Image from 'next/image'
import { FaMapMarkerAlt } from 'react-icons/fa'
export default function MarkerHouse(props: MarkerHouseProps) {
  const { selectMarker } = props
  const fnMap = useMap()
  const customIcon = icon({
    iconUrl: '/assets/marker.svg',
    iconSize: [40, 40],
  })
  return housesData.map(({ id, name, position, image }) => (
    <Marker
      key={id}
      position={position}
      icon={customIcon}
      eventHandlers={{
        click: () => {
          selectMarker(position, fnMap)
        },
      }}
    >
      {' '}
      <Popup>
        <div className='flex items-center mb-2'>
          <span className='mr-4 text-secundary'>
            <FaMapMarkerAlt />
          </span>
          <h5 className='text-md text-secundary'>{}name</h5>
        </div>
        <Image
          src={`/assets/houses/${image}`}
          alt={name}
          width={100}
          height={100}
          className='w-full h-auto'
        />
        <button className=' px-3 py-2 mt-2 text-white rounded-lg bg-secundary'>
          Ver propiedad
        </button>
      </Popup>{' '}
    </Marker>
  ))
}
