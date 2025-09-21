/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'figma-gray': '#1C1C1C',
        'figma-gray-60': 'rgba(28, 28, 28, 0.6)',
        'figma-gray-40': 'rgba(28, 28, 28, 0.4)',
        'figma-gray-20': 'rgba(28, 28, 28, 0.2)',
        'figma-gray-10': 'rgba(28, 28, 28, 0.1)',
        'figma-gray-5': 'rgba(28, 28, 28, 0.05)',
        'figma-bg': '#FAFAFA',
        'figma-card': '#FFFFFF',
        'figma-border': '#F0F0F0',
        // Dark mode colors
        'figma-dark-bg': '#0F0F0F',
        'figma-dark-card': '#1A1A1A',
        'figma-dark-border': '#2A2A2A',
        'figma-dark-text': '#FFFFFF',
        'figma-dark-text-60': 'rgba(255, 255, 255, 0.6)',
        'figma-dark-text-40': 'rgba(255, 255, 255, 0.4)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        '14': ['14px', '20px'],
        '16': ['16px', '24px'],
        '18': ['18px', '28px'],
        '20': ['20px', '30px'],
        '24': ['24px', '32px'],
      },
      spacing: {
        '212': '212px',
        '280': '280px',
        '248': '248px',
        '24': '24px',
        '16': '16px',
        '12': '12px',
        '8': '8px',
        '4': '4px',
      },
      borderRadius: {
        '8': '8px',
        '12': '12px',
      },
      boxShadow: {
        'figma': '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        'figma-card': '0px 1px 2px rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}
