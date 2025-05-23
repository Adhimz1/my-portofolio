import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Definisikan palet warna gelap Anda di sini jika perlu
        // Contoh:
        'primary-dark': '#1a202c', // Background utama
        'secondary-dark': '#2d3748', // Background kartu/sekunder
        'accent-blue': '#4299e1',   // Warna aksen
        'text-light': '#f7fafc',    // Teks utama
        'text-muted': '#a0aec0',    // Teks sekunder/muted
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config