import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'terminal': ['VT323', 'monospace'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'matrix-rain': 'linear-gradient(180deg, transparent 70%, #00ff41 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        // Platinum Theme Colors
        'void': {
          '900': '#0a0a0a',
          '800': '#1a1a1a',
          '700': '#2a2a2a',
          '600': '#3a3a3a',
        },
        'matrix': {
          'green': '#00ff41',
          'dark': '#003311',
        },
        'neon': {
          'pink': '#ff006e',
          'blue': '#0066ff',
          'red': '#ff3030',
          'purple': '#8000ff',
        },
        'platinum': {
          'light': '#e5e7eb',
          'base': '#c0c0c0',
          'dark': '#9ca3af',
          'gradient': 'linear-gradient(135deg, #e5e7eb 0%, #c0c0c0 50%, #9ca3af 100%)',
        },
        // Keep existing shadcn colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
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
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'typewriter': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'matrix-fall': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'neon-glow': {
          '0%, 100%': { textShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '50%': { textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'platinum-shine': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px currentColor' },
          '50%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'rotate-3d': {
          '0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '100%': { transform: 'rotateY(360deg) rotateX(360deg)' },
        },
        'slide-neon': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'typewriter': 'typewriter 2s steps(40) infinite',
        'blink': 'blink 1s infinite',
        'matrix-fall': 'matrix-fall 3s linear infinite',
        'scan-line': 'scan-line 2s linear infinite',
        'neon-glow': 'neon-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'platinum-shine': 'platinum-shine 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate-3d': 'rotate-3d 10s linear infinite',
        'slide-neon': 'slide-neon 3s ease-in-out infinite',
      },
      boxShadow: {
        'neon-pink': '0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080',
        'neon-blue': '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff',
        'neon-green': '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
        'platinum-glow': '0 0 20px #c0c0c0, 0 0 40px #e5e7eb, inset 0 0 20px rgba(192, 192, 192, 0.1)',
        'neon-red': '0 0 10px #ff3030, 0 0 20px #ff3030, 0 0 30px #ff3030',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
