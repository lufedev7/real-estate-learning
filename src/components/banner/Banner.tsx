import FloatSearch from '../floatSearch/FloatSearch'

export default function Banner() {
  return (
    <div className='container relative mx-auto'>
      <div className='pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center'>
        <div className='max-w-3xl text-center text-white'>
          <h2 className='text-5xl font-semibold'>
            Descubre la vivienda ideal para tu familia en todo Tumaco{' '}
          </h2>
          <p className='mt-2 text-xl md:mt-o'>
            Con más de 30 años de experiencia, en LufedevrealState contamos con
            los mejores profecionales para lo que necesita
          </p>
        </div>
        <FloatSearch />
      </div>
    </div>
  )
}
