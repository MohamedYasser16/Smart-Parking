// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js' // ✅ required for Flowbite to work
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'), // ✅ enables Flowbite JS behavior
  ],
}
