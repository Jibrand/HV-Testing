/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif']
      },
      color: {
        green: '#A0FF00'
      },
      backgroundImage: {
        "pattern": "url('img/Layer.png')",
        "arrow": "url('img/arrow.svg')",
        "bgpattern": "url('img/pagebackground.png')",
        "lighteningEffect": "url('img/teams.gif')",
        "laptop": "url('img/poc/iPADbackground.png')",
        "woodenBg": "url('img/poc/IPADangledWOODbackground2.jpg')"
      } 
    },
  },
  plugins: [],
};
