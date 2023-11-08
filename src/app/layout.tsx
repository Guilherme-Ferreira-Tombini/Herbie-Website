import './globals.css'
import type { Metadata } from 'next'
import { Lalezar } from 'next/font/google'

const lalezar = Lalezar({ subsets: ['latin'], weight:'400'});

export const metadata: Metadata = {
  title: 'Herbie Web',
  description: 'Conheça o iconico carro dos cinemas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lalezar.className}> {children} </body>
    </html>
  )
}
