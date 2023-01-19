import { useGLTF, useTexture, Decal, AccumulativeShadows, RandomizedLight } from '@react-three/drei'


export function Bunny(props) {
    const { nodes } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bunny/model.gltf')
    return (
        <mesh castShadow receiveShadow geometry={nodes.bunny.geometry} {...props} dispose={null} scale={35}>
            <meshStandardMaterial color="black" />
            <Sticker url="/Sticjer_1024x1024@2x.png" position={[-0.1, 1.3, 0.55]} rotation={Math.PI * 1.2} scale={0.45} />
            <Sticker url="/Twemoji_1f600.svg.png" position={[0.4, 1, 0.55]} rotation={Math.PI * 0.9} scale={0.3} />
            <Sticker url="/D64aIWkXoAAFI08.png" position={[0, 0.7, 0.85]} rotation={Math.PI * 1.2} scale={0.35} />
            <Sticker url="/three.png" position={[-0.54, 1.1, 0.57]} rotation={-1.2} scale={0.2} />
        </mesh>
    )
}

function Sticker({ url, ...props }) {
    const emoji = useTexture(url)
    return (
        <Decal {...props}>
            <meshPhysicalMaterial
                transparent
                polygonOffset
                polygonOffsetFactor={-10}
                map={emoji}
                map-flipY={false}
                map-anisotropy={16}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
                roughness={1}
                clearcoat={0.5}
                metalness={0.75}
                toneMapped={false}
            />
        </Decal>
    )
}