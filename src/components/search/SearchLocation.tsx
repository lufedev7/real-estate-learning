'use client'
import { useState } from 'react'
import { GrLocation, GrFormDown, GrFormUp } from 'react-icons/gr'
export function SearchLocation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
      onClick={() => {
        setIsOpen(!isOpen)
      }}
      onKeyDown={() => {
        setIsOpen(!isOpen)
      }}
    >
      <GrLocation />
      <div className=''>
        <p>Localizacion</p>
        <p className='text-xs'>Selecciona tu localización</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] flex flex-col bg-white z-50 p-4 rounded-lg shadow-ligth w-[230px] left-0'>
          <span>Cali</span>
          <span>Pasto</span>
          <span>Popayan</span>
          <span>Bogota</span>
          <span>Medellin</span>
        </div>
      )}
    </div>
  )
}
