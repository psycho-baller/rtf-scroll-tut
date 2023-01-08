import { ScrollControls, Scroll } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ScrollControls>
        <Scroll>
          <Mesh color="yellow" />
          <Mesh color="cyan" />
          <Mesh color="turquoise"/>
        </Scroll>
      </ScrollControls>
    </>
  );
}

function Mesh(props : { color: string }) {
  return (
    <mesh>
      <boxBufferGeometry />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}
