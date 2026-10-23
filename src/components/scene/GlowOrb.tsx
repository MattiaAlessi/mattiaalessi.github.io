import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../../lib/useReducedMotion'
import { orbScroll } from '../../lib/motion'

/*
 * GlowOrb — la scena centrale dell'hero.
 * Sfera alta densità + vertex shader con rumore simplex 3D:
 * la superficie si deforma lentamente (blob organico, non un torus knot
 * da tutorial). Il fragment shader mescola l'accent cyan con un rim fresnel
 * che supera 1.0 → solo la sua parte emissiva accende il bloom selettivo.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  varying float vNoise;
  varying vec3 vNormalW;
  varying vec3 vViewDir;

  // ——— simplex noise 3D (Ashima / Stefan Gustavson, MIT) ———
  vec3 mod289(vec3 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 mod289(vec4 x){ return x - floor(x * (1.0/289.0)) * 289.0; }
  vec4 permute(vec4 x){ return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  // ————————————————————————————————————————————————

  void main() {
    vec3 pos = position;
    float slow = uTime * 0.28;
    // due ottave di rumore: blob grande + dettaglio fine
    float n = snoise(position * 1.3 + vec3(0.0, slow, slow * 0.6)) * 0.75
            + snoise(position * 3.1 + vec3(slow * 1.4, 0.0, 0.0)) * 0.25;
    pos += normal * n * uAmp;
    vNoise = n;

    vec4 world = modelMatrix * vec4(pos, 1.0);
    vNormalW = normalize(mat3(modelMatrix) * normal);
    vViewDir = normalize(cameraPosition - world.xyz);
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA; // accent      #FF4F36
  uniform vec3 uColorB; // accent-soft #FF8C6B
  varying float vNoise;
  varying vec3 vNormalW;
  varying vec3 vViewDir;

  void main() {
    // rim fresnel: bordo più brillante del centro
    float fresnel = pow(1.0 - clamp(dot(vNormalW, vViewDir), 0.0, 1.0), 2.2);
    vec3 base = mix(uColorB, uColorA, vNoise * 0.5 + 0.5);
    // valori > 1 sul rim = esclusivamente quello che accende il bloom
    float glow = 0.30 + fresnel * 1.9;
    gl_FragColor = vec4(base * glow, 1.0);
    // conversione colore di output senza tone-map: l'eccedenza va al bloom
    #include <colorspace_fragment>
  }
`

export default function GlowOrb() {
  const reduced = useReducedMotion()
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.16 },
      uColorA: { value: new THREE.Color('#ff4f36') },
      uColorB: { value: new THREE.Color('#ff8c6b') },
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!meshRef.current) return
    // Rotazione scrub legata allo scroll dell'hero (M4):
    // mezzo giro circa mentre si scorre verso i progetti. Con reduced-motion
    // orbScroll resta a 0, quindi l'orb resta fermo.
    meshRef.current.rotation.y = orbScroll.progress * Math.PI
    meshRef.current.rotation.x = orbScroll.progress * 0.6
    if (reduced || !matRef.current) return
    matRef.current.uniforms.uTime.value += delta
  })

  return (
    <Float
      speed={reduced ? 0 : 1.4}
      rotationIntensity={reduced ? 0 : 0.35}
      floatIntensity={reduced ? 0 : 0.8}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.15, 128, 128]} />
        <shaderMaterial
          ref={matRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </Float>
  )
}
