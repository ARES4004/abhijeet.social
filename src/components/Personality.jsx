import Image from 'next/image'
import { Reveal } from '@/components/Reveal'

const cards = [
  {
    tag: 'Cricket',
    title: 'Ex-professional cricketer.',
    body:
      'Represented Manipur U-19 in the Cooch Behar Trophy and Vadodara U-23 in the G1 Cup.',
    image: '/images/halfCenturyForManipur.jpeg',
    imagePosition: 'object-top',
  },
  {
    tag: 'Karting',
    title: 'Red Bull Kart Fight finalist.',
    body:
      'Racing taught me how much of performance is preparation and how little of it is the car.',
    image: '/images/redbullKartFightFinals.jpeg',
  },
  {
    tag: 'Formula 1',
    title: 'F1, religiously.',
    body:
      'Every race weekend. Obsessed with the sport as a systems problem — engineering, strategy and people under pressure.',
    image: '/images/F1-image.jpg',
  },
  {
    tag: 'Travel',
    title: 'Slow miles across India.',
    body:
      'Leh, Uttarakhand, Auli, Andaman & Nicobar — and most places in between. New roads sharpen how I think about old problems.',
    image: '/images/Travel.jpg',
  },
]

export function Personality() {
  return (
    <section
      id="about"
      className="relative border-t border-ink/10 dark:border-paper/10 bg-paper-soft/60 dark:bg-ink-soft/40 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
              Outside of work
            </p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              The other
              <br />
              <span className="italic text-ink-muted dark:text-paper/60">
                half.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft dark:text-paper/70">
              A short list of the things outside work that have shaped how I
              operate inside it.
            </p>
          </div>

          <div className="md:col-span-8 grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.tag} delay={(i % 2) * 0.08}>
              <article
                className="group relative overflow-hidden rounded-lg border border-ink/10 dark:border-paper/10 bg-paper dark:bg-ink p-6 md:p-7 flex flex-col"
              >
                {c.image && (
                  <div className="relative -mx-6 -mt-6 md:-mx-7 md:-mt-7 mb-6 aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${c.imagePosition ?? ''}`}
                    />
                  </div>
                )}
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
                  {c.tag}
                </span>
                <h3 className="display mt-3 text-2xl md:text-3xl leading-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-paper/70">
                  {c.body}
                </p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
