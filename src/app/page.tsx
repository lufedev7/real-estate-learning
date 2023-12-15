import Header from '@/components/header/Header'
import TransitionsPage from '@/components/transitionsPage/TransitionsPage'
import Properties from '@/components/properties/Properties'
import dynamic from 'next/dynamic'
const LocationMap = dynamic(
  async () =>
    await import('../components/location/Location').then(
      (module) => module.Location,
    ),
  {
    ssr: false,
  },
)
export default function Home() {
  return (
    <>
      <TransitionsPage />
      <Header />
      <main className=''>
        <Properties />
        <LocationMap />
      </main>
    </>
  )
}
