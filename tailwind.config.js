/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GitHub Dark Dimmed Palette
        canvas: {
          default: '#0d1117', // Main background
          overlay: '#161b22', // Card/Sidebar background
        },
        border: {
          default: '#30363d',
          muted: '#21262d',
        },
        fg: {
          default: '#c9d1d9', // Main text
          muted: '#8b949e',   // Secondary text
        },
        accent: '#2f81f7',     // GitHub Blue
      },
    },
  },
  plugins: [],
}