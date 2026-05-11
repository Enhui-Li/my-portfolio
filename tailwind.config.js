/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // If using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Match your font
      },
      fontSize: {
        // Optional: Add larger custom sizes if needed
        '8xl': '6rem',
        '9xl': '7rem',
      },
    },
  },
  plugins: [],
}