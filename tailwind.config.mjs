
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#d32f2f',
        secondary: '#9a0007',
        background: '#333333',
      },
      height: {
        header: '100px',
      }
    },
  },
  plugins: [],
}