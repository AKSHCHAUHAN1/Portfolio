/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#131313',
        panel: '#1b1c1c',
        panelHigh: '#2a2a2a',
        line: '#3e4851',
        lineStrong: '#88929d',
        primary: '#93ccff',
        primaryHot: '#00aaff',
        mint: '#36ffc4',
        warning: '#ffb875',
        danger: '#ff6262',
        text: '#e4e2e1',
        muted: '#bec7d3'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        hud: '0.2em',
        tech: '0.08em'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(147, 204, 255, 0.4), 0 0 18px rgba(147, 204, 255, 0.18)',
        mint: '0 0 18px rgba(54, 255, 196, 0.2)'
      },
      clipPath: {
        chamfer: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)',
        chamferLg: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
      },
      animation: {
        blink: 'blink 1s step-end infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    }
  },
  corePlugins: {
    borderRadius: false
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.clip-chamfer': {
          clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
        },
        '.clip-chamfer-lg': {
          clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'
        }
      });
    }
  ]
};
