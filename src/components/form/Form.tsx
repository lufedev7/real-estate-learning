import Image from 'next/image'

export default function Form() {
  return (
    <div className='px-3'>
      <div className='py-4 px-3 rounded-lg shadow-ligth'>
        <div className='flex gap-4'>
          <Image
            src='/assets/comercial.png'
            alt={'comercial'}
            width={50}
            height={50}
            className='border-2 rounded-full border-secundary'
          />
          <div className=''>
            <p>Fernando Angarita</p>
            <p className='text-secundary font-semibold'>Comercial</p>
          </div>
        </div>
        <div className='my-5'>
          <div className=''>
            <label className='text-sm text-secundary'>Nombre</label>
            <div className='mt-2'>
              <input
                type='text'
                className='w-full px-3 py-1.5 rounded-md border-0 border-secundary text-secundary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm'
              />
            </div>
          </div>
        </div>
        <div className='my-5'>
          <div className=''>
            <label className='text-sm text-secundary'>Telefono</label>
            <div className='mt-2'>
              <input
                id='phone'
                name='phone'
                type='phone'
                autoComplete='phone'
                className='w-full px-3 py-1.5 rounded-md border-0 border-secundary text-secundary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm'
              />
            </div>
          </div>
        </div>
        <div className='my-5'>
          <div className=''>
            <label className='text-sm text-secundary'>Descripción</label>
            <div className='mt-2'>
              <textarea
                name='description'
                rows={3}
                defaultValue={''}
                className='w-full px-3 py-1.5 rounded-md border-0 border-secundary text-secundary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset text-sm'
              />
            </div>
          </div>
          <div className='flex justify-between gap-5 my-4'>
            <button className='bg-secundary px-4 py-2 text-white rounded-lg text-sm'>
              Enviar mensaje
            </button>
            <button className='border-[1px] border-secundary text-secundary px-2 py-2  rounded-lg text-sm'>
              Llamar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
