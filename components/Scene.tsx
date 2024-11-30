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
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const iPhone = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf"
  );
  const { camera } = useThree();
  const [dim, setDim] = useState({ w: 1024, h: 670 });

  const macbookRef = useRef();

  console.log("CAMERA", camera);

  useEffect(() => {
    // if (document.scrollingElement) {
    //   document.scrollingElement.scrollTop = 0;
    // }

    window.addEventListener("scroll", (event) => {
      const scrollValue = window.scrollY / 1000;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      console.log("W", windowWidth, windowHeight);

      const diffX = 1024 / windowWidth;
      const diffY = 670 / windowHeight;

      // console.log(
      //   "EEE",
      //   window.scrollY / 1000,
      //   THREE.MathUtils.clamp(-1 + 0.8 * scrollValue, -1, -0.2),
      // );
      // macbookRef.current.rotation.x =
      macbookRef.current.position.x = THREE.MathUtils.clamp(
        camera.position.x * scrollValue,
        camera.position.x + diffX,
        0
      );
      macbookRef.current.position.y = THREE.MathUtils.clamp(
        -1 + 0.8 * scrollValue,
        -1,
        -1 + (camera.position.y - 1) - diffY / 4
      );
      macbookRef.current.position.z = THREE.MathUtils.clamp(
        3.8 * scrollValue,
        0,
        3.8 - diffX
      );
      // macbookRef.current.rotation.y = -0.65 * scrollValue;
      macbookRef.current.rotation.y = THREE.MathUtils.clamp(
        0.1 - 0.75 * scrollValue,
        camera.rotation.y - 0.1,
        0.1
      );
      macbookRef.current.rotation.x = THREE.MathUtils.clamp(
        0.13 - 0.13 * scrollValue,
        camera.rotation.x - 0.13,
        0.13
      );

      console.log(
        "MMM",
        macbookRef.current.position,
        macbookRef.current.rotation
      );

      // if (scrollValue > 0.8) {
      //   setDim((prevState) => ({
      //     w: THREE.MathUtils.clamp(prevState.w + 900 * scrollValue, 1024, 1920),
      //     h: THREE.MathUtils.clamp(prevState.h + 400 * scrollValue, 670, 1080),
      //   }));
      //   console.log("DDD", THREE.MathUtils.clamp(1024 + 900 * scrollValue, 1024, 1920))
      // }
    });

    //   window.addEventListener("scroll", (event) => {
    //     const scrollValue = window.scrollY / 1000;

    //     const windowWidth = window.innerWidth;
    //     const windowHeight = window.innerHeight;

    //     console.log("W", windowWidth, windowHeight);

    //     const diffX = 530 / windowWidth;
    //     const diffY = 1140 / windowHeight;

    //     macbookRef.current.position.x = THREE.MathUtils.clamp(
    //       camera.position.x * scrollValue,
    //       camera.position.x + diffX,
    //       0
    //     );
    //     macbookRef.current.position.y = THREE.MathUtils.clamp(
    //       -1.2 * scrollValue,
    //       -1.2,
    //       -1.2 + (camera.position.y - 1.2)
    //     );
    //     macbookRef.current.position.z = THREE.MathUtils.clamp(
    //       2 + scrollValue,
    //       0,
    //       2 + diffX /20
    //     );
    //     // macbookRef.current.rotation.y = -0.65 * scrollValue;
    //     macbookRef.current.rotation.y = THREE.MathUtils.clamp(
    //       0.1 * scrollValue,
    //       camera.rotation.y + 0.1,
    //       0.1
    //     );
    //     macbookRef.current.rotation.x = THREE.MathUtils.clamp(
    //       -0.13  * scrollValue,
    //       camera.rotation.x,
    //       0.13
    //     );

    //     console.log(
    //       "MMM",
    //       macbookRef.current.position,
    //       macbookRef.current.rotation
    //     );

    //     // if (scrollValue > 0.8) {
    //     //   setDim((prevState) => ({
    //     //     w: THREE.MathUtils.clamp(prevState.w + 900 * scrollValue, 1024, 1920),
    //     //     h: THREE.MathUtils.clamp(prevState.h + 400 * scrollValue, 670, 1080),
    //     //   }));
    //     //   console.log("DDD", THREE.MathUtils.clamp(1024 + 900 * scrollValue, 1024, 1920))
    //     // }
    //   });
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
            scale={0.9}
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
              <iframe
                src={`${window.location.href}/page`}
                width={dim.w}
                height={dim.h}
              />
            </Html>
          </primitive>

          {/* <primitive
            rotation={[-0.13, 0.1, 0]}
            scale={0.9}
            object={iPhone.scene}
            position={[0, -1.2, 0]}
            ref={macbookRef}
          >
            <Html
              transform
              wrapperClass="htmlScreen-mobile"
              distanceFactor={1.17}
              position={[0.285, 1.31, -0.05]}
            >
              {/* <iframe src="https://bruno-simon.com/html" /> */}
          {/* <iframe src="https://bauerjan.cz" /> */}
          {/* <iframe
                src={`${window.location.href}/page`}
                width={530}
                height={1140}
              /> */}
          {/* </Html> */}
          {/* </primitive> */}

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
