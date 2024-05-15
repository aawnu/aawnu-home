import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          link: "#f9a620",
          light: "#edf4ed",
          dark: "#292f36",
          darkline: "#373d3d",
        }
      },
      fontFamily: {
        inter: ["Inter", ...fontFamily.sans],
        playfair: ["Playfair Display", ...fontFamily.serif],
        mavenpro: ["Maven Pro", ...fontFamily.sans],
        yrsa: ["Yrsa Variable", fontFamily.serif]
      }
    },
  },
  plugins: [],
}

