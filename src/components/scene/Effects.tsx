import { Bloom, Noise } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

/*
 * Effetti post-processing.
 * Regola d'oro (PLAN.md §3): bloom SELETTIVO — luminanceThreshold alto
 * abbastanza da far brillare solo i valori emissivi (>1) dell'orb e delle
 * particelle. Mai chromatic aberration (effetto "cheap").
 * Grain lieve in overlay per dare grana al nero.
 */
export default function Effects() {
  return (
    <>
      <Bloom
        mipmapBlur
        intensity={1.15}
        luminanceThreshold={0.28}
        luminanceSmoothing={0.3}
        radius={0.75}
      />
      <Noise premultiply blendFunction={BlendFunction.OVERLAY} opacity={0.08} />
    </>
  )
}
