import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#111827',
        card: '#1F2937',
        'card-hover': '#243041',
        border: '#374151',
        accent: '#3B82F6',
        'accent-hover': '#2563EB',
        overdue: '#EF4444',
        done: '#10B981',
        muted: '#6B7280',
        label: '#9CA3AF',
        text: '#F9FAFB',
        'text-secondary': '#D1D5DB',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.4)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      width: {
        card: '320px',
      },
    },
  },
  plugins: [],
}

export default config
