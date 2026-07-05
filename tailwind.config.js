/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F3EC',
        card: '#FDFBF6',
        ink: '#16130E',
        soft: '#6F6A5F',
        rule: 'rgba(22,19,14,0.14)',
        vermilion: '#C42126',
        dark: '#131109',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Switzer', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        label: '0.16em',
      },
    },
  },
  plugins: [],
}
