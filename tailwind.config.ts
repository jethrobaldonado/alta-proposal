import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['var(--font-unna)', 'sans-serif'],
        'sans': ['var(--font-satoshi)', 'sans'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('/images/banner.jpg')",
        'about-text': "url('/images/alta-wide-text.svg')",
        'waves': "url('/images/waves.svg')",
      },
      colors: {
        altaGray: '#444444',
        altaOrange: '#A05C3A',
        altaBrightOrange: '#FB5604',
        altaDarkOrange: '#852E03',
        altaLightOrange: '#FFC2A4',
        altaBrownOrange: '#BF7E5E',
      }
    },
  },
  plugins: [],
}
export default config
