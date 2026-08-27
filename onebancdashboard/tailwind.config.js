/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#14161f', soft: '#4b4e5a' },
        muted: '#8a8d97',
        paper: '#eef0ee',
        card: '#ffffff',
        line: '#e1e3e0',
        good: '#1e7a4c',
        warn: '#b5501f',
        morning: { DEFAULT: '#e8a33d', soft: '#fbebd2' },
        midday: { DEFAULT: '#0f8b7d', soft: '#d9f0ea' },
        evening: { DEFAULT: '#7c6bb4', soft: '#ebe5f7' },
        'tab-morning': '#e8a33d',
        'tab-midday': '#26c2ad',
        'tab-evening': '#a596e0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        phone: '38px',
        card: '16px',
        pill: '100px',
      },
      keyframes: {
        screenIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.25' },
        },
        swirl: {
          to: { transform: 'rotate(360deg)' },
        },
        pulseMarker: {
          '0%, 100%': { r: '6' },
          '50%': { r: '7.2' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        panelIn: {
          from: { opacity: '0', transform: 'translateY(-8px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        screenIn: 'screenIn 0.35s cubic-bezier(0.2, 0.85, 0.3, 1)',
        blink: 'blink 1.6s ease-in-out infinite',
        swirl: 'swirl 14s linear infinite',
        pulseMarker: 'pulseMarker 2.2s ease-in-out infinite',
        fadeUp: 'fadeUp 0.28s ease forwards',
        panelIn: 'panelIn 0.22s cubic-bezier(0.2, 0.9, 0.3, 1)',
      },
      boxShadow: {
        phone: '0 30px 60px -20px rgba(0,0,0,0.6)',
        panel: '0 20px 40px -12px rgba(0,0,0,0.35)',
        toast: '0 12px 26px -8px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
  // require("@tailwindcss/forms")
};
