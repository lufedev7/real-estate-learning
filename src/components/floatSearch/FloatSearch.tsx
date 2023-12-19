import { Transition } from '../transitions/Transition'
import { SearchLocation } from '../search/SearchLocation'
import SearchProperties from '../search/SearchProperties'
import SearchPriceRange from '../search/SearchPriceRange'
import SearchButton from '../search/SearchButton'
export default function FloatSearch() {
  return (
    <Transition className='absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto'>
      <div className='flex-col justify-between gap-4 py-4 bg-white rounded-md md:flex md:flex-row backdrop-blur shadow-ligth px-4'>
        <SearchLocation />
        <SearchProperties />
        <SearchPriceRange />
        <SearchButton />
      </div>
    </Transition>
  )
}
