import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Matcap = () => {
  const matcap = useLoader(TextureLoader, './recursos/matcaps/matcap1.png')

  return (
    <mesh
      position={[0, 0, 0]}
    >
      <torusGeometry args={[10, 4, 16, 100]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  )
}

export default Matcap