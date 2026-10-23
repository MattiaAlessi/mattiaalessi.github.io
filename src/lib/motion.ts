import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Stato di scroll condiviso tra DOM e scena 3D.
 * Lo ScrollTrigger con scrub lo porta da 0 → 1 mentre si scorre l'hero;
 * GlowOrb lo legge in useFrame per ruotare l'orb (nessun ref crossing).
 */
export const orbScroll = { progress: 0 }

/**
 * Rivela i figli con [data-reveal] quando la sezione entra nel viewport:
 * dissolvenza + slide verso l'alto, staggerati. Con reduced-motion non fa
 * nulla: gli elementi restano semplicemente visibili (stato Naturale CSS).
 */
export function useReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const targets = el.querySelectorAll<HTMLElement>('[data-reveal]')
    if (targets.length === 0) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        targets,
        { y: 28, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 78%', once: true },
        },
      )
    })
    return () => mm.revert()
  }, [containerRef])
}

/**
 * Lega la rotazione dell'orb allo scroll dell'hero (scrub leggero):
 * scorrendo verso i progetti l'orb completa mezzo giro circa.
 */
export function useOrbScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to(orbScroll, {
        progress: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6, // smorzamento leggero, niente scatti
        },
      })
    })
    return () => mm.revert()
  }, [ref])
}
