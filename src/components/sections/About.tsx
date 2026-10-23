const skills = [
  { name: 'Python', note: 'security, automation, ML' },
  { name: 'C# / Unity', note: 'game dev, tooling' },
  { name: 'Rust', note: 'systems programming' },
  { name: 'Linux', note: 'daily driver, scripting' },
  { name: 'TypeScript', note: 'web, React, 3D' },
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-mono text-xs tracking-widest text-accent">02 / ABOUT</h2>
        <span className="font-mono text-xs text-muted/60">whoami</span>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-text/90">
            Computer science student focused on security and networking.
            I learn by building: from a keylogger used as a{' '}
            <span className="text-accent">security research</span> tool to
            desktop apps and neural networks.
          </p>
          <p className="leading-relaxed text-muted">
            Most of my projects start as a question I can&apos;t stop thinking
            about. I prototype fast, break things, and keep what teaches me
            something. Right now I&apos;m digging deeper into low-level systems
            and the web&apos;s 3D frontier.
          </p>
          {/* TODO M5: bio reale, disponibilità, interessi */}
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-widest text-muted/60">
            STACK
          </h3>
          <ul className="mt-5 divide-y divide-line border-y border-line">
            {skills.map((s) => (
              <li key={s.name} className="flex items-baseline justify-between py-3">
                <span className="font-display font-medium">{s.name}</span>
                <span className="font-mono text-xs text-muted/70">{s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
