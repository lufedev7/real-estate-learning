'use client'
import { CiMenuFries } from 'react-icons/ci'
import { BsTelephone } from 'react-icons/bs'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import { useGlobalContext } from '../../context/OpenMenuMobileContext'
export default function Header() {
  const { openMenuMobile, setOpenMenuMobile } = useGlobalContext()
  return (
    <div className='container mx-auto my-4'>
      <div className='flex items-center justify-between px-5 md:px-4'>
        <Link href='/'>
          <h1 className='font-medium'>LufedevRealState</h1>
        </Link>
        <CiMenuFries
          className='block text-2xl md:hidden cursor-pointer '
          onClick={() => {
            setOpenMenuMobile(!openMenuMobile)
          }}
        />
        <Navbar />
        <div className='hidden sm:flex items-center gap-2 md:gap-2'>
          <Link
            href='tel: 3113259753'
            className='flex items-center gap-4 cursor-pointer'
          >
            <BsTelephone className='hidden sm:inline' />
            <span className='hidden md:block'>+57-3113259753</span>
          </Link>
          <Link
            href='/login'
            className='hidden sm:inline px-3 py-2 text-white rounded-lg bg-secundary hover:bg-black'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
