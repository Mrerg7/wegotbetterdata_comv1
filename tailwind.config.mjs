/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Source Sans 3"', 'sans-serif'],
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
      colors: {
        ink: {
          DEFAULT: '#050914',
          soft: '#070c1a',
        },
      },
    },
  },
  plugins: [],
};
