/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#d9e4f0',
          200: '#b3c9e1',
          300: '#7aa3cc',
          400: '#4a7db5',
          500: '#2c5f8a',
          600: '#1e4a72',
          700: '#143558',
          800: '#0d2340',
          900: '#071628',
          950: '#040e1a',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#c9913a',
          600: '#b07d2e',
          700: '#92651f',
          800: '#78521a',
          900: '#5c3f12',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9913a 0%, #f5d485 50%, #c9913a 100%)',
        'navy-gradient': 'linear-gradient(135deg, #071628 0%, #143558 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(7,22,40,0.55) 0%, rgba(7,22,40,0.75) 60%, rgba(7,22,40,0.92) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(201,145,58,0.25)',
        'card': '0 8px 32px rgba(7,22,40,0.12)',
        'card-hover': '0 16px 48px rgba(7,22,40,0.2)',
      },
    },
  },
  plugins: [],
};
