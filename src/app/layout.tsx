// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adhim - Portofolio',
  description: 'Portofolio Web Developer oleh Adhim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col min-h-screen transition-colors duration-300`}
      >
        <Script id="theme-script" strategy="beforeInteractive">{`
          (function() {
            function getInitialColorMode() {
              const persistedColorPreference = window.localStorage.getItem('theme');
              const hasPersistedPreference = typeof persistedColorPreference === 'string';
              if (hasPersistedPreference) {
                return persistedColorPreference;
              }
              const mql = window.matchMedia('(prefers-color-scheme: dark)');
              const hasMediaQueryPreference = typeof mql.matches === 'boolean';
              if (hasMediaQueryPreference) {
                return mql.matches ? 'dark' : 'light';
              }
              return 'dark'; // Default ke dark jika tidak ada preferensi
            }
            const colorMode = getInitialColorMode();
            if (colorMode === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `}</Script>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
