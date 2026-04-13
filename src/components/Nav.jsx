import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-md bg-paper/70 dark:bg-ink/70 border-b border-ink/5 dark:border-paper/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight"
          aria-label="Home"
        >
          <span className="relative inline-block h-2 w-2 rounded-full bg-accent">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
          </span>
          <span>Abhijeet Kumar</span>
        </Link>
        <ul className="flex items-center gap-7 text-sm">
          <li>
            <a href="#work" className="transition-opacity hover:opacity-60">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="transition-opacity hover:opacity-60">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full border border-ink/20 dark:border-paper/20 px-4 py-1.5 transition-all hover:bg-ink hover:text-paper dark:hover:bg-paper dark:hover:text-ink"
            >
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
