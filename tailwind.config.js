/** @type {import('tailwindcss').Config} */
export default {
  // Configure Tailwind to use class-based dark mode
  darkMode: 'class', // <--- THIS IS THE CRITICAL ADDITION
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Add custom animations and keyframes here if you haven't already
      // For example, for the Hero section's blobs and Typewriter cursor:
      animation: {
        blob: "blob 7s infinite",
        "typewriter-blink": "blink-caret 0.75s step-end infinite",
        'icon-pulse': 'iconPulse 4s ease-in-out infinite', // For Contact.jsx social icons
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
        iconPulse: { // Keyframes for Contact.jsx social icons
          '0%, 100%': {
            borderColor: 'currentColor',
            color: 'currentColor',
            boxShadow: 'none',
          },
          '25%': {
            borderColor: 'var(--pulse-color, #f20063)', // Fallback pulse color
            color: 'var(--pulse-color, #f20063)',
            boxShadow: '0 0 15px var(--pulse-color, #f20063)',
          },
          '33%, 66%': {
            borderColor: 'currentColor',
            color: 'currentColor',
            boxShadow: 'none',
          }
        },
      },
    },
  },
  plugins: [],
};
