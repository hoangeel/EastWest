/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section': "url(/images/section.png)",
        'sectionLg': "url(/images/sectionLG.png)",
        'text': "url(/images/Rectangle18.png)",
        'bali': "url(/images/yoga41.png)",
        'CostaRica': "url(/images/yoga4-1.png)",
        'For': "url(/images/for3.png)",
        'Schedule': "url(/images/Rectangle10.png)",
        // bali-200-hour
        'bali200': "url(/images/bgBali200.png)",
        'laYoga': "url(/images/la-yoga-bg.png)",
        'upcoming': "url(/images/BOBZ2100.png)",
        'sample': "url(/images/sample.png)",
        'about': "url(/images/about.png)",
        'bali300': "url(/images/bali300.png)",
        'details': "url(/images/detailsBg.png)",
      }
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

  },
  plugins: [],
}
