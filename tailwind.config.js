/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lighter-bg': '#FFFFFF',
        'lighter-text': '#000000',
        'lighter-accent': '#2D2D2D',
        'lighter-soft': '#F5F5F5',
        'lighter-success': '#10B981',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}