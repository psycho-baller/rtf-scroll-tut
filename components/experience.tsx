import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "black",
    "white",
    "grey",
  ];

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* https://github.com/pmndrs/drei#scrollcontrols */}
      <ScrollControls pages={colors.length}>
        <Scroll>
          {colors.map((color, i) => (
            <Mesh color={color} index={i} />
          ))}
        </Scroll>
      </ScrollControls>
    </>
  );
}

function Mesh({ color, index }: { color: string; index: number }) {
  const meshRef = useRef(null!) as React.MutableRefObject<THREE.Mesh>;
  const searchTextRef = useRef(null!) as React.MutableRefObject<THREE.Mesh>;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    meshRef.current.position.y = -index * 10;
    searchTextRef.current.position.y = meshRef.current.position.y * 2.1;

    meshRef.current.rotation.y = Math.sin(t) * 5;
  });

  return (
    <>
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh ref={searchTextRef}>
        <Html className={`${color}`}></Html>
      </mesh>
    </>
  );
}
