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
    m.rotation.x = t * 0.08;
    m.rotation.y = t * 0.12;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.1}>
      <mesh ref={ref} scale={2.2}>
        <icosahedronGeometry args={[1, 28]} />
        <MeshDistortMaterial
          color="#cfe9a6"
          emissive="#d8cdf2"
          emissiveIntensity={0.35}
          roughness={0.55}
          metalness={0.08}
          distort={0.36}
          speed={1.3}
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
    m.rotation.x = -t * 0.05;
    m.rotation.z = t * 0.07;
  });

  return (
    <mesh ref={ref} scale={3.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#c2add6" wireframe transparent opacity={0.16} />
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
      <fog attach="fog" args={["#f5f5ef", 6, 18]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-6, -3, -3]} intensity={1.6} color="#c9b6ef" />
      <pointLight position={[6, 4, 2]} intensity={1.4} color="#bcd9f2" />
      <Wire />
      <Blob />
      <Sparkles
        count={120}
        scale={[14, 9, 8]}
        size={2}
        speed={0.3}
        color="#b3a1dd"
        opacity={0.4}
      />
    </Canvas>
  );
}
