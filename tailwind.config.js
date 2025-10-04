// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        loading: 'loading 3s linear forwards',
      },
      keyframes: {
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};