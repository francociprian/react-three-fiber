import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, Environment, Loader } from '@react-three/drei'
import { useInView } from "react-intersection-observer";
import { AppleIpadPro } from './models/AppleIpadPro'
import { IphoneThirteen } from './models/IphoneThirteen'
import { AppleWatchUltra } from './models/AppleWatchUltra'
import state from './components/state';
import { Section } from './components/section';
// import Camera from './components/Camera.jsx';
import Lights from './components/Lights.jsx';
import Header from './components/header.jsx';
import './App.css'


const HTMLContent = ({
  domContent,
  children,
  bgColor,
  model,
  position,
  positionModel,
}) => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))
  // useFrame(() => (ref.current.rotation.y = 10))
  // useFrame(() => (ref.current.rotation.x = 0.3))
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh 
          ref={ref} 
          position={[0, positionModel, 10]} 
        >
          {model}
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className='container'>
            <h1 className='title'>{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}

// function App() {
//   return (
//     <>
//       <div
//         className='Container'
//         style={{ height: '90vh', width: '100%' }}
//       >
//         <Canvas>
//           <Camera />
//           <Lights />
//           {/* <mesh position={[ 0, 0, 0 ]}>
//             <torusKnotBufferGeometry args={[11, 3, 100, 16]} />
//             <meshBasicMaterial color={'#ff0'}/>
//           </mesh> */}

//           <Suspense fallback={null}>
//             {/* <Matcap /> */}
//             {/* <Bricks /> */}
//             {/* <mesh ref={ref}> */}
//             {/* </mesh> */}
//             {/* <BackpackOne /> */}
//             {/* <BackpackTwo /> */}
//             {/* <BackpackTree /> */}
//             {/* <Environment files={"./recursos/hdr/decor_shop_1k.hdr"} /> */}
//           </Suspense>

//           <OrbitControls
//           target={[0, 40, 0]}
//           />
//         </Canvas>
//       </div>
//     </>
//   )
// }

function App() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);


  return (
    <>
      <Header />
      <Canvas
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        {/* <Camera /> */}
        <Lights />

        <Suspense fallback={null}>
          <HTMLContent
            model={<IphoneThirteen/>}
            domContent={domContent}
            bgColor='#f15946'
            // bgColor='#f159'
            positionModel={0}
            position={250}>
            <span>Meet the new</span>
            <span>shopping experience</span>
          </HTMLContent>
          <HTMLContent
            model={<AppleIpadPro />}
            domContent={domContent}
            bgColor='#571ec1'
            positionModel={-30}
            position={20}>
            <span>All the different </span>
            <span>Apple products</span>
          </HTMLContent>
          <HTMLContent
            model={<AppleWatchUltra />}
            domContent={domContent}
            bgColor='#636567'
            positionModel={0}
            position={-260}>
            <span>And yes... in the</span>
            <span>same place!</span>
              <span className='btn-order'>Discover!</span>
          </HTMLContent>

          <Environment files={"./recursos/hdr/decor_shop_1k.hdr"} />
        </Suspense>
      </Canvas>
      <Loader 

        dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
      />
      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  )
}
export default App
