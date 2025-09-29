import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/Layout'

export const metadata: Metadata = {
  title: 'Varachcha Medical Association (VMA)',
  description: 'Official site of the Varachcha Medical Association (VMA).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
