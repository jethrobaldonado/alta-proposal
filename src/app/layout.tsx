import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from '@next/font/local'

const satoshi = localFont({
  src: '../../public/fonts/Satoshi/Fonts/Variable/Satoshi-Variable.ttf',
  variable: '--font-satoshi',
})
const unna = localFont({
  src: [{
    path: '../../public/fonts/Unna/Unna-Regular.ttf',
    weight: "400",
  }],
  variable: '--font-unna',
})

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alta D' Tagaytay Hotel",
  description: 'Best Memories Start Here!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${satoshi.variable} ${unna.variable}`}>{children}</body>
    </html>
  )
}
