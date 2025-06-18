import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'FRADEL - ホテルのような香りを暮らしのなかに',
  description: '上質な香りを毎月お届け',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSans.variable}>
      <body className={`${notoSans.variable} font-sans`}>{children}</body>
    </html>
  )
}