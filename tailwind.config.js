module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      padding: '16px'
    },
    extend: {
      aspectRatio: {
        insta: '9 / 16'
      },
      fontFamily: {
        primary: ['Fjalla One', 'sans'],
        secondary: ['Lato', 'sans']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        surface: {
          low: 'var(--surface-low)',
          DEFAULT: 'var(--surface)',
          high: 'var(--surface-high)'
        },
        clear: {
          DEFAULT: 'var(--clear)',
          inverse: 'var(--clear-inverse)'
        },
        subtle: {
          DEFAULT: 'var(--subtle)',
          inverse: 'var(--subtle-inverse)'
        }
      }
    }
  },
  plugins: []
}
