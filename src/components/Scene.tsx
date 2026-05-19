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
    m.rotation.x = t * 0.06;
    m.rotation.y = t * 0.09;
  });

  return (
    <Float speed={0.9} rotationIntensity={0.5} floatIntensity={0.9}>
      <mesh ref={ref} scale={2.3}>
        <icosahedronGeometry args={[1, 28]} />
        <MeshDistortMaterial
          color="#e9e9e7"
          roughness={0.85}
          metalness={0}
          distort={0.3}
          speed={1}
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
    m.rotation.x = -t * 0.04;
    m.rotation.z = t * 0.05;
  });

  return (
    <mesh ref={ref} scale={3.6}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#9a9a98" wireframe transparent opacity={0.1} />
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
      <fog attach="fog" args={["#fafafa", 6, 18]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-6, -3, -3]} intensity={0.8} color="#dcdcdc" />
      <Wire />
      <Blob />
      <Sparkles
        count={80}
        scale={[14, 9, 8]}
        size={1.6}
        speed={0.22}
        color="#b8b8b6"
        opacity={0.28}
      />
    </Canvas>
  );
}
