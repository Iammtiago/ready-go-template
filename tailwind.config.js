/** @type {import('tailwindcss').Config} */
import tailwindForm from '@tailwindcss/forms'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#3B82F6",
      }
    }
  },
  plugins: [
    // require('@tailwindcss/forms')
    tailwindForm
  ]
}