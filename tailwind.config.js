module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
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
