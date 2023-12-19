'use client'
import { useState } from 'react'
import { GrFormDown, GrFormUp, GrHome } from 'react-icons/gr'

export default function SearchProperties() {
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
      <GrHome />
      <div className=''>
        <p>Propiedad</p>
        <p className='text-xs'>Selecciona el tipo de propiedad</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className='absolute top-[70px] flex flex-col bg-white z-50 p-4 rounded-lg shadow-ligth w-[230px] left-0'>
          <span>Casa</span>
          <span>Chalet</span>
          <span>Piso</span>
          <span>Apartamento</span>
          <span>Bodega</span>
        </div>
      )}
    </div>
  )
}
