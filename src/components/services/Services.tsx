import { Transition } from '../transitions/Transition'
import Slider from './slider/Slider'

export default function Services() {
  return (
    <Transition className='grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28'>
      <div className='max-w-xl mb-7'>
        <h4 className='text-secundary'>Servcios</h4>
        <h2 className='my-4 text-3xl font-semibold'>
          Promociona tu vivienda para alqularla o venderla
        </h2>
        <p className='mb-10 mt-7'>
          Esta encantadora propiedad representa el equilibrio perfecto entre
          comodidad y elegancia, ofreciendo un estilo de vida excepcional en un
          entorno sereno. Ubicada en [Nombre de la zona], esta casa cuenta con
          una arquitectura moderna y espacios cuidadosamente diseñados para
          brindar el máximo confort. Con [número de habitaciones] amplias
          habitaciones y [número de baños] baños bien equipados, cada rincón de
          esta residencia ha sido concebido para fusionar la funcionalidad con
          el lujo. La luminosa sala de estar es un espacio acogedor para
          reuniones familiares, mientras que la cocina completamente equipada
          con electrodomésticos de última generación deleitará a los amantes de
          la gastronomía. Además, el jardín exquisitamente cuidado ofrece un
          oasis de paz y tranquilidad, perfecto para relajarse o disfrutar de
          momentos al aire libre. Esta propiedad es una oportunidad única para
          aquellos que buscan un hogar donde la elegancia se encuentra con la
          practicidad, brindando un estilo de vida sofisticado en un entorno
          inigualable.
        </p>
      </div>
      <div className='flex items-center justify-center'>
        <Slider />
      </div>
    </Transition>
  )
}
