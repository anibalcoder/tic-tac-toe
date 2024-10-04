/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'black-70': 'rgba(0,0,0,0.7)'
      },
      width: {
        25: '100px',
        responsive: 'min(95%, 350px)'
      },
      height: {
        25: '100px'
      }
    }
  },
  plugins: []
}
