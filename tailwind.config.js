/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c6dd',
          300: '#8da9ce',
          400: '#678cbf',
          500: '#416fb0',
          600: '#34568c',
          700: '#1c3a5c',
          800: '#142b45',
          900: '#0A2540',
        },
        gold: {
          DEFAULT: '#C5A059',
          50: '#faf6ef',
          100: '#f3e9d4',
          200: '#e7d3a9',
          300: '#dcbd7e',
          400: '#d0a753',
          500: '#C5A059',
          600: '#a8854a',
          700: '#85663a',
          800: '#5e4729',
          900: '#372a18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
