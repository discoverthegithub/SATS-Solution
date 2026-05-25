/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        "obsidian-light": "#0a0a0a",
        primary: {
          DEFAULT: "#0062ff",
          dark: "#0052cc",
        },
        accent: {
          DEFAULT: "#00d2ff",
          glow: "rgba(0, 98, 255, 0.4)",
        },
      },
      spacing: {
        'fluid-padding': 'clamp(2rem, 8vw, 10rem)',
        'fluid-gap': 'clamp(1.5rem, 4vw, 4rem)',
        'fluid-x': 'clamp(1.5rem, 6vw, 10rem)',
        'fluid-y': 'clamp(4rem, 15vw, 15rem)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        morph: {
          '0%, 100%': { borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%' },
          '50%': { borderRadius: '30% 70% 41% 59% / 67% 35% 65% 33%' },
        }
      }
    },
  },
  plugins: [],
};
