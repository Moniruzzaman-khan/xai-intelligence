"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Line,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function CoreSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.001;

    mesh.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 2]} />

        <meshStandardMaterial
          color="#4F8CFF"
          emissive="#4F8CFF"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function OrbitRing() {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ring.current) return;

    ring.current.rotation.x += 0.003;
    ring.current.rotation.y += 0.004;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[2.4, 0.02, 16, 150]} />

      <meshStandardMaterial
        color="#6EE7F9"
        emissive="#6EE7F9"
        emissiveIntensity={2}
      />
    </mesh>
  );
}

function SmallNode({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />

      <meshStandardMaterial
        color="#6EE7F9"
        emissive="#6EE7F9"
        emissiveIntensity={4}
      />
    </mesh>
  );
}

function Connections() {
  return (
    <>
      <Line
        points={[
          [2, 0, 0],
          [0, 2, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [0, 2, 0],
          [-2, 0.8, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [-2, 0.8, 0],
          [-1.7, -1.5, 1],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [-1.7, -1.5, 1],
          [0, -2, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [0, -2, 0],
          [2, -1.5, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [2, -1.5, 0],
          [2, 0, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [1.6, 1.4, -1],
          [2, 0, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />

      <Line
        points={[
          [1.6, 1.4, -1],
          [0, 2, 0],
        ]}
        color="#22d3ee"
        lineWidth={1}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[550px] w-[550px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>

        <ambientLight intensity={1.2} />

        <pointLight
          position={[4, 4, 4]}
          intensity={40}
          color="#4F8CFF"
        />

        <pointLight
          position={[-4, -4, 2]}
          intensity={25}
          color="#6EE7F9"
        />

        <pointLight
          position={[0, 0, 5]}
          intensity={15}
          color="#ffffff"
        />

        <CoreSphere />

        <OrbitRing />

        <Connections />

        <SmallNode position={[2, 0, 0]} />
        <SmallNode position={[-2, 0.8, 0]} />
        <SmallNode position={[0, 2, 0]} />
        <SmallNode position={[1.6, 1.4, -1]} />
        <SmallNode position={[-1.7, -1.5, 1]} />
        <SmallNode position={[2, -1.5, 0]} />
        <SmallNode position={[0, -2, 0]} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />

      </Canvas>
    </div>
  );
}