'use client'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import NotFound from '@/components/notFound/NotFound'
import { dataProperties } from '@/components/properties/Properties.data'
import Property from '@/components/property/Property'
import TransitionsPage from '@/components/transitionsPage/TransitionsPage'
import { useParams } from 'next/navigation'

export default function Page() {
  const router = useParams()
  const propertyId = router.page
  const filteredPage = dataProperties.find(
    (property) => property.id === Number(propertyId),
  )

  return (
    <>
      <TransitionsPage />
      <Header />
      {filteredPage !== null && filteredPage !== undefined ? (
        <Property house={filteredPage} />
      ) : (
        <NotFound />
      )}
      <Footer />
    </>
  )
}
