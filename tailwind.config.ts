import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': 'var(--dark-purple)',
        'caribbean-current': 'var(--caribbean-current)',
        'dark-cyan': 'var(--dark-cyan)',
        'champagne': 'var(--champagne)',
        'desert-sand': 'var(--desert-sand)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: {
        'dark-cyan': {
          css: {
            '--tw-prose-body': 'var(--dark-cyan)',
            '--tw-prose-headings': 'var(--dark-purple)',
            '--tw-prose-lead': 'var(--dark-cyan)',
            '--tw-prose-links': 'var(--caribbean-current)',
            '--tw-prose-bold': 'var(--dark-purple)',
            '--tw-prose-counters': 'var(--dark-cyan)',
            '--tw-prose-bullets': 'var(--dark-cyan)',
            '--tw-prose-hr': 'var(--desert-sand)',
            '--tw-prose-quotes': 'var(--dark-purple)',
            '--tw-prose-quote-borders': 'var(--desert-sand)',
            '--tw-prose-captions': 'var(--dark-cyan)',
            '--tw-prose-code': 'var(--dark-purple)',
            '--tw-prose-pre-code': 'var(--champagne)',
            '--tw-prose-pre-bg': 'var(--dark-purple)',
            '--tw-prose-th-borders': 'var(--desert-sand)',
            '--tw-prose-td-borders': 'var(--desert-sand)',
          },
        },
        'champagne': {
          css: {
            '--tw-prose-body': 'var(--champagne)',
            '--tw-prose-headings': 'var(--champagne)',
            '--tw-prose-lead': 'var(--champagne)',
            '--tw-prose-links': 'var(--dark-cyan)',
            '--tw-prose-bold': 'var(--champagne)',
            '--tw-prose-counters': 'var(--desert-sand)',
            '--tw-prose-bullets': 'var(--desert-sand)',
            '--tw-prose-hr': 'var(--caribbean-current)',
            '--tw-prose-quotes': 'var(--champagne)',
            '--tw-prose-quote-borders': 'var(--caribbean-current)',
            '--tw-prose-captions': 'var(--desert-sand)',
            '--tw-prose-code': 'var(--champagne)',
            '--tw-prose-pre-code': 'var(--dark-purple)',
            '--tw-prose-pre-bg': 'var(--champagne)',
            '--tw-prose-th-borders': 'var(--caribbean-current)',
            '--tw-prose-td-borders': 'var(--caribbean-current)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 