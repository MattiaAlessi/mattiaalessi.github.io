// TODO M3: sotto questo overlay arriverà <HeroCanvas> con l'orb 3D luminoso.
// Per ora solo testo — gate M2: layout leggibile e completo senza 3D.
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="font-mono text-xs tracking-[0.35em] text-accent sm:text-sm">
        CS STUDENT · BUILDER
      </p>
      <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
        Mattia Alessi
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I build software at the intersection of security, AI and systems —
        and I like shipping things that look as good as they work.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-7 py-3 font-medium text-bg transition-transform duration-200 hover:scale-[1.03]"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-line px-7 py-3 font-medium text-text/80 transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Contact
        </a>
      </div>

      {/* Indicatore di scroll — scompare con reduced-motion via CSS globale */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-muted/50">
        <span>SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  )
}
