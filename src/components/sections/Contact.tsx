const email = 'mattia.alessi@example.com' // TODO M5: la tua email reale
const github = 'https://github.com/MattiaAlessi'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-28">
      <div className="flex items-baseline justify-between border-b border-line pb-4">
        <h2 className="font-mono text-xs tracking-widest text-accent">
          03 / CONTACT
        </h2>
        <span className="font-mono text-xs text-muted/60">say hi</span>
      </div>

      <div className="mt-16 flex flex-col items-center text-center">
        <p className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s build
          <br />
          <span className="text-accent">something.</span>
        </p>
        <p className="mt-6 max-w-md text-muted">
          Open to internships, collaborations and weird side projects.
          Drop me a line — I answer everything.
          {/* TODO M5: CV → public/cv.pdf */}
        </p>

        <a
          href={`mailto:${email}`}
          className="mt-10 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-transform duration-200 hover:scale-[1.03]"
        >
          {email}
        </a>

        <div className="mt-8 flex gap-8 font-mono text-sm">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-accent"
          >
            GitHub ↗
          </a>
          {/* TODO M5: aggiungere LinkedIn / altre chat qui */}
        </div>
      </div>
    </section>
  )
}
