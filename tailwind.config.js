/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  safelist:[
    // coaching
    'border-emerald-500',
    'bg-emerald-500',
    'hover:bg-cyan-500',
    // foundations
    'border-violet-400',
    'bg-violet-400',
    'hover:bg-indigo-800',  
    // leadership
    'border-green-500',
    'bg-green-500',
    'hover:bg-lime-300',  
    // delivery
    'border-rose-500',
    'bg-rose-500',
    'hover:bg-fuchsia-700',  
    // product
    'hover:bg-orange-700', 
    // masterclass js
    'py-8',
    'border-b',
    // pathway tabs
    'text-epicBlue',
    'font-bold',

  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        epicBlue: '#2D3371',
        epiclightBlue: '#415DF3',
        epicGreen: '#50BB7D',
        epicOrange: '#FA8161',
        epicYellow: '#ED9E45',
        epicCustard: '#FFF2C2',
        epicShell: '#FEFBF8',
      },
      fontFamily: {
        sans: ['Hanken Grotesk'],
        neutral: ['sans-serif'],
        rocksalt: ['Rock Salt'],
      },
      fontSize:{
        xxs: '0.625rem',
        // md: '0.938rem'
      },
      backgroundImage: {
        'logo-partners-desktop': 'url("../images/Group_desktop.png")',
        'logo-partners-mobile': 'url("../images/Group_mobile.png")',

        'pathway-chart-desktop': 'url("../images/pathway-icons/pathway-chart-desktop.png")',
        'pathway-chart-mobile': 'url("../images/pathway-icons/pathway-chart.png")',
      },
      

    },
  },
  plugins: [],
}

