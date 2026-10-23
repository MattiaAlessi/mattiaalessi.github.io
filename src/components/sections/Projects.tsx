import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-mono text-xs tracking-widest text-accent">
          01 / PROJECTS
        </h2>
        <span className="font-mono text-xs text-muted/60">
          {projects.length} featured
        </span>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group relative flex flex-col rounded-card border border-line bg-surface/60 p-6 transition-colors duration-200 hover:border-accent/50 hover:bg-surface"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs text-muted/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              {p.stars !== undefined && (
                <span className="font-mono text-xs text-accent">★ {p.stars}</span>
              )}
            </div>

            <h3 className="mt-4 font-display text-xl font-semibold transition-colors duration-200 group-hover:text-accent">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {p.summary}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-text/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span
                aria-hidden="true"
                className="font-mono text-sm text-muted/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
