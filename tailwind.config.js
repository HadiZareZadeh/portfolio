export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#a7b6ff',
          400: '#7c90ff',
          500: '#576eff',
          600: '#3f54db',
          700: '#3242ab',
          800: '#2a3889',
          900: '#25306f',
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.12)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(87,110,255,0.45)' },
          '50%': { boxShadow: '0 0 0 6px rgba(87,110,255,0.15)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 700ms ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite'
      }
    },
  },
  plugins: [],
}
