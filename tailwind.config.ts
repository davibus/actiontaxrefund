import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f7',
          100: '#d9e1eb',
          200: '#b3c3d7',
          300: '#8da5c3',
          400: '#6787af',
          500: '#41699b',
          600: '#34547c',
          700: '#273f5d',
          800: '#1a2a3e',
          900: '#1a2744',
          950: '#0d1422',
        },
        gold: {
          50: '#fdf9e9',
          100: '#faf0c5',
          200: '#f5e08b',
          300: '#ecc94b',
          400: '#dbb524',
          500: '#c9a227',
          600: '#a67c1a',
          700: '#845d18',
          800: '#6d4b1a',
          900: '#5c3e1c',
          950: '#35210c',
        },
        sage: {
          50: '#f3f7f4',
          100: '#e2ebe4',
          200: '#c5d7cb',
          300: '#9fbbaa',
          400: '#769b85',
          500: '#4a7c59',
          600: '#3d6449',
          700: '#32503b',
          800: '#2a4132',
          900: '#23362a',
          950: '#121d17',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
