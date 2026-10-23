const email = 'mattia.alessi@example.com' // TODO M5: la tua email reale
const github = 'https://github.com/MattiaAlessi'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="font-mono text-xs tracking-widest text-accent">
        03 / CONTACT
      </h2>
      <p className="mt-8 font-display text-3xl font-semibold md:text-5xl">
        Let&apos;s build something.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4">
        <a
          href={`mailto:${email}`}
          className="rounded-full bg-accent px-6 py-3 font-medium text-bg transition-transform hover:scale-105"
        >
          {email}
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-text/60 transition-colors hover:text-accent"
        >
          github.com/MattiaAlessi
        </a>
        {/* TODO M5: link a cv.pdf in public/ quando sarà caricato */}
      </div>
    </section>
  )
}
