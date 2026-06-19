"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, PresentationControls, ContactShadows, Environment, useFBX, Center } from "@react-three/drei";
import * as THREE from "three";

/* ─── 3D Katana Model (Dragon Yokai) ─── */
function Katana() {
  const fbx = useFBX("/3d/katana.fbx");
  
  // Clone to avoid mutating the cached object
  const clonedFbx = useMemo(() => fbx.clone(), [fbx]);

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.4}>
      <group rotation={[0.6, -0.5, -0.9]} scale={1.1}>
        <Center>
          <primitive object={clonedFbx} scale={0.005} />
        </Center>
      </group>
    </Float>
  );
}

// Preload the large model so it starts downloading immediately
useFBX.preload("/3d/katana.fbx");

/* ─── Floating particles for atmosphere ─── */
function Particles({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.015} transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

/* ─── Loading fallback ─── */
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 32]} />
      <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} wireframe />
    </mesh>
  );
}

/* ─── Main Scene ─── */
export function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: false }}>
        <PerspectiveCamera makeDefault position={[0, 0.5, 4.5]} fov={45} />
        <color attach="background" args={["#050505"]} />
        <fog attach="fog" args={["#050505", 6, 14]} />

        {/* Cinematic lighting */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[3, 5, 4]} intensity={3} castShadow color="#e2e8f0" />
        <directionalLight position={[-4, 2, -3]} intensity={0.8} color="#6366f1" />
        <spotLight position={[0, 8, 2]} angle={0.2} penumbra={1} intensity={2.5} color="#f8fafc" castShadow />
        <pointLight position={[-6, -2, 4]} intensity={0.5} color="#a855f7" />
        <pointLight position={[6, -2, -4]} intensity={0.3} color="#3b82f6" />

        <Environment preset="city" />

        <Suspense fallback={<LoadingFallback />}>
          <PresentationControls
            global
            config={{ mass: 1, tension: 170, friction: 26 }}
            rotation={[0, 0, 0]}
          >
            <Katana />
          </PresentationControls>
        </Suspense>

        <Particles />

        <ContactShadows position={[0, -2, 0]} opacity={0.25} scale={8} blur={2} far={4} />
      </Canvas>
    </div>
  );
}
