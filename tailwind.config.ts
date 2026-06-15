import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          950: '#1a2e0a',
          900: '#2D5016',
          800: '#3a6b1e',
          700: '#4a8a28',
        },
        orange: {
          brand: '#E8821C',
          light: '#F5A54A',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#EDE6D6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
