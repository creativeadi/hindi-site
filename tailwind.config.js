/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			samarka: ['var(--font-samarka)'],
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
        yellow: '#FFD8B4',
        orange: '#FFB259'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        // ... other breakpoints
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
