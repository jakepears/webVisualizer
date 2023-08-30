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
        codGray: '#1c1c1c',
        tundora: '#454545',
        boulder: '#7d7d7d',
        silver: '#bdbdbd',
        wildSand: '#f7f7f7',
      }
    },
  },
  plugins: [],
}
export default config
