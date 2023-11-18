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
        'gradientRadialDark': 'radial-gradient(circle, rgba(0,0,48,1) 20%, rgba(0,0,0,1) 100%)',
        'gradientRadialLight': 'radial-gradient(circle, rgba(193,222,238,1) 20%, rgba(193,193,193, 1) 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height:{
        'quaseFull': 'calc(100vh - 90px)'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
export default config
