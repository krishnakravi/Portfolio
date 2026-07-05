/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0D',
        panel: '#121216',
        raise: '#1A1A20',
        line: 'rgba(237,234,227,0.10)',
        bone: '#EDEAE3',
        dim: '#8F8C85',
        amber: '#FFB454',
        ember: '#FF6B35',
        signal: '#4ADE80',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['Switzer', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        hud: '0.18em',
      },
    },
  },
  plugins: [],
}
