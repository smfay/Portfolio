import React, { useRef } from 'react';
import './App.css';
import noise from './assets/noise.jpg'
import { Canvas, useFrame } from 'react-three-fiber';
import { Stars, OrthographicCamera, PerspectiveCamera, OrbitControls, useTexture, softShadows, MeshWobbleMaterial, MeshRefractionMaterial } from '@react-three/drei'

const SpinningMesh = ({ position, args }) => {
  const mesh = useRef(null);
  const textures = useTexture({
    map: noise,
    displacementMap: noise
  })
  useFrame(() => (mesh.current.rotation.Z += 0.001));
  return (
    <mesh position={position} ref={mesh} castShadow receiveShadow >
      <torusKnotGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial attach='material' metalness={0} roughness={1} color='ORANGE' speed={0.8} factor={0.2} />
    </mesh>
  )
}

const MiddleMesh = ({ position, args }) => {
  const mesh = useRef(null);
  const textures = useTexture({
    map: noise,
    displacementMap: noise
  })
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.01));
  return (
    <mesh position={position} ref={mesh} castShadow receiveShadow >
      <diamondGeometry attach='geometry' args={args} />
      <MeshRefractionMaterial color={'orange'} envMap={noise} fresnel={1} abberationStrength={1} />
    </mesh>
  )
}

function App() {
  return (
    <>
      <main>
        <section class='text-white/50'>
          <p class='p-0 hover:pl-2 hover:text-white transition-all ease-in-out duration-200'>I N F O</p>
          <p class='p-0 hover:pl-2 hover:text-white transition-all ease-in-out duration-200'>W O R K S</p>
          <p class='p-0 hover:pl-2 hover:text-white transition-all ease-in-out duration-200'>G A L L E R Y</p>
          <p class='p-0 hover:pl-2 hover:text-white transition-all ease-in-out duration-200'>C O N T A C T</p>
        </section>
        <div id='box'>
          <h1 class='font-medium text-3xl md:text-6xl p-0 hover:pl-2 transition-all ease-in-out duration-200' >Sean|Fay</h1>
          <p class='text-xs md:text-base p-0 hover:pl-2 transition-all ease-in-out duration-200' >
            multi-diciplinary/<br />UI/UX designer/<br />web developer/
          </p>
        </div>
      </main>

      <Canvas id='render'>
        <PerspectiveCamera makeDefault fov={25} position={[0, 0, 50]} />
        <fog attach="fog" args={["BLACK", 15, 80]} />
        <directionalLight
          castShadow
          position={[10, 0, 0]}
          intensity={0.8}
          shadowMapHeight={1024}
          shadowMapWidth={1024}
          shadowCameraFar={100}
          shadowCameraLeft={10}
          shadowCameraRight={10}
          shadowCameraTop={10}
          shadowCameraBottom={10}
        />
        <ambientLight intensity={2} color='red' />
        <pointLight position={[0, 0, 0]} intensity={1} color='green' />
        <pointLight position={[2, 7, 12]} intensity={0.1} color='yellow' />
        <pointLight position={[5, -20, 12]} intensity={0.1} color='red' />
        <pointLight position={[5, 10, 12]} intensity={10} color='blue' />
        <SpinningMesh position={[20, 0, -10]} args={[20, 2.5, 800, 50]} />
      </Canvas>
    </>
  );
}

export default App;
