/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bprimary: '#3a3b3d',
        bsecondary: '#161D2F',
      },
    },
  },
  plugins: [],
}