/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep blue theme with glassmorphism
        'cqt-bg': '#0a0e22',           // Deep blue background
        'cqt-surface': '#0f1428',       // Blue-tinted surface
        'cqt-panel': 'rgba(15, 25, 50, 0.25)',  // Glass panel with blue tint
        'cqt-elevated': '#1a2847',      // Elevated surfaces with blue tone

        // Borders with blue tint
        'cqt-border': 'rgba(59, 130, 246, 0.25)',      // Blue border
        'cqt-border-light': 'rgba(59, 130, 246, 0.5)', // Lighter blue border

        // Neon accent colors (fintech style)
        'cqt-accent': '#3b82f6',        // Bright blue - primary accent
        'cqt-glow': '#60a5fa',          // Lighter blue for glows
        'cqt-neon': '#06b6d4',          // Cyan neon accent

        // Functional colors (vibrant for fintech)
        'cqt-red': '#ef4444',           // Red → Homepage
        'cqt-blue': '#3b82f6',          // Blue → Analysts
        'cqt-green': '#10b981',         // Green → Market
        'cqt-amber': '#f59e0b',         // Amber/Yellow → Data
        'cqt-purple': '#8b5cf6',        // Purple → Signal
        'cqt-orange': '#f97316',        // Orange → Portfolio
        'cqt-teal': '#14b8a6',          // Teal → Workflow

        // Text colors (high contrast for dense info)
        'cqt-text-primary': '#f1f5f9',   // Bright white-blue
        'cqt-text-secondary': '#cbd5e1', // Light gray-blue
        'cqt-text-muted': '#64748b',     // Muted blue-gray
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'card-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glow-subtle': '0 0 10px rgba(59, 130, 246, 0.15)',
        'glow-accent': '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
        'glow-neon': '0 0 10px rgba(6, 182, 212, 0.4), 0 0 30px rgba(6, 182, 212, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-text': 'slideInText 0.4s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInText: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
