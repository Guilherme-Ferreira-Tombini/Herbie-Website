import './globals.css'
import type { Metadata } from 'next'
import { Lalezar,Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'], variable:'--fonte-inter' });
const lalezar = Lalezar({ subsets: ['latin'], weight:'400', variable:'--fonte-lalezar'});

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
      <body className={`${lalezar.variable} font-sans`}> {children} </body>
    </html>
  )
}
