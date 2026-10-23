const skills = ['Python', 'C# / Unity', 'Rust', 'Linux', 'TypeScript']

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="font-mono text-xs tracking-widest text-accent">02 / ABOUT</h2>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed text-text/80">
            Computer science student focused on security and networking.
            I learn by building: from a keylogger used as a security research
            tool to desktop apps and neural networks.
          </p>
          {/* TODO M5: bio reale, disponibilità, interessi */}
        </div>
        <div className="flex flex-wrap content-start gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-surface px-4 py-2 font-mono text-sm text-text/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
