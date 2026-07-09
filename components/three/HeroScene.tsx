"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Line,
} from "@react-three/drei";

import {
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

/* ---------------- Core Sphere ---------------- */

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
          emissiveIntensity={3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* ---------------- Pulsing Energy Core ---------------- */

function PulseCore() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    const s =
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.12;

    mesh.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.45, 32, 32]} />

      <meshStandardMaterial
        color="#6EE7F9"
        emissive="#6EE7F9"
        emissiveIntensity={7}
        metalness={0.2}
        roughness={0}
      />
    </mesh>
  );
}

/* ---------------- Orbit Ring ---------------- */

function OrbitRing({
  radius,
  speed,
  color,
}: {
  radius: number;
  speed: number;
  color: string;
}) {
  const ring = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ring.current) return;

    ring.current.rotation.x += speed;
    ring.current.rotation.y += speed * 0.7;
    ring.current.rotation.z += speed * 0.4;
  });

  return (
    <mesh ref={ring}>
      <torusGeometry args={[radius, 0.02, 16, 180]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={5}
        metalness={0.5}
        roughness={0.15}
      />
    </mesh>
  );
}

/* ---------------- Small Nodes ---------------- */

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

function OrbitNode({
  radius,
  speed,
  offset,
}: NodeConfig) {

  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {

    if (!mesh.current) return;

    const pos = getNodePosition(
      radius,
      speed,
      offset,
      state.clock.elapsedTime
    );

    mesh.current.position.copy(pos);

  });

  return (

    <mesh ref={mesh}>

      <sphereGeometry args={[0.07, 20, 20]} />

      <meshStandardMaterial
        color="#6EE7F9"
        emissive="#6EE7F9"
        emissiveIntensity={5}
      />

    </mesh>

  );

}

/* ---------------- Connection Lines ---------------- */
const NODE_COUNT = 12;

type NodeConfig = {
  radius: number;
  speed: number;
  offset: number;
};

const nodeConfigs: NodeConfig[] = Array.from(
  { length: NODE_COUNT },
  (_, i) => ({
    radius: 1.8 + Math.random() * 0.35,
    speed: 0.55 + Math.random() * 0.35,
    offset: (Math.PI * 2 * i) / NODE_COUNT,
  })
);

function getNodePosition(
  radius: number,
  speed: number,
  offset: number,
  time: number
) {
  const t = time * speed + offset;

  return new THREE.Vector3(
    Math.cos(t) * radius,
    Math.sin(t * 2) * 0.35,
    Math.sin(t) * radius
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
      />

      <Line
        points={[
          [0, 2, 0],
          [-2, 0.8, 0],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [-2, 0.8, 0],
          [-1.7, -1.5, 1],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [-1.7, -1.5, 1],
          [0, -2, 0],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [0, -2, 0],
          [2, -1.5, 0],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [2, -1.5, 0],
          [2, 0, 0],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [1.6, 1.4, -1],
          [2, 0, 0],
        ]}
        color="#22d3ee"
      />

      <Line
        points={[
          [1.6, 1.4, -1],
          [0, 2, 0],
        ]}
        color="#22d3ee"
      />
    </>
  );
}

function SceneGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.18;

    group.current.rotation.x +=
      (targetX - group.current.rotation.x) * 0.06;

    group.current.rotation.y +=
      (targetY - group.current.rotation.y) * 0.06;
  });

  return <group ref={group}>{children}</group>;
}

/* ---------------- Hero Scene ---------------- */

export default function HeroScene() {
  return (
    <div className="h-[550px] w-[550px]">
      <Canvas style={{
        width:"100%",
        height:"100%",
          }} camera={{
          position:[0,0,8],
          fov:42
      }}>

        <ambientLight intensity={1.3} />

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
          intensity={18}
          color="#ffffff"
        />

        {/* AI Core */}

        <SceneGroup>

        <PulseCore />

        <CoreSphere />

        <OrbitRing
          radius={1.8}
          speed={0.008}
          color="#4F8CFF"
        />

        <OrbitRing
          radius={2.0}
          speed={-0.006}
          color="#6EE7F9"
        />

        <Connections />

          {nodeConfigs.map((node, index) => (

          <OrbitNode
            key={index}
            radius={node.radius}
            speed={node.speed}
            offset={node.offset}
          />

        ))}

      </SceneGroup>

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