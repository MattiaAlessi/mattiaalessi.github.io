import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { AdditiveBlending, type Group } from 'three'

const COUNT = 350

/*
 * Particelle di atmosfera: nubi sparse attorno all'orb, additive blending
 * così brillano solo dove si sovrappongono al nero (bloom selettivo friendly).
 */
export default function Particles({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<Group>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      // distribuzione in guscio sferico (mai nel centro, dove sta l'orb)
      const r = 2.2 + Math.random() * 3.6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (reduced || !groupRef.current) return
    groupRef.current.rotation.y += delta * 0.03
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.022}
          color="#ff8c6b"
          transparent
          opacity={0.45}
          sizeAttenuation
          depthWrite={false}
          blending={AdditiveBlending}
          toneMapped={false}
        />
      </points>
    </group>
  )
}
