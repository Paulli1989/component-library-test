module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        blue: {
          100: '#0AA0ED',
          300: '#033E82',
          DEFAULT: '#1032CF',
          700: '#3558D7',
          800: '#232C5B',
          900: '#051C82'
        },
        grey: {
          100: 'rgba(0, 0, 0, 0.05)',
          200: '#e0e0e0',
          300: 'rgba(0, 0, 0, 0.16)',
          500: 'rgba(0, 0, 0, 0.6)',
          900: '#141414'
        },
        red: {
          DEFAULT: '#D83C1B'
        }
      },
      width: {
        '13': '3.25rem'
      },
      height: {
        '13': '3.25rem'
      },
      fontSize: {
        '6xs': ['.375rem', '1.6'],
        '5.5xs': ['.40625rem', '1.6'],
        '5xs': ['.53125rem', '1.6'],
        '4xs': ['.625rem', '1.3'],
        '3xs': ['.75rem', '1'],
        '2xs': ['.8125rem', '1.4'],
        'xs': ['.875rem', '1.2'],
        'sm': ['.9375rem', '1.5rem'],
        'base': ['1rem'],
        '2xl': ['1.5rem', '1.1'],
        '2.5xl': ['1.625rem', '1.1'],
        '3xl': ['2rem', '1.2'],
        '6xl': ['3.625rem', '1.2']
      },
      boxShadow: {
        xs: '0px 2px 8px rgba(0, 0, 0, 0.25)',
        sm: '0px 8px 24px rgba(0, 0, 0, 0.25)',
        DEFAULT: '0px 14px 38px rgba(0, 0, 0, 0.2)',
        lg: '0px 17.7948px 35.5896px rgba(0, 0, 0, 0.2)'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
        },
        '.container-lg': {
          '@apply mx-auto': {},
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1232px',
          },
        }
      })
    }
  ],
}
