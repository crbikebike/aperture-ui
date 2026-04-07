'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/', label: 'Variants' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/people', label: 'People' },
  { href: '/triage', label: 'Triage' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <header className="border-b border-border bg-canvas/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-6">
        {/* Logo / wordmark */}
        <div className="flex items-center gap-2 mr-2">
          <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
            <span className="text-white text-[10px] font-black">A</span>
          </div>
          <span className="font-semibold text-text text-sm tracking-tight">Aperture Flow</span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 py-1.5 rounded-btn text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-label hover:text-text hover:bg-card'
                  }
                `}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Spacer + mock status chip */}
        <div className="ml-auto flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-done">
            <span className="w-1.5 h-1.5 rounded-full bg-done animate-pulse" />
            live (mock)
          </span>
        </div>
      </div>
    </header>
  )
}
