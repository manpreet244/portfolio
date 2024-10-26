/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f95ea',
        secondary: '#783ddd',
        text: '#ffffff',
        background: '#15153c',
        accent: '#ff74dc',
      },
    },
  },
  plugins: [],
}
