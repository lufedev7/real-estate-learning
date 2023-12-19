import { RiSearch2Line } from 'react-icons/ri'

export default function SearchButton() {
  return (
    <div className='gap-4 border-[1px] rounded-lg px-14 py-2 bg-secundary flex items-center text-white justify-center cursor-pointer hover:bg-secundary/90'>
      <RiSearch2Line />
    </div>
  )
}
