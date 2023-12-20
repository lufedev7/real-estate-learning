import Link from 'next/link'
import { dataFooter } from './Footer.data'
import {
  LiaInstagram,
  LiaLinkedin,
  LiaPinterest,
  LiaYoutube,
} from 'react-icons/lia'

export default function Footer() {
  return (
    <div className='px-4 py-8 bg-black/90 md:py-40 md:px-36'>
      <div className='grid gap-8 grid-cols-2 md:grid-cols-[1fr, 1fr, 1fr, 400px] text-white'>
        {dataFooter.map(({ id, links }) => (
          <div className='' key={id}>
            {links.map(({ id, name, link }) => (
              <Link href={link} key={id} className='block mb-5'>
                {name}
              </Link>
            ))}
          </div>
        ))}
        <div className='md:text-right '>
          <h4 className='mb-6 font-semibold text-xl'>LufedevRealState</h4>
          <p>Barrio 20 de julio, casa 30</p>
          <p>Sán Andres de Tumaco Nariño-Colombia</p>
          <div className='flex gap-4 mt-5 md:justify-end'>
            <LiaInstagram className='tex-3xl cursor-pointer' href='#!' />
            <LiaLinkedin className='tex-3xl cursor-pointer' href='#!' />
            <LiaPinterest className='tex-3xl cursor-pointer' href='#!' />
            <LiaYoutube className='tex-3xl cursor-pointer' href='#!' />
          </div>
        </div>
      </div>
    </div>
  )
}
