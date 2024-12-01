"use client";
import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const material = new THREE.MeshMatcapMaterial();

const Background = () => {
  const meshesRef = useRef<THREE.Mesh[] | null[]>([]);

  const [matcapTexture] = useMatcapTexture("7A7A7A_D9D9D9_BCBCBC_B4B4B4", 256);

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);

  useFrame((state, delta) => {
    const elapsedTime = state.clock.getElapsedTime();

    for (const mesh of meshesRef.current) {
      if (mesh) {
        mesh.position.z += delta * Math.sin(elapsedTime * 0.5) * 0.1;
      }
    }
  });

  return (
    <>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        maxZoom={10}
      />
      {[...Array(300)].map((_, index) => (
        <Text3D
          key={index}
          ref={(element) => (meshesRef.current[index] = element)}
          font="/source_code_pro_font.json"
          material={material}
          size={1}
          height={0.2}
          curveSegments={15}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        >
          {"</>"}
        </Text3D>
      ))}
    </>
  );
};

export const SceneBackground = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 opacity-0 animate-[fadeOn_3s_2s_forwards] md:animate-[fadeOn_3s_3s_forwards] blur-sm md:blur-none not-support-blur-bg">
      <Canvas
        camera={{
          fov: 90,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Background />
      </Canvas>
    </div>
  );
};
