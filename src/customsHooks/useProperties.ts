import { useState } from 'react'

interface Property {
  id: number
  location: string
  price: number
  bedrooms: number
  bathroom: number
  image: string
  star: number
  meters: number
  description: string
}

interface UseProperties {
  properties: Property[]
  last: boolean
  handleLoadMore: () => void
}

export default function useProperties(data: Property[]): UseProperties {
  const [page, setPage] = useState<number>(8)
  const [last, setLast] = useState<boolean>(true)

  const paginatedData = data.slice(0, page)

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 4)
    if (page >= data.length) {
      setLast(false)
    }
  }

  return {
    properties: paginatedData,
    last,
    handleLoadMore,
  }
}
