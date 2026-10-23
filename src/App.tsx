import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-10 border-b border-white/5 bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-mono text-sm text-accent">
            {'<ma />'}
          </a>
          <div className="flex gap-6 text-sm text-text/70">
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

      <footer className="border-t border-white/5 py-8 text-center font-mono text-xs text-text/40">
        built with React + Three.js · deployed on GitHub Pages
      </footer>
    </div>
  )
}
