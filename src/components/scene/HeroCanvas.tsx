import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer } from '@react-three/postprocessing'
import GlowOrb from './GlowOrb'
import Particles from './Particles'
import Effects from './Effects'
import { useReducedMotion } from '../../lib/useReducedMotion'

/* Parallasse morbida della camera seguendo il mouse (frame-rate independent). */
function ParallaxRig({ enabled }: { enabled: boolean }) {
  useFrame((state, delta) => {
    if (!enabled) return
    const k = 1 - Math.pow(0.001, delta) // lerp esponenziale, stabile a ogni fps
    state.camera.position.x += (state.pointer.x * 0.5 - state.camera.position.x) * k
    state.camera.position.y += (state.pointer.y * 0.35 - state.camera.position.y) * k
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

/*
 * HeroCanvas — inviluppo <Canvas> della scena 3D.
 * - dpr clampato [1, 1.5] (performance mobile, gate M6)
 * - fallback: senza WebGL l'hero mostra un glow CSS al posto della scena
 * - alpha true: il nero viene dal body, la scena si fonde col sito
 */
export default function HeroCanvas() {
  const reduced = useReducedMotion()

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      fallback={
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 45%, rgba(255,79,54,0.22), transparent 45%)',
          }}
        />
      }
    >
      <ParallaxRig enabled={!reduced} />
      <GlowOrb />
      <Particles reduced={reduced} />
      <EffectComposer multisampling={0}>
        <Effects />
      </EffectComposer>
    </Canvas>
  )
}
