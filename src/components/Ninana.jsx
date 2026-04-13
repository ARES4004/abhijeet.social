import Image from 'next/image'
import { Reveal } from '@/components/Reveal'

const products = [
  {
    name: 'Pragati',
    image: '/images/Pragati.png',
    blurb:
      'Construction management, end-to-end, for commercial and residential builders.',
    meta: 'Platform',
  },
  {
    name: 'SETU',
    image: '/images/Setu.png',
    blurb:
      'Project progress tracking and monitoring, at scale, for enterprises running complex multi-site operations.',
    meta: 'Enterprise',
  },
  {
    name: 'Vivid',
    image: '/images/Vivid.png',
    blurb:
      'Architectural visualisation, interactive and real-time, for builders selling spaces before they exist.',
    meta: 'ArcViz',
  },
]

export function Ninana() {
  return (
    <section
      id="work"
      className="relative border-t border-ink/10 dark:border-paper/10 bg-paper-soft/60 dark:bg-ink-soft/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="sticky top-32">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
                Currently
              </p>
              <h2 className="display mt-4 text-5xl md:text-6xl">
                Ninana
                <br />
                <span className="italic text-ink-muted dark:text-paper/60">
                  Technologies.
                </span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft dark:text-paper/70">
                A software company quietly rewiring how India&rsquo;s
                construction industry plans, visualises and ships its
                projects. I lead the company and personally shipped each of
                the three products below.
              </p>
              <a
                href="https://ninana.in"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium"
              >
                <span className="underline decoration-ink/30 decoration-1 underline-offset-4 transition-colors group-hover:decoration-ink dark:decoration-paper/30 dark:group-hover:decoration-paper">
                  ninana.in
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H9M17 7v8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-20 md:space-y-28">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, index }) {
  return (
    <article className="group">
      <div className="flex items-end justify-between gap-6 border-b border-ink/10 dark:border-paper/10 pb-4">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span className="font-mono text-[11px] text-ink-muted dark:text-paper/40">
            0{index + 1}
          </span>
          <h3 className="display text-4xl md:text-5xl leading-none">
            {product.name}
          </h3>
          {product.badge && (
            <span className="font-serif italic text-sm text-accent">
              — {product.badge}
            </span>
          )}
        </div>
        <span className="shrink-0 pb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/40">
          {product.meta}
        </span>
      </div>

      <p className="mt-5 mb-8 max-w-lg text-ink-soft dark:text-paper/70">
        {product.blurb}
      </p>

      <div className="relative overflow-hidden rounded-lg bg-ink/5 dark:bg-paper/5 ring-1 ring-ink/10 dark:ring-paper/10 aspect-[16/10]">
        <Image
          src={product.image}
          alt={`${product.name} — product screenshot`}
          fill
          sizes="(min-width: 768px) 60vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </article>
  )
}
