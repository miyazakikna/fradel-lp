import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-sans'
})

export const metadata: Metadata = {
  title: 'Fradel - ホテルのような香りを暮らしのなかに',
  description: '上質な香りを毎月お届け',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} font-sans`}>{children}</body>
    </html>
  )
}