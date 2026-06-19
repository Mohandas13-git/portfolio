"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Octahedron, Float, Text, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

function SkillNode({ position, text, color, delay }: { position: [number, number, number], text: string, color: string, delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 + delay;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6 + delay;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5} floatingRange={[-0.2, 0.2]}>
      <group position={position}>
        <Octahedron ref={meshRef} args={[0.8, 0]}>
          <MeshTransmissionMaterial 
            color={color}
            transmission={0.9}
            thickness={1.5}
            roughness={0.1}
            ior={1.5}
            chromaticAberration={0.06}
            distortion={0.2}
            distortionScale={0.5}
          />
        </Octahedron>
        {/* Inner wireframe core */}
        <Octahedron args={[0.4, 0]}>
          <meshBasicMaterial color={color} wireframe />
        </Octahedron>
        
        <Text
          position={[0, -1.3, 0]}
          fontSize={0.28}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

export function SkillSpheres() {
  // Using the user's actual core skills instead of generic web-dev placeholders
  const skills = [
    { text: "C++", color: "#00599C", pos: [-2, 1, 0] },
    { text: "Python", color: "#FFD43B", pos: [0, 2.2, -1] },
    { text: "Java", color: "#ED8B00", pos: [2, 1, 0] },
    { text: "Flutter", color: "#02569B", pos: [-1.5, -1.2, 1] },
    { text: "SQL", color: "#F29111", pos: [1.5, -1.2, 1] },
  ];

  return (
    <div className="w-full h-[600px] relative z-10">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#4a00e0" />
        
        {skills.map((skill, index) => (
          <SkillNode
            key={skill.text}
            position={skill.pos as [number, number, number]}
            text={skill.text}
            color={skill.color}
            delay={index}
          />
        ))}
      </Canvas>
    </div>
  );
}
