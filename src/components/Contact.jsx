export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-ink/10 dark:border-paper/10 py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
              Get in touch
            </p>
            <h2 className="display mt-4 text-[clamp(2.75rem,7vw,6rem)] text-balance">
              Working on
              <br />
              something <span className="italic">interesting</span>?
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft dark:text-paper/70">
              The best things usually start with an unexpected message.
              If you&rsquo;re building something interesting, send it over.
            </p>
          </div>

          <ul className="md:col-span-5 flex flex-col justify-end gap-4 md:pb-4">
            <li>
              <a
                href="mailto:abhijeet@ninana.in"
                className="group flex items-baseline justify-between border-b border-ink/15 dark:border-paper/15 pb-3 transition-colors hover:border-accent"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
                    Email
                  </span>
                  <span className="mt-1 block text-lg transition-colors group-hover:text-accent">
                    abhijeet@ninana.in
                  </span>
                </span>
                <Arrow />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhijeet-ares"
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between border-b border-ink/15 dark:border-paper/15 pb-3 transition-colors hover:border-accent"
              >
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-lg transition-colors group-hover:text-accent">
                    abhijeet-ares
                  </span>
                </span>
                <Arrow external />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-24 flex items-end justify-between border-t border-ink/10 dark:border-paper/10 pt-4 text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/40">
          <span>© MMXXVI — Abhijeet Kumar</span>
          <span>End of index</span>
        </div>
      </div>
    </section>
  )
}

function Arrow({ external = false }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-accent dark:text-paper/40"
    >
      {external ? (
        <path
          d="M7 17L17 7M17 7H9M17 7v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}
