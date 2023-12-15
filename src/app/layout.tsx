import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/context/OpenMenuMobileContext'

const quickSand = Quicksand({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Real estate lufedev',
  description: 'Real Estate by Lufedev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={quickSand.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  )
}
