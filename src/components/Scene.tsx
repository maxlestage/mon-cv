import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Blob() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.rotation.x = t * 0.1;
    m.rotation.y = t * 0.14;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.7} floatIntensity={1.3}>
      <mesh ref={ref} scale={2.35}>
        <icosahedronGeometry args={[1, 28]} />
        <MeshDistortMaterial
          color="#5b7cff"
          emissive="#1a1f5c"
          emissiveIntensity={0.55}
          roughness={0.22}
          metalness={0.78}
          distort={0.42}
          speed={1.7}
        />
      </mesh>
    </Float>
  );
}

function Wire() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    m.rotation.x = -t * 0.06;
    m.rotation.z = t * 0.08;
  });

  return (
    <mesh ref={ref} scale={3.6}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#7c5bff" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <fog attach="fog" args={["#05060b", 6, 17]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={1.3} color="#9db8ff" />
      <pointLight position={[-6, -3, -3]} intensity={3} color="#ff5fa2" />
      <pointLight position={[6, 4, 2]} intensity={2} color="#5be0ff" />
      <Wire />
      <Blob />
      <Sparkles
        count={140}
        scale={[14, 9, 8]}
        size={2.4}
        speed={0.35}
        color="#aec3ff"
        opacity={0.55}
      />
    </Canvas>
  );
}
