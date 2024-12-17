import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '포트폴리오 저장소',
  description: '이시훈의 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/prism.min.js"
          async
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
