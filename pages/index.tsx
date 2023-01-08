import { Canvas } from '@react-three/fiber'
import Experience from '../components/experience'
import Search from '../components/search'


export default function Home() {
  return (
    <>
      <Search/>
      <Canvas id="canvas" >
        <Experience />
      </Canvas>

    </>
  )
}
