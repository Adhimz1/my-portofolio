import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // Contoh font dari Google Fonts
import './globals.css' // <--- PERBAIKAN DI SINI
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// ... sisa kode layout.tsx

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nama Anda - Portofolio',
  description: 'Portofolio Web Developer oleh Nama Anda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}