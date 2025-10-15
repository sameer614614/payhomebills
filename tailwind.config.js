/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          50: '#eef6ff',
          100: '#d9ebff',
          200: '#b3d7ff',
          300: '#85beff',
          400: '#579fff',
          500: '#2563eb',
          600: '#1e4fd6',
          700: '#1a3eb0',
          800: '#182f83',
          900: '#15255f',
        },
        slate: {
          950: '#020617',
        },
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(circle at top, rgba(37,99,235,0.3) 0, transparent 60%), radial-gradient(circle at bottom, rgba(14,165,233,0.25) 0, transparent 65%)',
      },
    },
  },
  plugins: [],
};
