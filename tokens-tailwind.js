/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Navy backgrounds
        navy: {
          DEFAULT: '#0A1628',
          mid: '#0D1F3C',
          light: '#122544',
          backdrop: 'rgba(10, 22, 40, 0.85)',
        },
        // Cyan accent
        cyan: {
          DEFAULT: '#1E9FD4',
          bright: '#2EC4F0',
          glow: 'rgba(30, 159, 212, 0.15)',
          'glow-subtle': 'rgba(30, 159, 212, 0.08)',
          tint: 'rgba(30, 159, 212, 0.06)',
          border: 'rgba(30, 159, 212, 0.3)',
          'border-soft': 'rgba(30, 159, 212, 0.25)',
          'border-muted': 'rgba(30, 159, 212, 0.2)',
        },
        // White text
        white: {
          DEFAULT: '#F0F4FF',
          dim: 'rgba(240, 244, 255, 0.65)',
          faint: 'rgba(240, 244, 255, 0.12)',
        },
        // Line / border
        line: {
          DEFAULT: 'rgba(30, 159, 212, 0.2)',
        },
        // State colors
        state: {
          green: '#22C55E',
          amber: '#F59E0B',
          red: '#EF4444',
          purple: '#A855F7',
        },
      },

      fontFamily: {
        serif: ["'DM Serif Display'", 'serif'],
        sans: ["'DM Sans'", 'sans-serif'],
        mono: ["'Space Mono'", 'monospace'],
      },

      fontSize: {
        // Headings
        h1: ['clamp(2.8rem, 5vw, 4.4rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        h2: ['clamp(2rem, 3.5vw, 3rem)', { lineHeight: '1.15' }],
        'h2-lg': ['clamp(2rem, 4vw, 3.2rem)', { lineHeight: '1.15' }],
        h3: ['1.3rem', { lineHeight: '1.3' }],
        'h3-lg': ['1.4rem', { lineHeight: '1.3' }],
        'h3-sm': ['1.2rem', { lineHeight: '1.3' }],
        h4: ['1rem', { lineHeight: '1.3' }],
        // Stats and display
        stat: ['2.4rem', { lineHeight: '1' }],
        blockquote: ['clamp(1.4rem, 2.5vw, 2rem)', { lineHeight: '1.5' }],
        'mission-label': ['3rem', { lineHeight: '1' }],
        // Body sizes
        'body-lg': ['1.15rem', { lineHeight: '1.8' }],
        'body-hero': ['1.1rem', { lineHeight: '1.7' }],
        'body-quiz': ['1.05rem', { lineHeight: '1.7' }],
        body: ['1rem', { lineHeight: '1.7' }],
        'body-btn': ['0.95rem', { lineHeight: '1.6' }],
        'body-sm': ['0.9rem', { lineHeight: '1.75' }],
        'body-xs': ['0.875rem', { lineHeight: '1.6' }],
        'body-xxs': ['0.82rem', { lineHeight: '1.6' }],
        // Label sizes
        'stat-label': ['0.8rem', { lineHeight: '1.6' }],
        'label-quiz': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-hero': ['0.72rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'label-value': ['0.7rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-section': ['0.68rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
        'label-sm': ['0.65rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
        'label-xs': ['0.6rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        // Special
        logo: ['1.2rem', { lineHeight: '1.2' }],
        'logo-sm': ['1.1rem', { lineHeight: '1.2' }],
        'section-title': ['1.6rem', { lineHeight: '1.2' }],
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      letterSpacing: {
        tight: '-0.01em',
        logo: '0.02em',
        nav: '0.04em',
        cta: '0.06em',
        tag: '0.08em',
        label: '0.1em',
        wide: '0.12em',
        section: '0.14em',
      },

      lineHeight: {
        none: '1',
        heading: '1.08',
        'heading-h2': '1.15',
        'heading-h4': '1.3',
        blockquote: '1.5',
        body: '1.6',
        relaxed: '1.7',
        'body-doc': '1.75',
        loose: '1.8',
      },

      spacing: {
        // Custom spacing scale beyond Tailwind defaults
        '0.75': '0.2rem',   // 2xs
        '1.25': '0.3rem',   // xs
        '1.75': '0.45rem',  // sm
        '2.5': '0.6rem',    // md
        '3.5': '0.75rem',   // md-lg
        '4.5': '1.25rem',   // xl
        '5.5': '1.4rem',    // 2xl
        '7': '1.75rem',     // 4xl
        '10': '2.5rem',     // 6xl
        '18': '4.5rem',     // gap about section
        '20': '5rem',       // 9xl
        '24': '6rem',       // 10xl
        '28': '7rem',       // 11xl — section padding
        '32': '8rem',       // 12xl — hero padding-top
      },

      maxWidth: {
        'hero-content': '680px',
        'hero-sub': '520px',
        'method-header': '600px',
        'quiz-inner': '640px',
        'main-doc': '900px',
        'tri-diagram': '400px',
      },

      width: {
        sidebar: '280px',
        'nav-symbol': '36px',
        'pillar-icon': '44px',
        'hero-glow': '700px',
      },

      height: {
        'nav-symbol': '36px',
        'pillar-icon': '44px',
        'hero-glow': '700px',
        'scroll-line': '40px',
      },

      borderWidth: {
        DEFAULT: '1px',
        2: '2px',
        3: '3px',
      },

      borderRadius: {
        none: '0px',
        full: '50%',
      },

      backdropBlur: {
        nav: '16px',
      },

      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        medium: '250ms',
        slow: '300ms',
        entrance: '600ms',
      },

      animation: {
        pulse: 'pulse 2s infinite',
        slide: 'slide 2s infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },

      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.4)' },
        },
        slide: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },

      zIndex: {
        nav: '100',
        content: '1',
        overlay: '0',
      },

      backgroundSize: {
        grid: '60px 60px',
        noise: '200px',
      },

      opacity: {
        'noise-overlay': '0.4',
        'noise-svg': '0.03',
      },

      screens: {
        mobile: { max: '900px' },
      },
    },
  },
}
