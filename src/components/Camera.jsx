import { PerspectiveCamera } from '@react-three/drei';

const Camera = () => {
  return (
    <PerspectiveCamera 
      position={[0,0,120]} 
      fov={70} 
      makeDefault 
    />
  )
}

export default Camera