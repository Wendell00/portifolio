import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      background:{
        'dark-body':
         'background: linear-gradient(to bottom, transparent, #000) #000030;',
        'light-body':
         'background: linear-gradient(to bottom, transparent, #fff) #c1deee;'
      },
      height:{
        'quaseFull': '100vh - 90px'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
