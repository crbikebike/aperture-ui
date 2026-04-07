import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from './Nav'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aperture Flow',
  description: 'Topic triage and flow management for async teams',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-text antialiased font-sans">
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-border px-6 py-3 text-center text-muted text-[11px] font-mono">
            Aperture Flow · mock data · {new Date('2026-04-02').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </footer>
        </div>
      </body>
    </html>
  )
}
