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
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        }
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
