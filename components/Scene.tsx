import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
  PresentationControls,
  useGLTF,
  Text,
  TransformControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Scene() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf",
  );
  const { camera } = useThree();
  const [dim, setDim] = useState({ w: 1024, h: 670 });

  const macbookRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      const scrollValue = window.scrollY / 1000;

      // console.log(
      //   "EEE",
      //   window.scrollY / 1000,
      //   THREE.MathUtils.clamp(-1 + 0.8 * scrollValue, -1, -0.2),
      // );
      // macbookRef.current.rotation.x =
      macbookRef.current.position.x = -2.9 * scrollValue;
      macbookRef.current.position.y = THREE.MathUtils.clamp(
        -1 + 0.8 * scrollValue,
        -1,
        -0.2,
      );
      macbookRef.current.position.z = 3.8 * scrollValue;
      // macbookRef.current.rotation.y = -0.65 * scrollValue;
      macbookRef.current.rotation.y = THREE.MathUtils.clamp(
        0.1 - 0.75 * scrollValue,
        -0.65,
        0.1,
      );
      macbookRef.current.rotation.x = THREE.MathUtils.clamp(
        0.13 - 0.13 * scrollValue,
        0,
        0.13,
      );

      if (scrollValue > 0.8) {
        setDim((prevState) => ({
          w: THREE.MathUtils.clamp(prevState.w + 900 * scrollValue, 1024, 1920),
          h: THREE.MathUtils.clamp(prevState.h + 400 * scrollValue, 670, 1080),
        }));
        console.log("DDD", THREE.MathUtils.clamp(1024 + 900 * scrollValue, 1024, 1920))
      }
    });
  }, []);

  return (
    <>
      <Environment preset="city" />
      <color args={["#485563"]} attach="background" />

      <PresentationControls
        // enabled={false}
        global
        // rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4} enabled={false}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={100}
            color={"#485563"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            rotation={[0.13, 0.1, 0]}
            scale={0.8}
            object={macbook.scene}
            position={[0, -1, 0]}
            ref={macbookRef}
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              {/* <iframe src="https://bruno-simon.com/html" /> */}
              {/*<iframe src="https://bauerjan.cz" />*/}
              <iframe
                src={`${window.location.href}/page`}
                width={dim.w}
                height={dim.h}
              />
            </Html>
          </primitive>

          {/*<Text*/}
          {/*  font="./bangers.woff"*/}
          {/*  fontSize={0.8}*/}
          {/*  position={[1, 0.75, 0.75]}*/}
          {/*  rotation-y={-1.25}*/}
          {/*  maxWidth={2}*/}
          {/*  textAlign="center"*/}
          {/*>*/}
          {/*  Jan Bauer*/}
          {/*</Text>*/}
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
