module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./app/**/*.html'],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#198754',
        danger: '#DC3545',
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#F8F9FA',
          200: '#CED4DA',
          300: '#6C757D',
          400: '#212529',
        },
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'md': '1.25rem',
        'lg': '1.5rem',
      },
      spacing: {
        '7.5': '1.875rem',
        '10.5': '2.625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
