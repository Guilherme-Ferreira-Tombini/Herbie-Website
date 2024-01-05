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
        '3xl2': '12px 5px 5px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'herbieMovie': "url('/img/Group 9.png')",
        'Initial': "url('/img/tela.png')",
        'Origin': "url('/img/Origem.png')"
      }
    },
  },
  plugins: [],
}
export default config
