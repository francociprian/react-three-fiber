/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.3 AppleIpadPro.gltf
Author: DatSketch (https://sketchfab.com/DatSketch)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/apple-ipad-pro-e5ffb3c80b2d4d6690249f8ee2bdafbe
Title: Apple iPad Pro
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AppleIpadPro(props) {
  const { nodes, materials } = useGLTF('/apple_ipad_pro/AppleIpadPro.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={120}>
        <mesh geometry={nodes.iPad_Pro_2020_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.iPad_Pro_2020_screen_0.geometry} material={materials.screen} />
        <mesh geometry={nodes.iPad_Pro_2020_bezel_0.geometry} material={materials.bezel} />
        <mesh geometry={nodes.camera_module_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.camera_module_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.camera_module2_camera2_0.geometry} material={materials.camera2} />
        <mesh geometry={nodes.camera_cameraframe_and_logo_0.geometry} material={materials.cameraframe_and_logo} />
        <mesh geometry={nodes.camera_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.camera1_camera1_0.geometry} material={materials.camera1} />
        <mesh geometry={nodes['camera1_camera1(2)_0'].geometry} material={materials.camera12} />
        <mesh geometry={nodes.camera2_camera2_0.geometry} material={materials.camera2} />
        <mesh geometry={nodes.LiDar_LiDar_0.geometry} material={materials.LiDar} />
        <mesh geometry={nodes.camera1001_camera1_0.geometry} material={materials.camera1} />
        <mesh geometry={nodes['camera1001_camera1(2)_0'].geometry} material={materials.camera12} />
        <mesh geometry={nodes.camera_module2001_camera2001_0.geometry} material={materials['camera2.001']} />
        <mesh geometry={nodes.camera_module2001_Camera_Flash_0.geometry} material={materials.Camera_Flash} />
        <mesh geometry={nodes.camera_module2001_Mic_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Apple_logo_cameraframe_and_logo_0.geometry} material={materials.cameraframe_and_logo} />
        <mesh geometry={nodes.Connector__0.geometry} material={materials.material_12} />
        <mesh geometry={nodes.Front_camera_front_camera_0.geometry} material={materials.front_camera} />
        <mesh geometry={nodes['Front_camera_camera1(2)_0'].geometry} material={materials.camera12} />
        <mesh geometry={nodes.Front_camera_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.Speakers_Mic_0.geometry} material={materials.material} />
        <mesh geometry={nodes.Speakers_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.power_button_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.Volume_button_Body_0.geometry} material={materials.Body} />
        <mesh geometry={nodes.Apple_Pencil_apple_pencil_0.geometry} material={materials.apple_pencil} />
        <mesh geometry={nodes.Apple_logo001_apple_pencil001_0.geometry} material={materials['apple_pencil.001']} />
        <mesh geometry={nodes.Text_apple_pencil001_0.geometry} material={materials['apple_pencil.001']} />
        <mesh geometry={nodes.Line_Line_0.geometry} material={materials.Line} position={[0, 0.02, 0.77]} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/apple_ipad_pro/AppleIpadPro.gltf')
