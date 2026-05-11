/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        obsidian: '#0A0A0A',
        graphite: '#111111',
        surface: '#161616',
        border: '#222222',
        muted: '#333333',
        dim: '#666666',
        mid: '#999999',
        light: '#CCCCCC',
        ivory: '#F0EDE8',
        gold: '#C9A96E',
        'gold-dim': '#8A6E42',
      },
      letterSpacing: {
        'widest-2': '0.3em',
        'widest-3': '0.5em',
      },
    },
  },
  plugins: [],
};
