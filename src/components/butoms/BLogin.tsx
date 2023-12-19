import Link from 'next/link'

const BLogin = () => {
  return (
    <Link
      href='/login'
      className='hidden sm:inline px-3 py-2 text-white rounded-lg bg-secundary hover:bg-black'
    >
      Login
    </Link>
  )
}
export default BLogin
