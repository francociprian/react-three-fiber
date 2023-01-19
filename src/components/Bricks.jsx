import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Bricks = () => {

	const basecolor = useLoader(
		TextureLoader,
		"./recursos/bricks/basecolor.jpg"
	)

	const normalMap = useLoader(
		TextureLoader,
		"./recursos/bricks/normal.jpg"
	)

	const aoMap = useLoader(
		TextureLoader,
		"./recursos/bricks/ao.jpg"
	)

	const roughnessMap = useLoader(
		TextureLoader,
		"./recursos/bricks/roughness.jpg"
	)

	const displacementMap = useLoader(
		TextureLoader,
		"./recursos/bricks/displacement.png"
	)

	// basecolor.minFilter = THREE.NearestFilter
	// basecolor.magFilter = THREE.NearestFilter

	return (
		<mesh position={[0, 0, 0]}>
			<boxBufferGeometry args={[1, 1, 1]} />
			<meshStandardMaterial
				map={basecolor}
				normalMap={normalMap} 
				aoMap={aoMap}
				roughnessMap={roughnessMap}
				// displacementMap={displacementMap}
			/>
		</mesh>
	)
}

export default Bricks