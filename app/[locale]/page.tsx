"use client"

import Scene from "@/components/Scene";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div className="hmm">
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
          }}
          className="r3f"
        >
          <Scene />
        </Canvas>
      </div>
      <div className="scroll-wrapper">Hmmm</div>
    </>
  );
}
