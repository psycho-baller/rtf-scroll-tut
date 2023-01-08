import { Inter } from '@next/font/google'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>

    </>
  )
}
