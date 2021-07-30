module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
      'hero' :['Merriweather']
     },
    extend: {
      colors:{
        'oranges' : '#FD6C4C',
        'dark' : '#132642',
        'lowdark' : '#586578',
        'lowsoft':'#FCFAF8',
        'darksoft':'#F5EFE2'
      },
      dropShadow: {
        'button': '0 15px 30px rgba(0, 0, 0, 0.25)',
      },
      width: {
        'img': '20rem',
        
      },
      boxShadow:{
        'button': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
