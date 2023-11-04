import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'var(--fonte-lalezar)',
      },
      boxShadow: {
        '3xl': '10px 8px 5px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
export default config
