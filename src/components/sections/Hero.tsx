import { lazy, Suspense, useRef } from 'react'
import { useOrbScroll, useReveal } from '../../lib/motion'

// Lazy-load della scena 3D: three.js resta fuori dal bundle iniziale
// (il sito appare subito, il canvas arriva in secondo piano).
const HeroCanvas = lazy(() => import('../scene/HeroCanvas'))

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  // M4: rotazione dell'orb scrub-ata sullo scroll di questa sezione
  useOrbScroll(sectionRef)
  // M4: entrata del testo al caricamento (il trigger è già nel viewport)
  useReveal(contentRef)

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center"
    >
      {/* Scena 3D in Background — il testo resta sopra e sempre leggibile */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
        {/* Velo sottile per garantire contrasto del testo sopra l'orb */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
      </div>

      <div ref={contentRef} className="relative z-10">
        <p data-reveal className="font-mono text-xs tracking-[0.35em] text-accent sm:text-sm">
          CS STUDENT · BUILDER
        </p>
        <h1
          data-reveal
          className="mt-5 font-display text-5xl font-bold tracking-tight [text-shadow:0_2px_40px_rgba(16,18,20,0.8)] sm:text-7xl md:text-8xl"
        >
          Mattia Alessi
        </h1>
        <p
          data-reveal
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted"
        >
          I build software at the intersection of security, AI and systems —
          and I like shipping things that look as good as they work.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-7 py-3 font-medium text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line bg-bg/40 px-7 py-3 font-medium text-text/80 backdrop-blur-sm transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Indicatore di scroll — scompare con reduced-motion via CSS globale */}
      <div className="absolute bottom-8 z-10 flex flex-col items-center gap-2 font-mono text-[10px] tracking-widest text-muted/50">
        <span>SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  )
}
