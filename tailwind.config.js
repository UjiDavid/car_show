/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  purge: {
    content: ['./src/**/*.html'],
    safelist: [
      'bg-primary-blue',
      'text-white',
      'hover:opacity-100',
      'rounded-full',
      'lg:text-right',
      'xl:flex-[1.5]',
      'flex',
      'justify-end',
      'items-end',
      'w-full',
      'xl:h-screen',
      'relative',
      'xl:w-full',
      'w-[90%]',
      'xl:h-full',
      'h-[590px]',
      'z-0',
      'object-contain',
      'text-primary-blue',
      'bg-white',
    ],
  },
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF',
        },
        'secondary-orange': '#f79761',
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.03)',
          100: 'rgba(59,60,152,0.02)',
        },
        grey: '#747A88',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        'hero-bg': "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
