/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:{
        'cats': 'url(/src/assets/bg-kerja.jpg)'
      },
      colors: {
        blue: '#3490dc', // Atau kode warna biru yang Anda inginkan
        red:  '#fff',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '26': '1rem', // Untuk menyesuaikan ukuran sesuai kebutuhan
      }
    }
  },
  plugins: [],
}

