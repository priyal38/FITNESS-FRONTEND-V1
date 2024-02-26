/** @type {import('tailwindcss').Config} */

import { screens as _screens } from 'tailwindcss/defaultTheme'
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  "./node_modules/flowbite/**/*.js",
  'node_modules/flowbite-react/lib/esm/**/*.js'
]
export const theme = {
  extend: {},
  screens: {
    'xs': '300px',
    ..._screens,
  },
}
export const plugins = [
  require('flowbite/plugin'),
]

