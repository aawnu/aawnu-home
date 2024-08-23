import { fontFamily } from 'tailwindcss/defaultTheme'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: ['dark'],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(0 0% 89.8% / <alpha-value>)',
        input: 'hsl(0 0% 89.8% / <alpha-value>)',
        ring: 'hsl(0 0% 3.9% / <alpha-value>)',
        background: 'hsl(0 0% 100% / <alpha-value>)',
        foreground: 'hsl(0 0% 3.9% / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(37 95% 55% / <alpha-value>)',
          foreground: 'hsl(37 95% 5% / <alpha-value>)',
          100: 'hsl(37 95% 92% / <alpha-value>)',
          200: 'hsl(37 95% 80% / <alpha-value>)',
          300: 'hsl(37 95% 67% / <alpha-value>)',
          400: 'hsl(37 95% 55% / <alpha-value>)',
          500: 'hsl(37 95% 42% / <alpha-value>)',
          600: 'hsl(37 95% 30% / <alpha-value>)',
          700: 'hsl(37 95% 17% / <alpha-value>)',
          800: 'hsl(37 95% 5% / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(337 95% 42% / <alpha-value>)',
          foreground: 'hsl(337 95% 92% / <alpha-value>)',
          100: 'hsl(337 95% 92% / <alpha-value>)',
          200: 'hsl(337 95% 80% / <alpha-value>)',
          300: 'hsl(337 95% 67% / <alpha-value>)',
          400: 'hsl(337 95% 55% / <alpha-value>)',
          500: 'hsl(337 95% 42% / <alpha-value>)',
          600: 'hsl(337 95% 30% / <alpha-value>)',
          700: 'hsl(337 95% 17% / <alpha-value>)',
          800: 'hsl(337 95% 5% / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(0 72.2% 50.6% / <alpha-value>)',
          foreground: 'hsl(0 0% 98% / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(0 0% 96.1% / <alpha-value>)',
          foreground: 'hsl(0 0% 45.1% / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(0 0% 96.1% / <alpha-value>)',
          foreground: 'hsl(0 0% 9% / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(0 0% 100% / <alpha-value>)',
          foreground: 'hsl(0 0% 3.9% / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(0 0% 100% / <alpha-value>)',
          foreground: 'hsl(0 0% 3.9% / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        manrope: ['Manrope Variable', ...fontFamily.sans],
      },
    },
  },
}

export default config
