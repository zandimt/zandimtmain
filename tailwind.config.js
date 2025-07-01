/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#160f29',
        'caribbean-current': '#246a73',
        'dark-cyan': '#368f8b',
        'champagne': '#f3dfc1',
        'desert-sand': '#ddbea8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'champagne': '0 4px 24px 0 #f3dfc1',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 