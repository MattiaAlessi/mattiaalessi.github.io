// TODO M3: sotto questo overlay arriverà <HeroCanvas> con l'orb 3D luminoso.
// Per ora solo testo — gate M2: layout leggibile senza 3D.
export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-accent">
        CS STUDENT · BUILDER
      </p>
      <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
        Mattia Alessi
      </h1>
      <p className="mt-6 max-w-xl text-lg text-text/70">
        I build software at the intersection of security, AI and systems —
        and I like shipping things that look as good as they work.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-transform hover:scale-105"
        >
          View projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-text/20 px-6 py-3 font-medium text-text/80 transition-colors hover:border-accent hover:text-accent"
        >
          Contact
        </a>
      </div>
    </section>
  )
}
