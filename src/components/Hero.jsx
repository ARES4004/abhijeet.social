import { useEffect, useState } from 'react'

function useLocalTime(timeZone, locale = 'en-GB') {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat(locale, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone,
        }).format(new Date()),
      )
    }
    tick()
    const id = setInterval(tick, 1000 * 15)
    return () => clearInterval(id)
  }, [timeZone, locale])
  return time
}

export function Hero() {
  const time = useLocalTime('Asia/Kolkata') // IST (Delhi)

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-28 md:pt-32 md:pb-32">
      {/* subtle radial accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,theme(colors.accent.soft),transparent_60%)] opacity-70 dark:opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] grain mix-blend-multiply dark:mix-blend-screen"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50 animate-fade-in">
          <span>AK · NT — MMXXVI</span>
          <span className="hidden md:inline">
            New Delhi · IST {time}
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-4">
          <h1 className="display text-[clamp(3.25rem,10vw,9rem)] text-balance animate-fade-up md:col-span-7">
            Abhijeet
            <br />
            <span className="italic">Kumar.</span>
          </h1>

          <div
            className="flex flex-col justify-end animate-fade-up md:col-span-5 md:pb-3"
            style={{ animationDelay: '120ms' }}
          >
            <p className="text-lg leading-relaxed text-ink-soft dark:text-paper/80 md:text-xl text-balance">
              Cofounder &amp; CEO of{' '}
              <a
                href="https://ninana.in"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
              >
                Ninana Technologies
              </a>
              . Building software for the companies that build India —
              construction, visualisation and project intelligence.
            </p>
            <p className="mt-3 text-sm text-ink-muted dark:text-paper/50">
              Based in New Delhi.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '220ms' }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5 dark:bg-paper dark:text-ink"
              >
                See the work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 dark:border-paper/15 px-5 py-2.5 text-sm transition-colors hover:bg-ink/5 dark:hover:bg-paper/5"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
