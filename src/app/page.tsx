'use client'
import Header from '@/components/header/Header'
import Properties from '@/components/properties/Properties'
import dynamic from 'next/dynamic'
import Banner from '@/components/banner/Banner'
import Services from '@/components/services/Services'
import About from '@/components/about/About'
import JoinCommunity from '../components/community/Community'
import Footer from '@/components/footer/Footer'
const LocationMap = dynamic(
  async () =>
    await import('../components/location').then((module) => module.Location),
  {
    ssr: false,
  },
)
export default function Home() {
  return (
    <>
      <Header />
      <main className=''>
        <Banner />
        <Properties />
        <div className='max-w-6xl mx-auto'>
          <Services />
          <LocationMap />
          <About />
        </div>
        <JoinCommunity />
        <Footer />
      </main>
    </>
  )
}
