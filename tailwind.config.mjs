/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      lineHeight: {
        tighter: '1.125',
      },
      colors: {
        'dusty-rose': '#976D6D',
        red: '#FF3D00',
        green: '#009274',
        gray: '#BCBCBC',
      },
    },
  },
  plugins: [],
};
