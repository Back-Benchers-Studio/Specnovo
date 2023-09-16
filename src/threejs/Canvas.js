import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center, TransformControls } from '@react-three/drei'
import { Gltf } from '@react-three/drei'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { useLocation } from 'react-router-dom'
export const App = ({ position = [0, 0, 2.5], fov = 25 ,location}) => {
  console.log(location)
  let snap = useSnapshot(state)
  if(location === '/shop')
  return
  return(
    <Canvas style={{left:0,top:0,position:'absolute',zIndex:1}} shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }}>
      {/* <color attach='background' args={['']}/> */}
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
       {!snap.inConfigMode &&  <Backdrop />}
        <Center>
          <PC/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

function Backdrop(props) {
  const shadows = useRef()
  useFrame((state, delta) => {
    easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta)
  })
  return (
    <AccumulativeShadows {...props} opacity={1} ref={shadows} temporal frames={60} alphaTest={0.85} scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
      <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  )
}

function CameraRig({ children }) {
  const group = useRef()
  const snap = useSnapshot(state)
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0.5, 0, 2], 0.25, delta)
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}

function PC(props) {

  const snap = useSnapshot(state)
  const texture = useTexture(`/${snap.decal}.png`)
  const { nodes, materials } = useGLTF('/pc1.glb')
  let mesh = useRef()
  let textureColor = useRef()
  useFrame((state, delta) => {
    easing.dampC(materials['light.001'].color, snap.color, 0.5, delta)
    easing.dampC(textureColor.current.material.color, snap.color, 0.25, delta)
    easing.damp(mesh.current.rotation,'z',snap.inConfigMode?1.5:.45,0.5,delta)
  })
  return (
    <>
    <group ref={mesh}  scale={0.14} rotation={[-Math.PI/2,0,0]} {...props}>
      {snap.inConfigMode&&<pointLight position={[0,5,0]} intensity={20}/>}
      <mesh castShadow geometry={nodes.Object_6.geometry} material={materials['blue_lamp.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_8.geometry} material={materials['mini_jack.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_9.geometry} material={materials['panel.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_10.geometry} material={materials['red_lamp.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_11.geometry} material={materials['.002']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_35.geometry} material={materials['.004']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_36.geometry} material={materials['.005']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_38.geometry} material={materials['material_13.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.Object_39.geometry} material={materials['material_14.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.back.geometry} material={materials['back.001']} dispose={null}/>
      <mesh castShadow geometry={nodes.body.geometry} material={materials['basic.001']} dispose={null}>
        <Decal position={[0.2, -1, 1]} rotation={[ Math.PI/2,0, 0]} ref={textureColor} map={texture} scale={0.6} map-anisotropy={16} ></Decal>
      </mesh>
      <mesh castShadow geometry={nodes.door.geometry} material={materials['material.001']} dispose={null}>
      </mesh>
      <mesh castShadow geometry={nodes.lineLight.geometry} material={materials['light.001']} dispose={null}/>
    </group>
    </>
  )
}
useGLTF.preload('pc1.glb')