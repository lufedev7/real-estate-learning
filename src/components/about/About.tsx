import { Transition } from '../transitions/Transition'
import Image from 'next/image'
export default function About() {
  return (
    <Transition className='grid gap-4 px-4 py-8 md:px-36 md:py-44 md:grid-cols-2'>
      <div
        className='flex flex-col items-center justify-center max-w-xl mb-7'
        id='about'
      >
        <h4 className='text-secundary'>Sobre nosotros</h4>
        <h2 className='my-4 text-3xl font-semibold'>
          Mas de 2.000 viviendas paracomprar en Colombia
        </h2>
        <p className='mb-10 mt-7'>
          Inmobiliaria Tumaco es una empresa especializada en la venta de
          propiedades en la ciudad de Tumaco, Colombia. Con más de 10 años de
          experiencia en el mercado, somos líderes en la intermediación de
          inmuebles residenciales, comerciales e industriales. Nuestro equipo de
          profesionales está altamente capacitado para brindarle el mejor
          servicio posible. Contamos con un amplio conocimiento del mercado
          inmobiliario local, así como con las herramientas y recursos
          necesarios para encontrar la propiedad que mejor se adapte a sus
          necesidades.
        </p>
        <button className='px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secundary hover:bg-black'>
          Cargar más
        </button>
      </div>
      <div className='flex items-center justify-center'>
        <Image
          src={'/assets/house.jpeg'}
          alt={'About'}
          width={350}
          height={450}
          className='w-auto h-auto'
          priority
        />
      </div>
    </Transition>
  )
}
