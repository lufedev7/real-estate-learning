import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import { dataHeader } from '../header/Header.data'
import useWindowSizes from '../../customsHooks/useWindowsSizes'
import { useGlobalContext } from '../../context/OpenMenuMobileContext'
export default function NavbarMobile() {
  const { openMenuMobile } = useGlobalContext()
  const windowSize = useWindowSizes()
  return (
    <div
      className={`${
        openMenuMobile && windowSize < 768
          ? 'absolute z-[1] justify-center left-0 top-10 sm:top-20 grid bg-white  w-full px-4 py-3 '
          : 'hidden'
      } gap-5 md:flex md:top-10 `}
    >
      {dataHeader.map(({ id, name, link }) => (
        <Link
          key={id}
          href={link}
          className='hover:text-secundary hover:border-b-[1px]'
        >
          {name}
        </Link>
      ))}
      {windowSize < 640 && windowSize !== 0 && (
        <div className=''>
          <Link
            href='tel: 3113259753'
            className='flex items-center mb-4 cursor-pointer'
          >
            <BsTelephone className='' />
            <span className='block'>+57-3113259753</span>
          </Link>
          <Link
            href='/login'
            className='my-4 px-3 py-2 text-white rounded-lg bg-secundary hover:bg-black'
          >
            Login
          </Link>
        </div>
      )}
    </div>
  )
}
