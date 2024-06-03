import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import tailwindcssAnimate from 'tailwindcss-animate'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'button-inverted-gradient':
          'linear-gradient(180deg,hsla(var(--button-inverted-gradient-from)),hsla(var(--button-inverted-gradient-to)))',
        'button-inverted-hover-gradient':
          'linear-gradient(180deg,hsla(var(--button-inverted-gradient-from)),hsla(var(--button-inverted-gradient-to)))',
        'button-inverted-pressed-gradient':
          'linear-gradient(180deg,hsla(var(--button-inverted-gradient-from)),hsla(var(--button-inverted-gradient-to)))',
        'button-neutral-gradient':
          'linear-gradient(180deg,hsla(var(--button-neutral-gradient-from)),hsla(var(--button-neutral-gradient-to)))',
        'button-neutral-hover-gradient':
          'linear-gradient(180deg,hsla(var(--button-neutral-gradient-from)),hsla(var(--button-neutral-gradient-to)))',
        'button-neutral-pressed-gradient':
          'linear-gradient(180deg,hsla(var(--button-neutral-gradient-from)),hsla(var(--button-neutral-gradient-to)))',
        'button-danger-gradient':
          'linear-gradient(180deg,hsla(var(--button-danger-gradient-from)),hsla(var(--button-danger-gradient-to)))',
        'button-danger-hover-gradient':
          'linear-gradient(180deg,hsla(var(--button-danger-gradient-from)),hsla(var(--button-danger-gradient-to)))',
        'button-danger-pressed-gradient':
          'linear-gradient(180deg,hsla(var(--button-danger-gradient-from)),hsla(var(--button-danger-gradient-to)))',
      },
      backgroundColor: {
        'button-inverted': 'hsla(var(--button-inverted))',
        'button-inverted-hover': 'hsla(var(--button-inverted-hover))',
        'button-inverted-pressed': 'hsla(var(--button-inverted-pressed))',
        'button-neutral': 'hsla(var(--button-neutral))',
        'button-neutral-hover': 'hsla(var(--button-neutral-hover))',
        'button-neutral-pressed': 'hsla(var(--button-neutral-pressed))',
        'button-danger': 'hsla(var(--button-danger))',
        'button-danger-hover': 'hsla(var(--button-danger-hover))',
        'button-danger-pressed': 'hsla(var(--button-danger-pressed))',
        'button-transparent': 'hsla(var(--button-transparent))',
        'button-transparent-hover': 'hsla(var(--button-transparent-hover))',
        'button-transparent-pressed': 'hsla(var(--button-transparent-pressed))',
        'background-field': 'hsla(var(--background-field))',
        'background-field-hover': 'hsla(var(--background-field-hover))',
        'background-highlight': 'hsla(var(--background-highlight))',
      },
      colors: {
        border: {
          DEFAULT: 'hsl(var(--border))',
          base: 'hsla(var(--border-base))',
          interactive: 'hsla(var(--border-interactive))',
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        base: 'hsla(var(--background-base))',
        foreground: {
          DEFAULT: 'hsla(var(--foreground-base))',
          muted: 'hsla(var(--foreground-muted))',
        },
        background: {
          highlight: 'hsla(var(--background-highlight))',
          'highlight-hover': 'hsla(var(--background-highlight-hover))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        '2xsmall': 'var(--radius-2xsmall)',
        xsmall: 'var(--radius-xsmall)',
        small: 'var(--radius-small)',
        medium: 'var(--radius-medium)',
        large: 'var(--radius-large)',
        xlarge: 'var(--radius-xlarge)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
