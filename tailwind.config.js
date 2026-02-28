/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deep:     '#07081a',
        elevated: '#0d0f27',
        float:    '#13163a',
        accent: {
          DEFAULT: '#7c3aed',
          light:   '#a78bfa',
          dark:    '#6d28d9',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light:   '#22d3ee',
        },
        pink: {
          DEFAULT: '#ec4899',
          light:   '#f472b6',
        },
        primary: '#f0f0ff',
        muted:   '#8b8daa',
      },
      fontFamily: {
        display: ["'Space Grotesk'", 'sans-serif'],
        body:    ["'Plus Jakarta Sans'", 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        'badge-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.4' },
        },
      },
      animation: {
        float:        'float 6s ease-in-out infinite',
        'badge-pulse':'badge-pulse 2s ease infinite',
      },
    },
  },
  plugins: [],
}
