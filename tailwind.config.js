/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169e1',  // Royal Blue
        accent: '#10b981',   // Bright Green
        'neutral-900': '#1f2937',
        'neutral-700': '#4b5563',
        'neutral-600': '#6b7280',
        'neutral-300': '#d1d5db',
        'neutral-100': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
