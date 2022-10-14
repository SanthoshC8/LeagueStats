/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      primary: "#ff4800",
      blue:{
        450: '#5F99F7'
      },
    },
  },
  plugins: [],
}
