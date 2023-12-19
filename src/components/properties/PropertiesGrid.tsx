import Link from 'next/link'
import { type PropertiesDataGrid } from './Properties.types'
import { FormatPrice } from '../../utils/FormatPrice'
import Image from 'next/image'
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from 'react-icons/lia'
export default function PropertiesGrid(props: PropertiesDataGrid) {
  const { id, image, location, price, star, bedrooms, bathroom, meters } =
    props.property
  return (
    <div key={id}>
      <Link
        key={id}
        href={`/properties/${id}`}
        className=' shadow-ligth hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer'
      >
        <div className='relative -z-[1]' key={id}>
          <div className='relative'>
            <div className='absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secundary'>
              <LiaStarSolid />
              <span className='ml-1 font-semibold'>{star}</span>
            </div>
            <Image
              src={`/assets/properties/${image}`}
              alt={'Las imagenes de las casas '}
              width={150}
              height={150}
              className='object-cover w-full h-[200px] rounded-t-2xl'
            />
            <div className='px-3 py-5'>
              <p className='text-secundary'>{location}</p>
              <p className='font-semibold'>{FormatPrice(price)}</p>
              <div className='gap-4 mt-2 lg:flex'>
                <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                  <LiaBedSolid />
                  <span className='ml-2'>{bedrooms}</span>
                </div>
                <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                  <LiaBathSolid />
                  <span className='ml-2'>{bathroom}</span>
                </div>
                <div className='flex items-center my-2 justify-center px-2 py-1 rounded-lg bg-slate-300/30'>
                  <LiaRulerCombinedSolid />
                  <span className='ml-2'>{meters}</span>
                </div>
              </div>
            </div>
          </div>
          {location}
        </div>
      </Link>
    </div>
  )
}
