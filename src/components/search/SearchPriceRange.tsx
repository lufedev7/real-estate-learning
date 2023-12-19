'use client'
import { useState } from 'react'
import { GrFormDown, GrFormUp, GrTag } from 'react-icons/gr'

export default function SearchPriceRange() {
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
      <GrTag />
      <div className=''>
        <p>Rango de precio</p>
        <p className='text-xs'>Selecciona el rango de precio</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] flex flex-col bg-white z-50 p-4 rounded-lg shadow-ligth w-[230px] left-0'>
          <span>50M - 100M</span>
          <span>100M - 200M</span>
          <span>20M - 300M</span>
          <span>300M - 400M</span>
          <span>400+</span>
        </div>
      )}
    </div>
  )
}
