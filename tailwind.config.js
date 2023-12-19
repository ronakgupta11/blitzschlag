/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'in':'55%',
        'top':'83%','left':'45%',
        '32':'32px'
      },
      fontFamily: {
        "black-ops-one": "'Black Ops One'",
        amita: "Amita",
      },
      fontSize: {
        xl: "20px",
        "13xl": "32px",
        inherit: "inherit",
      },
      colors: {
        white: "#fff",
        gray: {
          "100": "#7d7d7d",
          "200": "#0a0a0a",
          "300": "rgba(255, 255, 255, 0.12)",
          "400": "rgba(10, 10, 10, 0.76)",
         



        },
        red: "#ff0000",
        gainsboro: "#e1e1e1",
      },
      height: 
      {
        '108':'6.75rem',
        '632':'39.5rem',
        '840':'52.5rem',
        'ell1':'1998.788px',
        'ell2':'1201.567px',
        'hscreen':'832px',
        'borderh':'550px'
        
      },
      width:{
        'ell1':'1998.788px',
        'ell2':'1201.567px',
         '56':'56px',
         '368':'368px'

        
      },
      borderRadius: {
        'full':'1998.788px',
        'lg': '8px'
      },
      backgroundColor:{
        'orange':'#F00',
        'brown':'#380000',
        "x": "linear-gradient(135deg,rgba(255, 255, 255, 0.12),rgba(255, 255, 255, 0)) "
      },
      borderWidth:{
        '1':'1px'
      }
  
    },
  },
  plugins: [ require('flowbite/plugin')],
}
