'use client'
import { AnimatePresence } from 'framer-motion'
import useScrolling from '../../customsHooks/useScrolling'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'
export default function Navbar() {
  const scrolling = useScrolling()
  return (
    <AnimatePresence>
      {scrolling ? <NavbarDesktop /> : <NavbarMobile />}
    </AnimatePresence>
  )
}
