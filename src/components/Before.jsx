const projects = [
  {
    name: 'F1 AR/VR Streaming',
    year: '2023',
    blurb:
      'An experimental pipeline that turned broadcast F1 footage into immersive AR/VR streams — computer vision, 3D reconstruction and real-time rendering.',
    stack: 'YOLO · Python · WebGL · OpenCV',
  },
  {
    name: 'Disaster Relief',
    year: '2020',
    blurb:
      'A volunteer-built platform that coordinated supplies, verified requests and connected donors with communities during India&rsquo;s first COVID wave.',
    stack: 'Firebase · React',
  },
]

export function Before() {
  return (
    <section
      id="before"
      className="relative border-t border-ink/10 dark:border-paper/10 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/50">
              Before Ninana
            </p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              A few things
              <br />
              <span className="italic text-ink-muted dark:text-paper/60">
                I&rsquo;ve built.
              </span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft dark:text-paper/70">
              Earlier experiments from before Ninana. Kept here because they
              still say something about how I think.
            </p>
          </div>

          <ol className="md:col-span-8 divide-y divide-ink/10 dark:divide-paper/10 border-y border-ink/10 dark:border-paper/10">
            {projects.map((p, i) => (
              <li
                key={p.name}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 py-8 md:py-10"
              >
                <span className="font-mono text-[11px] text-ink-muted dark:text-paper/40">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="display text-3xl md:text-4xl leading-none">
                    {p.name}
                  </h3>
                  <p
                    className="mt-3 max-w-xl text-ink-soft dark:text-paper/70"
                    dangerouslySetInnerHTML={{ __html: p.blurb }}
                  />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted dark:text-paper/40">
                    {p.stack}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-ink-muted dark:text-paper/40">
                  {p.year}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
