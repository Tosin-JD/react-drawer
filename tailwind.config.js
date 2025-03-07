/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight:{
        '80vh': '80vh',
      },
      maxWidth:{
        '80vw': '80vw',
      }
    },
  },
  plugins: [],
}
