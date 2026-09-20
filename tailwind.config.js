/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        surface: '#13131A',
        'surface-elevated': '#1A1A24',
        'surface-glass': 'rgba(19, 19, 26, 0.7)',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-hover': 'rgba(100, 255, 218, 0.25)',
        accent: '#64FFDA',
        'accent-dim': 'rgba(100, 255, 218, 0.15)',
        'accent-glow': 'rgba(100, 255, 218, 0.08)',
        text: '#F5F5F0',
        muted: '#9C9CA8',
        subtle: '#5A5A66'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      borderRadius: {
        card: '12px',
        'card-lg': '16px'
      },
      boxShadow: {
        glow: '0 0 20px rgba(100, 255, 218, 0.12)',
        'glow-lg': '0 0 40px rgba(100, 255, 218, 0.18)',
        card: '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(100, 255, 218, 0.12)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
