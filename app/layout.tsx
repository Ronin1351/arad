import './styles/globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold tracking-wide">Your Photography</a>
            <nav className="space-x-6 text-sm">
              <a href="/portfolio">Portfolio</a>
              <a href="/prints">Prints</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 text-sm opacity-70">
          © {new Date().getFullYear()} Your Photography
        </footer>
      </body>
    </html>
  )
}
