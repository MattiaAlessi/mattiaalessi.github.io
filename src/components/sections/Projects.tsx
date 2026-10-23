import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-mono text-xs tracking-widest text-accent">
        01 / PROJECTS
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-surface p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-semibold">{p.title}</h3>
              {p.stars !== undefined && (
                <span className="font-mono text-xs text-accent">★ {p.stars}</span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text/70">
              {p.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-text/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
