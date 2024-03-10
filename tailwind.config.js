/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme'

export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/lib/esm/**/*.js'
]

export const theme = {
  screens: {
    'xs': '320px',
    ..._screens,
  },
  extend: {
    colors: {
      // Dark theme primary colors
      primary: {
        100: '#382bf0',
        200: '#5e43f3',
        300: '#7a5af5',
        400: '#9171f8',
        500: '#a688fa',
        600: '#ba9ffb',
      },
      // Dark theme surface colors
      surface: {
        100: '#121212',
        200: '#282828',
        300: '#3f3f3f',
        400: '#575757',
        500: '#717171',
        600: '#8b8b8b',
      },
    },
  },
}

export const plugins = [
  require('flowbite/plugin'),
]
