import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="fixed inset-x-0 top-0 z-10 border-b border-line/60 bg-bg/70 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-accent">
            {'<ma />'}
          </a>
          <div className="flex gap-5 text-sm text-muted sm:gap-8">
            <a href="#projects" className="transition-colors hover:text-accent">
              Projects
            </a>
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-muted/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Mattia Alessi</span>
          <span>React + Three.js · deployed on GitHub Pages</span>
        </div>
      </footer>
    </div>
  )
}
