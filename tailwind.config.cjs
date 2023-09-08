/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      eztt: ['PingFangSC-Semibold', 'PingFang SC', '华文中宋'],
    },
    extend: {
      colors: {
        primary: '#FF4C00',
        primaryLight: '#FE7228',
        primaryLevel9: '#FFF7F3',
        titleColor: '#002B47',
        contentColor: '#122446',
      },
      screens: {
        lg: '1024px',
        xl: '1400px',
        maxContent: '1200px',
      },
    },
  },
  plugins: [],
}
